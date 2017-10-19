---
layout: page
title: "Q129647: Using ROLLBACK and END TRANSACTION in Nested Transactions"
permalink: /kb/129/Q129647/
---

## Q129647: Using ROLLBACK and END TRANSACTION in Nested Transactions

	Article: Q129647
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual FoxPro allows transactions to be nested up to five levels deep. This
	article explains the results of using ROLLBACK and END TRANSACTION within nested
	transactions.
	
	MORE INFORMATION
	================
	
	When you issue a BEGIN TRANSACTION command, the transaction level is incremented
	by one.
	
	When you issue an END TRANSACTION, changes to the same record are written
	starting at the first transaction level and ending with the fifth or last
	transaction level.
	
	When you issue a ROLLBACK, changes to the same record are discarded beginning
	with the highest (fifth or last) transaction level and ending with the first
	transaction level.
	
	Code Sample One
	---------------
	
	To test the behavior of nested transactions, follow these steps:
	
	1. Create a new database named NESTED that holds one table named TEST. Add one
	  Character field named cLevel to the table.
	
	2. Create and run a new program containing the following code:
	
	     OPEN DATABASE nested
	     USE test
	     APPEND BLANK
	     BEGIN TRANSACTION
	        REPLACE cLevel WITH "One"
	        =tranlevel("Begin transaction")
	        BEGIN TRANSACTION
	           REPLACE cLevel WITH "Two"
	           =tranlevel("Begin transaction")
	           BEGIN TRANSACTION
	              REPLACE cLevel WITH "Three"
	              =tranlevel("Begin transaction")
	           END TRANSACTION
	           =tranlevel("End transaction")
	        END TRANSACTION
	        =tranlevel("End transaction")
	     END TRANSACTION
	     =tranlevel("End transaction")
	
	     PROCEDURE tranlevel
	     PARAMETER lcAction
	
	     =MESSAGEBOX("Transaction level:  " + STR(TXNLEVEL()) + ;
	                 CHR(13) + ;
	                 "Action performed:   " + lcAction + ;
	                 CHR(13) + ;
	                 "cLevel value:      " + cLevel)
	
	     *** End of code example
	
	When you run the program, you should see the level name change from "One" to
	"Two" to "Three" as the transaction level increases. As each transaction nesting
	level is committed with the END TRANSACTION command, you should see the
	transaction level decrease, but the value contained in the field cLevel name
	should remain constant at "Three."
	
	Code Sample Two
	---------------
	
	Modify the program so that it reads as follows (the inner two END TRANSACTION
	commands have been changed to ROLLBACK commands). Rerun the program, and notice
	that the results are much different.
	
	     OPEN DATABASE nested
	     USE test
	     APPEND BLANK
	     BEGIN TRANSACTION
	        REPLACE cLevel WITH "One"
	        =tranlevel("Begin transaction")
	        BEGIN TRANSACTION
	           REPLACE cLevel WITH "Two"
	           =tranlevel("Begin transaction")
	           BEGIN TRANSACTION
	              REPLACE cLevel WITH "Three"
	              =tranlevel("Begin transaction")
	           ROLLBACK
	           =tranlevel("Rollback")
	        ROLLBACK
	        =tranlevel("Rollback")
	     END TRANSACTION
	     =tranlevel("End transaction")
	
	     * PROCEDURE tranlevel DOES NOT CHANGE
	     *** END OF CODE EXAMPLE
	
	The final value of the field cLevel should be "One."
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	
	=============================================================================
	
