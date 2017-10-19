---
layout: page
title: "Q269789: Err Msg: Streets Caused General Protection Fault in Kernel32.dll"
permalink: /kb/269/Q269789/
---

## Q269789: Err Msg: Streets Caused General Protection Fault in Kernel32.dll

	Article: Q269789
	Product(s): Microsoft Automap
	Version(s): 
	Operating System(s): 
	Keyword(s): kb3rdparty kbdisplay kberrmsg kbimu
	Last Modified: 07-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MapPoint 2001 
	- Microsoft Streets and Trips 2001 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start one of the programs listed at the beginning of this article, you
	may receive the following error message:
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists please contact your program vendor.
	
	If you click Details, you receive an error message similar to the following:
	
	  Streets caused a general protection fault in module Kernel32.dll.
	
	CAUSE
	=====
	
	This behavior can occur if the following conditions are true:
	
	- A NeoMagic video adapter is installed in the computer.
	
	- The video BIOS for the video adapter is outdated.
	
	- The video driver for the video adapter is outdated.
	
	RESOLUTION
	==========
	
	To resolve this issue, download and install the latest versions of the video
	BIOS and the video driver for your video adapter from the following NeoMagic Web
	site:
	
	  http://www.neomagic.com
	
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	
	Additional query words: mp2001 st2001 expedia map point auto-map amap neomagic
	
	======================================================================
	Keywords          : kb3rdparty kbdisplay kberrmsg kbimu 
	Technology        : kbHomeProdSearch kbExpediaSearch kbMapptSearch kbMapPoint2001
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
