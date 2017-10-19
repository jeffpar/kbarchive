---
layout: page
title: "Q263716: Internet Services Manager (HTML) Not Available in Windows 2000"
permalink: /kb/263/Q263716/
---

## Q263716: Internet Services Manager (HTML) Not Available in Windows 2000

	Article: Q263716
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 04-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The browser-based Internet Services Manager (HTML) in Microsoft Internet
	Information Services (IIS) 5.0, which is included in Microsoft Windows 2000
	Server, is not available in Microsoft Windows 2000 Professional.
	
	CAUSE
	=====
	
	The browser-based Internet Services Manager (HTML) is implemented through the
	use of a virtual Web site, which is not supported in Windows 2000 Professional.
	
	RESOLUTION
	==========
	
	Use the MMC-based Internet Services Manager. For additional information, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q263121 The Internet Services Manager MMC Is Not Added to the Windows Start
	  Menu
	
	NOTE: The MMC-based Internet Services Manager can be used to remotely administer
	IIS over an intranet. However, if you must remotely administer IIS over the
	Internet or through a proxy server, which requires the use of the browser-based
	Internet Services Manager (HTML), you need to run IIS 5.0 on Windows 2000
	Server.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q262632 PWS Does Not Run on Windows 2000 Professional
	
	Additional query words: iis 5 webadmin htmla akz
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
