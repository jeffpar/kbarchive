---
layout: page
title: "Q129643: How Transaction Processing Interacts with TableUpdate"
permalink: /kb/129/Q129643/
---

## Q129643: How Transaction Processing Interacts with TableUpdate

	Article: Q129643
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp500 kbvfp500a
	Last Modified: 10-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual FoxPro version 3.0 introduces two new features that at first glance
	appear to provide almost identical functionality - table buffering and
	transaction processing. This article describes the differences and interactions
	between buffering and transactions, and it describes scenarios where each or
	both would be appropriate.
	
	NOTE: Transactions are limited to tables that are part of a database container
	(.DBC file) and cannot be used with a free table.
	
	MORE INFORMATION
	================
	
	Overview of Buffering
	---------------------
	
	Buffering provides protection against user errors during data input, and it
	controls when records are locked. It allows access to the validation rules and
	triggers stored in the database container (.DBC file) for fields within tables.
	
	Although you are working directly with a record instead of with memory variables,
	the data is not written to the table until it has been verified as acceptable.
	
	Buffering can be optimistic (lock records at the time a write is attempted) or
	pessimistic (lock records at the time you begin editing the record). In addition
	to specifying whether you are using optimistic or pessimistic buffering, you
	specify whether you are using row (write edits as soon as you move the record
	pointer) or table buffering (save all edits in a buffer until the programmer
	issues a table update command).
	
	When you implement buffering, your edits are stored in a memory buffer. They are
	applied when you issue a TABLEUPDATE() function, or when you move the record
	pointer if row buffering is being used. If you change your mind and want to
	discard changes, a TABLEREVERT function is used to restore the record to its
	original state.
	
	Buffering can be substituted for both the READ NOLOCK and SCATTER/GATHER
	techniques used in FoxPro versions 2.x.
	
	Overview of Transactions
	------------------------
	
	Transactions are used to wrap sets of related updates that should be made as a
	unit, or not at all. Transactions protect against system failure or problems
	that may occur while you are writing groups of records to a table, such as an
	inability to lock a single record involved in a group update.
	
	When all updates have been written to the table successfully, an END TRANSACTION
	command is used to commit the updates. If one or more updates fail, a ROLLBACK
	command is used to restore the table(s) involved to the original state before
	the transaction.
	
	Because the transaction locks all records involved, as well as the index for the
	tables involved, other users cannot update the table at all while a transaction
	is in progress.
	
	Choosing Between Buffering and Transactions
	-------------------------------------------
	
	Use buffering whenever you want to enforce validation rules or triggers that are
	contained within a .DBC file. Choose buffering as well when you want to avoid
	contentions for locks as users move through a table. You can often use buffering
	without transaction processing.
	
	Use transactions whenever you want to protect groups of related updates and
	ensure that all or none of the updates take place. Transaction processing should
	never be used without buffering.
	
	Using Buffering and Transaction Processing Simultaneously
	---------------------------------------------------------
	
	Typically, a table update will be nested within a transaction as follows:
	
	     BEGIN TRANSACTION
	        llUpdateSuccessful = TABLEUPDATE()
	        IF llUpdateSuccessful
	           END TRANSACTION
	        ELSE
	           ROLLBACK
	        ENDIF
	
	If a transaction has been declared, the TABLEUPDATE function writes its changes
	into the transaction buffer, not the actual table. Disposition of the contents
	of the transaction buffer is then effected by the ROLLBACK or END TRANSACTION
	commands.
	
	Usually, you would not issue a TABLEREVERT() before the ROLLBACK command. The
	cause of the failure to update would be identified (such as failure to obtain a
	lock), and the transaction would be attempted again. If you issued a TABLEREVERT
	function within the transaction, all edits in the buffer would be discarded and
	the user would have to rekey all of the changes before another update attempt
	occurred.
	
	If a system crash occurs while a transaction is active, the data will be "rolled
	back" implicitly. Visual FoxPro does not maintain a physical transaction log,
	hence all the changes are lost in case of a power failure or other crash.
	
	REFERENCES
	==========
	
	For more information on transactions and buffering, refer to the Microsoft
	Visual FoxPro "Developer's Guide" and "Professional Features Guide."
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbvfp300 kbvfp500 kbvfp500a 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : 3.00
	
	=============================================================================
	
