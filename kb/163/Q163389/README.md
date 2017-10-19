---
layout: page
title: "Q163389: &quot;Error Reading Disk...&quot; Unpacking Multi-Disk Pack And Go File"
permalink: /kb/163/Q163389/
---

## Q163389: &quot;Error Reading Disk...&quot; Unpacking Multi-Disk Pack And Go File

	Article: Q163389
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kberrmsg kbpng
	Last Modified: 16-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to unpack a presentation from multiple disks using Pack And Go
	setup (Pngsetup.exe), the following message appears:
	
	  The Presentation was successfully installed in <Path>. Would you like
	  to run the slide show now?"
	
	When you click Yes, the screen turns blue and you receive the following error
	message:
	
	  Error Reading Disk in Drive A:
	
	CAUSE
	=====
	
	Pack And Go is searching for the original Pngsetup.exe file and is unable to
	find it on the current disk (the last disk in the series).
	
	RESOLUTION
	==========
	
	When you receive the "Error Reading Disk in Drive A" error message, insert disk
	1 of the series of disks that was created by Pack And Go setup, and then press
	Enter.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft PowerPoint version
	7.0. We are researching this problem and will post new information here as it
	becomes available.
	
	MORE INFORMATION
	================
	
	When Pack And Go setup is used to pack a presentation across multiple disks, the
	following two files are copied to the first disk in the series:
	
	  Pngsetup.exe      The application that unpacks the presentation on the
	                    disks.
	
	  Pres0.png         The first file of the actual presentation information.
	
	When you finish unpacking a presentation, your computer may need to access the
	Pngsetup.exe file again. If the file is not on the current disk, your computer
	interprets this as an unreadable disk.
	
	Additional query words: 7.00 Error Messages ppt7 ppt7.0 PNG fail bluescreen MS-DOS B: disc diskette 3.5" 5.25" read disk powerpoint
	
	======================================================================
	Keywords          : kberrmsg kbpng 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
