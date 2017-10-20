---
layout: page
title: "Q123478: Multiple ISDN Adapters Cannot Be Installed"
permalink: /kb/123/Q123478/
---

## Q123478: Multiple ISDN Adapters Cannot Be Installed

{% raw %}

	Article: Q123478
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kbnetwork kbbug3.50 kbfix3.50.sp2
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you configure a Windows NT Server with two PCIMAC adapters for Remote
	Access Service (RAS) dial-in, clients accessing both adapters when dialing the
	number will report that one of the cards doesn't respond, while one adapter
	does.
	
	CAUSE
	=====
	
	The driver setup was not configurable during Windows NT setup using the Network
	Control Panel for multiple adapters.
	
	RESOLUTION
	==========
	
	DIGIINSTL.DLL and PCIMAC.SYS have been updated to address configuration of
	multiple adapters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Windows NT Server version 3.5. This problem was corrected in the latest U.S.
	Service Pack for Windows NT version 3.5. For information on obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt debugging
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	

{% endraw %}
