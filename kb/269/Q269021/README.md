---
layout: page
title: "Q269021: PRB: Synergex Driver Displays Fields Wrong in View Designer"
permalink: kb/269/Q269021/
---

## Q269021: PRB: Synergex Driver Displays Fields Wrong in View Designer

	Article: Q269021
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbBuilder kbDatabase kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbGrpDSFox kbDSupport kbCodeS
	Last Modified: 26-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Visual FoxPro View Designer displays fields incorrectly when the
	view is based on tables from a Synergy/DE version 7.1 Driver.
	
	RESOLUTION
	==========
	
	In most cases the following workaround can be used:
	
	Create the view programmatically by using code similar to the following:
	
	  CREATE SQL VIEW "FYF002" ; 
	     REMOTE CONNECT "Synergex" ; 
	     AS SELECT * FROM customers
	
	NOTE: The view can then be manipulated visually as long as the tables from
	Synergy/DE 7.1 have been added programmatically prior to editing the view
	visually.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	NOTE: The following assumes that you have Synergy/DE 7.1 installed on the test
	system.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	1. Create a new database called "TestODBC" (without the quotation marks).
	
	2. Create a new remote view, and then select the Synergy Driver Stand-alone from
	  available Data Source Names (DSN).
	
	3. In the dialog box that appears, enter your user id and password provided by
	  Synergex Corporation.
	
	4. Add the Public.customers table to the view.
	
	Note the fields in the Customer cursor in the tables area of the view designer.
	The fields listed are not those in the actual table, but appear to be system
	information (t_database, t_owner, and so forth). The expected fields are:
	Customer_id, Cust_rtype, Customer_name, Customer_street, and so forth.
	
	NOTE: This behavior does not occur in Visual Basic or Microsoft Query.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kenneth
	Robison, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbBuilder kbDatabase kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
