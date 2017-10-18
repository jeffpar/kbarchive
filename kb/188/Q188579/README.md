---
layout: page
title: "Q188579: BUG: Memory Leak with Jet 3.51 and Remote ODBC Data Sources"
permalink: kb/188/Q188579/
---

## Q188579: BUG: Memory Leak with Jet 3.51 and Remote ODBC Data Sources

	Article: Q188579
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbDatabase kbODBC kbVC500bug kbDSupport
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A memory leak can occur in applications that use the Microsoft Jet database
	engine to access remote Open Database Connectivity (ODBC) data sources. You can
	look in the Windows NT Performance Monitor while the program runs and see a
	steady decrease in available memory if the problem is present. If this continues
	long enough, you might see "Out of Virtual Memory" or other low memory errors.
	If you examine an ODBC trace log, you can see that ODBC hstmt statement handles
	are allocated, but never freed.
	
	CAUSE
	=====
	
	When Jet executes Structured Query Language (SQL) commands on a remote table, it
	creates a new hstmt to execute the command. However, in some instances, it never
	frees the hstmt. Over time, this can result in decreased performance and low
	memory errors. Many applications never experience the memory leak because it
	occurs only when a remote table is being updated (the SQL UPDATE statement). The
	leak associated with hstmt's does not occur when you execute SELECT, INSERT, or
	DELETE statements. And, even when UPDATE statements are being executed, it can
	require thousands of iterations before the problem becomes evident.
	
	For example, the problem is not apparent in an application that simply opens a
	remote table and displays the contents. However, if the application then
	performs UPDATEs, the user might notice a memory leak. The precise behavior
	depends upon the ODBC driver that is used. Some ODBC drivers restrict the total
	number of hstmt's that can be allocated and return an error if the limit is
	exceeded. Other ODBC drivers simply continue to allocate new hstmt's as
	requested until a low memory condition occurs.
	
	RESOLUTION
	==========
	
	To work around this problem, you can periodically close the connection to the
	remote data source. When the connection is closed, ODBC releases all resources,
	such as hstmt's, that are associated with the connection. This frees the hstmt's
	and associated memory allocations.
	
	Jet closes ODBC connections after a connection has been idle for approximately
	the amount of time specified by the ConnectionTimeout registry key. (The default
	value of ConnectionTimeout is 600 seconds.) If an application pauses for Jet and
	allows Jet to time out on the connection and close it, all allocated hstmt's are
	freed. The application can then resume processing of SQL commands and Jet
	restores the connection. So, you can include a timer in the loop that performs
	SQL UPDATEs to allow Jet to close the connection, and avoid the problems
	associated with hstmt leaks.
	
	As an alternative workaround, use ODBC instead of Jet to access the remote
	tables. For example, use the MFC CDatabase and CRecordset classes or the ODBC
	API.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbODBC kbVC500bug kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
