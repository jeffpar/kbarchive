---
layout: page
title: "Q145735: BUG: SQL Counters Not Available Under Integrated Security"
permalink: /kb/145/Q145735/
---

## Q145735: BUG: SQL Counters Not Available Under Integrated Security

	Article: Q145735
	Product(s): Microsoft Windows NT
	Version(s): 6.00 3.5 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If Performance Monitor fails one or more of the following symptoms occur:
	
	- SQL Counters are not located in the Object list.
	
	- If you are auditing logins, the following type of error is logged:
	
	  Login failed - User. \ Reason: Not defined as a valid user of a trusted SQL
	  Server connection.
	
	CAUSE
	=====
	
	The use of Performance Monitor can fail when:
	
	- Viewing SQL Counters from a remote client.
	
	  OR
	
	- The Probe password is not NULL.
	
	  OR
	
	- SQL Server is listening on an alternate pipe.
	
	
	WORKAROUND
	==========
	
	Set up SQL Server to use standard security because you cannot force or "unforce"
	a trusted connection. Make sure SQL Server is listening on the default pipe and
	the Probe password is NULL.
	
	If you need to continue the integrated connection, simply add an advanced
	connection to the SQL Server computer, pointing back to itself. That is, use the
	SQL Server Client Configuration Utility to create an advanced entry that is the
	same name as the SQL Server computer itself, using named pipes and connecting to
	'\\.\pipe\sql\query'.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SQL Server version
	6.0. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt sql6 windows nt perfmon dbclose
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 6.00 3.5 3.51
	
	=============================================================================
	
