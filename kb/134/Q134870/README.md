---
layout: page
title: "Q134870: PPT7: Illegal Operation Error Saving File as PowerPoint 4.0"
permalink: kb/134/Q134870/
---

## Q134870: PPT7: Illegal Operation Error Saving File as PowerPoint 4.0

	Article: Q134870
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop
	Last Modified: 15-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you choose to save a Microsoft PowerPoint for Windows 95 version 7.0
	presentation as a PowerPoint version 4.0 presentation, you may receive the
	following error message:
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	If you check the error details, you see the following comment:
	
	  POWERPNT executed an invalid instruction in module KERNEL32.DLL (or UNKNOWN)
	  at ####:####
	
	CAUSE
	=====
	
	This problem may occur if you start the PowerPoint presentation by
	double-clicking the filename in Windows Explorer.
	
	RESOLUTION
	==========
	
	Open PowerPoint first, then open the file by clicking the Open command on the
	File menu. Save the presentation as a PowerPoint 4.0 file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft PowerPoint for Windows
	95 version 7.0. This problem was corrected in Microsoft PowerPoint 97 for
	Windows.
	
	Additional query words: 7.0 7.00 general protection fault GPF
	
	======================================================================
	Keywords          : kberrmsg kbinterop 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
