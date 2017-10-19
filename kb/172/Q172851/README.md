---
layout: page
title: "Q172851: BUG: REPORT FORM TO FILE ASCII Adds Extra CR/LF in Detail Band"
permalink: /kb/172/Q172851/
---

## Q172851: BUG: REPORT FORM TO FILE ASCII Adds Extra CR/LF in Detail Band

	Article: Q172851
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp
	Last Modified: 20-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you direct report output to an ASCII text file using the command REPORT
	FORM <report> TO FILE <filename> ASCII, additional carriage return
	and line feed characters are inserted into the detail band of the output text
	file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Use a table.
	
	2. Create a new report form called Test.
	
	3. From the Report Designer Menu select Report.
	
	4. Select Quick Report.
	
	5. Select either vertical or horizontal layout.
	
	6. Save the report.
	
	7. From the command line, type:
	
	        REPORT FORM test PREVIEW
	
	8. Observe the placement of the data elements within the detail band.
	
	9. From the command line, type:
	
	        REPORT FORM test TO FILE test ASCII
	
	10. From the command window, type:
	
	        MODIFY FILE test.txt
	
	11. Observe the placement of the data elements within the detail band.
	
	WORKAROUND
	==========
	
	In the Visual FoxPro Command window issue the following command:
	
	     _ASCIIROWS=30
	
	Then print the report to the file using the ASCII clause and it does not place
	the extra CR+LF into the text file output.
	
	NOTE: The default for _ASCIIROWS = 63.
	
	Additional query words: kbvfp500 kbvfp500a kbvfp600 kbvfp500bug kbvfp500abug kbvfp600bug
	
	======================================================================
	Keywords          : kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
