---
layout: page
title: "Q151926: Delayed WinLogon When Drive Mapped to Local Share"
permalink: /kb/151/Q151926/
---

## Q151926: Delayed WinLogon When Drive Mapped to Local Share

{% raw %}

	Article: Q151926
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	
	SYMPTOMS
	========
	
	You may experience a long delay (30 to 90 seconds) when attempting to log on to
	your Windows NT computer if you have a drive mapped to a local share.
	
	WORKAROUND
	==========
	
	To avoid delays while starting up Windows NT, use one of the following
	workarounds:
	
	- Disconnect any locally attached drives before logging off.
	
	- When creating locally attached drive mappings, clear the "Reconnect at logon"
	box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The simplest way to reproduce this problem is to install the MS Loopback adapter
	with a single protocol (NetBEUI) and a single network provider (for example, The
	Microsoft Network).
	
	Additional query words: prodnt winlogon delay loopback
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
