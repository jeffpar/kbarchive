---
layout: page
title: "Q114248: How to Print Specific Number of Records in Detail Band"
permalink: /kb/114/Q114248/
---

## Q114248: How to Print Specific Number of Records in Detail Band

	Article: Q114248
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5x,2.6a; MS-DOS:2.0,2.5x,2.6x; WINDOWS:2.5x,2.6x,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6x 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5x, 2.6x 
	- Microsoft FoxPro for Macintosh, versions 2.5x, 2.6a 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	By using the Report Writer in FoxPro, you can limit the number of records that
	print in the Detail band when the report has a data grouping.
	
	MORE INFORMATION
	================
	
	FoxPro 2.x Example
	------------------
	
	The steps below demonstrate how to print only the first ten records from each
	state in the CUSTOMER database, in a report that is grouped on the STATE field:
	
	1. In the Command window, issue the following commands:
	
	         USE <FoxPro_directory>\tutorial\customer
	         CREATE REPORT
	
	2. From the Report menu, choose Quick Report, and then choose OK.
	
	3. From the Report menu, choose Data Grouping.
	
	4. Choose Add, and then set up the data grouping on STATE.
	
	5. From the Report menu, choose Variables.
	
	6. Choose Add, and then create a variable named Count. Assign it an initial
	  value of 0 and a value to store of 1. Under Calculate, select Count, and set
	  Reset to State.
	
	7. For each field in the Detail band, set up the expression as follows:
	
	  IIF(COUNT<=10,<fieldname>,"")
	
	8. If you are using FoxPro for Windows or FoxPro for Macintosh, choose the Print
	  When check box from within the Report Expression dialog box, and select
	  Remove Line If Blank.
	
	  If you are using FoxPro for MS-DOS, choose Page Layout from the Report menu,
	  choose Options, and then select the Suppress Blank Lines check box.
	
	9. Add or move the STATE field to the body of the state data grouping header.
	
	10. From the Report menu, choose Print Preview to see your example.
	
	Visual FoxPro Example
	---------------------
	
	1. In the Command window, issue the following command:
	
	        USE c:\vfp\samples\data\orders
	
	2. From the Window menu, choose View Window.
	
	3. Select the Orders table and click Properties.
	
	4. From the Index Order list box, choose CUST_ID, then choose OK.
	
	5. In the Command window, type:
	
	  " CREATE REPORT" (without the quotation marks)
	
	6. From the Report menu, choose Quick Report, and then choose OK.
	
	7. From the Report menu, choose Data Grouping.
	
	8. Type "Cust_id" (without the quotation marks) under the Group Expression list
	  box and choose OK.
	
	9. From the Report menu, choose Variables.
	
	10. Create a variable named Count. Assign it an initial value of 0 and a value
	  to store of 1. Under Calculate, select Count, and set Reset to CUST_ID.
	
	11. For each field in the Detail band, set up the expression as follows:
	
	  IIF(COUNT<=10,<fieldname>,"")
	
	12. If you are using FoxPro for Windows, FoxPro for Macintosh or Visual FoxPro
	  3.0, choose the Print When check box from within the Report Expression
	  dialog box, and select Remove Line If Blank.
	
	13. Add or move the CUST_ID field to the body of the state data grouping header.
	
	14. From the Report menu, choose Print Preview to see your example.
	
	Additional query words: VFoxWin FoxMac FoxDos FoxWin 2.50 2.50a 2.50b 2.50c 2.60 set exact precise RWriter
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro260aMac kbFoxPro200DOS kbVFP300
	Version           : MACINTOSH:2.5x,2.6a; MS-DOS:2.0,2.5x,2.6x; WINDOWS:2.5x,2.6x,3.0
	
	=============================================================================
	
