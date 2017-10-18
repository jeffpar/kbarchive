---
layout: page
title: "Q167376: Error Message When Starting Add Printer Wizard"
permalink: kb/167/Q167376/
---

## Q167376: Error Message When Starting Add Printer Wizard

	Article: Q167376
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the Add Printer Wizard, you may receive the following error
	message:
	
	  Out of resources.
	
	  Printer operation cannot continue due to lack of resources. The specified
	  module could not be found.
	
	CAUSE
	=====
	
	The Ntprint.dll file in the %SystemRoot%\System32 folder may be missing or
	damaged.
	
	RESOLUTION
	==========
	
	Expand a new copy of the Ntprint.dll file from the Windows NT 4.0 CD-ROM to the
	%SystemRoot%\System32 folder using the following steps:
	
	1. If an Ntprint.dll file already exists in the %SystemRoot%\System32 folder,
	  rename it to Ntprint.old.
	
	2. Place the Windows NT 4.0 CD-ROM in the CD-ROM drive.
	
	3. Type the following line at a command prompt:
	
	  expand d:\i386\ntprint.dl_ c:\winnt\system32\ntprint.dll
	
	  NOTE: This article assumes that Windows NT is installed in the Winnt folder on
	  drive C and that the CD-ROM drive is drive D. If this is not the case, adjust
	  the command as necessary.
	
	======================================================================
	Keywords          : kberrmsg kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
