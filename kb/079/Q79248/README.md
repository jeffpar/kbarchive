---
layout: page
title: "Q79248: COREtape Light Backup System Incompatible with DOSKEY"
permalink: kb/079/Q79248/
---

## Q79248: COREtape Light Backup System Incompatible with DOSKEY

	Article: Q79248
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	CORE International has confirmed that their COREtape Light backup system is
	incompatible with the MS-DOS 5.0 or later DOSKEY utility.
	
	To successfully complete a tape backup with the COREtape Light system, DOSKEY
	should not be loaded.
	
	MORE INFORMATION
	================
	
	COREtape Light is a QIC-80 workstation tape backup system. When DOSKEY is
	loaded, the COREtape Light system may hang or return a communication time out
	error.
	
	The MS-DOS DOSKEY.COM program is a utility included with the MS-DOS 5 or later
	Upgrade. The DOSKEY utility allows MS-DOS commands to be recalled and edited.
	DOSKEY may also be used to develop command macros (DOSKEY macros).
	
	To ensure compatibility, CORE International suggests that customers with MS- DOS
	5.0 or later should not load DOSKEY or any other terminate-and-stay- resident
	(TSR) programs before attempting to use the COREtape Light system.
	
	The product included here, COREtape Light, is manufactured by vendors independent
	of Microsoft. We make no warranty, implied or otherwise, regarding this
	product's performance or reliability.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 Lock Up
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
