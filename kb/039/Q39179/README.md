---
layout: page
title: "Q39179: Using a Debugging Terminal with CodeView"
permalink: /kb/039/Q39179/
---

## Q39179: Using a Debugging Terminal with CodeView

	Article: Q39179
	Product(s): Microsoft Programming Utilities
	Version(s): 2.2,3.0,3.05,3.06,3.07,3.11,3.14,4.0,4.01,4.05,4.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbCodeView kbDebug kbVC
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS, versions 2.2, 3.0, 3.11, 3.14, 4.0, 4.01, 4.05, 4.1 
	- Microsoft CodeView for Windows, versions 3.0, 3.05, 3.06, 3.07, 4.0, 4.01, 4.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is possible to use either a dumb terminal or another computer (PC or
	Macintosh, running a communications package at 9600 baud) as a debugging
	terminal for CodeView. To take advantage of this option, do the following:
	
	1. Connect the second terminal to the communications port (COM1 or COM2).
	
	2. Initialize the communications package to set up the second computer as a dumb
	  terminal. Set the baud rate at 9600.
	
	3. Start CodeView.
	
	4. From the CodeView command window redirect the output to the second terminal
	  with one of the following dialog commands:
	
	  " > COM1" (without the quotation marks)
	
	  or
	
	  " > COM2" (without the quotation marks)
	
	  This causes CodeView to display the command window output on the second
	  terminal. You can also redirect the input to the CodeView command window to
	  come from the terminal with one of the following commands:
	
	  " < COM1" (without the quotation marks)
	
	  or
	
	  " < COM2" (without the quotation marks)
	
	  This causes CodeView to read the input from the second terminal.
	
	5. Set your options and run the program.
	
	6. To reset the CodeView command window output to the local machine use the
	  following dialog command:
	
	  " > CON" (without the quotation marks)
	
	  To reset the CodeView command window input to the local machine use the
	  following command:
	
	  " < CON" (without the quotation marks)
	
	MORE INFORMATION
	================
	
	Note that this is not the same functionality as remote debugging. Remote
	debugging allows CodeView to run on a machine other than the local machine which
	runs the program being debugged. CodeView versions 4.0 and 4.01 support remote
	debugging. For more information on remote debugging, please refer to the
	documentation CodeView version 4.0.
	
	Additional query words: kbinf 2.20 3.00 3.50 4.00 4.10
	
	======================================================================
	Keywords          : kb16bitonly kbCodeView kbDebug kbVC 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView220DOS kbCodeView300DOS kbCodeView311DOS kbCodeView314DOS kbCodeView400DOS kbCodeView401DOS kbCodeView405DOS kbCodeView410DOS kbCodeView300 kbCodeView305 kbCodeView306 kbCodeView307 kbCodeView400 kbCodeView401 kbCodeView410
	Version           : :2.2,3.0,3.05,3.06,3.07,3.11,3.14,4.0,4.01,4.05,4.1
	
	=============================================================================
	
