---
layout: page
title: "Q111567: WFWG Setup with HP Ethertwist Cards: No Network Installed"
permalink: /kb/111/Q111567/
---

## Q111567: WFWG Setup with HP Ethertwist Cards: No Network Installed

{% raw %}

	Article: Q111567
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have a Hewlett-Packard (HP) Ethertwist network adapter card installed
	when you run Windows for Workgroups 3.11 Setup, Setup detects that there is "no
	network installed" on your system.
	
	CAUSE
	=====
	
	Windows for Workgroups 3.11 Setup does not have HP Ethertwist network card
	detection code.
	
	WORKAROUND
	==========
	
	To work around this problem, manually select the HP Ethertwist EISA LAN
	Adapter/32 (HP27248 or HP27248A) or HP Ethertwist MCA Adapter (HP27246) when you
	run Windows for Workgroups 3.11 Setup.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows for Workgroups
	version 3.11. We are researching this problem and will post new information here
	as it becomes available.
	
	Additional query words: 3.11 interface nic nonet 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
