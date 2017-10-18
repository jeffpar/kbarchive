---
layout: page
title: "Q138438: HOWTO: Display Child Records Based on a Parent Record"
permalink: kb/138/Q138438/
---

## Q138438: HOWTO: Display Child Records Based on a Parent Record

	Article: Q138438
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDesigner kbvfp300 kbvfp500 kbvfp600
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can display child records based on the selection of a specific parent record
	by using two forms with both a parameter and a custom property in the child
	form. This article shows you how to do it.
	
	MORE INFORMATION
	================
	
	The following steps create two forms namded Parent and Child and use the
	Customer and Orders tables from the Tastrade database.
	
	Create the Parent Form
	----------------------
	
	1. Open the Tastrade database by typing the following in the Command window:
	
	        OPEN DATA C:\VFP\SAMPLES\MAINSAMP\DATA\TASTRADE
	
	  In Visual FoxPro 6.0, type the following:
	
	        OPEN DATA HOME(2)+"TASTRADE\DATA\TASTRADE"
	
	2. Create a new form called Parent.
	
	3. In the data environment for the Parent form, add the Customer table from
	  Tastrade.
	
	4. Drag the Customer table from the data environment to the form to create a
	  grid.
	
	5. Click the grid. Right-click the grid, and then click Properties.
	
	6. Set the ColumnCount property to 15.
	
	7. Place the following code in the Header1 DblClick event:
	
	        DO FORM child WITH customer.customer_id
	
	8. Close and save the Parent form.
	
	Create the Child Form
	---------------------
	
	1. Create a new form called Child.
	
	2. Add the Orders table to the data environment of the Child form.
	
	3. On the Form menu, click New Property. Type in the new property name of
	  Parent_Key.
	
	4. Drag Order_Id, Customer_Id, Order_Number, and Order_Date fields individually
	  from the data environment to the form to create text boxes for each field.
	
	5. In the Child form's Init event, enter this code:
	
	     PARAMETER PARENT_KEY
	     SELECT ORDERS
	     SET FILTER TO customer.customer_id = orders.customer_id
	     GO TOP
	
	6. Save the Child form.
	
	7. Type the following in the Command window:
	
	     DO FORM PARENT.
	
	When the record pointer in the Customer table moves to a Customer_Id of BLAUS,
	for example, double-click the header for the Customer_Id field (called Header1).
	The Child form brings up information for order #103 dated 10/28/92.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDesigner kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	
