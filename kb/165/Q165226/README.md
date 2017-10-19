---
layout: page
title: "Q165226: Application Exception in SNA Manager"
permalink: /kb/165/Q165226/
---

## Q165226: Application Exception in SNA Manager

	Article: Q165226
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you are doing a refresh while getting Manage status updates for APPC
	sessions, you may receive an application exception in SNA Server Manager. The
	application exception will generate a Drwtsn32.log in the Windows NT directory.
	
	CAUSE
	=====
	
	When adding and deleting APPC sessions, not all items marked for deletion were
	actually being destroyed, causing an application exception to occur.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the hotfix mentioned below.
	
	An exception handler has been added to the ConfigTerminateCallback() function to
	prevent the application exception.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
