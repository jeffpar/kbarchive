---
layout: page
title: "Q254481: Err Msg: The Page Cannot Be Displayed..."
permalink: /kb/254/Q254481/
---

## Q254481: Err Msg: The Page Cannot Be Displayed...

	Article: Q254481
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to use the browser-based Internet Services Manager (ISM)
	(HTML), the following error message is displayed in the browser:
	
	  The page cannot be displayed
	  The page you are looking for is currently unavailable. The Web site might be
	  experiencing technical difficulties, or you may need to adjust your browser
	  settings.
	
	Additionally, at the bottom of the browser, the following error message is
	displayed:
	
	  Cannot find server or DNS Error
	
	CAUSE
	=====
	
	The URL (shortcut) used to open the ISM (HTML) uses the wrong port number.
	
	This can occur when a URL to the ISM (HTML) has been manually created, IIS 5.0 is
	subsequently removed from the computer, and then later reinstalled. After
	reinstallation, a new random port number is automatically assigned to the ISM
	(HTML), which does not match the previous port number being used by the URL.
	
	RESOLUTION
	==========
	
	Use the IIS snap-in to determine the new port number of the Administration Web
	Site, and then change the URL in the shortcut to reflect that new port number.
	
	MORE INFORMATION
	================
	
	Example:
	
	Assume that IIS is running on the local computer, and that the URL of the ISM
	(HTML) is http://localhost:5838/iis.asp (port number of 5838). After IIS 5.0 is
	removed and reinstalled, the new port number will be a new (randomly generated)
	number, for example, 8955. Therefore, the new URL should be
	http://localhost:8955/iis.asp.
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	Additional query words: iis 5 HTMLA WEBADMIN ISM MMC akz
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
