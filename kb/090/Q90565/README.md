---
layout: page
title: "Q90565: Changes Made by MS-DOS Setup to the SYSTEM.INI File"
permalink: kb/090/Q90565/
---

## Q90565: Changes Made by MS-DOS Setup to the SYSTEM.INI File

	Article: Q90565
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	When you install Microsoft MS-DOS 6 or later Upgrade, Setup adds one the
	following lines to the [386Enh] section of the SYSTEM.INI files if you
	install the Windows-based programs.
	
	  ;======== MS-DOS 6 Setup Modification - Begin ========
	  device=C:\DOS\VFINTD.386
	  ;======== MS-DOS 6 Setup Modification - End ========
	
	  -or-
	
	  ;======== MS-DOS 6.2 Setup Modification - Begin ========
	  device=C:\DOS\VFINTD.386
	  ;======== MS-DOS 6.2 Setup Modification - End ========
	
	  -or-
	
	  ;======== MS-DOS 6.21 Setup Modification - Begin ========
	  device=C:\DOS\VFINTD.386
	  ;======== MS-DOS 6.21 Setup Modification - End ========
	
	VFINTD.386 is a virtual device driver (VxD) that adds support to Windows to
	prevent conflicts between multiple virtual machines.
	
	Additional query words: 6.22 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
