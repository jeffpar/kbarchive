---
layout: page
title: "Q171142: Safety Error During Internet Explorer Enrollment"
permalink: kb/171/Q171142/
---

## Q171142: Safety Error During Internet Explorer Enrollment

	Article: Q171142
	Product(s): Internet Information Server
	Version(s): winnt:1.0,3.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 28-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 3.0 
	- Microsoft Certificate Server version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOM
	
	When you connect to the Microsoft Internet Explorer Enrollment Form,
	you will get the following warning dialog box:
	
	  Potential safety violation avoided
	
	  This page contains active content that is not verifiably safe to display. To
	  protect your computer, this content will not be displayed.
	
	  Chose Help to find how you can change your safety settings so you can view
	  potentially unsafe content.
	
	CAUSE
	=====
	
	The safety level is set to High in of Microsoft Internet Explorer.
	
	RESOLUTION
	==========
	
	To enable the Enrollment Form to function, do the following:
	
	1. In Microsoft Internet Explorer, click Options on the View menu.
	
	2. Click the Security tab.
	
	3. Select the Safety level button.
	
	4. Set the safety level to Medium or None.
	
	MORE INFORMATION
	================
	
	The Microsoft Internet Explorer Enrollment Form uses an ActiveX Control
	(Certenr3.dll) to create client certificates for Microsoft Internet Explorer. It
	has been demonstrated that ActiveX controls can cause a security risk when used
	improperly. Therefore, Microsoft Internet Explorer contains configurable
	security settings that allow you to disable the "active" content on web pages.
	When you set the security to High, you disable the functionality of the
	Certenr3.dll file.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbiisSearch kbiis300 kbCertServSearch kbZNotKeyword3 kbCertServ100
	Version           : winnt:1.0,3.0
	Issue type        : kbprb
	
	=============================================================================
	
