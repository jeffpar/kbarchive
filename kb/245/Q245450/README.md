---
layout: page
title: "Q245450: Displaying a Specific AS/400 Message"
permalink: kb/245/Q245450/
---

## Q245450: Displaying a Specific AS/400 Message

	Article: Q245450
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbDSupport kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The IBM AS/400 has a number of system messages that may be returned when an
	error condition is encountered. You can use the DSPMSGD command to look up
	information about a specific AS/400 error message. AS/400 error messages
	typically start with "Cxx" followed by a number.
	
	MORE INFORMATION
	================
	
	If you encounter an AS/400 error message when using the Win5250 applet that
	comes with SNA Server, the applet may generate a dialog box containing error
	information like this:
	
	    System Error XXXX
	    <brief error description>
	    Check Session Settings or contact your System Administrator.
	
	Note that other emulators may display this error information differently.
	
	To retrieve more specific information about the error message, use the AS/400
	DSPMSGD command. For example, if you received a System Error 8902, you would
	type the following on an AS/400 command line to retrieve more information about
	the error message:
	
	  " DSPMSGD CPF8902" (without the quotation marks)
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	REFERENCES
	==========
	
	See the IBM AS/400 book QB3AUP03 (Document Number SC41-5713-03), OS/400 CL
	Reference V4R4 for more information on the DSPMSGD command.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	
	=============================================================================
	
