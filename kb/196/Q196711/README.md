---
layout: page
title: "Q196711: BUG: Extra Spaces Added to Fields When Updating MS Access Table"
permalink: /kb/196/Q196711/
---

## Q196711: BUG: Extra Spaces Added to Fields When Updating MS Access Table

{% raw %}

	Article: Q196711
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbvfp300bBUG kbvfp500aBUG kbvfp600bug KbDBFDBC kbMDAC250
	Last Modified: 22-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you update a Microsoft Access table from Visual FoxPro using the Microsoft
	Access ODBC Driver and the string value being updated is shorter than the actual
	field width, extra spaces are added to the end of the string.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Using Microsoft Access create a database that has a table with the following
	  structure:
	
	     Field Name      Field Type
	     --------------------------
	
	     ID              AutoNumber
	     Fld1            Text(10)
	     Fld2            Text(10)
	
	  Add some records to the table and then exit Microsoft Access.
	
	2. Using the ODBC Manager, create an ODBC DataSource to the Microsoft Access
	  table based on the Microsoft Access ODBC driver.
	
	3. In Visual FoxPro, open a database and create a Remote View to the Microsoft
	  Access table using the data source created in the step 2.
	
	4. In the Visual FoxPro View Designer dialog box, choose the Fields tab and then
	  select all of the fields. Click the Update Criteria tab, and then select ID
	  as the key and set all the fields as updateable. Select the "Send SQL Update"
	  option. Save and then close the view.
	
	5. Open the view and add a record to it as follows:
	
	        USE View1
	        INSERT INTO View1 VALUES(7,'aaa','aaa')
	
	6. Exit Visual FoxPro and then run Microsoft Access.
	
	7. View the table in Microsoft Access, and select either fld1 or fld2 in a
	  record you added from Visual FoxPro.
	
	RESULTS: Note that extra blank spaces are added to the string entered in Fld1 and
	Fld2, as in the following example:
	
	  ('aaa ')
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbvfp300bBUG kbvfp500aBUG kbvfp600bug KbDBFDBC kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:2.5,3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
