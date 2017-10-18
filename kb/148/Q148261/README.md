---
layout: page
title: "Q148261: Printing From Macintosh Clients Causes Events 2011 and 2019"
permalink: kb/148/Q148261/
---

## Q148261: Printing From Macintosh Clients Causes Events 2011 and 2019

	Article: Q148261
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print from a Macintosh client computer through Services for Macintosh,
	the following system events appear in the Windows NT Event Viewer:
	
	  Event ID: 2011
	  Description: The printer <Printer_name> has been removed from the
	  Appletalk network.
	
	  Event ID: 2019
	  Description: The specified data type is invalid.
	
	In addition, the SFMPSPRT option is not available for the print processor in
	Printer Details of Print Manager.
	
	CAUSE
	=====
	
	This problem occurs if SFMPSPRT.DLL is not in the following directory:
	
	  %SystemRoot%\system32\spool\printprocs\<platform>
	
	RESOLUTION
	==========
	
	To correct this problem, expand SFMPSPRT.DL_ from the Windows NT compact disc to
	the %SystemRoot%\system32\spool\printprocs\i386 directory for Intel (x86) based
	computers.
	
	Additional query words: prodnt sfm
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
