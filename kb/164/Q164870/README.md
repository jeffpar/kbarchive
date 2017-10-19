---
layout: page
title: "Q164870: HOWTO: Apply, Remove a Filter from Form's DataEnvironment"
permalink: /kb/164/Q164870/
---

## Q164870: HOWTO: Apply, Remove a Filter from Form's DataEnvironment

	Article: Q164870
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDesigner kbvfp300 kbvfp500 kbvfp600
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following article demonstrates how to filter records in the DataEnvironment
	of a form and how to remove the filter.
	
	MORE INFORMATION
	================
	
	1. Create a new form and add the Customer.dbf table from the directory
	  <drive>:\VFP\samples\mainsamp\data to the DataEnvironment (from the
	  view menu, select Data Environment. In Visual FoxPro 6.0, Customer.dbf is in
	  the Microsoft Visual Studio\Common\Samples\Data folder.
	
	2. From the DataEnvironment menu, select Add and then select the customer table.
	
	3. Drag the customer_id field, the company_name field, and the country field to
	  the form and add three command buttons to the form.
	
	4. In the click event of the first command button, place the following code:
	
	        ThisForm.DataEnvironment.cursor1.filter = "country = 'Germany'"
	        ThisForm.Refresh
	
	5. In the click event of the second button place the following code:
	
	        ThisForm.DataEnvironment.cursor1.filter = ".T."
	        ThisForm.Refresh  && Note: Record position is lost with this code.
	
	  - or -
	
	        STORE ThisForm.DataEnvironment.cursor1.alias to xVar
	        SELECT &xVar
	        SET FILTER to
	        ThisForm.Refresh  && Note: record position is not lost.
	
	6. In the click event of the third button place the following code:
	
	        SKIP
	        IF EOF()
	           GO BOTTOM
	        ENDIF
	        Thisform.Refresh
	
	7. Save the form and run it. Click the button Command1 to apply the filter, and
	  then click the button Command2 to remove the filter.
	
	REFERENCES
	==========
	
	See the Visual Foxpro Help for reference to the Filter property and the SET
	FILTER TO command.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDesigner kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Issue type        : kbhowto
	
	=============================================================================
	
