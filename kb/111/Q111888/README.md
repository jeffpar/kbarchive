---
layout: page
title: "Q111888: FIX: Inserts May Fail and Updates May Not Be Seen"
permalink: /kb/111/Q111888/
---

## Q111888: FIX: Inserts May Fail and Updates May Not Be Seen

	Article: Q111888
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-MAR-2000
	
	1.01.1928 1.01.2115
	
	WINDOWS
	
	kbusage kbbug1.01.1928 kbbug1.01.2115 kbfix1.02.1403
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 1.0 
	-------------------------------------------------------------------------------
	
	BUG# ODBCDBASE: 1915 (1.01.1928)
	
	SYMPTOMS
	========
	
	Under certain multi-user situations, applications using the Microsoft ODBC
	Access driver versions 1.01.1928 and 1.01.2115 may encounter the following two
	problems:
	
	1. Read locks are retained longer than necessary. As a result of this, when an
	  application that executes a SELECT statement on a table such that the WHERE
	  clause contains a column with a unique index on it, other applications will
	  not be able to insert, delete, or update that table. Attempts to do so will
	  cause the following error:
	
	  Commit Lock failed due to outstanding read lock
	
	  Locks will not be released until the application that did the SELECT calls
	  SQLDisconnect.
	
	2. Applications may be unable to "see" updates (row insertions, deletions, and
	  updates) made by other applications. This occurs under the following
	  circumstances:
	
	  Application A executes a SELECT statement on a table and fetches all the rows;
	  then, application B updates (insert, delete or update) the same table. Now if
	  A re-executes the same SELECT statement and fetches all the rows, it will see
	  the exact same rows that it saw before; it does not see the updates made by
	  B. For A to be able to see the updates, it needs to call SQLDisconnect on the
	  hdbc on which the original SELECT was performed.
	
	  The ODBC Access driver is based on a sub component of the Access database
	  engine. This Access database engine implements a performance enhancing
	  caching scheme, as rows are retrieved from the database or updated by an
	  application they are cached. In most cases, this permits rows to be
	  re-retrieved without having to re-read from the actual database file,
	  thereby, enhancing performance.
	
	  Locks held on the actual rows of the database from which they were retrieved
	  are not released until the corresponding cached rows are flushed from the
	  cache. Since locked rows are not updated due to reasons of integrity, it
	  follows that updates are not initiated until the cache is flushed. The
	  database engine caching scheme relies on the application that is using the
	  engine to initiate the process of flushing the cache. This permits the
	  application to "time" the flushing of the cache to correspond with the
	  operations the application is performing at the time.
	
	  For example, the Access product initiates the flushing process during user
	  "think time" to maximize the responsiveness of the user interface. In the
	  Access ODBC driver, the driver itself initiates the flushing process, since
	  relying on the application to do this would reduce the interoperability of
	  applications. If the driver relied on the application to initiate this
	  process, it would require applications to write special code to use the
	  Access ODBC driver. This is contrary to the goal of ODBC.
	
	In Access ODBC driver versions 1.01.1928 and 1.01.2115, this flushing process was
	initiated when SQLDisconnect was called by the application. This proved to be
	inadequate for some multi-user scenarios and caused the problems described
	above. A recent "hotfix" version of the driver (version 1.02.1403) initiates the
	flushing process at the following times:
	
	1. SQLFreeStmt with the SQL_DROP option
	
	2. SQLFreeStmt with the SQL_CLOSE option
	
	3. SQLDisconnect
	
	This causes cached rows to be flushed more often. It also means that the database
	file will be read more frequently, with the possibility of some performance
	degradation. However, it solves the problem of locks being held for longer than
	is necessary. It also solves the problem of visibility of updates in many
	multi-user scenarios.
	
	In a few scenarios, it is possible that locking conflicts will still be
	encountered and updates will not be visible across applications, unless it is
	dropped and re-establish the connection. In particular, an application that
	executes a SELECT statement on a table such that the WHERE clause contains a
	column with a unique index on it, will not be able to see updates made to the
	table by other applications, until it drops and re-establishes the connection.
	
	For the hotfix to work properly, the following entries should be inserted in the
	[Red ISAM] section of ODBCISAM.INI file:
	
	  IdleFrequency=1
	  PageTimeout=1
	  LockedPageTimeout=1
	
	This minimizes the chance of encountering the "updates-not-visible" problem. The
	ODBCISAM.INI file is usually located in the \WINDOWS directory.
	
	You will also note that the Access product does not, in general, exhibit this
	same behavior. The reason is the mechanism used to flush cached rows is somewhat
	different in the Access product which includes the complete Access database
	engine, than in the Access ODBC driver which uses a sub component of that
	engine. The complete Access database engine, enables an application to detect
	when it has successfully flushed all rows from the cache. Therefore, to ensure
	concurrency and the visibility of updates, Access flushes the cache until all
	rows have been forced out. The Access ODBC driver, using the sub component of
	the Access engine, can flush rows from the cache, but is unable to tell when all
	rows have been forced out. Therefore, it cannot guarantee that locking conflicts
	and the visibility of updates is resolved for every scenario.
	
	Version 2.0 of the ODBC Driver Pack will be based on the complete Access database
	engine and will exhibit the same capability in this area as the Access product.
	Driver Pack version 2.0 is currently scheduled for release 2H 1994.
	
	It should also be noted that even in the Access product, applications written in
	Access BASIC, can encounter substantially the same lock conflict scenario as
	outlined above. The way that locking conflicts are dealt with in this case, for
	example in Access BASIC applications, is for the application to retry the
	retrieval when such a conflict is encountered. Applications written to the ODBC
	Access driver can employ the same strategy to resolve such conflicts.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Access Driver versions
	1.01.1928 and 1.01.2115. This problem has been fixed in Access driver version
	1.02.1403. For more information, please contact your primary support provider.
	
	Additional query words: 1.01.1928 DDD VISUAL C++ 1.5 Word Excel
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbODBCSearch kbODBC100
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
