---
layout: page
title: "Q157525: BUG: Remote View Has Only Two Join Types"
permalink: /kb/157/Q157525/
---

## Q157525: BUG: Remote View Has Only Two Join Types

	Article: Q157525
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp500 kbvfp600 kbMDAC250
	Last Modified: 22-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Remote View designer has only two types of Join conditions, Left Outer and
	None.
	
	CAUSE
	=====
	
	Visual FoxPro delegates the SQL query to the ODBC driver in order to be
	compatible across multiple back ends. Visual FoxPro uses the ODBC outer join
	extension, which supports only left outer join.
	
	RESOLUTION
	==========
	
	The following code sample creates a remote view using a inner join:
	
	        *Start Code Example
	        close all
	        create data Test1
	        MyConnstr="driver=sql server; ";
	         + server=MyServernt;uid=sa;pwd=;database=pubs"
	        create connection mycon connstr (MyConnstr)
	        create sql view Test1 remote connection mycon Share as select * from;
	          titles inner join titleauthor on ;
	          titles.title_id=titleauthor.title_id
	        *End Code Example
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Using the 32-Bit ODBC Driver Manager, create a DataSource for a database on a
	  Remote Server like the "pubs" database on Microsoft SQL Server.
	
	2. Open a database and create a remote view using the DataSource specified
	  above.
	
	3. Add a table to the Remote View.
	
	4. Add another related table to the view. When the Join Condition dialog box
	  appears, click Cancel.
	
	5. Click the Join tab of the Remote View designer and then click the Type
	  drop-down list box.
	
	Note that Only two Join Conditions are available: "Left Outer Join" and
	"<None>."
	
	Additional query words: kbdse VFoxWin
	
	======================================================================
	Keywords          : kbvfp500 kbvfp600 kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:2.5,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
