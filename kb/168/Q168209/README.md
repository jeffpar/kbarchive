---
layout: page
title: "Q168209: PRB: QueryDef dbFailOnError Doesn't Rollback on Failure"
permalink: /kb/168/Q168209/
---

## Q168209: PRB: QueryDef dbFailOnError Doesn't Rollback on Failure

{% raw %}

	Article: Q168209
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Changes made to the database are not rolled back when an Execute operation
	fails, even when using the dbFailOnError option. The dbFailonError, when used
	with the Execute method, would roll back any updates if an error occurred. With
	the QueryDef.Execute method, this is no longer true.
	
	CAUSE
	=====
	
	Because using the Execute method with dbFailOnError does not do an implicit
	transaction, changes made to a database will not be rolled back when it
	encounters an error.
	
	RESOLUTION
	==========
	
	The fastest way to do a bulk query is without an implicit transaction and by
	explicitly calling BeginTrans/CommitTrans.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	In previous releases of Data Access Objects (DAO), if you executed SQL
	statements they were internally treated as transactions. If you executed a
	statement with the dbFailOnError flag on and the query failed, the operation was
	rolled back. For performance reasons, an SQL statement is no longer treated as a
	transaction. Therefore, if an SQL query fails in Microsoft Access, an incomplete
	operation may occur. If you think an error may occur, you should explicitly use
	the statement within a transaction by using the BeginTrans method and the
	CommitTrans method. However, note that explicit transactions may slow query
	performance.
	
	Additional query words: kbVBp500 kbVBp600 kbdse kbDSupport kbVBp
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
