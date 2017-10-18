---
layout: page
title: "Q155391: PRB: ACME Setup Problems During 16-bit Installation of VSS 4.0"
permalink: kb/155/Q155391/
---

## Q155391: PRB: ACME Setup Problems During 16-bit Installation of VSS 4.0

	Article: Q155391
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbsetup kbSSafe400
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	General Protection Faults (GPF) may occur during the setup under the 16-bit OS
	installations of Visual SourceSafe 4.0.
	
	There are two problems that may occur:
	
	1. Installing Visual SourceSafe while attempting to give focus to another
	  application may cause the following:
	
	  * ACMSETUP GPF in MACH.DRV, or a GPF in KRNL386.EXE.
	
	2. Inserting the wrong disk numerous times during a floppy disk install of
	  Visual SourceSafe Setup may cause the following:
	
	  * GPF in GDI.EXE, or Windows For Workgroups to hang.
	
	WORKAROUND
	==========
	
	To work around the problem, reboot and ensure that no other applications are
	running. Then try reinstalling SourceSafe.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbSSafe400 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe400 kbSSafe16bitSearch kbSSafe32bitSearch
	Issue type        : kbprb
	
	=============================================================================
	
