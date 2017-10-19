---
layout: page
title: "Q188403: HOWTO: Modify Report Fields Programmatically"
permalink: /kb/188/Q188403/
---

## Q188403: HOWTO: Modify Report Fields Programmatically

	Article: Q188403
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It may be desirable to change report fields programmatically to differentiate
	values or to otherwise modify the format depending on a condition. This article
	demonstrates how to change the font color of a report field based upon the sales
	totals of an individual salesperson.
	
	MORE INFORMATION
	================
	
	The following creates a table, populates the table and runs a sales report,
	changing the font color to reflect sales totals. To change the color of a report
	field, the PenRed, PenGreen, and PenBlue fields of the report field's record are
	modified. This method could be used to also change the font style, font size or
	even to reposition the field. In addition, an entire class of objects could be
	changed, using REPLACE ALL <property field> WITH <property value>
	FOR objtype = 8, for instance.
	
	1. Save the following code in a program file named Maketabs.prg and run the
	  program to create and populate a table.
	
	  Sample Code
	  -----------
	
	              *-- Code begins here.
	        CREATE TABLE sales (ID c(10), invamt N(8,2))
	        INSERT INTO sales (ID, invamt) VALUES ("JOE", 1000)
	        INSERT INTO sales (ID, invamt) VALUES ("MARY", 2000)
	        INSERT INTO sales (ID, invamt) VALUES ("HARRY", 500)
	        INSERT INTO sales (ID, invamt) VALUES ("JOE", 1001)
	        INSERT INTO sales (ID, invamt) VALUES ("MARY", 2001)
	        INSERT INTO sales (ID, invamt) VALUES ("HARRY", 501)
	        INSERT INTO sales (ID, invamt) VALUES ("JOE", 1002)
	        INSERT INTO sales (ID, invamt) VALUES ("MARY", 2002)
	        INSERT INTO sales (ID, invamt) VALUES ("HARRY", 502)
	        *-- Code ends here
	
	2. Create a report. In the Page Header band, add a report field and make the
	  expression salestot.id. In the Detail band, add a report field and make the
	  expression salestot.invamt. In the Page Footer band, add a report field and
	  make the expression salestot.invamt. Click the Calculations button in the
	  Report Expression dialog box. Select Sum, click OK, and then click OK again.
	  Save the report as Sales.frx.
	
	3. Save the following code in a program file named Sales.prg and run the
	  program:
	
	        *-- Code begins here.
	        SET TALK OFF
	        *-- Get a list of salespersons.
	        SELECT DISTINCT id FROM sales INTO CURSOR list
	
	        *-- Step through the list and print sales results for each
	        *-- salesperson.
	        SCAN
	           SELECT * FROM sales WHERE id = list.id INTO CURSOR salestot
	
	           *-- Get the total sales for this person.
	           SUM invamt TO lnTotal
	           SELECT 0
	
	           *-- Open the report file as a table.
	           USE sales.frx
	
	           *-- We're looking for a field (objtype) that is
	           *-- calculated (totaltype) and whose expression
	           *-- (expr) is equal to table field we're calculating.
	           LOCATE FOR objtype = 8 AND totaltype = 2 AND ;
	             ATC("salestot.invamt", expr) > 0
	
	           *-- Save the values for the pen and fill fields.
	           lnPenRed    = penred
	           lnPenGreen  = pengreen
	           lnPenBlue   = penblue
	
	           *-- Modify the font color for the sales total.
	           DO CASE
	           CASE lnTotal > 3000 AND lnTotal < 6000  && Print green
	              REPLACE penred WITH 0, pengreen WITH 255, penblue WITH 0
	           CASE lnTotal > 6000  && Print blue
	              REPLACE penred WITH 0, pengreen WITH 0, penblue WITH 255
	           OTHERWISE  && Print dark red on white
	              REPLACE penred WITH 128, pengreen WITH 0, penblue WITH 0
	           ENDCASE
	           USE
	           SELECT salestot
	
	           *-- Change PREVIEW to TO PRINTER to print the report.
	           REPORT FORM sales PREVIEW
	        ENDSCAN()
	
	        *-- Restore the original values.
	        USE sales.frx
	        LOCATE FOR objtype = 8 AND totaltype = 2 AND ;
	          ATC("sales.invamt", expr)    > 0
	        REPLACE penred WITH lnPenRed, pengreen WITH lnPenGreen,;
	          penblue WITH lnPenBlue
	        USE
	        CLOSE DATA
	        *-- Code ends here.
	
	4. As each report is previewed, scroll to the bottom to see the summary and
	  observe how the color changes for each salesperson.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Mike
	Stewart, Microsoft Corporation
	
	
	Additional query words: kbDSupport kbDSE FxtoolrWriter
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a
	Issue type        : kbhowto
	
	=============================================================================
	
