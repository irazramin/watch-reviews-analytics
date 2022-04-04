import React from 'react';

const Blogs = () => {
  return (
    <div className='my-10 w-10/12 mx-auto'>
      <article className='border-2 p-7'>
        <h4 className='text-3xl font-semibold'>What is Context Api?</h4>
        <p className='text-lg mt-5 text-justify'>
          Context Api মূলত রিয়েক্ট এর একটি গুরুত্বপুর্ন ফিচার।যেটির মাধ্যমে অনেক
          উপকার পাওয়া গিয়েছে। যেটির মধ্যে অন্যতম হচ্ছে props drilling.props
          drilling এর জন্য আমাদের বিভিন্ন কম্পোনেন্টে ডাটা পাঠাতে হতো , যেইসব
          কম্পোনেন্টে এর ওই ডাটা দরকার নেই তার মধ্যে দিয়েও ডাটা পাস করাতে
          হতো,কিন্তু Context Api লাইফ ইজি করে দিয়েছে। আমরা parent কম্পোনেন্টে
          কোনো ডাটা কে পাঠাতে চাই তাহলে ওই কম্পোনেন্ট থেকে context এর মাধ্যমে
          provide করে দিলে আমরা যেকোনো কম্পোনেন্ট থেকে ডাটা নিতে পারবো কোনো রকম
          props drilling ছাড়াই। ডাটা পেতে হলে , parent এ বানানো context কে
          export করতে হবে তারপর parent এর পাঠানো ডাটা গুলো অই কম্পোনেন্টে
          ব্যবহার করা যাবে।
        </p>
      </article>
      <article className='border-2 p-7 mt-10'>
        <h4 className='text-3xl font-semibold'>What is Semantic tag?</h4>
        <p className='text-lg mt-5 text-justify'>
          Semantic tag একটি ওয়েবসাইটে কে সুন্দর ভাবে প্রেজেন্টেশন করার জন্য
          ব্যবহার হয়। Semantic tag এর অন্য কোনো বিশেষত্ব নেই । HTML 5 এর মাধ্যমে
          Semantic tag এর সাথে প্রথম পরিচিত করানো হয়। Semantic tag এর ব্যবহার এর
          মাধ্যমে অনেক উপকার পাওয়া যায়,প্রথমত এটি readable অনেক ইজি ভাবেই বুঝা
          যায়, অনেক মিনিংফুল যার কারনে ডেভেলপার রা সহজের কোড বুঝতে পারে।এখন
          পর্যন্ত অনেক tag বের হয়েছে, যেমন article aside details figcaption
          figure footer header main mark nav section summary time ইত্যাদি । এদের
          একেক জন একেক অর্থে ব্যবহার হয় যার কারণে কোড অনেক সুন্দর লাগে দেখতে।
          Semantic tag ইউজ করা খুবই ভালো একটা জিনিস । যখন হাজার হাজার কোড থাকবে
          যদি কোনো নির্দিষ্ট কোনো জায়গায় সমস্যা হয় তখন tag গুলোর মাধ্যমে সহজেই খুজে পাওয়া যায়।
        </p>
      </article>
    </div>
  );
};

export default Blogs;
