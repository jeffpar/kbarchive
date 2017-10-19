---
layout: page
title: "Q120242: How to Have Individual CONFIG.FPM Files on Workstations"
permalink: /kb/120/Q120242/
---

## Q120242: How to Have Individual CONFIG.FPM Files on Workstations

	Article: Q120242
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5x,2.6a,3.0b
	Operating System(s): 
	Keyword(s): kbenv kbnetwork
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Macintosh, versions 2.5x, 2.6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In FoxPro for Macintosh, you can have a CONFIG.FPM file on a workstation
	automatically open when FoxPro is on the network by placing the CONFIG.FPM file
	in the System Folder of the workstation. (This file is normally placed in the
	FoxPro folder.)
	
	MORE INFORMATION
	================
	
	On the Macintosh, there is no AUTOEXEC.BAT file in which to place the line "SET
	FOXPROCFG=" in order to define an environment variable that identifies the
	location of the CONFIG.FPM file.
	
	Users at workstations can use a shared copy of FoxPro while having individual
	CONFIG.FPM files if they start FoxPro by double-clicking the CONFIG.FPM file.
	Placing the CONFIG.FPM file in the System Folder allows users at workstations to
	have their own individual CONFIG.FPM files and also to start FoxPro by
	double-clicking the FoxPro icon.
	
	NOTE: If you double-click the FoxPro icon and there is a CONFIG.FPM file in the
	FoxPro folder on the network, that file will be used instead of the CONFIG.FPM
	file in the System Folder. Therefore, in a workstation situation, there should
	only be a CONFIG.FPM file in the local workstation's System Folder and no
	CONFIG.FPM file in the FoxPro folder on the network.
	
	Having individual CONFIG.FPM files allows each user to customize various settings
	for FoxPro, such as where to write temporary files to the local hard disk.
	
	REFERENCES
	==========
	
	FoxPro "Installation and Macintosh Features Guide," version 2.5b, page 27
	
	Additional query words: vFoxMac FoxMac 2.50b 2.50c
	
	======================================================================
	Keywords          : kbenv kbnetwork 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260aMac kbVFP300bMac
	Version           : MACINTOSH:2.5x,2.6a,3.0b
	
	=============================================================================
	
