---
layout: page
title: "Q164636: Tab Function Does Not Work on 3270 Printer LU Page"
permalink: /kb/164/Q164636/
---

## Q164636: Tab Function Does Not Work on 3270 Printer LU Page

	Article: Q164636
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The TAB key does not cycle through the button options (OK, Cancel, Help) on the
	SNA Manager 3270 Printer LU page.
	
	CAUSE
	=====
	
	SNA Server Manager (Snaexp.exe) did not correctly enable the TAB key on the 3270
	Printer LU page.
	
	RESOLUTION
	==========
	
	SNA Server Manager has been updated to correct this problem.
	
	The updated module is \System\Snaexp.exe.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna sna30 snamanager snaprintservice
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
