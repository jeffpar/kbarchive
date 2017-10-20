---
layout: page
title: "Q192857: HOWTO: Use Index Files with Offline Views"
permalink: /kb/192/Q192857/
---

## Q192857: HOWTO: Use Index Files with Offline Views

{% raw %}

	Article: Q192857
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbDSupport kbMDAC250
	Last Modified: 10-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The introduction of Offline views in Visual FoxPro 5.0 enabled users to work
	with selected data sets while disconnected from the server. Use of indexes and
	functions that take advantage of Rushmore Optimization provide a highly
	efficient method of searching Offline view data sets.
	
	This article explains how to create and use indexes with Offline views.
	
	MORE INFORMATION
	================
	
	Creation of an Offline view creates a table structure and properties that match
	the structure and properties of the source view. Issuing an index command with
	an Offline view creates an index file for the Offline view. The Table and
	Index(es) remain in the directory in which the Offline view was created until a
	DROPOFFLINE() command is issued or the Offline view is USEd ONLINE or in ADMIN
	mode. When the Offline view is taken back online, the table and index files are
	deleted from the disk.
	
	Create a program file named OFFINDEX.PRG, using the following code:
	
	     SET SAFETY OFF
	     SET MULTILOCKS ON
	     * Create a database
	     CREATE DATABASE MYOLV
	     * Declare API function to create ODBC DSN
	     DECLARE INTEGER SQLConfigDataSource IN odbccp32.DLL ;
	        INTEGER, INTEGER, STRING, STRING
	     IF VAL(SUBSTR(VERSION(),15,2))=6
	        lcDir=HOME(2)+"data\"
	     ELSE
	        lcDir=HOME()+"SAMPLES\DATA\"
	     ENDIF
	     * Information to setup ODBC DSN
	     lcSetUp="DSN=MyOffLine"+CHR(0)+;
	        "Description=VFP Offline View Demo"+CHR(0)+;
	        "SourceDB="+lcDir+"testdata.dbc"+CHR(0)+;
	        "SourceType=DBC"
	     * Call API function to create a DSN
	     =SQLConfigDataSource(0,1,"Microsoft Visual FoxPro Driver",lcSetUp)
	     CLEAR DLLS
	     * Create a connection
	     CREATE CONNECTION MyOLV DATASOURCE "myoffline"
	     * Create a view to take offline
	     CREATE SQL VIEW test REMOTE CONNECT MyOLV ;
	        AS SELECT cust_id, company, city ;
	        FROM customer ;
	        ORDER BY customer.cust_id
	     USE test
	     * Take the view offline
	     * Creates file named 'TEST.DBF'
	     =CREATEOFFLINE('test')
	     * Close all and open the Table for OffLine view
	     CLOSE ALL
	     USE test.dbf
	     * Create structural indexes on the Offline view
	     INDEX ON cust_id TAG cust_id OF ALIAS()
	     INDEX ON city TAG city OF ALIAS()
	     * Set the order to customer id
	     SET ORDER TO TAG cust_id
	     LOCATE
	     BROWSE TITLE "ORDERED BY CUSTOMER ID"
	     * Set the order to city
	     SET ORDER TO TAG city
	     BROWSE TITLE "ORDERED BY CITY"
	     * Create an IDX index
	     INDEX ON city+company TO cocity
	     BROWSE TITLE "ORDERED BY City and Company Using IDX FILE"
	     * Revert any changes and take the view back online
	     CLOSE ALL
	     OPEN DATABASE MyOLV
	     =DROPOFFLINE('test')
	     * Indexes and working table destroyed with dropoffline command.
	     * Close the view
	     CLOSE ALL
	     RETURN
	
	Note that the table order changes when the order is changed. Also note that the
	table and all associated files are deleted when the offline view is taken back
	online.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q165234 PRB: CREATEOFFLINE Opens Parent Table Exclusively
	
	  Q156552 HOWTO: Use Offline Views in Visual FoxPro
	
	  Q156013 INFO: Possible Uses for Offline Views in Visual FoxPro
	
	  Q156011 INFO: Use of the ADMIN Clause with Offline Views
	
	  Q155820 HOWTO: Refreshing an Offline View in Visual FoxPro 5.0
	
	  Q155528 HOWTO: Set Up an Offline View in Visual FoxPro 5.0
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by John R. Desch, Microsoft Corporation
	
	
	Additional query words: kbdse
	
	======================================================================
	Keywords          : kbDatabase kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbDSupport kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:2.5,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
