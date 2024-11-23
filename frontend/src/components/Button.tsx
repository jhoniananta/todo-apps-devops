import * as React from 'react';
import { IconType } from 'react-icons';
import { ImSpinner2 } from 'react-icons/im';

import clsxm from '../lib/clsxm';

enum ButtonVariant {
  'primary',
  'outline-primary',
}

enum ButtonSize {
  'sm',
  'base',
  'lg',
}

type ButtonProps = {
  isLoading?: boolean;
  size?: keyof typeof ButtonSize;
  variant?: keyof typeof ButtonVariant;
  leftIcon?: IconType;
  rightIcon?: IconType;
  leftIconClassName?: string;
  rightIconClassName?: string;
  textClassName?: string;
} & React.ComponentPropsWithRef<'button'>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled: buttonDisabled,
      isLoading,
      size = 'base',
      variant = 'primary',
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      leftIconClassName,
      rightIconClassName,
      textClassName,
      ...rest
    },
    ref,
  ) => {
    const disabled = isLoading || buttonDisabled;

    return (
      <button
        ref={ref}
        type='button'
        disabled={disabled}
        className={clsxm(
          'button inline-flex items-center justify-center rounded-md',
          'focus:warning-none focus-visible:ring focus-visible:ring-primary-500',
          'transition-colors duration-75',
          //*=========== Size ===========
          [
            size === 'lg' && [
              'text-lg md:text-xl min-h-[28px] py-1 px-2 md:min-h-[48px] md:py-2.5 md:px-6',
            ],
            size === 'base' && [
              'text-[16px] md:text-base min-h-[24px] py-0.5 px-1 md:min-h-[40px] md:py-2 md:px-3.5',
            ],
            size === 'sm' && [
              'text-xs md:text-sm min-h-[22px] py-[1px] px-[3px] md:min-h-[34px] md:py-1.5 md:px-2.5',
            ],
          ],
          //*======== Size ===========
          //*=========== Variants ===========
          [
            variant === 'primary' && [
              'text-text font-bold',
              'bg-button',
              'hover:bg-button-hover',
              'active:bg-button-active active:text-text',
              'shadow-blue-100 hover:shadow-blue-200 hover:shadow-40 disabled:hover:shadow-blue-100',
              'disabled:bg-blue-300 disabled:brightness-90 disabled:hover:bg-blue-300',
            ],
        
            variant === 'outline-primary' && [
              'text-text font-bold',
              'border border-border',
              'bg-white',
              // 'hover:bg-transparent',
              'active:bg-button',
              'shadow-blue-100 hover:shadow-blue-200 hover:shadow-40 disabled:hover:shadow-blue-100',
              'disabled:bg-blue-700 disabled:brightness-90 disabled:hover:bg-transparent',
            ],
            
          ],
          //*======== Variants ===========
          'disabled:cursor-not-allowed',
          // 'hover:bg-typo-label',
          isLoading &&
            'relative text-transparent transition-none hover:text-transparent disabled:cursor-wait',
          className,
        )}
        {...rest}
      >
        {isLoading && (
          <div
            className={clsxm(
              'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
              [
                ['primary', 'danger'].includes(variant) && 'text-white-500',
                ['warning', 'label'].includes(variant) && 'text-gray-500',
              ],
            )}
          >
            <ImSpinner2 className='animate-spin' />
          </div>
        )}
        {/* Left Icon */}
        {LeftIcon && (
          <div
            className={clsxm([
              size === 'sm' && 'mr-[10px]',
              size === 'base' && 'mr-[8px]',
              size === 'lg' && 'mr-[8px]',
            ])}
          >
            <LeftIcon
              className={clsxm(
                'text-sm md:text-2xl font-semibold',
                leftIconClassName,
              )}
            />
          </div>
        )}
        <span className={textClassName}>{children}</span>
        {/* Right Icon */}
        {RightIcon && (
          <div
            className={clsxm([
              size === 'sm' && 'ml-[10px]',
              size === 'base' && 'ml-[8px]',
              size === 'lg' && 'ml-[8px]',
            ])}
          >
            <RightIcon
              className={clsxm(
                'text-sm md:text-2xl font-semibold',
                rightIconClassName,
              )}
            />
          </div>
        )}
      </button>
    );
  },
);

export default Button;