---
layout: page
title: "Q191634: Group Policies Cause Excessive &#92;PIPE&#92;samr Connections on PDC"
permalink: /kb/191/Q191634/
---

## Q191634: Group Policies Cause Excessive &#92;PIPE&#92;samr Connections on PDC

	Article: Q191634
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Running Server Manager or User Manager for Domains results in the following
	error message:
	
	  Insufficient system resources exist to complete the requested service.
	  Do you want to select another domain to administer?
	
	The primary domain controller (PDC) shows \PIPE\samr connections in excess of
	2,048. Rebooting the PDC temporarily alleviates the problem.
	
	CAUSE
	=====
	
	When a user logs on to a domain in which group policies are implemented, a
	\PIPE\samr connection is established with the PDC to verify group membership for
	this user. After the verification process, the \PIPE\samr connection is not
	released. These \PIPE\samr connections eventually exceed the limit of 2,048.
	
	After this limit is reached, no new processes requiring security account manager
	(SAM) access can connect to the PDC until you restart the computer. Server
	Manager and User Manager for Domains require a connection to the PDC for domain
	administration. Their failure to make this connection results in the preceding
	error message.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	Apply the file, Userenv.dll, to each workstation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words: system policy editor
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
