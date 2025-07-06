import RegisterForm from '@/components/auth/RegisterForm';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Register - iSell Logistics',
  description: 'Create your shipping account',
};

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 flex overflow-hidden">
        <div className="md:w-1/2 md:h-screen bg-white md:px-10">
            <RegisterForm />
        </div>
       <div className="md:w-1/2 h-[100vh] bg-green-300 relative overflow-hidden">
            <Image
                src="/images/authImg.png"
                alt="Sample Image"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                quality={85}
                fill
            />
        </div>
    </main>
  );
}