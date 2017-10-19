---
layout: page
title: "Q156810: INFO: STL Sample for Members of the numeric_limits Class"
permalink: /kb/156/Q156810/
---

## Q156810: INFO: STL Sample for Members of the numeric_limits Class

	Article: Q156810
	Product(s): Microsoft C Compiler
	Version(s): 4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbVC420 kbVC500 kbVC600 kbDSupport
	Last Modified: 27-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Standard C++ Library, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ NET (2002) supported both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SUMMARY
	=======
	
	The sample code below illustrates how to use the following members from the
	numeric_limits class in Visual C++:
	
	  has_denorm
	  has_denorm_loss
	  has_infinity
	  has_quiet_NaN
	  has_signaling_NaN
	  is_bounded
	  is_exact
	  is_iec559
	  is_integer
	  is_modulo
	  is_signed
	  is_specialized
	  tinyness_before
	  traps
	  round_style
	  digits
	  digits10
	  max_exponent
	  max_exponent10
	  min_exponent
	  min_exponent10
	  radix;
	  denorm_min()
	  epsilon()
	  infinity()
	  max()
	  min()
	  quiet_ NaN()
	  round_error()
	  signaling_NaN()
	
	MORE INFORMATION
	================
	
	The numeric_limits class provides information for a given type. For example, you
	can determine whether a given type is signed or exact or how it might represent
	infinity.
	
	The Standard Library instantiates numeric_limits for char, bool, signed char,
	unsigned char, short, unsigned short, int, unsigned int, long, unsigned long,
	float, double, and long double. This class could also be instantiated for a
	user-defined type.
	
	Required Header
	---------------
	
	     <limits>
	
	Description
	-----------
	
	To reference one of the members of this class, you need to specify the type that
	you want to obtain information about and the member name. The return will either
	be a value of 1 for true or 0 for false. For example,
	
	     numeric_limits<int>::min()
	
	will return the minimum value for an int.
	
	NOTE: Some of the members are only valid for certain types. Please refer to the
	Online Help to determine if a member is only valid for a certain type.
	
	Sample Code
	-----------
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: /GX
	  // 
	  // <filename> :  Numeric.cpp
	  // 
	  // Variables and Functions:
	  // 
	  //    has_denorm
	  //    has_denorm_loss
	  //    has_infinity
	  //    has_quiet_NaN
	  //    has_signaling_NaN
	  //    is_bounded
	  //    is_exact
	  //    is_iec559
	  //    is_integer
	  //    is_modulo
	  //    is_signed
	  //    is_specialized
	  //    tinyness_before
	  //    traps
	  //    round_style
	  //    digits
	  //    digits10
	  //    max_exponent
	  //    max_exponent10
	  //    min_exponent
	  //    min_exponent10
	  //    radix;
	  //    denorm_min()
	  //    epsilon()
	  //    infinity()
	  //    max()
	  //    min()
	  //    quiet_ NaN()
	  //    round_error()
	  //    signaling_NaN()
	  // 
	  // Written by Linda Koontz
	  // of Microsoft Product Support Services,
	  // Copyright (c) 1996 Microsoft Corporation. All rights reserved.
	  ////////////////////////////////////////////////////////////////////// 
	
	  /* Compile options needed: /GX
	  */ 
	
	  #include <iostream>
	  #include <limits>
	
	  #if _MSC_VER > 1020   // if VC++ version is > 4.2
	     using namespace std;  // std c++ libs implemented in std
	     #endif
	
	  void main() {
	      cout << " 1 The minimum value for char is " <<
	          (int)numeric_limits<char>::min() << endl;
	      cout << " 2 The minimum value for int is " <<
	           numeric_limits<int>::min() << endl;
	      cout << " 3 The maximum value for char is " >>
	          (int)numeric_limits<char>::max() << endl;
	      cout << " 4 The maximum value for int is " <<
	          numeric_limits<int>::max() << endl;
	      cout << " 5 The number of bits to represent a char is " <<
	          numeric_limits<char>::digits << endl;
	      cout << " 6 The number of bits to represent an int is " <<
	          numeric_limits<int>::digits << endl;
	      cout <<" 7 The number of digits representable in base 10 for float is"
	           << numeric_limits<float>::digits10 << endl;
	      cout << " 8 Is a char signed?              " <<
	          numeric_limits<char>::is_signed << endl;
	      cout << " 9 Is an unsigned integer signed? " <<
	          numeric_limits<unsigned int>::is_signed << endl;
	      cout << "10 Is a integer an integer? " <<
	          numeric_limits<int>::is_integer << endl;
	      cout << "11 Is a float an integer?   " <<
	          numeric_limits<float>::is_integer << endl;
	      cout << "12 Is a integer exact? " <<
	          numeric_limits<int>::is_exact << endl;
	      cout << "13 Is a float  exact?  " <<
	          numeric_limits<float>::is_exact << endl;
	      cout << "14 The radix for float is            "  <<
	          numeric_limits<float>::radix << endl;
	      cout << "15 The epsilon for float is          " <<
	          numeric_limits<float>::epsilon() << endl;
	      cout << "16 The round error for float is      " <<
	          numeric_limits<float>::round_error() << endl;
	      cout << "17 The minimum exponent for float is " <<
	          numeric_limits<float>::min_exponent << endl;
	      cout << "18 The minimum exponent in base 10   " <<
	          numeric_limits<float>::min_exponent10 << endl;
	      cout << "19 The maximum exponent is           " <<
	          numeric_limits<float>::max_exponent << endl;
	      cout << "20 The maximum exponent in base 10   " <<
	          numeric_limits<float>::max_exponent10 << endl;
	      cout << "21 Can float represent positive infinity?  " <<
	          numeric_limits<float>::has_infinity << endl;
	      cout << "22 Can double represent positive infinity? " <<
	          numeric_limits<double>::has_infinity << endl;
	      cout << "23 Can int represent positive infinity? " <<
	          numeric_limits<int>::has_infinity << endl;
	      cout << "24 Can float represent a NaN?           " <<
	          numeric_limits<float>::has_quiet_NaN << endl;
	      cout << "25 Can float represent a signaling NaN? " <<
	          numeric_limits<float>::has_signaling_NaN << endl;
	      cout << "26 Does float allow denormalized values?   " <<
	          numeric_limits<float>::has_denorm << endl;
	      cout << "27 Does float detect denormalization loss? " <<
	          numeric_limits<float>::has_denorm_loss << endl;
	      cout << "28 Representation of positive infinity for float " <<
	          numeric_limits<float>::infinity() << endl;
	      cout << "29 Representation of quiet NaN for float         " <<
	          numeric_limits<float>::quiet_NaN() << endl;
	      cout << "30 Minimum denormalized number for float         " <<
	          numeric_limits<float>::denorm_min() << endl;
	      cout << "31 Minimum positive denormalized value for float " <<
	          numeric_limits<float>::denorm_min() << endl;
	      cout << "32 Does float adhere to IEC 559 standard?  " <<
	          numeric_limits<float>::is_iec559 << endl;
	      cout << "33 Is float bounded? " <<
	          numeric_limits<float>::is_bounded << endl;
	      cout << "34 Is float modulo?  " <<
	          numeric_limits<float>::is_modulo << endl;
	      cout << "35 Is int modulo?    " <<
	          numeric_limits<float>::is_modulo << endl;
	      cout << "36 Is trapping implemented for float?    " <<
	          numeric_limits<float>::traps << endl;
	      cout << "37 Is tinyness detected before rounding? " <<
	          numeric_limits<float>::tinyness_before << endl;
	      cout << "38 What is the rounding style for float? " <<
	          (int)numeric_limits<float>::round_style << endl;
	      cout << "39 What is the rounding style for int? " <<
	          (int)numeric_limits<int>::round_style << endl;
	      cout << "40 How does a float represent a signaling NaN? " <<
	          numeric_limits<float>::signaling_NaN() << endl;
	      cout << "41 Is int specialized? " <<
	          numeric_limits<float>::is_specialized << endl;
	  }
	
	Output:
	1 The minimum value for char is -128
	2 The minimum value for int is  -2147483648
	3 The maximum value for char is 127
	4 The maximum value for int is  2147483647
	5 The number of bits to represent a char is 7
	6 The number of bits to represent an int is 31
	7 The number of digits representable in base 10 for float is 6
	8 Is a char signed?              1
	9 Is an unsigned integer signed? 0
	10 Is an integer an integer? 1
	11 Is a float an integer?   0
	12 Is an integer exact? 1
	13 Is a float exact?  0
	14 The radix for float is            2
	15 The epsilon for float is          1.19209e-007
	16 The round error for float is      0.5
	17 The minimum exponent for float is -125
	18 The minimum exponent in base 10   -37
	19 The maximum exponent is           128
	20 The maximum exponent in base 10   38
	21 Can float represent positive infinity?  1
	22 Can double represent positive infinity? 1
	23 Can int represent positive infinity? 0
	24 Can float represent a NaN?           1
	25 Can float represent a signaling NaN? 1
	26 Does float allow denormalized values?   1
	27 Does float detect denormalization loss? 1
	28 Representation of positive infinity for float 1.#INF
	29 Representation of quiet NaN for float         -1.#IND
	30 Minimum denormalized number for float         1.4013e-045
	31 Minimum positive denormalized value for float 1.4013e-045
	32 Does float adhere to IEC 559 standard?  1
	33 Is float bounded? 1
	34 Is float modulo?  0
	35 Is int modulo?    0
	36 Is trapping implemented for float?    1
	37 Is tinyness detected before rounding? 1
	38 What is the rounding style for float? 1
	39 What is the rounding style for int? 0
	40 How does a float represent a signaling NaN? -1.#INF
	41 Is int specialized? 1
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL STLSample kbSTL kbTemplate
	
	======================================================================
	Keywords          : kbcode kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
