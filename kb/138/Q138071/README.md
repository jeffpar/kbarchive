---
layout: page
title: "Q138071: INFO: Strings Passed to DLLs in Variants Aren't Converted to ANS"
permalink: /kb/138/Q138071/
---

## Q138071: INFO: Strings Passed to DLLs in Variants Aren't Converted to ANS

	Article: Q138071
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbVBp500
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	On Win32 Operating systems, if a variant containing a UNICODE string is passed
	to a DLL, Visual Basic version 4.0 (32-bit version) does not automatically
	convert it to ANSI, as it would a UNICODE string that is passed directly.
	
	MORE INFORMATION
	================
	
	Visual Basic version 4.0 (32-bit version) stores strings as UNICODE internally.
	So, if you assign a string to a variant in Visual Basic version 4.0 (32-bit), it
	will be stored as UNICODE. Now, if you pass this to a 32-bit DLL function either
	by reference or by value, Visual Basic will not automatically convert the string
	contained in the variant to ANSI. If you are building a UNICODE DLL or using a
	pre-existing UNICODE DLL, this is not a problem. However, for custom ANSI DLLs,
	you will have to convert the string to ANSI yourself, using the
	WideCharToMultiByte Windows API function inside the DLL, in order to actually
	use the string meaningfully. For pre-built ANSI DLLs, you must convert the
	Visual Basic version 4.0 UNICODE string to ANSI, using the StrConv function,
	assign it to the Variant, and then pass it to the DLL. You could use the latter
	approach for your own custom ANSI DLLs too.
	
	Additional query words: 4.00 vb4win vb432
	
	======================================================================
	Keywords          : kbVBp500 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500 kbVB400Search kbVB400
	Version           : :4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
