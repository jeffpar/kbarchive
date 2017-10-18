---
layout: page
title: "Q126306: Laser Tools PrintCache (PCACHE.EXE) Hangs MSD"
permalink: kb/126/Q126306/
---

## Q126306: Laser Tools PrintCache (PCACHE.EXE) Hangs MSD

	Article: Q126306
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.21,6.22; WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.21, 6.22 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	According to Laser Tools Technical Support, the Laser Tools PrintCache program
	causes certain versions of Microsoft Diagnostics (MSD) to stop responding (hang)
	when you choose to view network information.
	
	MORE INFORMATION
	================
	
	The following versions of MSD hang when you choose to view network information
	if PrintCache (PCACHE.EXE) is loaded as a terminate-and-stay- resident (TSR)
	program:
	
	- MSD version 2.10 (included with Microsoft Windows for Workgroups version
	  3.11)
	
	- MSD version 2.11 (included with MS-DOS versions 6.21 and 6.22)
	
	This problem with PCACHE.EXE does not occur with earlier versions of MSD (2.00
	and 2.01).
	
	Workarounds
	-----------
	
	Use either of the following methods to work around this problem:
	
	- Start MSD with the /I switch to skip hardware detection. Do not choose to
	  view network information.
	
	- Edit the AUTOEXEC.BAT file and remove or remark the PCACHE.EXE line.
	
	PrintCache is manufactured by Laser Tools, a manufacturer independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	
	Additional query words: 3.11 msd pcache 6.21 6.22
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311 kbMSDOSSearch kbMSDOS621 kbMSDOS622
	Version           : MS-DOS:6.21,6.22; WINDOWS:3.11
	
	=============================================================================
	
