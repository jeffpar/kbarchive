---
layout: page
title: "Q138094: How to Create Updatable Views by Using SQL Passthrough"
permalink: /kb/138/Q138094/
---

## Q138094: How to Create Updatable Views by Using SQL Passthrough

	Article: Q138094
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp600
	Last Modified: 06-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can create an updateable view cursor using SQL Passthrough by setting
	properties with the CURSORSETPROP() function.
	
	MORE INFORMATION
	================
	
	Remote views provide the most common and easiest way to gain access to and
	update remote data. You can also use SQL passthrough technology to send SQL
	statements directly to a server. By default, a SQL passthrough query always
	returns a non-updateable snapshot of remote data, which is stored in an active
	view cursor. You can make the cursor updateable by setting properties with the
	CURSORSETPROP() function. An updateable remote view, in contrast, usually does
	not require that you set properties before you can update remote data.
	
	To update remote data, use the CURSORSETPROP() function to set the following five
	properties:
	
	- Tables
	
	- KeyFieldList
	
	- UpdateNameList
	
	- UpdatableFieldList
	
	- SendUpdates
	
	The update properties in a view definition (set by using DBSETPROP() function)
	and an active cursor vary slightly. The table on page 60 in the Visual FoxPro
	Professional Features Guide outlines the differences.
	
	The following program is an example of how to create an updateable view Cursor.
	
	Sample Code
	-----------
	
	  ************************** Beginning of code ******************
	
	     ** This example is using SQL Server as the back-end.
	     ** Your back-end server may vary.
	     Handle = SQLCONNECT("SQL421","sa","")
	     IF handle<0
	       WAIT WINDOW "connection not made"
	       CANCEL
	     ELSE
	       =SQLEXEC(Handle, "select * from authors")
	       =CURSORSETPROP("Tables", "authors")
	       ** The next property must include every remote field matched with the
	       ** view cursor field.
	       =CURSORSETPROP("UpdateNameList", "au_id authors.au_id, au_lname;
	         authors.au_lname, au_fname authors.au_fname, phone;
	         authors.phone, address authors.address,;
	         city authors.city, state authors.state,;
	         zip authors.zip, contract authors.contract")
	       =CURSORSETPROP("KeyFieldList", "au_id")
	       ** The next property specifies which fields can be updated.
	       =CURSORSETPROP("UpdatableFieldList", "au_lname, au_fname, phone,;
	         address, city, state, zip, contract")
	       ** The next property enables you to send updates.
	       =CURSORSETPROP("SendUpdates", .T.)
	
	       BROWSE
	       USE
	       =SQLDISCONNECT(handle)
	     ENDIF
	     ************************* End of code ******************************
	
	Any changes made to the data in the Browse window will update the table on the
	remote server.
	
	
	NOTE: If you are unsure of how to set the above properties you can create a
	remote view. Please refer to the REFERENCES section for information on creating
	a remote view.
	
	When you run the view, use the CURSORGETPROP() function in the Debug Window to
	determine what the five properties are set to. For example, put
	CURSORGETPROP("UpdateNameList") in the Debug window to see how the property is
	set in the CURSORSETPROP() function.
	
	
	REFERENCES
	==========
	
	For more information about creating an updateable remote view, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q130413 How to Create an Updatable Cursor (View) to Update Table
	
	Additional query words: VFoxMac VFoxWin pass-through
	
	======================================================================
	Keywords          : kbvfp300 kbvfp600 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP600
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,6.0
	
	=============================================================================
	
