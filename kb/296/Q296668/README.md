---
layout: page
title: "Q296668: FP: Authentication Error When You Log On"
permalink: /kb/296/Q296668/
---

## Q296668: FP: Authentication Error When You Log On

{% raw %}

	Article: Q296668
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 29-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 98 for Windows 
	- Microsoft FrontPage 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to log on to a secure Web site, you may receive the following error
	message:
	
	  You are not authorized to view this page
	
	CAUSE
	=====
	
	This issue can occur when you are a member of a local users group, and you
	attempt to access a Common Gateway Interface (CGI) application. Because CGI
	applications run on the server, they require Microsoft Windows NT Server domain
	authentication.
	
	RESOLUTION
	==========
	
	To resolve this issue, turn off Integrated Windows authentication (formerly
	called Windows NT Challenge/Response), and then enable Basic authentication. To
	do this, follow these steps.
	
	WARNING: Basic authentication is sent in clear text. User names and passwords may
	be vulnerable to hackers.
	
	1. Start the Internet Services Manager on your Web server.
	
	2. Right-click your Web site, and then click Properties on the shortcut menu.
	
	3. On the Directory Security tab, click Edit in the "Anonymous Access and
	  Authentication Control" area.
	
	4. Click to select the Basic Authentication check box.
	
	5. Click to clear the "Integrated Windows authentication" check box.
	
	  NOTE: Your Microsoft Internet Information Services (IIS) server may refer to
	  the Windows NT Challenge/Response authentication method. If this is the case,
	  click to clear the "Windows NT Challenge/Response" check box.
	
	6. Click OK twice.
	
	
	REFERENCES
	==========
	
	For additional information about how to create restricted access to a subweb,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q301942 FP2000: How to Set Up a Restricted-Access Web
	
	Additional query words: authentication error credentials front page
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch kbFrontPage97 _IKkbZNotKeyword4 kbZNotKeyword2 kbFrontPage97Search kbFrontPage98Search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
