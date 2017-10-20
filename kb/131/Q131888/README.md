---
layout: page
title: "Q131888: PRB: Transaction Affects When Rules or Triggers Fire"
permalink: /kb/131/Q131888/
---

## Q131888: PRB: Transaction Affects When Rules or Triggers Fire

{% raw %}

	Article: Q131888
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Rules and triggers defined for a table may not fire at the expected time if a
	combination of buffering and transaction processing is used.
	
	CAUSE
	=====
	
	This is by design. Rules and triggers fire when an attempt is made to write the
	data in the buffer to the disk file.
	
	RESOLUTION
	==========
	
	Please see the sample code listed in this article.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Before running the following samples, open the Tastrade database located in the
	\Vfp\samples\mainsamp\data directory, and set the default to this directory.
	
	All of the samples use the Customer table from Tastrade, which has a validation
	rule on the cust_id field. If preferred, you can use the Orders table instead;
	it has a record validation rule.
	
	Before running any sample, issue a SET MULTILOCKS ON command in the Command
	window. Each sample begins with a TABLEREVERT() command to eliminate any records
	left in the data buffer from previous examples. This may cause an error if
	buffering was not in effect before running the example.
	
	The error displayed when a field fails a validation rule is 1582.
	
	Code Sample One
	---------------
	
	The validation rule on cust_id never fires when you run this code:
	
	     =TABLEREVERT()
	     USE customer
	     =CURSORSETPROP("Buffering",3)
	     APPEND BLANK
	     BEGIN TRANSACTION
	     ROLLBACK
	     =TABLEREVERT()
	
	The rule never fires because the ROLLBACK and TABLEREVERT commands clear the
	buffer. Because the blank record is never written to the disk file, the
	validation rule on cust_id never fires.
	
	Code Sample Two
	---------------
	
	The validation rule fires on the second APPEND BLANK command when you run this
	code:
	
	     =TABLEREVERT()
	     USE customer
	     =CURSORSETPROP("Buffering",3)
	     APPEND BLANK
	     BEGIN TRANSACTION
	     ROLLBACK
	     APPEND BLANK
	
	This behavior occurs because, even though the ROLLBACK command discarded the
	current transaction in progress, the record still existed in the buffer.
	Optimistic row buffering is enabled, and Visual FoxPro automatically attempts to
	write the first appended record to the table when the record pointer is moved by
	the second APPEND BLANK command. To prevent this behavior, a TABLEREVERT()
	should be issued immediately before or after a ROLLBACK command.
	
	Code Sample Three
	-----------------
	
	The validation rule fires once, when the END TRANSACTION command is issued, when
	you run this code:
	
	     =TABLEREVERT()
	     USE customer
	     =CURSORSETPROP("Buffering",3)
	     APPEND BLANK
	     BEGIN TRANSACTION
	     END TRANSACTION
	
	The transaction doesn't commit to the table, and the record still exists in the
	buffer. To prevent this behavior, test for successful execution of a TABLEUPDATE
	command prior to issuing the END TRANSACTION command.
	
	Code Sample Four
	----------------
	
	The validation rule fires twice when you run this code:
	
	     =TABLEREVERT()
	     USE customer
	     =CURSORSETPROP("Buffering",3)
	     APPEND BLANK
	     BEGIN TRANSACTION
	     =TABLEUPDATE()
	     END TRANSACTION
	
	An error is received only after the END TRANSACTION command is issued. The
	validation rule fires once for the TABLEUPDATE command. The TABLEUPDATE command
	fails, but there is no visible indication that the field failed the validation
	rule. The return value from the TABLEUPDATE command was not trapped, and the END
	TRANSACTION command attempts to write invalid data to the table.
	
	The END TRANSACTION command fires the validation rule a second time, which
	results in the error 1582.
	
	Code Sample Five
	----------------
	
	The field validation rule causes the TABLEUPDATE command to fail when you run
	this code:
	
	     =TABLEREVERT()
	     USE customer
	     =CURSORSETPROP("Buffering",3)
	     APPEND BLANK
	     BEGIN TRANSACTION
	     llDidUpdate = TABLEUPDATE()
	     IF llDidUpdate
	        END TRANSACTION
	     ELSE
	        lnRecordsDiscarded=TABLEREVERT()
	        WAIT WINDOW STR(lnRecordsDiscarded) + " Records Discarded"
	        ROLLBACK
	     ENDIF
	
	The memory variable (llDidUpdate) contains false (.F.), which indicates that the
	TABLEUPDATE command failed. The validation error never appears on the screen,
	and a message indicating that one record was discarded appears.
	
	This approach demonstrates the recommended approach to combining buffering and
	transaction processing. The return value from the TABLEUPDATE command should be
	tested, and the END TRANSACTION command issued only if the TABLEUPDATE command
	was successful.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
