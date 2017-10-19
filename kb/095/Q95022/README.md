---
layout: page
title: "Q95022: INF: ODBC Transaction Isolation Levels"
permalink: /kb/095/Q95022/
---

## Q95022: INF: ODBC Transaction Isolation Levels

	Article: Q95022
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	ODBC provides five levels of transaction isolation. This article discusses the
	concept of transaction isolation levels and the relation between ODBC and ANSI
	SQL2 isolation levels.
	
	MORE INFORMATION
	================
	
	Transaction isolation level refers to the degree to which multiple interleaved
	transactions are prevented from interfering with each other in a multiuser
	database system. Ideally, one would like to have "serializable" transactions -
	that is, the interleaved execution of any set of concurrent transactions will
	produce the same effect as some (unspecified) serial execution of those same
	transactions. The ANSI SQL 2 standard defines three specific ways in which the
	serializability of a transaction may be violated (with the implication that
	these are the only permitted violations):
	
	1. Dirty Read: Transaction T1 modifies a row. T2 then reads the row. Now T1
	  performs a rollback - so, T2 has seen a row that never really existed.
	
	2. Non-repeatable Read: T1 retrieves a row; then T2 updates that row and T1
	  retrieves the "same" row again. T1 has now effectively retrieved the "same"
	  row twice and has seen two different values for it.
	
	3. Phantoms: T1 reads a set of rows that satisfy certain search conditions. T2
	  then insert one or more rows that satisfy the same search condition. If T1
	  repeats the read, it will see rows that did not exist previously -
	  "phantoms".
	
	These three phenomena are referred to as P1, P2 and P3, respectively. The various
	isolation levels are defined by SQL2 in terms of which of these three violations
	of serializability they permit. They are:
	
	1. READ_UNCOMMITTED - Permits P1, P2 and P3.
	
	2. READ_COMMITTED - Permits P2 and P3. Does not permit P1.
	
	3. REPEATABLE_READ - Permits P3. Does not permit P1 and P2.
	
	4. SERIALIZABLE - Does not permit any of P1, P2 and P3.
	
	ODBC defines five isolation levels: SQL_TXN_READ_UNCOMMITTED,
	SQL_TXN_READ_COMMITTED, SQL_TXN_REPEATABLE_READ, SQL_TXN_SERIALIZABLE, and
	SQL_TXN_VERSIONING. The first four correspond to ANSI isolation levels 1-4
	respectively. SQL_TXN_VERSIONING provides SERIALIZABLE transactions, but does so
	without a significant impact on concurrency.
	
	Transaction isolation is achieved by locking protocols. The various tables are or
	parts thereof are locked so that two writers cannot access it at the same time,
	or preventing reader access when writing is being done, and so on. One of the
	side effects of this is to drastically reduce concurrency. Typically, isolation
	levels 3 and 4 are achieved by locking protocols which drastically reduce
	concurrency. SQL_TXN_VERSIONING refers a non-locking way of achieving levels 3
	and 4, thereby increasing concurrency. An example of this is Oracle's Read
	Consistency isolation level.
	
	It is typical of many database systems to provide a lower level of isolation by
	default and provide explicit concurrency control facilities to achieve
	serializable transactions. For example, Sybase/Microsoft SQL Server provides
	Level 2 locking (READ_COMMITTED) by default. But using the HOLDLOCK keyword
	within a transaction will guarantee serializability. Similarly, IBM's DB/2
	provides two isolation levels called CS (Cursor Stability) which corresponds to
	READ_COMMITTED and RR (repeatable read) which corresponds to SERIALIZABLE.
	However, it provides a LOCK TABLE statement which allows users operating at CS
	level to achieve serializability of they wanted to.
	
	Because of these differences in implementations, an interoperable ODBC
	application must use SQLSetConnectOption to set the transaction isolation level,
	instead of using the various implementation defined locking levels.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbODBCSearch kbODBC100
	Version           : WINDOWS:1.0
	Issue type        : kbhowto
	
	=============================================================================
	
