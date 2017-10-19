---
layout: page
title: "Q278401: XCCC: Event 205 Occurs After Security Bulletin Is Installed"
permalink: /kb/278/Q278401/
---

## Q278401: XCCC: Event 205 Occurs After Security Bulletin Is Installed

	Article: Q278401
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	Applies to all versions of Microsoft Outlook Web Access
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 Service Packs 1, 2, 3 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you install the Microsoft Security Bulletin MS00-078, you are not able to
	access Microsoft Exchange Outlook Web Access, and the following event is
	reported in the system event log:
	
	  Event ID 205
	  Source: WAM
	  The HTTP server was unable to load the ISAPI Application
	  'C:\WINNTSRV\System32\inetsrv\asp.dll'. The data is the error.
	  For additional information specific to this message please visit the Microsoft
	  Online Support site located at: http://www.microsoft.com/contentredirect.asp.
	
	CAUSE
	=====
	
	This issue can occur if mismatched dynamic link libraries exist. The order in
	which you install programs can result in mismatched dynamic link libraries.
	
	RESOLUTION
	==========
	
	To resolve this issue, install the latest Microsoft Windows NT Service Pack, and
	then install the security patch.
	
	MORE INFORMATION
	================
	
	The error in the "Symptoms" section of this article may also occur when you
	attempt to access web pages through LocalHost, independent of Outlook Web
	Access. For more information about the Microsoft Security Bulletin, visit the
	following Microsoft Web site:
	
	  Microsoft Security Bulletin MS00-078
	
	Additional query words: owa security bulletin ex55 exch2kp2w
	
	======================================================================
	Keywords          :  
	Component         : WebClient
	Technology        : kbOutlookSearch kbOWASearch kbOWA550SP1 kbOWA550SP2 kbOWA550SP3
	Version           : :5.5
	Hardware          : x86
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
