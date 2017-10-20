---
layout: page
title: "Q167704: Explanation of Windows NT 4.0 WINS Consistency Checking"
permalink: /kb/167/Q167704/
---

## Q167704: Explanation of Windows NT 4.0 WINS Consistency Checking

{% raw %}

	Article: Q167704
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.00
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Consistency checking was added to the Windows Internet Name Service (WINS)
	server in Windows NT 4.0 to aid in maintaining database integrity among WINS
	servers in a large network.
	
	When consistency checking is enabled on a WINS server, the server pulls all of
	the records directly from each owner server in its database, which includes
	servers that the WINS server has records from that are not among its replication
	partners.
	
	NOTE: If a WINS database is extremely large, the consistency checking process may
	be network intensive.
	
	All records are compared from the local and remote databases.
	
	- If the record in the local database is identical to the record pulled from
	  the owner database, its timestamp is updated.
	
	- If the record in the local database has a lower version ID than the record
	  pulled from the owner database, the pulled record is added to the local
	  database and the original local record is marked for deletion.
	
	- If the records have the same version ID but a different name, the local
	  record will be marked deleted and the pulled record will replace it.
	
	Consistency checking is enabled through registry changes. It can also be
	triggered using the WINSCL utility available as part of the Windows NT 4.0
	Server Resource Kit.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q154410
	  TITLE : New WINS Registry Entries
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.00
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
