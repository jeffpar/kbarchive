---
layout: page
title: "Q130239: PRB: Changes to SQL Remote View Aren't Saved"
permalink: /kb/130/Q130239/
---

## Q130239: PRB: Changes to SQL Remote View Aren't Saved

{% raw %}

	Article: Q130239
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After updating data contained in a remote view, the updates may not appear in
	the source table.
	
	CAUSE
	=====
	
	This is by design. Updates will not be sent to the source unless you specify
	that records should be updated.
	
	RESOLUTION
	==========
	
	If you are creating the view through the View Designer, click the Update
	Criteria Tab, and make sure you have selected the SEND SQL UPDATES check box.
	
	If you are creating the view in a program, use the DBSETPROP() function to set
	the SendUpdates and the UpdateType options. The following code example allows
	data changed in the view named vCustomer to be updated. Because the UpdateType
	is being reset to "2," updates occur by first deleting the existing record, and
	then adding a new record:
	
	     =DBSETPROP("vCustomer", "View", "SendUpdates", .T.)
	     =DBSETPROP("vCustomer", "View", "UpdateType", 2)
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	If you want to update data contained in a remote view, execute these steps:
	
	1. Define a primary key for each server table (mymain). This is done at the data
	  source (such as SQL Server), not through Visual FoxPro. The steps will vary
	  based on the type of data source you are connecting to.
	
	2. In the View Designer Update Criteria Tab, select the Send SQL Updates check
	  box, or use DBSETPROP() to set this property in a program.
	
	3. In the View Designer Update Criteria Tab, specify which fields you want to
	  update, or specify this in a program through the UpdateFields option of the
	  DBSETPROP() function.
	
	REFERENCES
	==========
	
	For more information, please see the Visual FoxPro "Language Reference" or Help
	file for information on DBSETPROP() and the View Designer Update Criteria Tab.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
