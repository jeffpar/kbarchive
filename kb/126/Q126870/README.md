---
layout: page
title: "Q126870: How Transaction Processing Affects Record Locking"
permalink: /kb/126/Q126870/
---

## Q126870: How Transaction Processing Affects Record Locking

{% raw %}

	Article: Q126870
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Record and file locking behavior is slightly different when transaction
	processing is used in Visual FoxPro.
	
	MORE INFORMATION
	================
	
	When you issue a BEGIN TRANSACTION command, the index of the currently open
	table is locked. Only the current user is able to update, add, or delete records
	in the table while the transaction is in progress.
	
	Any command or function that normally places a lock will continue to do so.
	Automatic locks are released automatically when the transaction is completed.
	Either a ROLLBACK or END TRANSACTION command must be used to end the
	transaction. Manual locks - those placed with LOCK(), RLOCK() or FLOCK() - must
	be manually released after the transaction is completed.
	
	This behavior is by design, and is required to ensure the basic functionality of
	transaction processing.
	
	The following coding techniques can be used to minimize contention for record
	locks:
	
	- Open all tables before issuing the BEGIN TRANSACTION command. This prevents
	  the entire table from being locked as soon as it is opened.
	
	- Buffering should be enabled and all edits performed before the transaction
	  starts. The BEGIN TRANSACTION command should be issued immediately before a
	  TABLEUPDATE() or a SQLCOMMIT() function. Optimistic row buffering provides
	  the shortest locking time of all buffering types. However, table buffering
	  must be used if you wish to rollback multiple transactions.
	
	- Avoid the use of commands with a FOR scope within the confines of a
	  transaction, since these commands lock the entire database. If you must use
	  commands such as REPLACE within a transaction, use a SCAN loop to perform
	  individual commands instead.
	
	- Close the transaction as soon as possible after the update has been applied
	  to the table.
	
	REFERENCES
	==========
	
	For more information on buffering and transaction processing, refer to the
	Microsoft Visual FoxPro "Developers Guide," or to the following commands and
	functions in the "Language Reference":
	
	  BEGIN TRANSACTION
	  END TRANSACTION
	  ROLLBACK
	  CURSORSETPROP()
	  TABLEUPDATE()
	  TABLEREVERT()
	  SQLSETPROP()
	  SQLCOMMIT()
	  SQLROLLBACK()
	
	Additional query words: VfoxWin kbvfp300 kbvfp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP600
	Version           : 3.00
	
	=============================================================================
	

{% endraw %}
