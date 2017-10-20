---
layout: page
title: "Q170235: FP: End User Permissions Are Turned Off on Netscape Server"
permalink: /kb/170/Q170235/
---

## Q170235: FP: End User Permissions Are Turned Off on Netscape Server

{% raw %}

	Article: Q170235
	Product(s): Word Front Page
	Version(s): ; WINDOWS:1.0,1.0a,1.1
	Operating System(s): 
	Keyword(s): kbusage kbdta
	Last Modified: 01-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows, versions 1.0, 1.0a, 1.1 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194674.
	
	SYMPTOMS
	========
	
	When you attempt to restrict end-user access to a FrontPage Web that is hosted
	on a Netscape Web server (such as a Netscape Commerce, Enterprise,
	Communications or Fast Track server), you may receive the following error
	message:
	
	  Server Error: This server does not support restricting end-user access.
	
	If you attempt to create a User Registration page in a root Web on a Netscape
	server, an error icon (a red triangle) appears next to the saved page in
	FrontPage Explorer, and the following message appears:
	
	  (1) This server does not support registered end-users.
	
	CAUSE
	=====
	
	Netscape maintains end-user databases as an optional feature. This behavior
	occurs even though you created a database of registered end users, according to
	the instructions from Netscape. The FrontPage Registration Form Handler (or
	WebBot Registration Component) is not supported on these servers, because
	Netscape servers do not support dynamic updating of the database by a Web
	browser at browse time.
	
	MORE INFORMATION
	================
	
	For more information about restricting Web resources to end users on a Netscape
	server, contact Netscape Communications Corporation.
	
	
	These products are manufactured by Netscape Communications Corporation, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 97 enduser restricted subweb nscp front page fp97
	
	======================================================================
	Keywords          : kbusage kbdta 
	Technology        : kbFrontPageSearch kbFrontPage1xSearch kbFrontPage97Search kbZNotKeyword3 kbFrontPage100 kbFrontPage100a kbFrontPage110
	Version           : :; WINDOWS:1.0,1.0a,1.1
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
