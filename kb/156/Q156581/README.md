---
layout: page
title: "Q156581: PRB: INSERT Can Freeze VFP if Table's Index File Corrupted"
permalink: /kb/156/Q156581/
---

## Q156581: PRB: INSERT Can Freeze VFP if Table's Index File Corrupted

	Article: Q156581
	Product(s): Microsoft FoxPro
	Version(s): 5.00
	Operating System(s): 
	Keyword(s): kbvfp500 kbvfp600
	Last Modified: 14-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the INSERT command is executed on a Table that has a corrupted Index file,
	Visual FoxPro can freeze with the following error:
	
	  "This program has caused an illegal operation and will be shutdown"
	
	RESOLUTION
	==========
	
	To fix this problem, do one of the following:
	
	- Issue the REINDEX command to attempt to repair the index file.
	
	- Copy the structure and contents of the table in question to another table as
	  follows:
	
	     USE TstTable
	     COPY STRUCTURE TO mytst WITH PRODUCTION
	     USE mytst IN 0
	     SELECT mytst
	     APPEND FROM TstTable
	
	You should now be able to use the INSERT command with the new table.
	
	STATUS
	======
	
	This behavior is by design. There is no way to predict product behavior when
	data or index corruption has occurred.
	
	MORE INFORMATION
	================
	
	If you issue an INSERT command similar to the following:
	
	     INSERT INTO TstTable (TstField) VALUES ("aaaaa")
	
	and the index file of TstTable is somehow corrupted, Visual FoxPro will produce
	the following error and will freeze:
	
	  "This program has caused an illegal operation and will be shutdown"
	
	You will be able to exit Visual FoxPro by clicking Close in the error dialog.
	
	Additional query words: kbdse VFoxWin TABLE CORRUPT INDEX
	
	======================================================================
	Keywords          : kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : 5.00
	
	=============================================================================
	
