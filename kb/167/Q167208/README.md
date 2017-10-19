---
layout: page
title: "Q167208: Sound Schemes Do Not Migrate to Other Users"
permalink: /kb/167/Q167208/
---

## Q167208: Sound Schemes Do Not Migrate to Other Users

	Article: Q167208
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Sound schemes installed under one account do not show up correctly for other
	users in Control Panel Sound. If an administrator installs the multimedia sound
	schemes in Control Panel Add/Remove Programs, the sound schemes will then only
	be available to that user who installed them. This means that if a user needs to
	install the multimedia components to get the sound schemes, he or she must have
	administrator privileges.
	
	CAUSE
	=====
	
	Currently the installation of the multimedia components are stored under the
	user's registry key. This information is therefore not available to another
	user.
	
	RESOLUTION
	==========
	
	The only way to install the components for each user is to give the users
	administrative rights while installing the multimedia components.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WINNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	
