---
layout: page
title: "Q60748: With Invalid COMSPEC, Invoking MS-DOS Shell Hangs Machine"
permalink: kb/060/Q60748/
---

## Q60748: With Invalid COMSPEC, Invoking MS-DOS Shell Hangs Machine

	Article: Q60748
	Product(s): Microsoft Programming Utilities
	Version(s): 2.2,3.0,3.11,3.12,3.14,3.5,4.0,4.01,4.05,4.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS, versions 2.2, 3.0, 3.11, 3.14, 4.0, 4.01, 4.05, 4.1 
	- Microsoft CodeView for OS/2, versions 2.2, 3.0, 3.11, 3.12, 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you set your COMSPEC environment variable to point to an invalid command
	interpreter, and then shell out of any MS-DOS application, your machine will
	hang. This problem occurs because the file that COMSPEC points to is assumed to
	be a valid command interpreter and cannot be checked for validity.
	
	MORE INFORMATION
	================
	
	This is expected behavior. Because .COM files have no standard file header
	structure, they cannot be checked for validity. Therefore, MS-DOS must assume
	that whatever the COMSPEC environment variable points to must be a valid command
	interpreter, and can do no further error checking.
	
	This behavior can easily be demonstrated in any program that allows you to access
	an MS-DOS shell, including CodeView, Programmer's WorkBench (PWB), the Microsoft
	Editor (M), and the Quick environments. Type the following line at the MS-DOS
	prompt:
	
	  " SET COMPSPEC=a:\junk.c ; Invalid command.com file " (without the quotation
	  marks)
	
	Then enter an MS-DOS application and shell out. Your machine will hang, and you
	may receive strange error messages.
	
	If you are running under OS/2, you will be warned about an invalid command
	interpreter when you attempt to shell to the operating system. Under OS/2, the
	system expects an .EXE file to be the command interpreter, and .EXE files have a
	standard, recognizable structure that can be checked.
	
	Additional query words: kbinf 2.20 3.00 3.50 4.00 4.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView220DOS kbCodeView300DOS kbCodeView311DOS kbCodeView314DOS kbCodeView400DOS kbCodeView401DOS kbCodeView405DOS kbCodeView410DOS kbCodeView220OS2 kbCodeView300OS2 kbCodeView311OS2 kbCodeView312OS2 kbCodeView350OS2
	Version           : :2.2,3.0,3.11,3.12,3.14,3.5,4.0,4.01,4.05,4.1
	
	=============================================================================
	
