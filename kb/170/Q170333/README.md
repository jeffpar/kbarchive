---
layout: page
title: "Q170333: The Last Logged-On User Is Not Displayed"
permalink: /kb/170/Q170333/
---

## Q170333: The Last Logged-On User Is Not Displayed

	Article: Q170333
	Product(s): Microsoft Windows NT
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 21-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Zero Administration Kit for Windows NT Workstation 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you log on to a Windows NT-based computer configured with the Zero
	Administration Kit (ZAK), the last logged on user may not be shown.
	
	CAUSE
	=====
	
	The Ntconfig.pol file included with ZAK has the "Do not display last logged on
	user" option enabled by default.
	
	RESOLUTION
	==========
	
	To configure Windows NT to display the last logged-on user, run Poledit.exe.
	Edit the Ntconfig.pol file in the Netlogon folder on the primary domain
	controller and disable the "Do not display last logged on user" option.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTWsearch kbAudDeveloper kbZAWNTW400
	Version           : 1.0
	
	=============================================================================
	
