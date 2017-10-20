---
layout: page
title: "Q110163: Incoming Faxes Received but Never Appear in Inbox"
permalink: /kb/110/Q110163/
---

## Q110163: Incoming Faxes Received but Never Appear in Inbox

{% raw %}

	Article: Q110163
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you are using Windows for Workgroups version 3.11 At Work PC Fax and a CAS
	modem, you may receive incoming faxes that do not appear in your Inbox.
	
	CAUSE
	=====
	
	This problem occurs when AutoAnswer for At Work PC Fax is set to Off and
	AutoAnswer in the CAS manager is set to On. As a result, the CAS board receives
	the fax but Microsoft Mail ignores it.
	
	RESOLUTION
	==========
	
	To correct this problem, run Control Panel, choose At Work PC Fax, Setup, and
	set AutoAnswer to On.
	
	Additional query words: 3.11 intel
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
