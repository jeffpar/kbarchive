---
layout: page
title: "Q227395: Incorrect Dialog Box for Changing Password on NDS Server"
permalink: kb/227/Q227395/
---

## Q227395: Incorrect Dialog Box for Changing Password on NDS Server

	Article: Q227395
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When your password expires on a Novell NetWare 4.x Directory Services (NDS)
	server, the following dialog box may appear:
	
	  Your password on *TREENAME\CONTEXT has expired. Please change it with the
	  SETPASS utility.
	
	The text in this dialog box is incorrect.
	
	RESOLUTION
	==========
	
	To correctly change your password, press CTRL+ALT+DEL. After you change your
	password, you are prompted to select the NDS Tree on which you want your
	password changed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
