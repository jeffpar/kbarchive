---
layout: page
title: "Q143317: Unconf: Jazz Sound Card And Haunted House"
permalink: kb/143/Q143317/
---

## Q143317: Unconf: Jazz Sound Card And Haunted House

	Article: Q143317
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	1.00
	WINDOWS
	unconfirmed kb3rdparty kbsound kberrmsg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Haunted House for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	*********************************************************************
	**                           - WARNING -                           **
	**     THE INFORMATION BELOW IS PRELIMINARY AND HAS NOT BEEN       **
	**     CONFIRMED OR TESTED BY MICROSOFT. USE ONLY                  **
	**     WITH DISCRETION.                                            **
	*********************************************************************
	
	SUMMARY
	=======
	
	Although unconfirmed, here a list of Jazz Audio card drivers, dates, and
	versions that show evidence of working well with The Ultimate Haunted House
	
	(this is not a comprehensive list):
	
	Drivers (In Control Panel)
	
	Jazz Mixer Driver v. 2.0
	Jazz OPL3 FM Synth (no version available)
	Jazz Wave Audio Driver v. 1.0 & 2.0
	Jazz 401 midi interface v. 1.0
	
	The following are the dates for the drivers, version 2.0 (as listed on the disk
	label) in the WINDOWS\SYSTEM directory:
	
	Jazz 1/18/94
	Jazz401 9/2/93
	JazzFM2 8/10/93
	JazzFM4 8/10/93
	JazzMXD 1/18/94
	
	The following are the dates for the drivers, version 1.0 (as listed on the disk
	label) in the WINDOWS\SYSTEM directory:
	
	Jazz 11/12/93
	Jazz401 9/2/93
	JazzFM2 8/10/93
	JazzFM4 8/10/93
	JazzMXD 1/18/94
	
	MORE INFORMATION
	================
	
	Here are some example lines from an AUTOEXEC.BAT and CONFIG.SYS file that
	pertain to the Jazz Sound card:
	
	AUTOEXEC.BAT
	------------
	
	SET BLASTER=A220 D1 I5 T4
	
	CONFIG.SYS
	----------
	
	DEVICE=C:\G2KAUDIO\JAZZ.SYS P220 I5 D1 E5 T330 Q2<BR/>
	DEVICE=C:\G2KAUDIO\JAZZCD.SYS /I11 /P340 /D6
	
	Additional query words: 1.00 multi media multi-media
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword kbKidsSearch kbHauntedHouse
	Version           : WINDOWS:1.0
	Issue type        : kbinfo
	
	=============================================================================
	
