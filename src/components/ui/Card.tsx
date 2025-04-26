import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface CardProps {
  className?: string;
  children: ReactNode;
  as?: React.ElementType;
  hoverable?: boolean;
}

export default function Card({
  className,
  children,
  as: Component = 'div',
  hoverable = false,
}: CardProps) {
  return (
    <Component
      className={cn(
        'bg-white rounded-lg shadow-md overflow-hidden',
        hoverable && 
          'transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg',
        className
      )}
    >
      {children}
    </Component>
  );
}

interface CardHeaderProps {
  className?: string;
  children: ReactNode;
}

function CardHeader({ className, children }: CardHeaderProps) {
  return (
    <div className={cn('px-6 py-4 border-b border-gray-100', className)}>
      {children}
    </div>
  );
}

interface CardContentProps {
  className?: string;
  children: ReactNode;
}

function CardContent({ className, children }: CardContentProps) {
  return <div className={cn('px-6 py-4', className)}>{children}</div>;
}

interface CardFooterProps {
  className?: string;
  children: ReactNode;
}

function CardFooter({ className, children }: CardFooterProps) {
  return (
    <div className={cn('px-6 py-4 bg-gray-50', className)}>{children}</div>
  );
}

interface CardImageProps {
  className?: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

function CardImage({ className, src, alt, width, height }: CardImageProps) {
  return (
    <div className={cn('relative w-full overflow-hidden', className)}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

interface CardTitleProps {
  className?: string;
  children: ReactNode;
  as?: React.ElementType;
}

function CardTitle({
  className,
  children,
  as: Component = 'h3',
}: CardTitleProps) {
  return (
    <Component
      className={cn('text-xl font-semibold tracking-tight', className)}
    >
      {children}
    </Component>
  );
}

interface CardDescriptionProps {
  className?: string;
  children: ReactNode;
}

function CardDescription({ className, children }: CardDescriptionProps) {
  return (
    <p className={cn('text-sm text-gray-500 mt-2', className)}>{children}</p>
  );
}

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;
Card.Image = CardImage;
Card.Title = CardTitle;
Card.Description = CardDescription;