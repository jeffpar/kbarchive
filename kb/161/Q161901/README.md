---
layout: page
title: "Q161901: BUG: Table Wizard Cannot Overwrite Text File"
permalink: /kb/161/Q161901/
---

## Q161901: BUG: Table Wizard Cannot Overwrite Text File

{% raw %}

	Article: Q161901
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbtool kbHWMAC kbvfp kbvfp300bBUG kbvfp500aBUGkbbuglist
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a file that is not a table exists with the same name and extension as the
	table you want to save, the Table Wizard does not overwrite the old file with
	the new table. Several error messages appear in succession and the new table is
	not saved. The following errors appear after typing the table's name and
	clicking Save:
	
	  Error #15 in checkfilename(0): Not a table.
	
	followed by:
	
	  Error #13 in checkfilename(0): Alias '_CHECKNAME' is not found.
	
	followed by:
	
	  Error #1924 in processoutput(0): OWIZARD is not an object.
	
	After the error messages disappear, the Table Wizard shuts down.
	
	If the original file is a table and not a text file, the Table Wizard overwrites
	it properly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Type the following command into the Command window:
	
	  " SET DEFAULT TO HOME() " (without the quotation marks)
	
	2. Create a text file named Test.dbf and save it.
	
	3. Start the Table Wizard.
	
	4. Select any table, choose all the fields, and click Finish.
	
	5. When prompted, save the table as Test.dbf.
	
	Additional query words: kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600
	
	======================================================================
	Keywords          : kbtool kbHWMAC kbvfp kbvfp300bBUG kbvfp500aBUG kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
