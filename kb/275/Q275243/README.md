---
layout: page
title: "Q275243: XADM: Can't Back Up Databases Containing Extended ASCII Chars."
permalink: /kb/275/Q275243/
---

## Q275243: XADM: Can't Back Up Databases Containing Extended ASCII Chars.

{% raw %}

	Article: Q275243
	Product(s): Microsoft Exchange
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbExchange2000SP1Fix
	Last Modified: 10-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange 2000 Server 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to back up a database whose name contains ANSI characters above
	code 127 or if the database is stored in a path whose name contains ANSI
	character code 127 and above, the backup procedure does not work and you receive
	the following error message:
	
	  Database Not Found
	
	CAUSE
	=====
	
	During database creation, the database name is translated from UNICODE to ASCII
	using ANSI (CP_ACP). However, the Extensible Storage Engine (ESE) component that
	is used for backup (Eseback2.dll) is using the OEM Codepage (CP_OEMCP) when it
	converts the database name from the UNICODE string to the ASCII equivalent. This
	causes two different ASCII database names with ANSI characters above 127.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Microsoft Exchange
	2000 Server. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q301378 XGEN: How to Obtain the Latest Exchange 2000 Server Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: ESE
	
	+----------------------------+
	| File name    | Version     | 
	+----------------------------+
	| Eseback2.dll | 6.0.4418.10 | 
	+----------------------------+
	| Esebcli2.dll | 6.0.4418.10 | 
	+----------------------------+
	
	
	WORKAROUND
	==========
	
	To work around this problem, use the following steps to rename the database
	using ANSI characters 1-127:
	
	1. Start Exchange System Manager.
	
	2. Locate the affected database.
	
	3. Right-click the database, and then click Properties.
	
	4. Click the Databases tab.
	
	5. For the value of Exchange Databases and Exchange Streaming Databases, click
	  Browse, and then select a new directory or type the name of the new database.
	
	6. Click Apply.
	
	7. Exchange System Manager informs you that the selected databases will be
	  dismounted, remove/renamed, and remounted.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange 2000 Server.
	This problem was first corrected in Microsoft Exchange 2000 Server Service Pack
	1.
	
	Additional query words: exch2kp2w
	
	======================================================================
	Keywords          : kberrmsg kbExchange2000SP1Fix 
	Technology        : kbExchangeSearch kbExchange2000Search kbExchange2000Serv
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
