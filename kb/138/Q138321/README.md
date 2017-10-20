---
layout: page
title: "Q138321: Err Msg at Logon: Unable To Log You On Because Your Profile..."
permalink: /kb/138/Q138321/
---

## Q138321: Err Msg at Logon: Unable To Log You On Because Your Profile...

{% raw %}

	Article: Q138321
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to log on as a user other than the Administrator in Windows NT,
	the following error message appears:
	
	  Unable to log you on because your profile could not be loaded, please contact
	  your administrator.
	
	If you choose OK, the Welcome screen appears which instructs you to press
	CTRL+ALT+DEL to log on.
	
	CAUSE
	=====
	
	This problem occurs if the directory permissions for the %SystemRoot%, REPAIR,
	SYSTEM and/or SYSTEM32 directories have been changed so that the user has less
	than at least Change permissions. For example, the permissions may have been
	changed to Everyone with Read(RX)(RX) access.
	
	RESOLUTION
	==========
	
	To correct this problem, log on as Administrator and change the permissions of
	the %SystemRoot%, REPAIR, SYSTEM and/or SYSTEM32 directories and its files to
	Everyone with at least Change access.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	

{% endraw %}
