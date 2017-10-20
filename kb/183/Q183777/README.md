---
layout: page
title: "Q183777: FP: Server Extensions Do Not Support Nested Virtual Roots"
permalink: /kb/183/Q183777/
---

## Q183777: FP: Server Extensions Do Not Support Nested Virtual Roots

{% raw %}

	Article: Q183777
	Product(s): Word Front Page
	Version(s): WINDOWS:1.1,97
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 25-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows 1.1 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194475.
	
	SUMMARY
	=======
	
	This article describes concerns relating to the location of the content root of
	your web server.
	
	MORE INFORMATION
	================
	
	Web servers can work with different virtual server directory structures than the
	FrontPage Server Extensions require. Virtual server directories should not be
	configured under the root directory for another server. The following
	configurations do not work with the FrontPage Server Extensions because they
	contain nested directories for the virtual servers:
	
	  Server running on Windows NT
	  ----------------------------
	
	  Root Web           c:\inetsrv\wwwroot
	  Virtual Server 1   c:\inetsrv\wwwroot\virsvr1
	  Virtual Server 2   c:\inetsrv\wwwroot\virsvr2
	
	  Server running on UNIX
	  ----------------------
	
	  Root Web           /usr/local/www
	  Virtual Server 1   /usr/local/www/user1
	  Virtual Server 2   /usr/local/www/user2
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q310931 FPSE2000: Where to Find the FrontPage 2000 Server Extensions Resource
	  Kit (SERK)
	
	Additional query words: 97
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch kbFrontPage1xSearch kbFrontPage97Search kbZNotKeyword3 kbFrontPage110
	Version           : WINDOWS:1.1,97
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
