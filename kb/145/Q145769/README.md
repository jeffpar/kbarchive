---
layout: page
title: "Q145769: PRB: Capital &quot;S&quot; Not Displayed When Using the Text ISAM"
permalink: kb/145/Q145769/
---

## Q145769: PRB: Capital &quot;S&quot; Not Displayed When Using the Text ISAM

	Article: Q145769
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbDatabase kbIISAM
	Last Modified: 05-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Text files that contain a capital "S" in a column by themselves display as "0".
	The rest of the characters for that column are not displayed.
	
	RESOLUTION
	==========
	
	The preceding file is not in the format Visual Basic expects; comma separated
	text needs to be in the following format:
	
	  "FirstName", "MiddleInitial", "LastName", "age", "address"
	  "Chris","B","Barr",30,"200 main st"
	  "Charles","S","Sterling",27,"100 1st street"
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The text file is not in the format Visual Basic expects it to be in. Visual
	Basic expects to find "" around each and every entry in the text file.
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. Create a text file with following text. Save it as a text file.
	
	     FirstName, MiddleInitial, LastName, age, address
	     Chris ,B ,Barr ,30 , 200 main st
	     Charles ,S, Sterling, 27 ,100 1st street
	
	2. Start Visual Basic. Form1 is created by default.
	
	3. Add a data control to form1.
	
	4. In the properties for the data1 control, choose Text for the connect property
	  and select the text file for the database name.
	
	5. Add a DBGrid control to the form and select Data1 as the datasource.
	
	6. Run the project (press F5). Results:
	
	     Chris       Barr      30  200 main st
	     Charles  0  Sterling  27  100 1st street
	
	  The "B" middle initial (in the first record) is now blank. The "S" middle
	  initial (in the second record) is now a "0".
	
	REFERENCES
	==========
	
	For more information on the Text ISAM and Accessing Data in a Text Document,
	search for the keyword "schema.ini" in the Visual basic Online help.
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          : kbDatabase kbIISAM 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB400Search kbVB400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
