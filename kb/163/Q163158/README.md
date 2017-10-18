---
layout: page
title: "Q163158: WD97: Calculate On Exit Doesn't Function for Calculation"
permalink: kb/163/Q163158/
---

## Q163158: WD97: Calculate On Exit Doesn't Function for Calculation

	Article: Q163158
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbfield word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Calculate On Exit option in the Form Field Options dialog box is available
	even when the form field is a calculation field.
	
	CAUSE
	=====
	
	The Calculate On Exit option has no effect when the form field type is set to
	Calculation. Calculation fields never get focus (selected) in a protected form.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	To perform calculations in form fields, click to select the Calculate On Exit
	check box for the fields that contain the values to be calculated not for the
	field that contains the result of the calculation.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q157463 WD97: How to Use Calculate on Exit in a Forms Document
	
	  Q141990 How to Create an Online Form Using Form Fields
	
	  Q115607 How to Update Fields in a Protected Form
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	
