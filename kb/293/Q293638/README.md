---
layout: page
title: "Q293638: BUG: Header Corruption Causes END TRANSACTION to Discard Appends"
permalink: /kb/293/Q293638/
---

## Q293638: BUG: Header Corruption Causes END TRANSACTION to Discard Appends

{% raw %}

	Article: Q293638
	Product(s): Microsoft FoxPro
	Version(s): 5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport
	Last Modified: 22-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An off-by-one record count in the header of a table may cause the END
	TRANSACTION command to discard appended records with no error message displayed.
	
	RESOLUTION
	==========
	
	If your tables are subject to this type of corruption, use a test as shown below
	to compare the physical file size to the logical file size. Run this test when
	you open the table.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Copy the following code into a .prg file and then run it:
	
	  LOCAL nRecCount, nLogicalSize, nPhysicalSize, nHandler, i
	
	  CREATE DATABASE test_db
	  CREATE TABLE test_tbl (one_field N(1,0))
	  FOR i = 1 TO 5
	  	INSERT INTO test_tbl (one_field) VALUES (i)
	  ENDfor
	
	  * Check size before corruption.
	  SELECT test_tbl
	  nRecCount = RECCOUNT()
	  nLogicalSize = HEADER() + (nRecCount * RECSIZE()) + 1
	  USE IN test_tbl
	
	  nHandler = FOPEN('test_tbl.dbf', 2)
	  nPhysicalSize = FSEEK(nHandler, 0, 2)
	  FCLOSE(nHandler)
	
	  ? 'BEFORE CORRUPTION'
	  ? 'Record count: ', nRecCount
	  ? 'Logical size: ', nLogicalSize
	  ? 'Physical size:', nPhysicalSize
	
	  * Manually decrease the record count in the table header.
	  * Normally it would happen accidentally after some power 
	  * or network failures.
	
	  ?
	  ? 'Simulating table corruption...'
	  nHandler = FOPEN('test_tbl.dbf', 2)
	  FSEEK(nHandler, 4)
	  FWRITE(nHandler, CHR(4))
	  FCLOSE(nHandler)
	
	  * Check size after corruption
	  USE test_tbl
	  nRecCount = RECCOUNT()
	  nLogicalSize = HEADER() + (nRecCount * RECSIZE()) + 1
	  USE IN test_tbl
	
	  nHandler = FOPEN('test_tbl.dbf', 2)
	  nPhysicalSize = FSEEK(nHandler, 0, 2)
	  FCLOSE(nHandler)
	
	  ?
	  ? 'AFTER CORRUPTION'
	  ? 'Record count: ', nRecCount
	  ? 'Logical size: ', nLogicalSize
	  ? 'Physical size:', nPhysicalSize
	
	  * I will try inserting a record within a transaction.
	
	  ?
	  ? 'Inserting new record...'
	
	  USE test_tbl
	  BEGIN TRANSACTION
	  INSERT INTO test_tbl VALUES (6)
	  END TRANSACTION
	  ? 'No error:', ERROR()
	
	  * Check size after insert
	  nRecCount = RECCOUNT()
	  nLogicalSize = HEADER() + (nRecCount * RECSIZE()) + 1
	
	  USE IN test_tbl
	
	  nHandler = FOPEN('test_tbl.dbf', 2)
	  nPhysicalSize = FSEEK(nHandler, 0, 2)
	  FCLOSE(nHandler)
	
	  ?
	  ? 'AFTER INSERTION'
	  ? 'Record count: ', nRecCount
	  ? 'Logical size: ', nLogicalSize
	  ? 'Physical size:', nPhysicalSize
	
	  ? 'VFP discarded insert operation.'
	  CLOSE DATA ALL
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : :5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
