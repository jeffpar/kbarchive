---
layout: page
title: "Q173202: 1B Record Missing in WINS Manager with View Filtered for Domain"
permalink: kb/173/Q173202/
---

## Q173202: 1B Record Missing in WINS Manager with View Filtered for Domain

	Article: Q173202
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you filter on the domain name while viewing your Windows Internet Name
	Service (WINS) database in WINS Manager, you will not see any [1B] entries. For
	example, if you have a Windows NT domain named Domain and you configure your
	filter in WINS Manager to find "Domain" or "Domain*", the results list will
	display all records for your domain except the [1B] record, which is the domain
	master browser.
	
	WORKAROUND
	==========
	
	The only workaround is to sort the records instead of filtering them. You can
	sort the records using the following steps:
	
	1. Click Start, point to Programs, point to Administrative Tools, and then click
	  WINS Manager.
	
	2. Click Show Database on the Mappings menu.
	
	3. Click the Sort by IP Address option in Sort Order and then click the Sort by
	  Computer Name option in Sort Order.
	
	  NOTE: The WINS mappings are not automatically sorted when you add new records,
	  so you will need to perform these steps each time you want to view the
	  records.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.51 and
	4.0. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The most reliable method for finding the 1Bh entry in the WINS database is to:
	
	1. Select SHOW ALL MAPPINGS in the SHOW DATABASE window for the particular WINS
	  server.
	
	2. Select SET FILTER and leave the 'Computer Name' blank but enter the 'IP
	  Address' of the PDC and select OK.
	
	This will return all entries recorded in the database by the PDC including the
	1Bh.
	
	Additional query words: 1bh
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
