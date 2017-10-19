---
layout: page
title: "Q136339: How to Make a Form that Has a Scroll Bar that Scrolls Records"
permalink: /kb/136/Q136339/
---

## Q136339: How to Make a Form that Has a Scroll Bar that Scrolls Records

	Article: Q136339
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By placing a container in a grid and placing that grid on a form, you can create
	a form that has a scroll bar that scrolls through the records of a table. The
	scroll bar on the grid will be used to scroll the records. Also, by setting
	certain properties of the grid, you can make it appear as though the scroll bar
	belongs to the form instead of the grid. This article describes the process.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	This example uses the Testdata database in the Visual FoxPro Samples\Data
	directory.
	
	1. Type the following command in the Command window to create a container class
	  and modify it in the Visual Class Designer:
	
	     CREATE CLASS cntCustomer AS container OF testdata.vcx
	
	2. In Properties window, set the following properties:
	
	     Height: 250
	     Width: 375
	
	3. Add four text boxes to the container, and set their properties as indicated:
	
	     Text box:
	        Name: txtCustomerID
	        ControlSource: customer.cust_id
	        Height: 25
	        Left: 25
	        Top: 25
	        Width: 60
	
	     Text box:
	        Name: txtCompany
	        ControlSource: customer.company
	        Height: 25
	        Left: 25
	        Top: 60
	        Width: 300
	
	     Text box:
	        Name: txtAddress
	        ControlSource: customer.address
	        Height: 25
	        Left: 25
	        Top: 95
	        Width: 300
	
	     Text box:
	        Name: txtCity
	        ControlSource: customer.city
	        Height: 25
	        Left: 25
	        Top: 130
	        Width: 150
	
	4. On the File menu, click Close, and save the changes.
	
	5. Type the following command in the Command window to open the Testdata
	  database and open a new form in the Form Designer:
	
	     OPEN DATABASE SYS(2004)+'SAMPLES\DATA\TESTDATA'
	     CREATE FORM scrlcust
	
	6. On the View menu, click Data Environment, and then click Add. Select the
	  Customer table, and click OK. Click the Form Designer window to bring it
	  forward again.
	
	7. Click the grid control on the Form Controls toolbar, and then click the form.
	  (If the toolbar is not available, click Form Controls toolbar on the View
	  menu.) Set the following properties for the grid:
	
	     ColumnCount: 1
	     DeleteMark: .F. - False
	     HeaderHeight: 0
	     Height: 250
	     Left: 0
	     RecordMark: .F. - False
	     RecordSource: customer
	     RowHeight: 250
	     ScrollBars: 2 - Vertical
	     Top: 0
	     Width: 375
	
	8. In the Properties window, select Column1 in the Object list. Set the Width
	  property to 355.
	
	9. With the Column1 object still selected in the Properties window, click the
	  View Classes button on the Form Controls toolbar, and then click Add. Open
	  Testdata.vcx created in Step 1. Click the cntcustomer control that now
	  appears on the Form Controls toolbar, and then click the grid on the form.
	
	10. In the Properties window, select Column1, and set the following properties:
	
	      CurrentControl: Cntcustomer1
	      Sparse: .F. - False
	
	11. On the File menu, click Save. Then click Run Form on the Form menu. Now you
	  can use the scroll bar to scroll through the records in the table.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
