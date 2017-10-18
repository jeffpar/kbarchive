---
layout: page
title: "Q175615: FIX: Upsize Wizard Keeps Structure of Removed Table for Mapping"
permalink: kb/175/Q175615/
---

## Q175615: FIX: Upsize Wizard Keeps Structure of Removed Table for Mapping

	Article: Q175615
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): kbvfp
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, on platform(s):
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SQL Server Upsizing Wizard keeps the table structure of the table selected
	originally in Step 4 - Map Field Data Types even though the selected table was
	removed from the upsizing list by going back to Step 3 - Choose Tables and
	removing the table from the Selected Tables list.
	
	RESOLUTION
	==========
	
	Select the table that is not going to be removed from the Table list in Step 4
	before going back to Step 3 to remove the table.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the SQL Server Upsizing Wizard.
	
	2. Select Testdata.dbc from the HOME()+"samples\data" folder in Step 1.
	
	3. Choose the tables Customer and Orders on Step 3 - Choose Tables.
	
	4. Select Orders in the Table drop-down box in Step 4. The grid will then
	  display the table structure for Orders.
	
	5. Go back to Step 3.
	
	6. Remove table Orders from the Selected tables list.
	
	7. Go forward to Step 4 again.
	
	8. Even though Customer displays as the selected table in the Table drop-down
	  box, it's the structure of Orders that is displayed in the grid.
	
	Additional query words: kbvfp600fix
	
	======================================================================
	Keywords          : kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix kbpending
	
	=============================================================================
	
