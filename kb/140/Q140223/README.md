---
layout: page
title: "Q140223: PRB: Syntax Error When Convert 2.x Screen That Has a Spinner"
permalink: /kb/140/Q140223/
---

## Q140223: PRB: Syntax Error When Convert 2.x Screen That Has a Spinner

	Article: Q140223
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you convert a screen from a earlier version of FoxPro to Visual FoxPro and
	that screen has a spinner on it, the screen will finish converting and then
	display "Syntax error" if the SET POINT command is set to a comma in Visual
	FoxPro.
	
	When the error is displayed, you might think that the screen did not finish
	converting. However, the screen has indeed finished converting; it just cannot
	be run, even if you set the SET POINT command back to the default of a period.
	
	CAUSE
	=====
	
	When the SET POINT TO command is set to a comma, it places a comma in the
	Increment and Value properties line in the Properties field of the .scx file.
	Visual FoxPro requires a period in that field and changes it to a comma in the
	spinner when the form is run.
	
	RESOLUTION
	==========
	
	Set the SET POINT TO command to a period before converting the form, and then
	set it back to a comma after the conversion takes place.
	
	To correct a converted form that has the problem, you must open the form as a
	table and modify the properties memo field of the spinner. The Increment and
	Value properties will have a comma in the numeric number that is assigned to
	them. Replace the comma with a period and the form can be modified or run.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a screen called Spinner in an earlier version of FoxPro.
	
	2. Add a spinner to the screen, and then close it.
	
	3. Open Visual FoxPro and type the following command in the Command window:
	
	  " SET POINT TO "," " (without the quotation marks)
	
	4. Modify the screen created in the earlier version of FoxPro while in Visual
	  FoxPro. When asked what format to convert the screen, choose Functional. The
	  problem is the same if converting in Functional or Visual format. As the
	  screen is finishing the conversion, the error "Syntax Error" appears. Trying
	  to run or modify the converted form gives the same error.
	
	5. In the Command window, type:
	
	  " USE spinner.scx " (without the quotation marks)
	
	6. Browse the table, and look in each Class memo field record to locate the
	  record that has the word "spinner" in it. After finding that record, open the
	  Properties memo field of that record, and locate the properties Increment and
	  Value. Note that the number beside these properties may have a comma in it.
	  Replace the comma with a period, and close the memo field. After closing the
	  table, you should be able to run or modify the converted form. The SET POINT
	  TO "," command can then be used to show the spinner using commas.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbprb
	
	=============================================================================
	
