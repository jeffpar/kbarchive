---
layout: page
title: "Q172849: PRB: TRANSFORM() Does not Format a Calculated Field Properly"
permalink: /kb/172/Q172849/
---

## Q172849: PRB: TRANSFORM() Does not Format a Calculated Field Properly

	Article: Q172849
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.6a,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300 kbvfp500 kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft FoxPro for Windows, version 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The TRANSFORM() function does not properly format a calculated field in the
	report writer. However, this function properly formats a non-calculated field in
	a report. In FoxPro 2.6 for Windows, the calculated field appears, but the
	format is incorrect. In Visual FoxPro for Windows versions 3.x and 5.x, the
	calculated field appears as asterisks.
	
	CAUSE
	=====
	
	The TRANSFORM() function returns a character value. Because numeric functions
	are applied to a calculated field, changing the field to a character value
	causes erroneous results.
	
	RESOLUTION
	==========
	
	In FoxPro 2.6 for Windows, create a report variable to perform the desired
	calculations and then format the report variable.
	
	In Visual FoxPro for Windows versions 3.x and 5.x, just Sum the field and check
	the Currency check box in the Format dialog of the field (it appears under the
	Numeric category.) In the Format text box in the Report Expression dialog of the
	calculated field, use the following to format the output:
	
	  999,999.99
	
	Of course, a report variable could also be used in Visual FoxPro.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Perform the following steps in FoxPro 2.6 for Windows:
	
	1. Open the Detail table located in the \tutorial directory.
	
	2. Set the order to the Ino tag.
	
	3. Create a new report and add the Price field to the Detail line.
	
	4. Add a Data Grouping to the report based on the Ino field.
	
	5. Add the Ino field to the Group Header and add a second field referencing
	  Price in the Group Footer band.
	
	6. In the Price field in the Group Footer, click the Calculate check box, choose
	  Sum and Reset on Detail.ino.
	
	7. In the Price field in the Detail and Group Footer bands, add the following
	  code to the Expression box:
	
	        TRANSFORM(Price,"$$$$,$$$.99")
	
	8. Add a Report Variable to the report, xtotal, and set the Value to Store to
	  Detail.price, Reset to Detail.ino, and Calculate to Sum.
	
	9. Add a new field to the Group Footer and use the Report Variable, xtotal, as
	  the expression. Format as Currency if desired.
	
	10. Preview the report and notice that the calculated field is not preceded with
	  a dollar sign and it carries the number out to five decimal places. However,
	  the report variable field has the correct format.
	
	Perform the following steps in Visual FoxPro versions 3.0b, 5.0x or 6.0:
	
	1. Open the Orders table located in the \Samples\Data folder.
	
	2. Create a report and add the orders table to the data environment.
	
	3. Set the order of the table to the Cust_id field using the Order property of
	  the cursor in the data environment.
	
	4. Add a data grouping to the report based on the Cust_id field.
	
	5. Place the Cust_id field in the Group Header band and place the order_amt
	  field in the Detail band. Double-click the field to bring up the Report
	  Expression dialog box and in the Expression box, add the following code:
	
	        TRANSFORM(order_amt,"$$$,$$$,$$$.99")
	
	  Click OK to close the Report Expression dialog box.
	
	6. Copy this field into the Group Footer band. Double-click the field, choose
	  the Calculations button, and select the button for Sum. Click OK to close the
	  Report Expression dialog box.
	
	7. Preview the report. Note the non-calculated fields appear formatted
	  correctly. However, the calculated fields appear as a row of asterisks.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q102704 FIX: Can't Give Numeric the Currency Format in Report Writer
	
	Additional query words: FoxWin VFoxwin
	
	======================================================================
	Keywords          : kbvfp kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260a kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:2.6a,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
