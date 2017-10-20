---
layout: page
title: "Q107427: BUG: getch() Returns Incorrect Extended Key Codes"
permalink: /kb/107/Q107427/
---

## Q107427: BUG: getch() Returns Incorrect Extended Key Codes

{% raw %}

	Article: Q107427
	Product(s): Microsoft C Compiler
	Version(s): 1.0,2.0,2.1,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCRT kbVC kbVC100bug kbVC200bug kbVC210bug kbVC400bug kbVC410bug kbVC420bug kbVC500bug
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 4.1, 4.2, 5.0, 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The getch() run-time library function fails to return the correct extended
	character code for certain key sequences. There are two known situations in
	which incorrect codes are generated:
	
	- The ALT key is combined with the ASCII characters A - Z.
	
	-or-
	
	- The RIGHT CTRL key is combined with any of the function or editing keys.
	
	With Visual C++ versions 2.x and later, only the first error (error with ALT key)
	occurs.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	In the sample code below, the ALT key combined with any ASCII character returns
	the ASCII character code instead of the extended character code. The RIGHT CTRL
	key combined with any of the function or editing keys also fails with Visual C++
	1.0, returning the code for the function or editing key alone. The LEFT CTRL key
	combined with a function key or editing key returns the correct code. The set of
	affected editing keys are: END, PAGE UP, PAGE DOWN, HOME, RIGHT ARROW, and LEFT
	ARROW.
	
	The table below demonstrates some of the actual versus expected values that
	result when the sample below is run with the input shown:
	
	Input            Expected          Actual                VC 6.0
	
	ALT+C            0 - 2eH           63H    (C)             63H
	RT CTRL+F4       0 - 61H         0 - 3eH  (F4)           0 - 61H
	RT CTRL+PAGE UP  0 - 84H         0 - 49H  (PAGEUP)      e0 - 86H
	RT CTRL+END      0 - 75H         0 - 4fH  (END)          0 - 75H
	
	Sample Code
	-----------
	
	     /* Compile options needed: none
	     */ 
	
	     void main(void)
	     {
	        int testChar;
	
	        do {
	              testChar = getch();
	              printf("%x - ", testChar);
	              testChar = getch();
	              printf("%x \n", testChar);
	        } while (testChar != 0x001B);  /* Repeat until ESC key*/ 
	     }
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbCRT kbVC kbVC100bug kbVC200bug kbVC210bug kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : :1.0,2.0,2.1,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
