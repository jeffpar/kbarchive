---
layout: page
title: "Q166773: Using the Personalization Service with IIS 4.0"
permalink: /kb/166/Q166773/
---

## Q166773: Using the Personalization Service with IIS 4.0

{% raw %}

	Article: Q166773
	Product(s): Internet Information Server
	Version(s): WINNT:2.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Site Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To use Personalization Server on Microsoft Windows NT Option Pack and use
	anonymous authentication, you must disable automatic password synchronization.
	
	MORE INFORMATION
	================
	
	Use the following steps to change the settings for the default web site:
	
	1. From the Start, Programs menu, select the Windows NT 4.0 Option Pack.
	
	2. Select the Microsoft Internet Information Server (IIS).
	
	3. Click Internet Service Manager. NOTE: Do not click Internet Service Manager
	  (HTML).
	
	4. If you see the Tip of the Day page, click Close.
	
	5. Click the plus (+) symbol to expand the Internet Information Server folder.
	
	6. Click the + symbol next to your server name.
	
	7. Right-click Default Web Site, and click Properties.
	
	8. Click the Directory Security tab.
	
	9. Click the Edit button for Anonymous Access and Authentication Control.
	
	10. With the Allow Anonymous Access box selected, click the Edit button.
	
	11. Clear the Enable Automatic Password Synchronization check box.
	
	12. Enter the password of the Windows NT User account that will be used for
	  anonymous log-ins.
	
	Additional query words: mcis checked enabled iisfaqtop
	
	======================================================================
	Keywords          :  
	Technology        : kbSiteServSearch kbiisSearch kbAudDeveloper kbiis400 kbSiteServ200
	Version           : WINNT:2.0,4.0
	Hardware          : ALPHA x86
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
