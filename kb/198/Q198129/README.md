---
layout: page
title: "Q198129: Memory Leak in Performance Monitor Virtual Bytes"
permalink: /kb/198/Q198129/
---

## Q198129: Memory Leak in Performance Monitor Virtual Bytes

	Article: Q198129
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Performance Monitor (Perfmon) is running locally on a server that has SQL
	Server 6.5 installed on it, and it is monitoring any objects, the virtual bytes
	of the perfmon process grows at a quick rate and never releases any memory. The
	monitoring of virtual bytes may be remotely viewed.
	
	CAUSE
	=====
	
	When a user, who is logged on locally to the server and has no access to
	Microsoft SQL Server, starts logging performance data with Performance Monitor
	the Perfmon API is called to obtain the performance information. Even when the
	object that is being gathered is not a SQL Server extensible counter, there is
	some authentication going on between the user context of the perfmon process and
	SQL Server. When this occurs, the following Event messages is written in the
	Application log:
	
	  Event ID 7
	  DB-LIBRARY - SQL Server message: Login failed- User: Server\user.
	  Reason: Not defined as a valid user of a trusted SQL Server connection.
	
	When this message occurs, Perfmon fails to release all of the memory it has
	obtained and its virtual bytes grow at a very quick rate.
	
	RESOLUTION
	==========
	
	To work around this problem, do either of the following:
	
	- Ensure the user logging on locally has permissions to SQL Server.
	
	  -or-
	
	- Use Performance Monitor remotely.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server version 4.0.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
