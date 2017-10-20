---
layout: page
title: "Q155523: Netlogon Stops Reponding or Records Event ID 5703"
permalink: /kb/155/Q155523/
---

## Q155523: Netlogon Stops Reponding or Records Event ID 5703

{% raw %}

	Article: Q155523
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Users cannot log on to the domain, and the event viewer generates the following
	error:
	
	  Event id: 5703 Source: Netlogon
	  The data area passed to a system call is too small. Nt error 122.
	
	
	CAUSE
	=====
	
	This problem occurs if the Netlogon service receives a mailslot that is greater
	than the MAILSLOT_MESSAGE_SIZE (0x40c). This causes Netlogon to go into an
	infinite loop, filling the event log. At this point, Netlogon cannot respond to
	logon requests.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51.
	
	A supported fix is now available, but has not been fully regression- tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: hangs pdc bdc stop 0x50 prodnt
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	

{% endraw %}
