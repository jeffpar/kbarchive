---
layout: page
title: "Q103622: Err Msg: GROUP ERROR: Cannot Open Program Group...."
permalink: kb/103/Q103622/
---

## Q103622: Err Msg: GROUP ERROR: Cannot Open Program Group....

	Article: Q103622
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you log onto Windows NT after changing a user account from the
	Administrator's group to a group other than Administrators the following error
	message may appear:
	
	  GROUP ERROR: Cannot open program group [your group]. Do you want the Program
	  Manager to still try to load it in the future?
	
	This only happens with accounts that were migrated while the user belonged to the
	Administrator's group.
	
	RESOLUTION
	==========
	
	You must delete and recreate the account in User Manager or delete that user
	profile from Windows NT Setup. During the next logon the groups will migrate
	again.
	
	Reference(s):
	
	For more information on migrating groups after the initial migrate query on:
	
	  Windows NT and migrate and profile
	
	Additional query words: prodnt lost grp
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	
