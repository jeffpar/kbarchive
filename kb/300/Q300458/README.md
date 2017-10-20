---
layout: page
title: "Q300458: XFOR: Full Reload Modifying Trust Value on Exported Containers"
permalink: /kb/300/Q300458/
---

## Q300458: XFOR: Full Reload Modifying Trust Value on Exported Containers

{% raw %}

	Article: Q300458
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you modify the "Trust level" value on the Exported Containers tab in
	Microsoft Exchange Connector for Lotus Notes, a full export will take place on
	the next scheduled reload. This behavior may be unexpected and cause a
	larger-than-normal replication process.
	
	WORKAROUND
	==========
	
	To work around this issue, follow these steps:
	
	1. At the command prompt, type the following
	
	  <drive letter>:\exchsrvr\CONNECT\Exchconn>LSDXA -P CONTROL-SERVICE
	  -N LME-NOTES,GWISE or SNADS-DXA -C EXCHCONN.INI /W0
	
	  to produce the Eab.txt file in the following directory:
	
	  Exchsrvr\connect\exchconn\temp
	
	  Note that this process may take a very long time.
	
	2. Change the first line of the Eab.txt file from "Load" to "Updates" (without
	  the quotation marks).
	
	  If you do not make this change, all entries not listed in the intermediate
	  file will be deleted.
	
	3. Remove all of the entries that are already in the foreign system.
	
	  Each entry starts with a "U" or an "A."
	
	4. Run the following command line to "read" the entries into the foreign
	  directory system:
	
	  <drive letter>:\exchsrvr\CONNECT\Exchconn>LSDXA -P CONTROL-SERVICE
	  -N LME-NOTES,GWISE or SNADS-DXA -C EXCHCONN.INI /R1
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
