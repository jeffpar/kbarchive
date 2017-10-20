---
layout: page
title: "Q161185: FIX: Report Calling Custom Method Returns Incorrect Info"
permalink: /kb/161/Q161185/
---

## Q161185: FIX: Report Calling Custom Method Returns Incorrect Info

{% raw %}

	Article: Q161185
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbprogramming kbvfp kbvfp500aFIX kbvfp500bugkbbuglist kbfixlist
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A report that calls a function defined in a custom class prints the information
	incorrectly. However, in preview mode, values from the custom class appear
	correctly.
	
	RESOLUTION
	==========
	
	Place the Date() function directly in the Expression box of the text box or use
	a user-defined function (UDF) to return the desired value.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro
	5.0a.
	
	MORE INFORMATION
	================
	
	The example below defines a custom class that returns a character string and the
	system date. If the report is previewed, the date appears correctly. Printing
	the report, however, causes the date value to appear as a logical value (.T.).
	The behavior does not occur in Visual FoxPro 3.0b.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a report called Ztest.frx. Place the Customer table from the Testdata
	  database, located in the \Vfp5\Samples\Data\ folder, in the DataEnvironment.
	
	2. Place two text boxes in the report. In the Expression box of the first text
	  box, type "oTest.cUser" (without the quotation marks). In the Expression box
	  of the second text box, type "oTest.dToday()" (without the quotation marks).
	  Close and save the report.
	
	3. Create a program containing the following code:
	
	     oTest = CREATEOBJECT("Test")
	     ? oTest.cUser
	     ? oTest.dToday()
	     * REPORT FORM ztest RECORD 3 TO PRINTER
	     REPORT FORM ztest PREVIEW
	
	     DEFINE CLASS test AS CUSTOM
	        cUser = "Testing"
	        FUNCTION dToday
	        RETURN DATE()
	        ENDFUNCTION
	     ENDDEFINE
	
	4. Run the program and note that the date appears correctly. Close the Preview
	  window.
	
	5. Open the program and remove the asterisk (*) from the first REPORT FORM
	  command, and place and asterisk in front of the second REPORT FORM command.
	  The asterisk character comments out individual lines of code.
	
	6. Run the program and note that the printed report displays ".T." where the
	  date should be.
	
	NOTE: Printing the report from the Preview Toolbar in Step 4 also illustrates the
	problem.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbvfp kbvfp500aFIX kbvfp500bug kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
