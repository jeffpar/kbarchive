---
layout: page
title: "Q171417: SNA Server Setup Does Not Support Long Paths and Filenames"
permalink: /kb/171/Q171417/
---

## Q171417: SNA Server Setup Does Not Support Long Paths and Filenames

	Article: Q171417
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP1; winnt:3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 SP1 
	- Microsoft SNA Workstation, version 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If the installation path specified for SNA Server, SNA Workstation, SNA Server
	Windows NT client, or SNA Server Windows 95 client contains more than 40
	characters, or if the path contains spaces, the following error message is
	displayed:
	
	  Illegal Directory Specified
	
	  Illegal directory name - Restart Setup and choose the target path for
	  SNA Server to be max 40 characters, with no spaces.
	
	CAUSE
	=====
	
	The Setup programs do not support paths that are greater than 40 characters in
	length or contain spaces. These restrictions are necessary because some SNA
	Server components do not function correctly if the installation path is greater
	than 40 characters in length or if the path contains spaces.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0 Service
	Pack 1 (SP1), SNA Workstation version 3.0 Service Pack 1 (SP1), SNA Server
	Windows NT client version 3.0 Service Pack 1 (SP1), and SNA Server Windows 95
	client version 3.0 Service Pack 1 (SP1). This problem was corrected in the
	latest SNA Server version 3.0 U.S. Service Pack. For information on obtaining
	this Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	
	With the fix applied, the Setup programs for SNA Server 3.0 SP1, SNA Workstation
	3.0 SP1, and SNA Server Windows NT client allow the installation path to be up
	to 100 characters in length, including spaces. The setup program for the Windows
	95 client sets the maximum path length to 100 characters, including spaces.
	
	
	With the fix applied, other SNA Server components have been updated to support
	the new longer installation paths allowed by the updated setup programs.
	
	
	NOTE: These updates correct the restrictions described in the following article
	in the Microsoft Knowledge Base:
	
	  Q165460 SNA Server 3.0 Install Path Must Be Eight Characters or Less
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAW300SP1 kbSNAServ300SP1
	Version           : WINDOWS:3.0 SP1; winnt:3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
