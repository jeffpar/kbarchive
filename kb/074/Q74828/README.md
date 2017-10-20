---
layout: page
title: "Q74828: MIRROR: Unrecognized DOS INT 25h/26h Handler"
permalink: /kb/074/Q74828/
---

## Q74828: MIRROR: Unrecognized DOS INT 25h/26h Handler

{% raw %}

	Article: Q74828
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After installing Microsoft MS-DOS 5 Upgrade you may receive the following error
	message when you start your computer:
	
	  Resident Delete Tracker.
	  WARNING! Unrecognized DOS INT 25h/26h handler. Some other TSR programs may
	  behave erratically while delete-tracking is resident! Try installing Mirror
	  BEFORE your other TSRs.
	
	This problem occurs when PC Tools and MIRROR are installed with MIRROR included
	in your AUTOEXEC.BAT file.
	
	CAUSE
	=====
	
	This problem can occur when the DOS subdirectory is positioned after the PCTOOLS
	subdirectory in the PATH when you are still using PC Tools Deluxe version 6. To
	correct the problem, modify the PATH statement so that the DOS subdirectory
	comes before the PCTOOLS subdirectory. This order causes the MS-DOS 5.0 MIRROR
	(rather than PC Tools MIRROR) to load when you start your machine.
	
	The product included here, PC Tools, is manufactured by vendors independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 5.00 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	

{% endraw %}
