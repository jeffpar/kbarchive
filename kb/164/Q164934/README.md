---
layout: page
title: "Q164934: Error When 16-Bit Application Accesses a File in a Shared Folder"
permalink: kb/164/Q164934/
---

## Q164934: Error When 16-Bit Application Accesses a File in a Shared Folder

	Article: Q164934
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use a 16-bit application running on the computer running SNA Server to
	open a file on a drive that was created by the SNA Server 3.0 Shared Folders
	Gateway (SFGW), you may receive the following error message:
	
	  Cannot access <filename>.
	
	CAUSE
	=====
	
	The application is trying to access a file object that is still in the SFGW file
	object cache. In this situation, the application was allowed to try to open the
	file object as a directory. However, because the file object points to a file,
	this attempt fails.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the hotfix mentioned below. As a workaround, you
	can either try a 32-bit version of the application, or do not run the
	application on the computer running SNA Server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: share prodsna
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
