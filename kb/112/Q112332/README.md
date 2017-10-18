---
layout: page
title: "Q112332: Viewing a Function's Return Value from IDE"
permalink: kb/112/Q112332/
---

## Q112332: Viewing a Function's Return Value from IDE

	Article: Q112332
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbDebug kbide
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When debugging a function with FORTRAN PowerStation, it can be useful to view
	the return value of the function. In FORTRAN, this variable has the same name as
	the function. Because of this, typing the name of this variable into the Watch
	window displays the address of the function, not the return value. This article
	details how to view the return value inside the function. Note that the main
	text of this article discusses only the default FORTRAN calling conventions; the
	article does not cover C VARARGS or other such function calling conventions. If
	you want to use these conventions, a method for viewing the return variable is
	discussed at the end of this article.
	
	NOTE: In Fortran PowerStation 4.0 it is now possible to view a function's return
	value in the watch window. When you type in the name of the function in the
	watch window, instead of the function's address you get the actual function
	return value.
	
	MORE INFORMATION
	================
	
	First, consider an INTEGER function. After stepping into the function and
	stepping past the function prolog (the first line of the function--in mixed
	mode, the series of PUSH instructions), the base register EBP points to the
	start of storage for the return value. Because this is stack-based storage, the
	memory address for an integer return value would have address EBP-4. Once the
	function is completed, the return value is stored in the EAX register where the
	function caller can view it.
	
	As an example, build a program with an INTEGER*4 FUNCTION, and step into the
	function. If you step past the prolog and type "EBP-4,x" in the Watch window,
	you will see the hexadecimal address of the local storage for the return value.
	To view the actual value, bring up the memory window at the given address, using
	INTEGER*4 formatting. The value next to the address is the actual current value
	of the function's return value. You can view this throughout the function call.
	Upon return to the caller, you can see the return value in the EAX field in the
	Registers window. Note that this will be the hexadecimal representation of the
	integer.
	
	If you want to view the actual value, you can use the Watch window to convert
	this for you. For example, if the EAX register reads FFFFFFFF, type in
	"#ffffffff,d" to display a hexadecimal # in decimal form. The actual value, -1,
	will be printed.
	
	For all INTEGER functions, the return value is stored in EBP-4, regardless of the
	size of the integer. For INTEGER*2 functions, the value is returned to the
	caller in the AX register, the low-order word of the EAX register. For INTEGER*1
	functions, the caller receives the value in AL, the low-order byte of EAX.
	
	LOGICAL variables work exactly the same as INTEGER variables of the same size.
	Use the same method, with the memory window formatted to view the type of the
	function. CHARACTER (BYTE) variables work exactly the same as INTEGER*1 values.
	
	REAL values are handled slightly differently. For REAL*4 variables, the return
	value is again stored at EBP-4. To return the value to the function, however,
	the value is pushed onto the floating-point stack. This stack is viewable from
	the Registers window. When you step out of the function, the value is moved onto
	the stack. Upon return from the function call, the caller then pops this value
	off the stack. By viewing the changed (highlighted) elements in the FP stack,
	you can see the returned value. REAL*8 values are also returned to the caller on
	the FP stack, but the local storage within the function is at EBP-8. Again, use
	the memory window to format the values at these addresses in order to see the
	actual return value.
	
	COMPLEX numbers work somewhat differently. They are handled as structures of two
	REAL numbers. When a structure is to be returned from a function, the caller
	allocates space in its current stack for the structure. A pointer to this
	location is pushed onto the stack as part of the function call. In the function,
	this pointer is stored at location EBP+8. You can find the pointer value stored
	here by viewing location EBP+8 in the memory window. The first 4 bytes here are
	the address. Note that the address is stored in the processor's internal byte
	ordering. For example, if the 4 bytes read as 98 FF 14 00, the actual address
	would be #0014FF98. You can then enter this address into the memory window and
	view the bytes in the string. Upon return from the function, the value will be
	in this location, and the value will be copied from this temporary storage to
	the variable that receives the return value.
	
	The same method is also used for all STRUCTURE types. Note that to see the actual
	elements in the structure formatted in their base type, you must change the
	formatting of the memory window and find the offset of the structure member in
	the structure. In this case, it may be easier to view the structure in BYTE
	format, and do the appropriate translations by hand. This process can also help
	you to determine the size requirements of your structures, and view the
	underlying memory usage of your program.
	
	Finally, CHARACTER return values are dealt with in the same way as COMPLEX and
	STRUCTURE arguments. A buffer is pointed to by EBP+8, which is used to store the
	CHARACTER data. Note that at EBP+12 you can also see the value of an INTEGER*4
	value, which indicates the size of the CHARACTER value. This can be useful in
	tracking problems with large CHARACTER variables.
	
	If you want to view the return value from a function that does not use the
	standard FORTRAN calling convention, you can use the Mixed Source/Assembly mode
	to determine the value that is being used to store the return value. Find a line
	of code that sets the return value. The last few assembly instructions for this
	line will be the code that stores the value. The address used to store the
	return value can then be found and entered into the memory window, just as it
	was done in the previous examples.
	
	Additional query words: kbinf 1.00
	
	======================================================================
	Keywords          : kbDebug kbide 
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbFORTRANPower32100NT
	Version           : :1.0
	
	=============================================================================
	
