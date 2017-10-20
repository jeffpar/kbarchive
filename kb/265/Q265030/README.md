---
layout: page
title: "Q265030: Netscape Cannot Browse Intranet Site"
permalink: /kb/265/Q265030/
---

## Q265030: Netscape Cannot Browse Intranet Site

{% raw %}

	Article: Q265030
	Product(s): Internet Information Server
	Version(s): 1.0,2.0,3.0,4.0,5.0
	Operating System(s): 
	Keyword(s): kbIIS
	Last Modified: 30-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 1.0, 2.0, 3.0, 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to access an intranet site with the Netscape 4.51 browser, the
	following error message may appear:
	
	  401.3 Unauthorized due to ACL on resource
	
	When you attempt to access the same intranet site with the Microsoft Internet
	Explorer browser, everything works as expected.
	
	CAUSE
	=====
	
	This problem may occur if you are using NTLM (NT challenge/response) or Windows
	Integrated authentication. Netscape can only use Basic authentication.
	
	WORKAROUND
	==========
	
	To work around this problem, follow these steps:
	
	WARNING: Using this procedure may make your username and password vulnerable to
	hackers, because Basic authentication is sent in clear text.
	
	1. Start Internet Information Services (IIS).
	
	2. Right-click the intranet site that you want.
	
	3. On the shortcut menu, click Properties, and then click the Directory Security
	  tab.
	
	4. At Anonymous access an authentication control, click Edit.
	
	5. At Authenticated access, click to select the Basic authentication check box.
	
	NOTE: You also have to give the user account the Log on Locally right to allow
	Basic authentication.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q142868 IIS: Authentication and Security Features
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 401.3
	
	======================================================================
	Keywords          : kbIIS 
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis300 kbiis200 kbiis100
	Version           : :1.0,2.0,3.0,4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
