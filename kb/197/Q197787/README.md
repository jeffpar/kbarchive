---
layout: page
title: "Q197787: Err Msg: You Do Not Have Permission to Access Your Central..."
permalink: /kb/197/Q197787/
---

## Q197787: Err Msg: You Do Not Have Permission to Access Your Central...

	Article: Q197787
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A user connecting to a Terminal Server that has Metaframe installed may receive
	the following error message:
	
	  You do not have permission to access your central profile located at
	  \\server\share. The operating system is attempting to log you on with your
	  local profile. Please contact your Network Administrator.
	
	CAUSE
	=====
	
	This problem will occur if a user's User Profile path or Terminal Server Profile
	path is specified in User Manager as \\server\share, rather than
	\\server\share\folder.
	
	RESOLUTION
	==========
	
	To workaround this situation, copy the profile to a folder under the profile
	share point. Change the User Profile path or Terminal Server Profile path in
	User Manager to \\server\share\folder.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT Server 4.0,
	Terminal Server Edition.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
