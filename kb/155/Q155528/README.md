---
layout: page
title: "Q155528: HOWTO: Set Up an Offline View in Visual FoxPro 5.0"
permalink: /kb/155/Q155528/
---

## Q155528: HOWTO: Set Up an Offline View in Visual FoxPro 5.0

	Article: Q155528
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDatabase kbSQL kbvfp500 kbvfp600 kbSQLProg
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates the steps to create and use an offline view in Visual
	FoxPro.
	
	MORE INFORMATION
	================
	
	With the following steps, you can create a sample offline view using the data
	from the Testdata database from the Samples\Data directory.
	
	1. Create a new directory called Myoffline, and make it the default directory.
	
	2. Open the Testdata database in the C:\VFP\Samples\Data directory. In Visual
	  FoxPro 6.0, the Testdata database can be found in the home()+"data"
	  directory.
	
	3. Create a new .dbc file called Mydbc, and modify this database.
	
	4. Within Mydbc, create a new Local View from the Customer table and include all
	  fields as output. Check Send SQL Updates, and mark the Cust_ID field as
	  modifiable in the Update criteria tab.
	
	  NOTE: An offline view does not have to be from a local view; it can also come
	  from a remote view, adding more power to this feature.
	
	5. Close and save the view, and name it Myview.
	
	6. From the Command window issue the command:
	
	         ? CREATEOFFLINE("MYVIEW")
	
	  If the command executes successfully, it returns a .T., and now if you look at
	  the files in the Myoffline directory, you should see three extra files with
	  the following names:
	
	  Myview.dbf
	  Myview.tbf
	  Myview.tdx
	
	  The view Myview is now considered offline. You can take the contents of the
	  MYOFFLINE folder anywhere and make changes to the data in Myview view.
	
	7. Issue a CLOSE All command from the Command window to close all the files.
	
	8. Next issue the following commands from the Command window:
	
	         SET MULTILOCKS ON
	         OPEN DATABASE MYDBC
	         USE MYVIEW
	         BROWSE
	
	  Multilocks must be set on in order to use the view. You can look at the
	  records and modify them.
	
	9. Modify or append a couple of records. Because the view is offline, only the
	  records in Myview.dbf are actually changed. Nothing is being changed in the
	  Customer table.
	
	10. Issue a USE command to close Myview.
	
	11. To update the Customer table, issue the following commands:
	
	         OPEN DATABASE c:\vfp\samples\data\testdata
	         USE Customer
	         ? CURSORSETPROP("Buffering",5)
	         USE Myview ONLINE EXCLUSIVE IN 0
	         SELECT Myview
	         ? TABLEUPDATE(.T.)
	
	  If you BROWSE the Customer table, you should see your changes. You must open
	  the view with the ONLINE clause, and it must be exclusive in order to
	  update. Also the table and database the view is representing, in this case
	  Customer, must be open.
	
	12. To make Myview a normal view or one that is considered ONLINE, you must use
	  the DROPOFFLINE()function, which deletes the three files that you created in
	  the Myoffline directory. Any changes made to the view are reflected in the
	  Customer table.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbSQL kbvfp500 kbvfp600 kbSQLProg 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	
