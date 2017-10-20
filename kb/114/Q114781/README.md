---
layout: page
title: "Q114781: Rushmore Requires Open Indexes in Order to Operate"
permalink: /kb/114/Q114781/
---

## Q114781: Rushmore Requires Open Indexes in Order to Operate

{% raw %}

	Article: Q114781
	Product(s): Microsoft FoxPro
	Version(s): 2.0,2.5,2.5a,2.5b,2.5c,2.6a,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a, 2.5b 
	- Microsoft FoxPro for Macintosh, versions 2.5b, 2.5c, 2.6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	FoxPro's SQL - SELECT command automatically opens any tables called in the FROM
	clause of the command. If any of these tables have an associated structural
	.CDX, that .CDX file is automatically opened. This is the standard behavior of a
	structural .CDX. However, any nonstructural .CDX files or .IDX files associated
	with the tables in the projection list must be explicitly activated in order for
	Rushmore to use them.
	
	MORE INFORMATION
	================
	
	Rushmore requires indexes in order to operate. If no suitable index is
	available, FoxPro will create an index. Creating the index will take some
	additional time, which reduces the benefits of Rushmore's query speed.
	
	To ensure the best performance possible when you use tables with nonstructural
	.CDX and .IDX indexes, open the tables and related indexes prior to issuing the
	SELECT command. FoxPro has no way to associate and automatically open .IDX files
	or nonstructural .CDX files for Rushmore.
	
	Steps to Demonstrate Behavior
	-----------------------------
	
	To see how indexes affect Rushmore's performance, do the following:
	
	1. Issue the following commands in the Command window:
	
	        USE customer
	        COPY TO testrush
	        USE testrush
	        APPEND FROM customer   && re-execute this command until ;
	                                  there are several thousand ;
	                                  records in the testrush table. ;
	                                  The point is simply to create ;
	                                  a file large enough so that the ;
	                                  timing difference is noticeable.
	
	        INDEX ON company TO testrush
	        CLOSE ALL
	
	2. Issue the following SELECT command in the Command window:
	
	        SELECT * FROM testrush WHERE company = "A"
	
	  Note the query time in the status bar.
	
	3. Close all the tables and run the query with both TESTRUSH.DBF and
	  TESTRUSH.IDX active:
	
	        CLOSE ALL
	        USE testrush INDEX testrush
	        SELECT * FROM testrush WHERE company = "A"
	
	Note the query time in the status bar.
	
	Additional query words: VFoxWin FoxMac FoxDos FoxWin performance benchmark speed tshoot slow
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300
	Version           : :2.0,2.5,2.5a,2.5b,2.5c,2.6a,3.0
	
	=============================================================================
	

{% endraw %}
