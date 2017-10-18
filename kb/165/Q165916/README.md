---
layout: page
title: "Q165916: Incorrect Video Memory Amount is Detected for WD90C24a."
permalink: kb/165/Q165916/
---

## Q165916: Incorrect Video Memory Amount is Detected for WD90C24a.

	Article: Q165916
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The detected video driver WD90c24a will only recognize 512 KB of the 1 MB of
	video memory on the system, limiting the video resolution to 640x480 and 16
	colors. Windows NT 4.0 installed on a Compaq Contura 410c laptop with a passive
	matrix screen will exhibit this problem.
	
	CAUSE
	=====
	
	In Windows NT 3.51, the driver incorrectly configured WD90c24a as a 90c31, so
	higher resolutions could be reached. In Windows NT 4.0, the chip identification
	will not allow this to happen. The WD90c24a driver will be installed and higher
	resolutions will not be possible.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.
	
	A supported fix is now available, but has not been fully regression tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: Western Digital
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
