---
layout: page
title: "Q171699: Error Message: Active Content Is Causing a Sharing Violation"
permalink: kb/171/Q171699/
---

## Q171699: Error Message: Active Content Is Causing a Sharing Violation

	Article: Q171699
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbsetup
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are installing MSN, The Microsoft Network, you may receive the
	following error message when the installation program attempts to download
	ActiveX controls:
	
	  Active content is causing a sharing violation.
	
	CAUSE
	=====
	
	The MSN safety level may be set to High, preventing the download of active
	content.
	
	RESOLUTION
	==========
	
	Reduce the MSN safety level to None so you can download the necessary ActiveX
	controls. To do so, follow these steps:
	
	1. Right-click the MSN icon on the desktop, and then click Properties.
	
	2. On the Security tab, click Safety Level.
	
	3. Click None, and then click OK.
	
	4. Click OK.
	
	5. Connect to MSN to download the necessary ActiveX controls and finish
	  installing the MSN software.
	
	After the MSN software is installed, you may want to set the MSN safety level
	back to High. To do so, follow steps 1-4 above, but click High in step 3 instead
	of None.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg kbsetup 
	Technology        : kbMSNSearch kbMSN200
	Version           : WINDOWS:2.0
	
	=============================================================================
	
