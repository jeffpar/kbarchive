---
layout: page
title: "Q146224: HOWTO: Use SQL Pass Through to Connect to ASCII Text Files"
permalink: /kb/146/Q146224/
---

## Q146224: HOWTO: Use SQL Pass Through to Connect to ASCII Text Files

{% raw %}

	Article: Q146224
	Product(s): Microsoft FoxPro
	Version(s): 2.5,3.0,3.0b,6.0
	Operating System(s): 
	Keyword(s): kbcode kbvfp300 kbvfp300b kbvfp600 kbMDAC250
	Last Modified: 27-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows by example how to use Visual FoxPro and ODBC to access data
	that resides in ASCII text files.
	
	MORE INFORMATION
	================
	
	For Visual FoxPro 3.0b, the ODBC drivers for Windows 95, Windows NT, and Windows
	3.1x are included with the product. For Visual FoxPro 3.0, ODBC drivers for
	Windows NT and Windows 3.1x are included. The ODBC drivers for Visual FoxPro 3.0
	and Windows 95 are available as an Application Note titled "Microsoft ODBC
	Drivers for 32-Bit Programs" (GE1263).
	
	Step-by-Step Example
	--------------------
	
	This example demonstrates how to connect to a text file by using ODBC from Visual
	FoxPro.
	
	1. Create a comma-delimited text file for use as the data source for the ODBC
	  driver by typing each of the following commands in the Command window:
	
	     SET DEFAULT TO home()+"samples\data"
	     USE customer
	     COPY TO customer.csv DELIMITED  && Creates comma-delimited Customer file
	     USE
	
	2. Set up a Text File data source. In Windows 3.1x, do this through the ODBC
	  Administrator in the Visual FoxPro program group or by using the ODBC icon in
	  the Windows Control Panel. In Windows 95, do this through the 32 ODBC
	  Administrator located in the ODBC program group or the Control Panel. In
	  Windows NT, do this through the 32 ODBC Administrator in the Visual FoxPro
	  program group or the ODBC icon in Control Panel.
	
	3. Use the following steps to set up a Data Source for the Visual FoxPro table
	  saved as a comma-delimited file in Step 1:
	
	  a. Open the ODBC or 32 Bit ODBC Administrator icon.
	
	  b. From the Add list, select Microsoft Text Driver, and click OK. The ODBC
	     Text Setup dialog box will appear.
	
	  c. Type FoxPro Text Test in the Data Source Name, and then click the Select
	     Directory button.
	
	  d. Select the Vfp\Samples\Data directory, and click OK.
	
	  e. Click the Options button, and then click the Define Format button.
	
	  f. In the Define Text Format dialog box, select the Customer.csv file.
	
	  g. Click the Guess button to create a Data Type, Name, and Width for each
	     column of the selected file. Select each column, starting with F1, from
	     the list. For each item in the list with a Data Type of Char, change the
	     Width from 255 to the correct column width (if known). If the correct
	     column width is not known, set each to 254 (the value used for the
	     purposes of this example). Either way, as each column width is set, click
	     Modify. The column width for each Char column must be set to a value less
	     than 255 to enable the column to appear in Visual FoxPro as Character
	     rather than Memo data.
	
	  h. When you finish, click OK in the Define Text Format dialog box, and then
	     click OK in the OCBC Text Setup dialog box. Then click Close in the Data
	     Sources dialog.
	
	4. Place the following code in a program (.prg) file that you will run to allow
	  connection to the "FoxPro Text Test" data source.
	
	     * Start of Program to connect to "FoxPro Text Test" Data Source
	
	     LOCAL lcSource, lnConHand, lnSQLRes
	
	     * Set initial variable values
	     STORE 0 TO lnConHand, lnSQLRes
	     lcSource = "FoxPro Text test"  && Text Data Source Name from ODBC Dialog
	
	     * Connect to Text Data Source
	     WAIT Window "Attempting connection ..." NOWAIT
	     lnConHand = SQLCONNECT(lcSource)
	     IF lnConHand > 0
	        WAIT Window ;
	         "Connected to Text File Driver - Handle:" ;
	         + STR(lnConHand,2,0) TIMEOUT 2
	     ELSE
	        WAIT Window ;
	          "Unable to connect to Text File ..." TIMEOUT 2
	     ENDIF
	
	     * Bring data into cursor called CustText
	     IF lnConHand>0
	        lnSQLRes=SQLEXEC(lnConHand, "SELECT * FROM Customer.csv","CustText")
	        BROWSE NOWAIT
	        lnSQLRes=SQLDISCONNECT(lnConHand) && Remove to leave connection open
	     ENDIF
	
	     * End of program
	
	Notes
	-----
	
	When a directory is selected in the ODBC Text Setup dialog box, column
	information is saved in a file in that directory called Schema.ini. There is a
	section in this file for each file in the specified directory that matches the
	extensions in the File Extensions list (visible when the Options button is
	clicked). The Schema.ini section for the Customer.csv file used in the previous
	example appears as follows:
	
	     [customer.csv]
	     ColNameHeader=False
	     Format=CSVDelimited
	     MaxScanRows=25
	     CharacterSet=OEM
	     Col1=F1 Char Width 254
	     Col2=F2 Char Width 254
	     Col3=F3 Char Width 254
	     Col4=F4 Char Width 254
	     Col5=F5 Char Width 254
	     Col6=F6 Char Width 254
	     Col7=F7 Char Width 254
	     Col8=F8 Char Width 254
	     Col9=F9 Char Width 254
	     Col10=F10 Char Width 254
	     Col11=F11 Char Width 254
	     Col12=F12 Float
	
	The correct column names and field lengths and from the Customer table (obtained
	with a LIST STRUCTURE command) can be used to modify the Schema.ini file as
	follows to allow correct column names and widths to appear in Visual FoxPro.
	These modifications can also be made through the Define Text Format dialog box.
	
	     [customer.csv]
	     ColNameHeader=False
	     Format=CSVDelimited
	     MaxScanRows=25
	     CharacterSet=OEM
	     Col1=CUST_ID Char Width 6
	     Col2=COMPANY Char Width 40
	     Col3=CONTACT Char Width 30
	     Col4=TITLE Char Width 30
	     Col5=ADDRESS Char Width 60
	     Col6=CITY Char Width 15
	     Col7=REGION Char Width 15
	     Col8=POSTALCODE Char Width 10
	     Col9=COUNTRY Char Width 15
	     Col10=PHONE Char Width 24
	     Col11=FAX Char Width 24
	     Col12=MAXORDAMT Float
	
	The Text File driver supports the SQL SELECT and INSERT commands only, not DELETE
	or UPDATE. This prevents deleting or modifying existing records.
	
	The maximum width of a column of Character data can be set in Visual FoxPro in
	the Remote Data tab of the Options dialog box. The setting in the "Use Memo for
	Fields >=:" spinner determines this maximum width. The default value (also
	the absolute maximum) for this setting is 255. If this maximum width setting is
	exceeded, the data is brought in as Memo data instead of Character data.
	
	Additional query words: SPT VFoxWin
	
	======================================================================
	Keywords          : kbcode kbvfp300 kbvfp300b kbvfp600 kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300 kbVFP300b kbVFP600
	Version           : :2.5,3.0,3.0b,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
