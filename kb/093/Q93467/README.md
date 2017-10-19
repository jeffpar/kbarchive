---
layout: page
title: "Q93467: Macro Recorder Cannot Save to Novell Subdirectory"
permalink: /kb/093/Q93467/
---

## Q93467: Macro Recorder Cannot Save to Novell Subdirectory

	Article: Q93467
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to save a data file on a Novell Network using Macro Recorder,
	you may receive the following message if the root directory of the intended
	directory does not have full "write" privileges:
	
	  Recorder Error:
	
	  Cannot create the X:\XXX\XXX.rec file.
	  Make sure the path and filename are correct, or if you are using a network,
	  that you can write to it.
	
	CAUSE
	=====
	
	When you use Novell NetWare, Macro Recorder cannot save files to a subdirectory
	if the root directory of that mapped drive does not have full "write" privileges
	regardless of the subdirectory's rights.
	
	To view the rights in any directory, type the command "rights" (without the
	quotation marks) at the network drive prompt. These rights are set by the system
	administrator using the SYSCON menu utility or the GRANT and REVOKE command line
	utilities.
	
	WORKAROUND
	==========
	
	Use one of the following workarounds to correct this problem:
	
	- Grant the root directory "write" privileges.
	
	- Map root the intended subdirectory.
	
	- Save the data file elsewhere and copy the file back into the intended
	  subdirectory.
	
	The Novell product included here is manufactured by Novell, a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding this
	product's performance or reliability.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
