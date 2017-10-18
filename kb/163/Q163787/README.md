---
layout: page
title: "Q163787: FIX: Form Wizard Doesn't Limit Grid Contents to Related Record"
permalink: kb/163/Q163787/
---

## Q163787: FIX: Form Wizard Doesn't Limit Grid Contents to Related Record

	Article: Q163787
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): kbtool kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbMDAC250kbbuglist
	Last Modified: 22-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the One to Many Form Wizard from a remote view, the grid created by
	the Wizard does not limit the contents to the related records.
	
	RESOLUTION
	==========
	
	To work around the problem, add the following line of code, as indicated, to the
	txtbtns.NavRefresh() method in the Visual FoxPro \WIZARDS\WIZSTYLE.VCX:
	
	        CASE THIS.ViewType = 1        &&local views
	           SET FILTER TO &cFiltExpr
	        CASE THIS.ViewType = 2        &&remote views
	           SET FILTER TO &cFiltExpr   && Add this line to the method
	        ENDCASE
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Issue the following command in the command window:
	
	        MODIFY DATABASE HOME()+'samples\data\testdata'.
	
	2. Create a remote view to the testdata!customer table using the Visual FoxPro
	  ODBC driver.
	
	3. Create a remote view to the testdata!orders table using the Visual FoxPro
	  ODBC driver.
	
	4. Run the One to Many Form Wizard.
	
	5. Add the remote view to customer as the parent and select the Cust_id field.
	
	6. Add the remote view to orders as the child and select all fields.
	
	7. Select Finish and run the form.
	
	Additional query words: kbvfp600fix
	
	======================================================================
	Keywords          : kbtool kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbMDAC250 kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : WINDOWS:2.5,3.0,3.0b,5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
