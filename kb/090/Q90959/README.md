---
layout: page
title: "Q90959: INFO: Using INDEX ON &lt;Tag&gt; UNIQUE to Create Unique Index"
permalink: kb/090/Q90959/
---

## Q90959: INFO: Using INDEX ON &lt;Tag&gt; UNIQUE to Create Unique Index

	Article: Q90959
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:1.0,1.01,1.02,2.0,2.1,2.5,2.5a; WINDOWS:2.5,2.5a,5.0,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	- Microsoft FoxPro for MS-DOS, versions 1.0, 1.01, 1.02, 2.0, 2.5, 2.5a 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	- Microsoft FoxBASE+ for MS-DOS, version 2.1 
	-------------------------------------------------------------------------------
	
	The "INDEX ON <field> TO <idx_file> | TAG <tagname> UNIQUE" command
	creates an index in which only one record appears for each key value
	in the database.
	
	The UNIQUE qualifier specifies that only the first record with a
	particular index key is included in an IDX or CDX index tag. You can
	use a UNIQUE index to prevent access or display of duplicate records
	because all subsequent records with the same index keys are excluded
	from the index file.
	
	Using the UNIQUE qualifier in the INDEX command has the same effect as
	issuing the SET UNIQUE ON command before issuing the INDEX or REINDEX
	command. If a key is deleted, it is removed from the index, even if
	the file contains other occurrences of the deleted key.
	
	SUMMARY
	=======
	
	
	
	Additional query words: VFoxWin FoxDos FoxWin 1.00 fox base tag
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250 kbFoxPro250a kbFoxBASE210DOS kbFoxBASESearch kbVFP500 kbVFP600
	Version           : MS-DOS:1.0,1.01,1.02,2.0,2.1,2.5,2.5a; WINDOWS:2.5,2.5a,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
