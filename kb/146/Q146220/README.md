---
layout: page
title: "Q146220: PRB: The ODBC Text File Driver Only Supports INSERT Statement"
permalink: /kb/146/Q146220/
---

## Q146220: PRB: The ODBC Text File Driver Only Supports INSERT Statement

{% raw %}

	Article: Q146220
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,2.6,3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbODBC kbvfp300 kbvfp300b kbvfp600 kbGrpDSFox kbGrpDSMDAC kbDSupport kbMDAC250 kbMDAC26
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	- Microsoft Data Access Components versions 2.5, 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a scenario where a cursor is open from a Remote View or SQL Pass Through
	connection made through the Text File ODBC driver, if you try to modify or
	delete a record in that cursor, one of the following errors occurs:
	
	  Connectivity error: [Microsoft][ODBC Text Driver] Deleting data in an
	  attached (or linked) table not supported by this ISAM.
	
	  -or-
	
	  Connectivity error: [Microsoft][ODBC Text Driver] Updating data in an
	  attached (or linked) table not supported by this ISAM.
	
	CAUSE
	=====
	
	The Text File ODBC driver does not support the SQL DELETE or UPDATE statements.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a comma-delimited text file for use as the data source for the ODBC
	  driver by typing each of the following commands in the Command window (this
	  code assumes you have installed the sample data for each version of Visual
	  FoxPro):
	
	  a. If using Visual FoxPro 3.0x or 5.0x:
	
	     SET DEFAULT TO home()+"samples\data"
	     USE customer
	     *!* Create a comma delimited Customer file
	     COPY TO customer.csv fields cust_id, company DELIMITED USE
	
	  b. If using Visual FoxPro 6.0, check the setting of Samples Directory on the
	     File Locations tab of the Options screen. You can access this from the
	     main menu by selecting TOOLS>OPTION. It should point to the "<MSDN
	     Installation DIR>...\samples\vfp98\>". Set this option if it is not
	     set, then run this code from the command window:
	
	     SET DEFAULT TO home(2)+"samples\data"
	     USE customer
	     *!* Create a comma delimited Customer file
	     COPY TO customer.csv fields cust_id, company DELIMITED USE
	
	- Set up a Text File data source. In Windows 3.1x, do this through the ODBC
	  Administrator in the Visual FoxPro program group or by using the ODBC icon in
	  the Windows Control Panel. In Windows 95, do this through the 32 ODBC
	  Administrator located in the ODBC program group or the Control Panel. In
	  Windows NT, do this through the 32 ODBC Administrator in the Visual FoxPro
	  program group or the ODBC icon in Control Panel.
	
	- Use the following steps to set up a Data Source for the Visual FoxPro table
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
	
	2. Open the Testdata database by typing the following command in the Command
	  window:
	
	     MODIFY DATABASE testdata
	
	3. Right-click in an empty area of the Database Designer, and select New Remote
	  View. Then click the New View button.
	
	4. Select the Available Datasources option. Then select FoxPro Text Test from
	  the list, and click OK.
	
	5. From the list of tables in the Open dialog box, select Customer.csv, and
	  click OK.
	
	6. Click the Fields tab of the View Designer, and click the Add All button.
	
	7. Click the Update Criteria tab of the View Designer, and click the column next
	  to the Key field (F1 in this example) beneath the Key to place a check mark
	  there.
	
	8. Place a check in the column under the Pencil for this same field, and click
	  the Update All button to make all fields updatable.
	
	9. Place a check mark in the Send SQL Updates check box.
	
	10. Right-click in the View Designer, and select Run Query
	
	11. Edit the first record by removing the "I" from "ALFKI" in the first record.
	  Then press the DOWN ARROW to move the record pointer. Depending on the
	  setting in the Update Using box on the Update Criteria tab, one of the two
	  errors will appear. If "SQL DELETE then INSERT" is selected, the first error
	  appears, while if "SQL UPDATE" is selected, the second appears. If Revert is
	  selected from the error dialog box, the change will be backed out and the
	  view can be closed.
	
	Notes
	-----
	
	Although DELETE and UPDATE are not supported, the INSERT statement is. If you
	press CTRL-Y after Revert is selected in Step 13, a new record is added to the
	view. By entering data and then moving the record pointer, you can ensure that
	this information is saved to the text file.
	
	The ODBC Text File driver does not support DELETE and UPDATE statements because
	ODBC depends on a unique key index to determine which record to update or
	delete. The text file has no such index, so the only allowable modifications are
	newly added records, which use the INSERT statement without DELETE or UPDATE
	statements.
	
	REFERENCES
	==========
	
	ODBC DDP3.0 Help File (Odbcjet.hlp)
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbODBC kbvfp300 kbvfp300b kbvfp600 kbGrpDSFox kbGrpDSMDAC kbDSupport kbMDAC250 kbMDAC260 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbMDAC260 kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : WINDOWS:2.5,2.6,3.0,3.0b,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
