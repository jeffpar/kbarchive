---
layout: page
title: "Q140298: How to Print All Detail Records in Field Order"
permalink: /kb/140/Q140298/
---

## Q140298: How to Print All Detail Records in Field Order

	Article: Q140298
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Visual FoxPro Report Designer, you may want to print all the records for
	a single field within a data grouping before printing records for the next
	field. This article gives you the steps to accomplish this.
	
	MORE INFORMATION
	================
	
	To print all records of a particular field before printing the records of
	another field using the Report Designer, the report must be set up in a certain
	way. This example uses the Testdata!Customer table in the Vfp\Samples\Data
	subdirectory. Another field can be substituted for Country as the Grouping Field
	in the code example and field expressions.
	
	These directions must be followed precisely to get the desired behavior.
	
	Step-by-Step Example
	--------------------
	
	1. Create a user-defined function (UDF) to handle the processing:
	
	  a. Type the following command in the Command window to create a program to
	     hold the UDF:
	
	        MODIFY COMMAND countkid.prg
	
	  b. Enter the following code in Countkid.prg:
	
	        PARAMETERS cFldname, cCountry
	        cPassback=""
	        nPerposn=AT(".",cFldname)
	        cFldname=UPPER(SUBSTR(cFldname,nPerposn+1,LEN(cFldname)-nPerposn))
	        =AFIELDS(acFnames)
	        nAfldpos=ASUBSCRIPT(acFnames,ASCAN(acFnames,cFldname),1)
	        SELECT * FROM CUSTOMER WHERE COUNTRY=cCountry INTO ARRAY aMyray
	        anRow=ALEN(aMyray,1)
	        FOR nI=1 TO anRow
	            cPassback=cPassback+ALLTRIM(aMyray(nI,nAfldpos))+CHR(13)
	        ENDFOR
	        RETURN cPassback
	
	2. In the Customer.dbf table, add an index tag Country for the field Country.
	  This will be used in this example for the data grouping.
	
	3. Create a report, and add the Customer table to the Data Environment (DE). Set
	  the Order property of the Cursor object within the DE to Country.
	
	4. Set up a Data Grouping in the report on the Country field.
	
	5. Add a field to the report within the detail band. In the expression for this
	  field, enter:
	
	     IIF(nMycount<1,countkid("<fieldname>",Country),"")
	
	  NOTE: The "<fieldname>" should contain the name of the field you want to
	  print. For example, use Customer.Cust_id or Cust_id.
	
	6. In the Report Expression dialog box, click the Float option, and select the
	  Stretch with Overflow check box.
	
	7. Click the Print When button, and in the Print When dialog box, select No
	  under Print Repeated Values and select the Remove Line if Blank check box for
	  each field expression.
	
	8. Create a report variable called nMycount, and set the following values:
	
	  Value to Store = 0
	  Initial Value = 0
	  Reset = Customer.Country
	  Calculation = Sum
	  Check the Release after Report check box.
	
	9. Place additional field expressions (in Step 4) for each field you want to
	  print. Each field expression should be placed below the preceding field
	  expression in the detail band. Within each group, all values for each field
	  expression will print before the all the values for each subsequent field
	  expression.
	
	General Notes
	-------------
	
	- The fieldname in quotation marks is passed to the UDF along with the name of
	  the grouping field without quotation marks. In the previous example,
	  "Customer.Cust_id" or "Cust_id" is passed as the first parameter, and Country
	  is passed as the next parameter.
	
	- The array functions allow data manipulation within the report without
	  affecting the original data. You build an expression with carriage returns
	  that you then pass back to the report to print. The variable and IIF ensure
	  that this UDF will run once only for each record processed.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
