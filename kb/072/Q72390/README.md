---
layout: page
title: "Q72390: FIX: MASM 6.0 Setup May Generate &quot;Bad Full Path&quot; Error Message"
permalink: /kb/072/Q72390/
---

## Q72390: FIX: MASM 6.0 Setup May Generate &quot;Bad Full Path&quot; Error Message

	Article: Q72390
	Product(s): Microsoft Macro Assembler
	Version(s): 6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The setup program for the Microsoft Macro Assembler (MASM) version 6.0, 6.0a, or
	6.0b may generate the following error:
	
	  Bad Full Path 'c:\test\temp'.
	
	After the error is displayed, pressing any key will return you to the MS-DOS
	prompt. The error occurs whether or not this subdirectory actually exists. If
	you choose "Install the Macro Assembler Using Defaults" from the Main Menu
	screen, the error will not occur.
	
	CAUSE
	=====
	
	This error will occur under the following conditions:
	
	1. The TMP environment variable is set to a subdirectory two or more levels
	  deep, such as C:\TEST\TEMP.
	
	2. You have selected "Install the Macro Assembler" from the Setup program's Main
	  Menu screen.
	
	RESOLUTION
	==========
	
	Other than choosing "Install the Macro Assembler Using Defaults" from the Main
	Menu screen, this error can be eliminated by using one of the following three
	methods:
	
	1. Temporarily clear the TMP environment variable. After Setup has completed,
	  you can reset TMP. This is only a conflict with the Setup program, so
	  resetting TMP will not cause any problems with the execution of MASM.
	
	-or-
	
	2. Add a trailing backslash ("\") to the TMP environment variable. For example,
	  set TMP as follows:
	
	  " C:\TEST\TMP\ " (without the quotation marks)
	
	-or-
	
	3. Set TMP to a subdirectory that is only one level deep. For example:
	
	  C:\TEST
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM for MS-DOS versions 6.0,
	6.0a, and 6.0b. This is not a problem in MASM for OS/2 versions 6.0, 6.0a, or
	6.0b. This problem was corrected in MASM for MS-DOS version 6.1.
	
	MORE INFORMATION
	================
	
	Note that this problem occurs with the Microsoft C/C++ 7.0 character based
	installation program as well.
	
	Additional query words: 6.00 6.00a 6.00b buglist6.00 buglist6.00a buglist6.00b fixlist6.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM600a kbMASM600b
	Version           : :6.0,6.0a,6.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
