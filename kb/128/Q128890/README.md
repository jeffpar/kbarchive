---
layout: page
title: "Q128890: How the Import Wizard Determines the Text File Type"
permalink: /kb/128/Q128890/
---

## Q128890: How the Import Wizard Determines the Text File Type

{% raw %}

	Article: Q128890
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Import Wizard assists you in creating a FoxPro table from another type of
	file, such as a text file. This article explains how FoxPro determines the type
	(fixed-length, comma-delimited, or tab-delimited) of text file you are
	importing.
	
	MORE INFORMATION
	================
	
	Determining Records to Analyze
	------------------------------
	
	When you import a text file using the Import Wizard, by default it reads the
	first 50 records in the text file. To begin analysis at a different row, or
	perform analysis on all records, choose the Options button in the "Step 1a -
	Options" screen of the Import Wizard.
	
	NOTE: The analysis of records cannot be manually interrupted.
	
	Determining File Type
	---------------------
	
	The following tests are performed in the order listed to determine the file's
	type:
	
	1. Do all records have the same length? If true, this is a fixed-length file.
	
	2. Do all records have the same number of commas? If true, this is a
	  comma-delimited file.
	
	3. Do all records have the same number of tabs? If true, this is a tab-delimited
	  file.
	
	4. Do all records have the same number of semicolons? If true, this is a
	  semicolon-delimited file.
	
	5. If none of the previous tests are true, the Import Wizard assumes the file to
	  be a fixed-length file, using the length of the longest record in the
	  50-record sample as the record length.
	
	Determining File Structure
	--------------------------
	
	Once the file's type is determined, the following tests are performed to
	determine its structure.
	
	- Fixed-length Files: Each record is analyzed to determine potential column
	  breaks, by tracking the locations in each record where a space is followed by
	  a non-space character. When 75% or more of the records have this transition
	  from a space to non-space character in the same location, that location is
	  assumed to be a column break. This is how the Import Wizard decides where to
	  place the default column breaks displayed in Step 1a.
	
	- Delimited Files: Each field in all records is analyzed to determine the
	  maximum field lengths. All fields are assumed to be character unless a field
	  is wider than the maximum character field width, in which case the field is
	  assumed to be a memo field.
	
	Additional query words: VFoxWin semi-colon 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
