---
layout: page
title: "Q177174: WINS Server Displays Owners with Questions Marks"
permalink: /kb/177/Q177174/
---

## Q177174: WINS Server Displays Owners with Questions Marks

	Article: Q177174
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you examine the mappings in your Windows Internet Name Service (WINS)
	Server database, you may see entries with question marks (\\???) for the
	computer name in the Select Owner dialog box.
	
	CAUSE
	=====
	
	The entries that are appearing as \\??? are WINS servers that are replicating
	with your WINS server. However, these replication partners are not listed in the
	WINS Manager in the WINS Servers list.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following steps:
	
	1. In WINS Manager, click Server and click Add WINS Server.
	
	2. Type the IP address or the NetBIOS name of the WINS server that is displaying
	  with question marks in the mappings and click OK.
	
	3. Click Mappings and click Show Database to verify that the replication partner
	  is now displaying either its IP address or computer name instead of question
	  marks.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5, 3.51,
	and 4.0. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	
