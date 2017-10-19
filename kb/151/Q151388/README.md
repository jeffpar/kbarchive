---
layout: page
title: "Q151388: Setup Prompts for CD-ROM When Installing to Removable Disk"
permalink: /kb/151/Q151388/
---

## Q151388: Setup Prompts for CD-ROM When Installing to Removable Disk

	Article: Q151388
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run Setup from a network drive to a removable hard disk, you may
	receive the following message during the GUI portion of Setup:
	
	  Please insert the floppy disk labeled 'Windows NT Workstation
	  CD-ROM' into drive C: and then click OK.
	
	Setup continues once you click Browse, open the path to the temporary file
	location (for example, C:\$win_nt$.~ls,) and then click OK.
	
	This may occur several times during Setup.
	
	CAUSE
	=====
	
	This behavior occurs because Setup cannot distinguish between a removable hard
	disk and a CD-ROM drive. As such, Setup expects a tag file to exist on the
	source drive. The tag file is not normally copied from the installation source.
	Additionally, if Setup is occurring over the network, then this file is not
	accessible.
	
	RESOLUTION
	==========
	
	When you create the Windows NT source files on the network share, create an
	$OEM$\C folder below the distribution folder and then copy the tag file
	(Cdrom_w.40 for Windows NT Workstation and Cdrom_s.40 for Windows NT Server)
	from the root of the CD-ROM to this folder.
	
	This causes the tag file to be copied to the root of the C drive during the
	text-mode portion of Setup, and prevents the dialog box from being displayed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt unattended removable
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
