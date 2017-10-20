---
layout: page
title: "Q126701: RAS: Use Cached Credentials to Log On to a Different Domain"
permalink: /kb/126/Q126701/
---

## Q126701: RAS: Use Cached Credentials to Log On to a Different Domain

{% raw %}

	Article: Q126701
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 4.0 
	- Microsoft Windows NT Server versions 3.5, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article expands on the Help information found in the Windows NT Remote
	Access Service (RAS) client (RASPHONE.HLP) and describes a more convenient way
	to gain network access to a RAS server domain other than the RAS client's
	domain.
	
	MORE INFORMATION
	================
	
	When you do not use the Authenticate Using Current User Name And Password option
	in RAS and you request Help in the Authentication dialog box, information
	appears describing how to log onto a domain other than the RAS client's domain.
	This Help information also describes how to avoid having to press CTRL+ALT+DEL
	every time you log on to that domain.
	
	However, the Help information does not mention that your Windows NT RAS client
	will cache your remote logon credentials after you have logged onto the domain
	the first time, allowing subsequent logons to the domain to be automated.
	
	To do this, connect to the RAS server and log on to its domain once as described
	in the Help information (by pressing CTRL+ALT+DEL). After that, log on to its
	domain before you are connected to the RAS server and allow Windows NT to log
	you automatically with cached credentials when you connect.
	
	Additional query words: access denied prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 4.0
	
	=============================================================================
	

{% endraw %}
