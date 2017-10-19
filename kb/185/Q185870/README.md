---
layout: page
title: "Q185870: SQL Server Insert Error Regarding Column Name Mismatch"
permalink: /kb/185/Q185870/
---

## Q185870: SQL Server Insert Error Regarding Column Name Mismatch

	Article: Q185870
	Product(s): Internet Information Server
	Version(s): WINNT:3.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 3.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On high-volume computers running Internet Information Server 3.0, the Internet
	Server service may appear to stop responding (hang) while attempting to connect
	to a SQL Server computer. The following error message appears:
	
	  State 21S01 Error 213
	  Microsoft ODBC SQL Server Driver
	  SQL Server Insert error: column name or number of supplied values does
	  not match table definition..
	
	CAUSE
	=====
	
	This is caused by a problem with the allocation parameter passed between the
	Internet Database Connector (Httpodbc.dll) and the Microsoft Internet
	Information Services Helper library (Infocomm.dll).
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 3.0. This problem was first corrected in Windows NT 4.0 Service Pack 4.0
	and Windows NT Server 4.0, Terminal Server Edition Service Pack 4.
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbiisSearch kbiis300
	Version           : WINNT:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
