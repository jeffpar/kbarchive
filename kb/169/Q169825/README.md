---
layout: page
title: "Q169825: FIX: Upsizing Multiple Memo Fields to Oracle May Cause Data Loss"
permalink: /kb/169/Q169825/
---

## Q169825: FIX: Upsizing Multiple Memo Fields to Oracle May Cause Data Loss

{% raw %}

	Article: Q169825
	Product(s): Microsoft FoxPro
	Version(s): 5.0 5.0a
	Operating System(s): 
	Keyword(s): kbvfp kbvfp600fix
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After upsizing a table with multiple memo fields to an Oracle server, the
	upsized data may be invalid or corrupt.
	
	RESOLUTION
	==========
	
	To prevent this problem, in Step 3 of the Upsizing wizard, leave one of the memo
	fields as type Long.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	There are three parts in setting up this example: Part 1 is to create a small
	table with multiple memo fields to be used in the Upsizing wizard. Part 2 is to
	upsize the data to an Oracle server. Part 3 is to create a remote view of the
	Oracle data to observe the results.
	
	Part 1: Create a Table with Empty General Field Records
	-------------------------------------------------------
	
	Save the following code to a file called Creatabl.prg:
	
	     *** Begin code ***
	     CLOSE ALL
	     CREATE DATABASE test
	     CREATE TABLE mymemos (mfield1 M, mfield2 M)
	     INSERT INTO mymemos (mfield1,mfield2) VALUES ('mf1data1','mf2data1')
	     INSERT INTO mymemos (mfield1,mfield2) VALUES ('mf1data2','mf2data2')
	     INSERT INTO mymemos (mfield1,mfield2) VALUES ('mf1data3','mf2data3')
	     *** End code ***
	
	Part 2: Upsize the Data to an Oracle Server
	-------------------------------------------
	
	1. From the Visual FoxPro Tools menu, select Wizards and click Upsizing.
	
	2. In the Wizard Selection dialog box, click the Oracle Upsizing Wizard, and
	  click OK.
	
	3. In Step 1, select the Test database, and click Next.
	
	4. In Step 2, select the Oracle data source to upsize to, and click Next.
	
	  NOTE: At this point, a login screen may come up. Login to the Oracle data
	  source to continue.
	
	5. In Step 3, move the Mymemos table to the Selected Tables pane, and click
	  Next.
	
	  NOTE: At this point, a message box appears stating that the table has more
	  than one memo or general field. Furthermore, these fields will be mapped to a
	  fixed-length data type.
	
	6. In Step 4, change the Server Type of Mfield1 from Long to varchar2, and click
	  Next to continue.
	
	7. In Step 5, select the Oracle tablespace to upsize the data to (this could be
	  an existing or new tablespace). Then, click Next.
	
	8. In Step 6, set the appropriate tablespace file, and click Next.
	
	9. In Step 7, specify the cluster information, and click OK.
	
	  NOTE: In Steps 8 and 9 the Specify Cluster tables and Specify Cluster Key
	  field, respectively, may or may not be skipped depending on specific
	  configuration.
	
	10. In Step 8, set the upsizing options. In this test, all of the check boxes
	  can be cleared. Then, click Next.
	
	11. In Step 11, click Finish to upsize the data to the Oracle server.
	
	Part 3: Create a Remote View of the Upsized-Oracle Data
	-------------------------------------------------------
	
	1. Open the Test database if it's not already open by entering the following
	  command in the Visual FoxPro Command window:
	
	        OPEN DATABASE test
	
	2. From the Visual FoxPro File menu, select New, and click Remote View. Click
	  the New File button.
	
	3. In the Select Connection or Data Source dialog box, select the appropriate
	  datasource and click OK.
	
	  NOTE: At this point, a login screen may come up. Login into the SQL data
	  source to continue.
	
	4. In the Open dialog box, select the upsized table to open, and click Add.
	
	5. In the View Designer dialog box, move both memo fields to the Selected Fields
	  pane.
	
	6. Run the query to bring up a Browse window.
	
	NOTE: When viewing the data in any of the records, the original data will be
	replaced by zeros or other incorrect data.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp600fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : 5.0 5.0a
	Issue type        : kbbug kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
