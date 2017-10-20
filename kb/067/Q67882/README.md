---
layout: page
title: "Q67882: DOC: Error C2213 Occurs When Base Is an Expression"
permalink: /kb/067/Q67882/
---

## Q67882: DOC: Error C2213 Occurs When Base Is an Expression

{% raw %}

	Article: Q67882
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,6.0,6.0a,6.0ax
	Operating System(s): 
	Keyword(s): kbdocfix kbCompiler
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), included with:
	   - Microsoft C for MS-DOS, versions 6.0, 6.0a, 6.0ax 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++, versions 1.0, 1.5 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following keywords were first introduced with Microsoft C version 6.0:
	
	  _based
	  _segment
	
	Variables of type _segment are defined to hold a memory segment address.
	
	With based variables, a base must be named to specify where the data resides. The
	base can be of type _segment, or can be a near or a far pointer. However, if the
	base is an expression, even of one of the types listed above, the following
	error is produced:
	
	  error C2213: illegal argument to _based
	
	NOTE: In Microsoft Visual C++ 32-bit Edition, version 2.0, the _segment keyword
	was removed and the functionality of the __based keyword changed. In 32-bit
	compilations, pointers based on pointer addresses are the only forms of __based
	valid. In such compilations, these pointers are 32-bit displacements from a
	32-bit base. For more information, search for "based addressing" in the online
	documentation included with Visual C++ 32-bit Edition.
	
	MORE INFORMATION
	================
	
	Microsoft has confirmed that this is a restriction, although it is not
	documented as such.
	
	The following examples illustrate the restriction:
	
	This declaration is valid:
	
	     _segment myseg;
	     char _based( myseg ) *cptr;
	
	The following declaration
	
	     struct sample
	     {
	         _segment myseg;
	     }rec;
	     char _based( rec.myseg ) *cptr;
	
	produces the following error:
	
	  error C2213: 'rec': illegal argument to _based
	  error C2059: syntax error: '.'
	
	The following declaration
	
	     _segment array[10];
	     char _based( array[0] ) *cptr;
	
	produces the following error:
	
	  error C2059: syntax error: '['
	
	Additional query words: 6.00 6.00a 6.00ax 7.00 8.00 8.00c 9.00 1.00 1.50 2.00
	
	======================================================================
	Keywords          : kbdocfix kbCompiler 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :1.0,1.5,2.0,6.0,6.0a,6.0ax
	
	=============================================================================
	

{% endraw %}
