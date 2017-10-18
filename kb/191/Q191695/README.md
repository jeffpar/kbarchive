---
layout: page
title: "Q191695: PRB: VFP ODBC Driver Errors When Using Left Outer Join"
permalink: kb/191/Q191695/
---

## Q191695: PRB: VFP ODBC Driver Errors When Using Left Outer Join

	Article: Q191695
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,2.6,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbvfp500a kbvfp600 KbDBFDBC kbGrpDSFox kbGrpDSMDAC kbDSupport kbMDAC250 kbMD
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	- Microsoft Data Access Components versions 2.5, 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When creating a remote view to a FoxPro table using the Visual FoxPro ODBC
	driver, the following error occurs when you set a Left Outer Join in the Join
	tab between two tables:
	
	  Connectivity error: [Microsoft][ODBC Visual FoxPro Driver]Command Contains
	  unrecognized phrase/keyword.
	
	RESOLUTION
	==========
	
	Access the FoxPro tables directly, using the SQL - SELECT command. For example:
	
	     CREATE SQL VIEW test CONNECTION myconn;
	     AS SELECT * FROM orders LEFT OUTER JOIN orditems;
	     ON orders.order_id = orditems.order_id
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a datasource to the Visual FoxPro ODBC driver in the ODBC
	  Administrator pointing to the Testdata.dbc sample database.
	
	2. Open any .dbc in Visual FoxPro and create a remote view using the datasource
	  created in step 1.
	
	3. Add the Orders.dbf and Orditems.dbf using the join condition of the field
	  order_id.
	
	4. Close the Open dialog box and select the Add All button in the Fields tab of
	  the View Designer.
	
	5. Select the Join tab and in the Type drop-down list box, select Left Outer
	  Join. In the Field Name drop-down list box, select Orders.order_id. In the
	  Value drop-down list box, select Orditems.order_id.
	
	6. Run the view and note that the error occurs.
	
	Additional query words: kbVFp500a kbVFp600 kbODBC
	
	======================================================================
	Keywords          : kbDatabase kbvfp500a kbvfp600 KbDBFDBC kbGrpDSFox kbGrpDSMDAC kbDSupport kbMDAC250 kbMDAC260 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbMDAC260 kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:2.5,2.6,5.0,5.0a,6.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
