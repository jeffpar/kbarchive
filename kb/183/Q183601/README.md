---
layout: page
title: "Q183601: Slow Links Are Not Detected Between a Workstation and a Server"
permalink: kb/183/Q183601/
---

## Q183601: Slow Links Are Not Detected Between a Workstation and a Server

	Article: Q183601
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A slow link between a computer running Windows NT Workstation and a computer
	running Windows NT Server storing user profiles is not automatically detected.
	
	CAUSE
	=====
	
	Slow links are not detected if the path to the user profile is also the path to
	the share (\\Server\Share).
	
	RESOLUTION
	==========
	
	To resolve this problem, store the user profile in a different folder and change
	the path to reference this folder (for example, \\Server\Share\UserName).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post additional information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	
	Additional query words: roaming profile mandatory profile
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
