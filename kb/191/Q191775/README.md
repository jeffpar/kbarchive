---
layout: page
title: "Q191775: WINS Service Fails to Start With More Than 99 PNG Entries"
permalink: /kb/191/Q191775/
---

## Q191775: WINS Service Fails to Start With More Than 99 PNG Entries

	Article: Q191775
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you enter more than 99 IP addresses in the PersonaNonGrata (PNG) value in the
	registry, the WINS server will not start. Event ID 7023 and 4165 are logged to
	the System Event Log on the WINS server.
	
	NOTE: This problem can occur on a computer with Service Pack 4 installed if the
	PersonaNonGrata list contains duplicate entries and there are more than 99 IP
	addresses. Removing the duplicate entries will resolve the problem.
	
	CAUSE
	=====
	
	Because of a buffer calculation, WINS is unable to handle the PNG buffer size
	when creating the PNG key with more than 99 IP addresses. The buffer size
	calculation has been reworked to handle more than 99 IP addresses.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
