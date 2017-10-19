---
layout: page
title: "Q175534: Error Message: Missing Entry: News_RunDLL"
permalink: /kb/175/Q175534/
---

## Q175534: Error Message: Missing Entry: News_RunDLL

	Article: Q175534
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.0,2.0,2.5,3.0,3.01,3.02,95
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbmsn
	Last Modified: 14-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 2.0, 2.5 
	- Microsoft Internet Explorer versions 3.0, 3.01, 3.02 for Windows 95 
	- Microsoft Internet Mail and News version 1.0 for Windows 95 
	- the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to open an Internet newsgroup on MSN, The Microsoft Network,
	you may receive the following error message:
	
	  C:\Windows\System\Mailnews.dll Missing Entry: News_RunDLL
	
	CAUSE
	=====
	
	This behavior can occur if the file association for the URL:News protocol is
	missing the News_RunDLL entry.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following steps:
	
	1. Right-click the The Internet icon on the desktop, and then click Properties.
	
	2. On the Programs tab, click File Types.
	
	3. In the list of registered file types, click URL:News Protocol, and then click
	  Edit.
	
	4. Under Actions, click Open, and then click Edit.
	
	5. In the Application Used To Perform Action box, type the following line:
	
	  "Rundll32.exe C:\Windows\System\Mailnews.dll,News_RunDLL" (without the
	  quotation marks)
	
	6. Click OK or Close until you return to Windows.
	
	Additional query words: 1.00 msn ie_app
	
	======================================================================
	Keywords          : kbenv kberrmsg kbmsn 
	Technology        : kbIEsearch kbWin95search kbMSNSearch kbIMNSearch kbIE95Search kbZNotKeyword3 kbWin95 kbIE300Win95 kbIE301Win95 kbIE302Win95 kbMSN200 kbMSN250 kbIMN100Win95
	Version           : WINDOWS:1.0,2.0,2.5,3.0,3.01,3.02,95
	Issue type        : kbprb
	
	=============================================================================
	
