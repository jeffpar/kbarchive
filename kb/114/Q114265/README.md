---
layout: page
title: "Q114265: HP Scanjet IIc May Fail With Future Domain TMC 1670"
permalink: kb/114/Q114265/
---

## Q114265: HP Scanjet IIc May Fail With Future Domain TMC 1670

	Article: Q114265
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to scan an image using the HP Scanjet IIc with a Future Domain
	TMC-1670 SCSI controller, the system may hang and displays one of the following
	error messages:
	
	  Sorry the scanner has experienced an error
	
	  -OR-
	
	  Trap 0x0000000A
	
	where the Trap appears on a STOP message.
	
	CAUSE
	=====
	
	Unknown, although some evidence exists for isolating a cause. For instance, the
	problem occurs when trying to scan images using HP Deskscan II versions 1.62 or
	2.0, but does not occur when using the same scanning application with other
	supported SCSI adapters.
	
	RESOLUTION
	==========
	
	There is no resolution to this problem at this time. However, a current
	workaround to this problem is to use another supported SCSI adapter.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.1 and
	Windows NT Advanced Server version 3.1. We are researching this problem and will
	post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	Additional query words: prodnt lock up blue trap
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	
