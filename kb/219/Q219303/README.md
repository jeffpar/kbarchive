---
layout: page
title: "Q219303: Oracle Fail Safe Does Not Function After Service Pack 4 Install"
permalink: /kb/219/Q219303/
---

## Q219303: Oracle Fail Safe Does Not Function After Service Pack 4 Install

	Article: Q219303
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork kbWinNT400sp5fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows NT 4.0 Service Pack 4 on your computer that already
	has Oracle Fail Safe installed, the Oracle software may not function properly.
	
	CAUSE
	=====
	
	This behavior occurs because NetBIOS support is not enabled for the cluster's
	TCP/IP address resource.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server, Enterprise
	Edition version 4.0. This problem was first corrected in Windows NT 4.0 Service
	Pack 5.
	
	Additional query words: mscs oracle cluster failsafe
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
