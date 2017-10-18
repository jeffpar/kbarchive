---
layout: page
title: "Q236073: Files and Folders Reappear After Deletion with Roaming Profiles"
permalink: kb/236/Q236073/
---

## Q236073: Files and Folders Reappear After Deletion with Roaming Profiles

	Article: Q236073
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you delete files or folders of a user's roaming profile, the files and
	folders reappear.
	
	CAUSE
	=====
	
	If a user has a roaming profile and logs on to different computers (locally
	cached profiles enabled), they may experience the following behavior:
	
	After deleting files or folders on their profile and logging off from computer A,
	the files or folders reappear if they log on to computer B, where they have
	logged on before.
	
	This problem occurs because the locally-cached profile on computer B still has
	the files and directories in the locally-cached profile. When downloading the
	roaming profile from the profile server, the user has a local profile with the
	former deleted files and folders again. After logging off from this computer,
	the complete profile is copied back and the former deletion of files and folders
	seemed to have no effect.
	
	WORKAROUND
	
	To work around this problem, disable the locally-cached profiles. To do this,
	please see the following Microsoft Knowledge Base article:
	
	  Q173870 How to Automatically Delete Locally Cached Profiles
	
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400xsearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400xsearch kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
