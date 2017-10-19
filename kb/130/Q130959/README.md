---
layout: page
title: "Q130959: Windows NT Setup Cannot Install PCMCIA SCSI Controller"
permalink: /kb/130/Q130959/
---

## Q130959: Windows NT Setup Cannot Install PCMCIA SCSI Controller

	Article: Q130959
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT Setup does not detect and cannot install a PCMCIA SCSI controller.
	
	CAUSE
	=====
	
	This is currently part of the Windows NT design. PCMCIA SCSI controllers cannot
	be used as boot devices (this is a PCMCIA limitation). Because Windows NT setup
	cannot determine whether the user is trying to install Windows NT on a PCMCIA
	drive, Setup was modified to ignore PCMCIA SCSI devices. If Setup tried to
	install Windows NT on the PCMCIA drive, the installation would succeed, but
	Windows NT would not be bootable.
	
	RESOLUTION
	==========
	
	Install the controller after you have installed Windows NT.
	
	Additional query words: prodnt scsi2go future domain
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	
	=============================================================================
	
