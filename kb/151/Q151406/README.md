---
layout: page
title: "Q151406: Service Pack 4 Replaces Western Digital ThinkPad Driver"
permalink: kb/151/Q151406/
---

## Q151406: Service Pack 4 Replaces Western Digital ThinkPad Driver

	Article: Q151406
	Product(s): Microsoft Windows NT
	Version(s): 3.51
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
	
	After you apply Service Pack 4 (SP4) to an IBM ThinkPad 755CE/CSE/CD/CX/CV/CDV,
	750C/755C, 370C, or 345C, you cannot go to higher resolutions than VGA with 16
	colors.
	
	RESOLUTION
	==========
	
	After applying SP4, reinstall the IBM driver downloaded from IBM again. The
	driver can be downloaded from IBM (www.ibm.com). It is a self extracting file
	named Vf75xwnt.exe.
	
	The old version of the driver downloaded from IBM (dated 10/7/95) needs to be set
	up again after SP4 is applied.
	
	MORE INFORMATION
	================
	
	IBM ThinkPad 755CE/CSE/CD/CX/CV/CDV, 750C/755C, 370C, and 345C use the Western
	Digital video chip set. For resolutions higher than 640x480x16, the driver from
	IBM is needed. The driver name is Wdvga.sys. If SP4 is applied to one of these
	systems that have the SVGA driver loaded, it replaces the Wdvga.sys, which
	brings back the system to standard VGA 16 colors.
	
	Additional query words: prodnt thinkpad video
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
