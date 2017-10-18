---
layout: page
title: "Q254570: PRB: Transaction Commit Behavior Changes in Oracle ODBC Driver"
permalink: kb/254/Q254570/
---

## Q254570: PRB: Transaction Commit Behavior Changes in Oracle ODBC Driver

	Article: Q254570
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 1.0,Build 2.573.2927,Build 2.573.4403,Build 2.573.6526,Build 2.573.7713.2,Build 2.73.7
	Operating System(s): 
	Keyword(s): kbDatabase kbDriver kbMDAC kbODBC kbOracle kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDACNoS
	Last Modified: 12-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC for Oracle version 2.0 Build 2.73.7269 
	- Microsoft ODBC Driver for Oracle (Build 2.06325), version 1.0 
	- Microsoft ODBC for Oracle version 2.5, versions Build 2.573.2927, Build 2.573.4403, Build 2.573.6526, Build 2.573.7713.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade from Microsoft Oracle Open Database Connectivity (ODBC) driver
	version 1.0 (Build 2.00.6325) to a newer Oracle ODBC driver (for example,
	2.573.2927 or 2.573.4303), the transaction commit and rollback behaviors change,
	and the following error message may occur in the code that was previously
	working:
	
	  Run-time error 3146: ODBC-Call Failed
	
	CAUSE
	=====
	
	This behavior can occur because in Oracle ODBC driver version 1.0 (Build
	2.00.6325), the cursors are preserved in the same position as before the COMMIT
	or ROLLBACK operation.
	
	This behavior is by design.
	
	RESOLUTION
	==========
	
	To resolve this behavior, programs have to take into account that the cursor
	commit behavior is changed. If either a COMMIT or ROLLBACK operation is
	implemented, then the resultset must be recreated. The Oracle ODBC driver does
	not support preserving with a cursor after a COMMIT or ROLLBACK operation.
	
	STATUS
	======
	
	
	MORE INFORMATION
	================
	
	To determine how a cursor is treated after a COMMIT or ROLLBACK operation, use
	the ODBC application programming interface (API) SQLGetInfo with the
	SQL_CURSOR_COMMIT_BEHAVIOR or SQL_CURSOR_ROLLBACK_BEHAVIOR options.
	
	For the Oracle ODBC driver, the result of this call is changed from
	SQL_CB_PRESERVE to SQL_CB_CLOSE. This means that when a COMMIT occurs for a
	transaction, active cursors close if they are a part of the transaction. For
	prepared statements, the application can call SQLExecute on the statement
	without calling SQLPrepare again. When you commit a transaction the cursor is
	closed, but the "access plans" on prepared statements are retained.
	
	Oracle ODBC driver version 1.0 has the following capabilities:
	
	  SQLGetInfo:
	  InfoType = SQL_TXN_CAPABLE=46
	  Out: *InfoValuePtr = SQL_TC_DML = 1
	
	SQL_TC_DML means that transactions can only contain Data Manipulation Language
	(DML) statements (SELECT, INSERT, etc). Data Definition Language (DDL)
	statements encountered in a transaction can cause an error.
	
	  SQLGetInfo:
	  InfoType = SQL_CURSOR_COMMIT_BEHAVIOR=23
	  Out: *InfoValuePtr = SQL_CB_PRESERVE = 2
	
	  SQLGetInfo:
	  InfoType = SQL_CURSOR_ROLLBACK_BEHAVIOR=24
	  Out: *InfoValuePtr = SQL_CB_PRESERVE = 2
	
	SQL_CB_PRESERVE means the Oracle ODBC driver can preserve cursors in the same
	position as before the COMMIT or ROLLBACK operation. The application can
	continue to fetch data or it can close the cursor and re-execute the statement
	without repreparing it.
	
	Oracle ODBC driver version 2.0 and higher drivers return the following:
	
	  SQLGetInfo:
	  InfoType = SQL_TXN_CAPABLE=46,
	  Out: *InfoValuePtr = SQL_TC_DDL_COMMIT = 3
	
	This means that transactions can only contain DML statements. DDL statements (for
	example, Create TABLE) that are encountered in a transaction cause the
	transaction to be committed.
	
	  SQLGetInfo:
	  InfoType = SQL_CURSOR_COMMIT_BEHAVIOR=23
	  Out: *InfoValuePtr = SQL_CB_CLOSE = 1
	
	This means Close cursors on commit. For prepared statements, the application can
	call SQLExecute on the statement without calling SQLPrepare again. So when you
	commit a transaction, the cursor is closed, but the "access plans" on prepared
	statements are retained.
	
	  SQLGetInfo:
	  InfoType = SQL_CURSOR_ROLLBACK_BEHAVIOR=24,
	  Out: *InfoValuePtr = SQL_CB_CLOSE = 1
	
	This means Close cursors on rollback. For prepared statements, the application
	can call SQLExecute on the statement without calling SQLPrepare again. So when
	you rollback a transaction, the cursor is closed, but the "access plans" on
	prepared statements are retained.
	
	
	Additional query words: MSORCL32 DLL
	
	======================================================================
	Keywords          : kbDatabase kbDriver kbMDAC kbODBC kbOracle kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDACNoSweep 
	Technology        : kbAudDeveloper kbZNotKeyword kbODBCSearch kbODBCOracle206325 kbODBCOracle2737269 kbODBCOracle25732927 kbODBCOracle25734403 kbODBCOracle25736526 kbODBCOracle257377132 kbODBCOracle100Search kbODBCOracle200Search kbODBCOracle250Search
	Version           : :1.0,Build 2.573.2927,Build 2.573.4403,Build 2.573.6526,Build 2.573.7713.2,Build 2.73.7269
	Issue type        : kbprb
	
	=============================================================================
	
