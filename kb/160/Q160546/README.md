---
layout: page
title: "Q160546: Error Message: &quot;No User Profiles Were Found&quot;"
permalink: /kb/160/Q160546/
---

## Q160546: Error Message: &quot;No User Profiles Were Found&quot;

{% raw %}

	Article: Q160546
	Product(s): Microsoft Windows NT
	Version(s): WINNT:3.5 3.51 4.0
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
	
	When you attempt to delete a profile from Windows NT Setup, you may receive the
	following error message.
	
	  No user profiles were found on this machine.
	
	You may also receive the following message when you use User Profile Editor to
	save a profile as the user default or system default:
	
	  Failed to save the profile to the user's default profile.
	
	CAUSE
	=====
	
	Certain registry entries and/or directories are lacking Full Control
	permissions.
	
	RESOLUTION
	==========
	
	To resolve this problem, ensure that both of the following conditions are true:
	
	- The user has Full Control permissions to the following registry key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT
	  \CurrentVersion\ProfileList
	
	  -and-
	
	- If Windows NT is installed on an NTFS partition, the user has Full Control
	  permissions to the %SYSTEMROOT%\System32\config directory.
	
	Additional query words: prodnt upedit
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WINNT:3.5 3.51 4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
