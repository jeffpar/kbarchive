---
layout: page
title: "Q101511: FILES=11 or Greater Needed to run NetWare 4.0 NETADMIN"
permalink: kb/101/Q101511/
---

## Q101511: FILES=11 or Greater Needed to run NetWare 4.0 NETADMIN

	Article: Q101511
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If the FILES= statement in the CONFIG.SYS file is set to fewer than 11, one of
	three different error messages may be displayed when you try to run the NETADMIN
	utility included with Novell NetWare version 4.0. These error messages vary
	depending on the FILES= setting.
	
	To avoid these errors, increase FILES= 11 or greater.
	
	MORE INFORMATION
	================
	
	FILES=10 returns:
	
	  Error Report : NETADMIN-4.00-970
	  The attempt to open the unicode table files failed.
	  The current operation cannot be completed.
	  Press <Enter> to continue.
	
	FILES=9 returns:
	
	  Error Report : NETADMIN-4.00-999
	  This utility can't find the message file NWDSBRWS.MSG.
	  The current operation cannot be completed.
	  Press <Enter> to continue.
	
	FILES=8 returns:
	
	  Error Report : NETADMIN-4.00-91
	  The system could not locate the Help Librarian data file
	  TEXTUTIL.HEP and will not be able to provide help for this utility.
	
	  The program should continue normally Press <Enter> to continue.
	
	The above message that occurs with FILES=8 is followed by the same message
	displayed with FILES=9.
	
	
	Additional query words: 6.22 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
