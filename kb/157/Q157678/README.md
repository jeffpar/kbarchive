---
layout: page
title: "Q157678: DEC TLZ07 DAT Drive Not Recognized After Service Pack 5"
permalink: kb/157/Q157678/
---

## Q157678: DEC TLZ07 DAT Drive Not Recognized After Service Pack 5

	Article: Q157678
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbhw kbsetup kbHardware
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After installing Service Pack 5 on your Alpha NT 3.51 server, you may not be
	able to access DEC TLZ07 4MM DAT Tape Drive and may receive the following errors
	in the event log:
	
	  Event ID: 7026
	
	  Source: Service Control Manager
	  Description: The following boot-start or system-start driver(s) failed to
	  load: 4mmdat.sys
	
	  Event ID: 7000
	
	  Source: Service Control Manager
	  Description: The 4mmdat service failed to start due to the following error:
	  the system cannot find the device specified
	
	CAUSE
	=====
	
	The 4mmdat.sys driver that is replaced by Service Pack 5 is incompatible with
	these drives.
	
	
	RESOLUTION
	==========
	
	Connect to DEC's World Wide Web site at:
	
	  http://www.compaq.com/support/
	
	Download the DECTAPE file containing all of the drivers. The original file on the
	computer will be 4mmdat.sys, dated 05-26-95 36,752K. The file to replace it with
	in the %SystemRoot%\System32\Drivers subdirectory will be the one you just
	downloaded named 4mmdat.sys dated 11-02-94 50,624K.
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbhw kbsetup kbHardware 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	
