---
layout: page
title: "Q192140: SMSINST: Runtime I/O Error When Calling a Program"
permalink: kb/192/Q192140/
---

## Q192140: SMSINST: Runtime I/O Error When Calling a Program

	Article: Q192140
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): smsinst
	Last Modified: 09-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 1.0 
	-------------------------------------------------------------------------------
	
	MORE INFORMATION
	================
	
	This error can also occur if you have bad media, file corruption, or other I/O
	errors when reading a file. If you receive this message and your Installer
	script is not using the "Execute Program" action, this can indicate possible
	corruption of the source files for the program being repackaged. You should
	follow standard troubleshooting steps to confirm what the problem is and how to
	correct it.
	
	SYMPTOMS
	========
	
	When calling another program from a Systems Management Server Installer script,
	the following error may appear in a dialog box at run time:
	
	  Error when executing SMS Package : An I/O error occurred while installing a
	  file. This is normally caused by bad installation media or a corrupt
	  installation file. <Abort><Retry>
	
	CAUSE
	=====
	
	The error occurs if the Installer script is using the "Execute Program" action
	and the "Wait for program to exit" check box is not selected. The Installer
	script tries to continue processing, but the program being executed has a file
	in use that the Installer script needs.
	
	RESOLUTION
	==========
	
	If your script uses the "Execute Program" action, you may be able to resolve the
	problem by selecting the "Wait for program to exit" check box in the "Execute
	Program" action which calls the other program.
	
	Additional query words: prodsms I/O error call
	
	======================================================================
	Keywords          : smsinst 
	Technology        : kbSMSSearch kbSMSI100
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
