---
layout: page
title: "Q165085: SNA 3.0 Setup Fails If Computer Name Starts with a Digit"
permalink: kb/165/Q165085/
---

## Q165085: SNA 3.0 Setup Fails If Computer Name Starts with a Digit

	Article: Q165085
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
	
	If you install SNA Server 3.0 on a computer whose name contains a number as the
	first character, Setup completes successfully. However, when you first run SNA
	Server Manager, no SNA Servers are listed in the Manager. Also, if you close the
	Manager at that point, you will get a Dr. Watson error in Snaexp.exe. However,
	the DrWtsn32.log file will not show a fault (which would tell you which module
	actually caused the access violation).
	
	CAUSE
	=====
	
	This is a regression for a problem that was corrected in SNA Server 2.11 Service
	Pack 1.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the hotfix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna AV
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
