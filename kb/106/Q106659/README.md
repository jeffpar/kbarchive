---
layout: page
title: "Q106659: How to Sum or Count Specific Fields in a Report"
permalink: /kb/106/Q106659/
---

## Q106659: How to Sum or Count Specific Fields in a Report

{% raw %}

	Article: Q106659
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.0,2.5,2.5a,2.5b; WINDOWS:2.5,2.5a,2.5b,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a, 2.5b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use a report variable in conjunction with the Immediate IF function
	(IIF) to count or sum a specific report field.
	
	MORE INFORMATION
	================
	
	The IIF function returns one of two values, depending on the value of a logical
	expression. If the logical expression is true, the first value is returned. If
	the logical expression is false, the second IIF return value is returned.
	
	NOTE: To count or sum ALL possible values of a field, do not use this report
	variable technique. Instead, sort the database on the field, and then create a
	data grouping in the report for the field.
	
	To Count Fields
	---------------
	
	1. Create a report variable containing an IIF function.
	
	2. In the logical expression of the IIF function, type the condition you want to
	  count. In the first IIF return value, type "1" (without the quotation marks).
	  In the second IIF return value, type "0" (without the quotation marks).
	
	3. In the Variable Definition dialog box, under Calculate, select Sum.
	
	To Sum Fields
	-------------
	
	1. Create a report variable containing an IIF function.
	
	2. In the logical expression of the IIF function, type the condition you want to
	  test for when summing. In the first IIF return value, type the name of the
	  value (which must be numeric) you want to sum. In the second IIF return
	  value, type "0" (without the quotation marks).
	
	3. In the Variable Definition dialog box, under Calculate, select Sum.
	
	Example Using FoxPro for Windows
	--------------------------------
	
	This example creates a database of different types of computers and their prices.
	The report variable, DESKTOPCT, created in steps 5 through 8, counts the number
	of records whose type equals 'DESKTOP.' The report variable, DESKTOPSUM, created
	in steps 9 through 11, sums the price of all records whose type equals
	'DESKTOP.'
	
	1. Use the following code to create the database:
	
	         CREATE TABLE test ;
	            (type C(20), price N(5))
	
	         INSERT INTO test (type, price) ;
	            VALUES ('DESKTOP', 1500)
	         INSERT INTO test (type, price) ;
	            VALUES ('LAPTOP', 2000)
	         INSERT INTO test (type, price) ;
	            VALUES ('DESKTOP', 4000)
	
	2. Use the Report Builder to create a new report.
	
	3. From the Report menu, choose Quick Report, then the OK button.
	
	4. From the Report menu, choose Title/Summary. Under Report Summary, select
	  Summary Band. Choose OK.
	
	5. From the Report menu, choose Variables, then choose the Add button.
	
	6. In the Variable Name text book, type "desktopct" (without the quotation
	  marks).
	
	7. Choose the Value To Store button, which opens the Expression Builder dialog
	  box. Under Value To Store In Variable Desktopct, type the following:
	
	  "IIF(test.type = 'DESKTOP',1,0)" (without the quotation marks)
	
	  Choose OK.
	
	8. In the Variable Definition dialog box, under Calculate, select Sum. Choose
	  OK. (This variable counts the number of records whose type equals 'DESKTOP').
	
	9. In the Report Variables dialog box, choose the Add button. In the Variable
	  Name text book, type "desktopsum" (without the quotation marks).
	
	10. Choose the Value To Store button, which opens the Expression Builder dialog
	  box. Under Value To Store In Variable Desktopsum, type the following:
	
	  "IIF(test.type = 'DESKTOP',test.price,0)" (without the quotation marks)
	
	  Choose OK.
	
	11. In the Variable Definition dialog box, under Calculate, select Sum. Choose
	  OK twice to return to the Report Layout window. (This variable sums the
	  PRICE field for all records whose type equals 'DESKTOP').
	
	12. From the toolbox, select the Field tool.
	
	13. Place a field object in the Summary band. In the Report Expression dialog
	  box, choose the Expression button. Under Variables, double- click DESKTOPCT.
	  Choose OK to return to the Report Layout window.
	
	14. From the toolbox, select the Field tool again.
	
	15. Place a field object in the Summary band. In the Report Expression dialog
	  box, choose the Expression button. Under Variables, double- click
	  DESKTOPSUM. Choose OK to return to the Report Layout window.
	
	16. From the Report menu, choose Page Preview. Note that the variable DESKTOPCT
	  displays "2," and DESKTOPSUM displays "5500."
	
	Additional query words: VFoxWin FoxDos FoxWin akz
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300
	Version           : MS-DOS:2.0,2.5,2.5a,2.5b; WINDOWS:2.5,2.5a,2.5b,3.0
	
	=============================================================================
	

{% endraw %}
