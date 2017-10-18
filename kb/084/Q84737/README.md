---
layout: page
title: "Q84737: BUG: RCVCOM /? Incorrectly Displays RMCVCOM Instead of RCVCOM"
permalink: kb/084/Q84737/
---

## Q84737: BUG: RCVCOM /? Incorrectly Displays RMCVCOM Instead of RCVCOM

	Article: Q84737
	Product(s): Microsoft Programming Utilities
	Version(s): 4.0,4.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS, versions 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Accessing the help for RCVCOM.EXE by entering the command "RCVCOM /?" (without
	the quotation marks) or "RCVCOM /h" (without the quotation marks) displays help
	text that incorrectly references RCVCOM as RMCVCOM.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in CodeView versions 4.0 and 4.01.
	We are researching this problem and will post new information here as it becomes
	available.
	
	MORE INFORMATION
	================
	
	The help text should display the following:
	
	Usage:
	
	RCVCOM [-p parms] [-r]
	
	  "parms" provides serial communications parameters. These are specified using
	  a "MODE"-type string that identifies the serial port and baud rate to be
	  used. E.g.,
	
	RCVCOM -p COM1:9600
	
	  "-r" specifies that RCVCOM should continue executing after the debugging
	  session has terminated. If specified RMCVCOM will attempt to establish a new
	  debugging session every time a session terminates.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView400DOS kbCodeView410DOS
	Version           : :4.0,4.1
	
	=============================================================================
	
