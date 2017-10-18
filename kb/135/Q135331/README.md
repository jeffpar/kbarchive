---
layout: page
title: "Q135331: PRB: ALTER COLUMN Clause Applies Only to First SET After It"
permalink: kb/135/Q135331/
---

## Q135331: PRB: ALTER COLUMN Clause Applies Only to First SET After It

	Article: Q135331
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
	
	The command below sets the default value for the maxordamt field to 500 and the
	row level validation rule to maxordamt >10. It does not set the field
	validation rule to maxordamt >10 as you would expect:
	
	     ALTER TABLE customer ALTER COLUMN maxordamt SET DEFAULT 500 ;
	        SET CHECK maxordamt >10
	
	CAUSE
	=====
	
	The ALTER TABLE command uses SET CHECK to set field and row level validation.
	Each SET CHECK that applies to a field must be preceded by ALTER COLUMN to
	distinguish it from row level validation.
	
	RESOLUTION
	==========
	
	For each property of a field you wish to SET, issue a separate ALTER COLUMN. A
	separate ALTER COLUMN must also be issued for each DROP.
	
	To set the default and the field level validation for the maxordamt, use this
	command:
	
	     ALTER TABLE customer ALTER COLUMN maxordamt SET DEFAULT 500 ;
	        ALTER COLUMN SET CHECK maxordamt >10
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. To see the difference between the two commands, open and modify the Testdata
	  database in the Samples\Data directory.
	
	2. Issue the first command in the Command window (see the Symptoms section
	  earlier in this article).
	
	3. Using the secondary mouse button, click the Customer table in the Database
	  Designer window, and select Modify.
	
	4. Select the maxordamt field. The default value is 500, but no validation rule
	  has been set.
	
	5. Click the table properties button. The validation rule has been set.
	
	6. Delete both rules and answer Yes to modify structure.
	
	7. Issue the second command in the Command window (see the Resolution section
	  earlier in this article).
	
	8. Using the secondary mouse button, click the customer table in the Database
	  Designer window, and select Modify.
	
	9. Select the maxordamt field. The default value is 500, and the validation rule
	  under field properties now shows maxordamt>0. There should not be a
	  validation rule showing under table properties.
	
	Additional query words: 3.00 VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
