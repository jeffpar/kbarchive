---
layout: page
title: "Q260096: Page Cannot Be Displayed When You Connect Through SSL"
permalink: /kb/260/Q260096/
---

## Q260096: Page Cannot Be Displayed When You Connect Through SSL

{% raw %}

	Article: Q260096
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 02-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you connect to a computer running Internet Information Services (IIS) 5.0
	by using Secure Socket Layer (SSL), the following error message may occur:
	
	  The page cannot be displayed.
	  The page you are looking for is currently unavailable. The Web site might be
	  experiencing technical difficulties, or you may need to adjust your browser
	  settings.
	
	This Web site is usually the second Web site on the server. Connecting to the Web
	site through HTTP works correctly.
	
	CAUSE
	=====
	
	This error message can occur if you have SSL set on the default Web site, and
	you remove the certificate, and then try to set it up on a second Web site.
	
	If you run a netstat -an command, you can see that a service is listening on port
	443, but you cannot connect to it. This is caused by a new implementation in IIS
	5.0 called Socket Pooling. For additional information on socket pooling and how
	to disable it, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q259349 IIS Binds To All Available IP Addresses When It Starts
	
	RESOLUTION
	==========
	
	NOTE: For the purposes of this article, two Web sites are installed: the default
	Web site and the Administration Web site. By default, SSL is enabled on the
	default Web site.
	
	1. Open the Security properties for the default Web site, and then select Server
	  Certificate.
	
	2. In the wizard, click Assign an existing certificate, and then select a
	  certificate from the list.
	
	3. When you have completed the wizard, click Web site tab, and then click
	  Advanced.
	
	4. Delete all the entries that are listed in the SSL window.
	
	5. Click Server Certificate again, click Remove the current certificate, and
	  click OK.
	
	6. Right-click the computer name in the Microsoft Management Console (MMC), and
	  then click Restart IIS.
	
	You should now be able to connect to the server by using SSL.
	
	WORKAROUND
	==========
	
	Restarting the IIS services may resolve the error message. If it does not,
	follow the steps in the "Resolution" section of this article.
	
	MORE INFORMATION
	================
	
	After SSL is enabled on an IIS Web server, the IIS service begins to listen on
	all used and unused IP addresses on ports 80 and 443. For multi-IP address
	servers, you may want to disable this feature. This feature was added the
	product for performance gain.
	
	This problem usually occurs when you try to set up SSL on the administration Web
	site. IIS finds the SSL settings for the default Web site and listens on port
	443. However, the default Web site does not have a certificate to correspond to
	that site. Therefore, no connection can be made, which is why you can see a
	server listening on port 443, but you cannot connect to the site.
	
	
	Additional query words: certsrv ssl administration
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
