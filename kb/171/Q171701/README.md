---
layout: page
title: "Q171701: Err Msg: MSN Has Detected You Are Missing Some ActiveX Controls"
permalink: kb/171/Q171701/
---

## Q171701: Err Msg: MSN Has Detected You Are Missing Some ActiveX Controls

	Article: Q171701
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbsetup
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you log on to MSN, The Microsoft Network, for the first time after
	installing MSN 2.0, you may receive the following error message:
	
	  MSN has detected you are missing some ActiveX Controls. Click OK to visit the
	  MSN Setup page where we will install the proper controls.
	
	When you click OK, you receive the following error message:
	
	  Internet Explorer cannot open the Internet site http://stagecon/setup/.
	  The site was not found. Make sure the address is correct, and try
	  again.
	
	When you click OK, you are disconnected from MSN.
	
	CAUSE
	=====
	
	The MSN safety level may be set to High, preventing the download of active
	content.
	
	RESOLUTION
	==========
	
	Reduce the MSN safety level to None so you can download the necessary files. To
	do so, follow these steps:
	
	1. Right-click the MSN icon on the desktop, and then click Properties.
	
	2. On the Security tab, click Safety Level.
	
	3. Click None, and then click OK.
	
	4. Click OK.
	
	5. Connect to MSN to download the files.
	
	After you download the necessary files, you may want to set the MSN safety level
	back to High. To do so, follow steps 1-4 above, but click High in step 3 instead
	of None.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg kbsetup 
	Technology        : kbMSNSearch kbMSN200
	Version           : WINDOWS:2.0
	
	=============================================================================
	
