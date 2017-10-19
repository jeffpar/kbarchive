---
layout: page
title: "Q186473: You Can Delete All Records on a WINS Server Using SNMP"
permalink: /kb/186/Q186473/
---

## Q186473: You Can Delete All Records on a WINS Server Using SNMP

	Article: Q186473
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	It is possible to delete entries in a WINS database using SNMP. Deleting the
	entries is done by sending an SNMP set packet to your WINS server running SNMP,
	with a command telling it to delete a specific owner. If security is not set up
	to accept packets only from certain sources, and someone knows your community
	name, the server will accept any set packets as being valid and delete the WINS
	owners entries.
	
	RESOLUTION
	==========
	
	Microsoft has updated Winsmib.dll and Wins.mib to correct the problem.
	
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
	
	
	Additional query words: WINS SNMP Delete Owner
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
