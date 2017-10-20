---
layout: page
title: "Q165234: PRB: CREATEOFFLINE Opens Parent Table Exclusively"
permalink: /kb/165/Q165234/
---

## Q165234: PRB: CREATEOFFLINE Opens Parent Table Exclusively

{% raw %}

	Article: Q165234
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500 kbvfp500a kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The CREATEOFFLINE command opens the parent table exclusively regardless of the
	exclusive setting.
	
	RESOLUTION
	==========
	
	If the parent table is not currently open, open the parent table shared before
	issuing the CREATEOFFLINE command.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	In a multiuser environment where more than one work station is accessing tables,
	CREATEOFFLINE will open a table exclusively regardless of the setting of
	exclusive, and other users will not be able to open that table. They will get
	the message [ASCII 147]File Access is denied.[ASCII 148]
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code to create a new subdirectory with a new database that
	  contains a view of the customer table.
	
	        SET DEFAULT TO HOME()
	        OPEN DATABASE HOME()+"\samples\data\testdata"
	        MKDIR offview
	        SET DEFAULT TO HOME()+"offview"
	        CREATE DATABASE OFFDBC
	        CREATE SQL VIEW mycustomer AS SELECT * ;
	           FROM HOME()+"\samples\data\customer"
	
	2. Run the following code to make the view off line.
	
	        CLOSE ALL
	        CLEAR
	        SET EXCLUSIVE OFF
	        SET MULTILOCKS ON
	        OPEN DATABASE Home()+"\samples\data\testdata"
	        SET DEFAULT TO HOME()+"offview"
	        OPEN DATABASE offdbc
	        ?CREATEOFFLINE("mycustomer")
	        SET
	
	3. In the Data Session window, select customer. Notice that the status bar shows
	  that customer is opened exclusively.
	
	4. Run the following code to put mycustomer back online.
	
	        CLOSE ALL
	        CLEAR
	        SET EXCLUSIVE OFF
	        SET MULTILOCKS ON
	        SET DEFAULT TO HOME()+"offview"
	        OPEN DATABASE offdbc
	        IF DBGETPROP("mycustomer","view","offline")
	           ?DROPOFFLINE("mycustomer")
	        ENDIF
	
	REFERENCES
	==========
	
	For more information about offline views, please see the following articles in
	the Microsoft Knowledge Base:
	
	  Q156013 Possible Uses for Offline Views in Visual FoxPro
	
	  Q155528 How To Set Up an Offline View in Visual FoxPro 5.0
	
	  Q155820 HOWTO: Refreshing an Offline View in Visual FoxPro 5.0
	
	  Q156552 How To Use Offline Views in Visual FoxPro
	
	Additional query words: create ofline off view multi-user
	
	======================================================================
	Keywords          : kbvfp kbvfp500 kbvfp500a kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
