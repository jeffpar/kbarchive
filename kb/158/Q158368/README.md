---
layout: page
title: "Q158368: Missing Control in Volume Control Tool"
permalink: /kb/158/Q158368/
---

## Q158368: Missing Control in Volume Control Tool

	Article: Q158368
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you enable all the playback types in the Volume Control tool on a computer
	with a Media Vision Pro Audio Spectrum sound card, the far right control may not
	appear and cannot be adjusted.
	
	CAUSE
	=====
	
	If you are using a 640 x 480 screen resolution, the Volume Control tool
	(Sndvol32.exe) has enough space for eight controls. With all the controls for
	the Pro Audio Spectrum sound card enabled, there are nine controls.
	
	RESOLUTION
	==========
	
	To resolve this issue, disable one of the controls in the Volume Control tool,
	or change to a higher screen resolution.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
