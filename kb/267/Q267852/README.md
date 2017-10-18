---
layout: page
title: "Q267852: Streets &amp; Trips 2001 Error Message: Unable to Load Vital Strings"
permalink: kb/267/Q267852/
---

## Q267852: Streets &amp; Trips 2001 Error Message: Unable to Load Vital Strings

	Article: Q267852
	Product(s): Microsoft Automap
	Version(s): 
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbimu
	Last Modified: 07-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Streets and Trips 2001 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Microsoft Streets & Trips 2001, you may receive the
	following error message when you restart the computer if the Streets & Trips
	Run CD is in the CD-ROM drive:
	
	  Unable to load vital strings. This application will now close.
	
	CAUSE
	=====
	
	This behavior can occur if the QBCD Autorun memory-resident program is loaded
	during the Microsoft Windows startup sequence.
	
	This program is installed by QuickBooks and QuickBooks Pro.
	
	If the Streets & Trips 2001 Run CD is inserted in the CD-ROM drive, QBCD
	Autorun attempts to start Streets & Trips 2001 before the Windows startup
	sequence is complete.
	
	RESOLUTION
	==========
	
	To resolve this issue, remove the Streets & Trips 2001 Run CD from the
	CD-ROM drive before you start the computer or contact Intuit to obtain
	instructions about how to uninstall QBCD Autorun or how to prevent it from
	loading automatically during the Windows startup sequence.
	
	For more information about QuickBooks, visit the following Intuit Web site:
	
	  http://www.quickbooks.com
	
	MORE INFORMATION
	================
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	
	Additional query words: st2001 setup quits stops tsr cannot load
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbimu 
	Technology        : kbHomeProdSearch kbExpediaSearch
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
