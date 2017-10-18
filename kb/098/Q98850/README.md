---
layout: page
title: "Q98850: Encarta 1993: Minimal Installation May Cause Sound Gaps"
permalink: kb/098/Q98850/
---

## Q98850: Encarta 1993: Minimal Installation May Cause Sound Gaps

	Article: Q98850
	Product(s): Microsoft Home Kids Products
	Version(s): 1993 edition
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta for Windows 1993 edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A minimal installation of Microsoft Encarta may make a Multimedia PC compatible
	system produce intermittent sound gaps in the Encarta animations.
	
	MORE INFORMATION
	================
	
	The recommended installation of Encarta (which requires 7.9 MB of disk space)
	provides faster performance than the minimal installation (which requires 2.5 MB
	of disk space). The slower performance of the minimal installation may make a
	normally Multimedia PC compatible system produce intermittent sound gaps in the
	Encarta animations. This only occurs in animations.
	
	This gap in the sound can occur if you are running low on memory and, due to the
	minimal installation, a piece of code must be accessed from the compact disc
	while the animation is running. The read head moves away from the location of
	the currently running animation and if it cannot return to that location before
	the buffer empties, it will produce a gap in the sound.
	
	This may also occur if the compact disc device driver is not functioning
	properly. It may be sending empty blocks of data to the buffer or it may not
	return to the right place on the compact disc when the read head moves.
	
	For more information in the Microsoft Knowledge Base query on the following
	words:
	
	  sounds and interrupted and stutter
	
	Workaround
	----------
	
	1. Reinstall Encarta using the installation recommended by the Encarta Setup
	  program.
	
	2. Install the most current drivers for the compact disc drive.
	
	
	Additional query words: 1.00 multimedia multi media multi-media non MPC halt start stop nonmpc non-mpc halting setup intermittent sounds occur animations version 1.0 loss no studder usage sound viewer 2.0 cd cd-rom
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncarta1993
	Version           : :1993 edition
	
	=============================================================================
	
