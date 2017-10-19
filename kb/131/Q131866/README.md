---
layout: page
title: "Q131866: Mail Err Msg: There Was an Error Switching Between Private..."
permalink: /kb/131/Q131866/
---

## Q131866: Mail Err Msg: There Was an Error Switching Between Private...

	Article: Q131866
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message appears when you try to switch to your public
	folders window from your private folders window in Microsoft Mail:
	
	  There was an error switching between private and shared folders.
	  Check your message file and your network connection to the postoffice.
	
	The following error appears when you try to open a shared folder in the shared
	folders window:
	
	  The action cannot be completed because that shared folder is busy.
	  Try performing the action again later. If the problem persists,
	  contact your administrator.
	
	CAUSE
	=====
	
	You do not have the appropriate permissions to the WGPO\FOLDERS\PUB directory or
	the files in it.
	
	Mail requires that you assign Full Control permission to all Mail users for the
	workgroup postoffice directory (WGPO by default) and all of its subdirectories
	and files. If you do not have sufficient directory permission to the PUB
	subdirectory, or the files in it, Mail displays only your private folders window
	when you start Mail (if that window was open the last time you quit Mail). If
	you had only your shared folder window open the last time you quit Mail, Mail
	displays only your outbox.
	
	To open a new private folders window, choose New Window from the Window menu. If
	you try to switch to your shared folders window before you correctly set the
	directory permissions, the first error referenced above appears.
	
	If directory permissions are revoked while you are in Mail, and you have your
	shared folders window open, the second error message referenced above appears
	when you try to open one of the shared folders.
	
	RESOLUTION
	==========
	
	To correct this problem, run File Manager on the workgroup postoffice server
	and:
	
	1. Select the WGPO\FOLDERS\PUB subdirectory.
	
	2. From the Security menu, choose Permissions.
	
	3. Add your user account or a group to which you belong (for example,
	  Mailusers). The account of group must have the Full Control permission. Make
	  sure you select "Replace Permissions on Existing Files." Verify that your
	  user account or group does not currently have the No Access permission
	  assigned to that directory.
	
	4. Choose OK.
	
	You should now be able to access your shared folders.
	
	Additional query words: 3.10 prodnt select selecting opening out box users
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	
