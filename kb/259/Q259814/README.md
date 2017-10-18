---
layout: page
title: "Q259814: Streets and Trips 2000: Run Time Library Error When You Print"
permalink: kb/259/Q259814/
---

## Q259814: Streets and Trips 2000: Run Time Library Error When You Print

	Article: Q259814
	Product(s): Microsoft Automap
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kberrmsg kbprint kbimu
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Expedia Streets and Trips 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to print from Microsoft Expedia Streets and Trips 2000, you may
	receive the following error message:
	
	  Microsoft Visual C++ Runtime Library
	
	  Runtime Error!
	  Program: C:\Program Files\Microsoft Expedia Streets &
	  Trips\System\Autmap71.exe
	  Abnormal Program Termination
	
	CAUSE
	=====
	
	This behavior can occur if both of the following conditions are true:
	
	- You attempt to print to a Hewlett-Packard (HP) Color LaserJet 8500N printer.
	
	- The printer is configured to use the HP Color LaserJet 8500N PostScript (PS)
	  printer driver.
	
	RESOLUTION
	==========
	
	To resolve this issue, configure the printer to use the HP Color LaserJet 8500
	Printer Control Language (PCL) printer driver when you want to print from
	Expedia Streets and Trips 2000.
	
	If the HP Color LaserJet 8500N PCL printer driver is not installed on your
	computer, download and install the printer driver from the following
	Hewlett-Packard Web site:
	
	  http://www.hp.com/cposupport/swindexes/hpcolorlas7861_swen.html
	
	If the issue continues to occur after you install the PCL printer driver, change
	both of the timeout settings to 60 seconds, and disable bidirectional printing.
	
	For additional information, please refer to the printed documentation provided
	with your printer or contact your printer manufacturer.
	
	MORE INFORMATION
	================
	
	Microsoft provides third-party contact information to help you find technical
	support. This contact information may change without notice. Microsoft does not
	guarantee the accuracy of this third-party contact information.
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	Additional query words: multi multi-media media mm auto-map amap est2000
	
	======================================================================
	Keywords          : kberrmsg kbprint kbimu 
	Technology        : kbHomeProdSearch kbExpediaSearch kbExpediaStreets2000
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
