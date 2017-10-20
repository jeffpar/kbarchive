---
layout: page
title: "Q250981: PRB: Merged FoxPro Table Fields Display Incorrectly in Word"
permalink: /kb/250/Q250981/
---

## Q250981: PRB: Merged FoxPro Table Fields Display Incorrectly in Word

{% raw %}

	Article: Q250981
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbWord kbGrpDSFox kb
	Last Modified: 20-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Mail Merge feature of Microsoft Word does not properly display numeric and
	currency fields that are merged from Microsoft Visual FoxPro tables.
	
	RESOLUTION
	==========
	
	To display merged numbers correctly, you must use Format Masking. To format the
	results of a mail merge, you must use the numeric picture switch in the
	MERGEFIELD field code as shown here:
	
	1. Open the main document in Microsoft Word.
	
	2. Display the field codes by pressing ALT+F9.
	
	3. For all the merge fields that display numeric or currency fields, which do
	  not have decimal places, change the field code as follows:
	
	{ MERGEFIELD fieldname \# #,###,###.00 }
	
	4. Press ALT+F9 to toggle the view to show field results instead of field codes.
	
	5. Run the merge again to a new document to get the correct results.
	
	MORE INFORMATION
	================
	
	If the merged numeric and currency fields do not have any decimal values, they
	display with only a decimal point to the right of them. For example "12345.00"
	displays as "12345.".
	
	Steps To Reproduce Behavior
	---------------------------
	
	1. Run Visual FoxPro. Create and populate a table as follows:
	
	     CREATE TABLE MrgTest (Fld1 c(5), Fld2 n(8,2), Fld3 y)
	     INSERT INTO MrgTest VALUES("AAAAA", 12345.11, 2345.11)
	     INSERT INTO MrgTest VALUES("BBBBB", 67890.00, 6789.00)
	
	2. Close the table and then close Visual FoxPro.
	
	3. Make sure that Microsoft Query is installed on your computer by searching for
	  Msqrv32.exe on your computer. If Microsoft Query is not installed, then run
	  the Microsoft Office setup to install Microsoft Query.
	
	4. Use the ODBC Manager and create a data source based on the Microsoft Visual
	  FoxPro ODBC Driver for the Visual FoxPro table you created in the first step.
	  Name the data source VFPMrgTest.
	
	5. Run Microsoft Word and open a new document. From the Tools menu, click Mail
	  Merge to open the Mail Merge Helper dialog box.
	
	6. In the Mail Merge Helper dialog box, click the Create command button and then
	  click the document type that you want. In the next dialog box, click the
	  Active Window command button.
	
	7. In the Mail Merge Helper dialog box, click the Get Data command button, and
	  then click Open Data Source.
	
	8. In the Open Data Source dialog box, in the Files of type combo box click "MS
	  FoxPro Files". Locate the Visual FoxPro table you created in the first step
	  and highlight the table name. Click the Open command button in the bottom
	  right corner of the Open Data Source dialog box.
	
	9. In the Confirm Data Source dialog box, click "FoxPro File - Word via
	  ODBC(*.dbf)", and then click OK. In the next dialog box, click Set Up Main
	  Document. In the Label Options dialog box, select the label type and then
	  click OK.
	
	10. Click the Insert Merge Fields command button and insert all the fields in
	  the table from the Create Labels dialog box and then click OK.
	
	11. In the Mail Merge Helper dialog box, click Merge. In the Merge dialog box,
	  click New Document as the "Merge To" option and then click Merge.
	
	Note that the numeric and currency fields that do not have decimal values display
	incorrectly. For example "6789.00" shows as "6789."
	
	REFERENCES
	==========
	
	For additional information on setting up a DSN, click the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q186086 HOWTO: Get a File DSN in the Connection Designer
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbWord kbGrpDSFox kbDSupport kbword2000 kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
