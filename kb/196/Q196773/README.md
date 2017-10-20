---
layout: page
title: "Q196773: FIX: Slow View Performance with Sybase ODBC Driver"
permalink: /kb/196/Q196773/
---

## Q196773: FIX: Slow View Performance with Sybase ODBC Driver

{% raw %}

	Article: Q196773
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbODBC kbvfp500a kbvfp600 KbDBFDBC kbMDAC250
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a view with either the View Designer or with CREATE SQL VIEW and
	using a Sybase ODBC driver to connect to a Sybase server, the view performance
	can be slow when you are working with large tables.
	
	
	RESOLUTION
	==========
	
	Step-by-Step Procedures
	-----------------------
	
	1. Open the ODBC Manager from the Control Panel.
	
	2. Double-click on the Sybase DSN for the connection that will be used in Visual
	  FoxPro.
	
	3. Click the Advanced tab, and click Performance.
	
	4. Set the Prepare Method to None (default is Full).
	
	STATUS
	======
	
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install the Sybase ODBC driver.
	
	2. Create a Sybase datasource that connects to a database with a table of at
	  least 100,000 rows.
	
	3. Open a Visual FoxPro database. Use MODIFY DATABASE to open the Database
	  Designer. Right-click on the Database Designer window and click Connections.
	  Click New and create a connection based on the Sybase datasource.
	
	4. Right-click on the Database Designer window and click New Remote View...
	
	5. Click New View in the New Remote View dialog box. In the following dialog
	  box, select the connection created in step 3.
	
	6. When the dialog box opens with a list of tables, select a table with at least
	  100,000 rows.
	
	  NOTE: Depending upon the size of the table, the View Designer might take
	  several minutes to respond.
	
	Sybase is manufactured by Sybase, a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Mike
	Stewart, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbODBC kbvfp500a kbvfp600 KbDBFDBC kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:2.5,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
