---
layout: page
title: "Q137124: HOWTO: Create a PageFrame Parameterized View"
permalink: /kb/137/Q137124/
---

## Q137124: HOWTO: Create a PageFrame Parameterized View

	Article: Q137124
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbnokeyword kbHWMAC kbvfp300 kbvfp500 kbvfp600
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides a complete example showing how to create a PageFrame that
	has Pages and ListBoxes to display the results of a parameterized view from a
	single table. The views created may be modified to suit a specific situation.
	
	MORE INFORMATION
	================
	
	It is assumed that you are familiar with the View Designer.
	
	1. Create the following Views in Vpf\Samples\Mainsamp\Data\Tastrade.dbc database
	  in Visual FoxPro 6.0, the sample path is under _samples+"Testrade\data":
	
	  NOTE: When you create the local view in the View Designer, set the parameter
	  in the SELECT statement to the List Value property, as in the following
	  SELECT statements. For example in the View Designer for List2, place "city"
	  in the Selected Output field, "country" in the Field Name field, and
	  ?ThisForm.PageFrame1.Page1.List1.Value in the Example field.
	
	  View List2:
	
	        SELECT customer.city FROM tastrade!customer ;
	           WHERE customer.country = ?ThisForm.PageFrame1.Page1.List1.Value
	
	  View List3:
	
	        SELECT customer.company_name FROM tastrade!customer ;
	           WHERE customer.city = ?ThisForm.PageFrame1.Page2.List1.Value
	
	  View List4:
	
	        SELECT customer.customer_id FROM tastrade!customer WHERE ;
	           customer.company_name = ?ThisForm.PageFrame1.Page3.List1.Value
	
	2. On a Form, place a PageFrame with 4 Pages and a ListBox on each Page.
	  Establish the following methods and properties for the Form and PageFrame
	  Pages:
	
	  a. In the Init event of the form:
	
	        This.DataEnvironment.OpenTables
	
	        This.PageFrame1.Page2.List1.RowSource='List2'
	        This.PageFrame1.Page2.List1.RowSourceType=2
	
	        This.PageFrame1.Page3.List1.RowSource='List3'
	        This.PageFrame1.Page3.List1.RowSourceType=2
	
	        This.PageFrame1.Page4.List1.RowSource='List4'
	        This.PageFrame1.Page4.List1.RowSourceType=2
	
	  b. On the Property Sheet for Page1.List1:
	
	     Page1.List1.RowSource
	
	           SELECT distinct Country from Customer into Cursor abc
	
	     Page1.List1.RowSourceType
	
	           3 - SQL Statement
	
	  c. In the InterActiveChange event for Page 1.List1:
	
	        *This is for the List on Page 1
	
	        = REQUERY("List2")
	
	        ThisForm.PageFrame1.Page2.List1.RowSource='List2'
	        ThisForm.PageFrame1.Page2.List1.RowSourceType=2
	        ThisForm.PageFrame1.Page2.List1.requery( )
	
	  d. In the Page2.List1.LostFocus event:
	
	     NOTE: The Help file recommends that the following code be placed in the
	     InterActiveChange method but testing has shown that if there is only one
	     selection available beyond Page1, the subsequent Lists are not updated.
	
	        *This is for the ListBox on Page 2
	        = REQUERY("List3")
	
	        ThisForm.PageFrame1.Page3.List1.RowSource='List3'
	        ThisForm.PageFrame1.Page3.List1.RowSourceType=2
	        ThisForm.PageFrame1.Page3.List1.requery( )
	
	  e. In the Page3.List1.LostFocus event:
	
	        *This is for the ListBox on Page 3
	
	        = REQUERY("List4")
	
	        ThisForm.PageFrame1.Page4.List1.RowSource='List4'
	        ThisForm.PageFrame1.Page4.List1.RowSourceType=2
	        ThisForm.PageFrame1.Page4.List1.Requery( )
	
	3. Create a DataEnvironment for the form.
	
	  a. Include the following table and views from the TASTRADE.DBC:
	
	     1. Customer table
	     2. View List2
	     3. View List 3
	     4. View List 4
	
	  b. Set the DataEnvironment.AutoOpenTables property to false (.F.).
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbnokeyword kbHWMAC kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP500 kbVFP600
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
