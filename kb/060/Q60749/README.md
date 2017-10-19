---
layout: page
title: "Q60749: PWB Makefiles Read-Only When Set as Active Program List"
permalink: /kb/060/Q60749/
---

## Q60749: PWB Makefiles Read-Only When Set as Active Program List

	Article: Q60749
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.0,1.1; OS/2:1.0,1.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, versions 1.0, 1.1 
	- Microsoft Programmer's Workbench for OS/2, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When Set Program List is chosen from the Make menu within the Programmer's
	WorkBench (PWB) versions 1.0 and 1.1, the PWB project makefile associated with
	the current program list is marked as read only and is not editable.
	
	PWB will allow modification to the open project makefile if it was opened as a
	foreign makefile.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  #include <stdio.h>
	  void main ( void )
	  {
	     printf ( "Test\n" ) ;
	  }
	
	1. Using the above sample program, choose Set Program List from the Make menu
	  and call the program list TEST.MAK.
	
	2. Save the list.
	
	3. Choose Open from the File menu, and enter "TEST.MAK" (without the quotation
	  marks) as the file to be opened.
	
	4. Place the cursor anywhere in the file and press ENTER. The following message
	  will result:
	
	  No-edit file may not be modified.
	
	To edit the makefile, choose Clear Program List from the Make menu.
	
	Additional query words: kbinf 1.00 1.10 PWBIss
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB100DOS kbPWB110DOS kbPWB100OS2 kbPWB110OS2
	Version           : MS-DOS:1.0,1.1; OS/2:1.0,1.1
	
	=============================================================================
	
