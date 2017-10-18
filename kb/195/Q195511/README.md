---
layout: page
title: "Q195511: FIX: Append Type SDF into Local View Does Not Update Base Table"
permalink: kb/195/Q195511/
---

## Q195511: FIX: Append Type SDF into Local View Does Not Update Base Table

	Article: Q195511
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbvfp300bBUG kbvfp500aBUG kbvfp600fix
	Last Modified: 17-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the APPEND FROM command to append a TYPE System Data Format (SDF)
	format file that contains numeric value into a local view, the numeric value
	shows in the local view but does not get updated into the base table.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Using the following step to create a table, named mytable:
	
	        CREATE TABLE mytable (name1 c(10), num n(5))
	        INSERT INTO mytable VALUES ("test1",1)
	        INSERT INTO mytable VALUES ("test2",2)
	        INSERT INTO mytable VALUES ("test3",3)
	        INSERT INTO mytable VALUES ("test4",4)
	
	2. Once you create the preceding table, use the following command to create a
	  type SDF file:
	
	        COPY TO mysdf.txt TYPE SDF
	
	3. Next, create a database, named data1.
	
	4. Add mytable to the data1 database.
	
	5. Create a local view based on mytable.
	
	6. In the View Designer, click the Fields tab, and then add all the Available
	  fields to the Selected fields column.
	
	7. Click the Update Criteria tab, and select the key column next to the name1
	  field and select the pencil column next to both the name1 and num fields.
	  Make sure you also select the 'Send SQL updates' check box.
	
	8. Save the local view as view2.
	
	9. In the Command window, while the database designer is still open, type the
	  following commands:
	
	        USE view2
	        APPEND FROM mysdf.txt TYPE SDF
	        BROWSE
	
	  At this point, five records from the mysdf.txt have been appended to view2.
	
	10. Now, in the Command window, type in the following commands:
	
	        SELECT mytable
	        BROWSE
	
	NOTE: The character data for the last five records has been appended to the base
	table, but the numeric data is missing from the base table.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbvfp300bBUG kbvfp500aBUG kbvfp600fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
