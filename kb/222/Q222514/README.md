---
layout: page
title: "Q222514: Errors Running Federal Express FedEx Ship Program"
permalink: /kb/222/Q222514/
---

## Q222514: Errors Running Federal Express FedEx Ship Program

{% raw %}

	Article: Q222514
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.5
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kberrmsg kbnetwork kbtool kbui
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server version 4.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to use the Federal Express FedEx Ship program on your Microsoft
	Windows 95-based client computer, you may receive the following error message:
	
	  Registration failed.
	  Communication error:
	  Protocol or network error.
	
	However it has been reported, that when used on a Windows 95 client that has
	Modem Sharing installed, it will generate an error that states the following
	when it attempts to dial out:
	
	CAUSE
	=====
	
	This problem can occur if you try to use the Federal Express FedEx Ship program
	on a Windows 95-based client using modem sharing in a Small Business Server
	(SBS) environment.
	
	RESOLUTION
	==========
	
	To work around this problem, use the FedEx Ship program with Windows NT-based
	clients in the SBS environment, not on the actual SBS server.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	Federal Express makes an automated shipping program called "FedEx Ship", used to
	automate the shipping process.
	
	Additional query words: smallbiz
	
	======================================================================
	Keywords          : kb3rdparty kbenv kberrmsg kbnetwork kbtool kbui 
	Technology        : kbAudDeveloper kbSBServSearch kbSBServ450
	Version           : winnt:4.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
