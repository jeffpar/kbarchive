---
layout: page
title: "Q161146: PRB: _Tally System Variable Reports Incorrect Record Count"
permalink: /kb/161/Q161146/
---

## Q161146: PRB: _Tally System Variable Reports Incorrect Record Count

	Article: Q161146
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp300b kbvfp500 kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using a SEEK command in the FOR clause of the APPEND FROM command, the
	_TALLY system variable does not reflect the additional records added to a table.
	
	CAUSE
	=====
	
	The SEEK command is moving the record pointer in the table while the APPEND FROM
	command is adding records. This prevents the _TALLY from returning the proper
	count.
	
	RESOLUTION
	==========
	
	Place the SEEK command, or any other command that may move the record pointer,
	outside of the APPEND FROM command. Use a FOR...NEXT or an IF...ENDIF loop
	structure to process and limit the records.
	
	MORE INFORMATION
	================
	
	The code example below creates two tables and populates them with one and three
	records, respectively. After creating an index on the second table, the APPEND
	FROM command adds records based on the results of the SEEK command. The SEEK
	command, however, moves the record pointer while records are being added, which
	causes _TALLY to return an incorrect value.
	
	Steps to Reproduce Behavior
	---------------------------
	
	Create a program with the following code and run it:
	
	     CREATE TABLE test1 (fld1 c(10))
	     CREATE TABLE test2 (fld1 c(10))
	     INSERT INTO test2 (fld1) VALUES ('AA')
	     INSERT INTO test1 (fld1) VALUES ('AA')
	     INSERT INTO test1 (fld1) VALUES ('AA')
	     INSERT INTO test1 (fld1) VALUES ('BB')
	     SELECT test2
	     INDEX ON fld1 TAG fld1
	     APPEND FROM test1 FOR NOT SEEK(fld1,'test2')
	     ? _TALLY
	
	_TALLY returns zero (0) instead of 2.
	
	REFERENCES
	==========
	
	For more information about updating master and transaction tables, please see
	the following articles in the Microsoft Knowledge Base:
	
	  Q98355 How to Update a Master File from a Transaction File
	
	
	Additional query words: VFoxWin KBDSD
	
	======================================================================
	Keywords          : kbvfp300 kbvfp300b kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,3.0b,5.0,6.0
	
	=============================================================================
	
