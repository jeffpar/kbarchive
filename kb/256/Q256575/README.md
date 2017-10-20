---
layout: page
title: "Q256575: ClipBook Viewer Prompts for Network Access Password"
permalink: /kb/256/Q256575/
---

## Q256575: ClipBook Viewer Prompts for Network Access Password

{% raw %}

	Article: Q256575
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbtool
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a user starts ClipBook Viewer (Clipbk.exe), the following dialog box may be
	displayed:
	
	  Enter Network Access Password for Server: <computer name>, DDE Share
	  CLPBK$
	
	Regardless of the password or account that is used, an "Incorrect Password" error
	message is displayed.
	
	CAUSE
	=====
	
	The Enter Network Access Password dialog box is displayed if the user does not
	have the correct network access rights because Clipbk.exe uses Network Dynamic
	Data Exchange (NetDDE) to communicate. Checking the user rights in User Manager
	may also show that the correct user account is listed, but that the user account
	was originally in another domain.
	
	RESOLUTION
	==========
	
	1. Start User Manager.
	
	2. On the Policies menu, click User Rights.
	
	3. Verify that "Access this computer from the network" is selected in the Right
	  box, or that the Domain Users global group is listed.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
