---
layout: page
title: "Q228521: Err Msg: HTTP Error 403, 403.2 Forbidden: Read Access Forbidden"
permalink: /kb/228/Q228521/
---

## Q228521: Err Msg: HTTP Error 403, 403.2 Forbidden: Read Access Forbidden

	Article: Q228521
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you browse a Web site using the domain name only (in other words, you do
	not specify the default file on the Web site), the following error occurs, even
	though "Enable Default Documents" is turned on and the default document exists:
	
	  HTTP Error 403
	  403.2 Forbidden: Read Access Forbidden
	  This error can occur when there is no default page available and directory
	  browsing has not been enabled for the directory, or if you are trying to
	  display an HTML page that resides in a directory marked for Execute or Script
	  permissions only.
	  Please contact the Web server's administrator if the problem persists.
	
	However, if you browse the Web site using a URL that includes one of the default
	files, the file is displayed properly.
	
	For example, "http://www.domain.com/" (without the quotation marks) does NOT
	work, but "http://www.domain.com/default.htm" (without the quotation marks)
	does.
	
	CAUSE
	=====
	
	The Read access permission is turned off for the root of the Web site,
	preventing the browser from parsing through the list of default documents.
	
	RESOLUTION
	==========
	
	Turn the Read access permission on, by performing the following steps:
	
	1. Start the Internet Service Manager (ISM), which loads the Internet
	  Information Server snap-in for the Microsoft Management Console (MMC).
	
	2. Right-click the Web site, and then click Properties on the Context menu.
	
	3. Click the Home Directory tab, and then click the Read access permission to
	  enable it.
	
	4. Click OK to return to the ISM.
	
	MORE INFORMATION
	================
	
	To locate the "Enable Default Document" property in the ISM, view the property
	sheet for the Web site, and then click the Documents tab.
	
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	Additional query words: akz
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
