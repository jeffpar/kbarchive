---
layout: page
title: "Q113808: How to Determine Number of Records Returned by SQL-SELECT"
permalink: /kb/113/Q113808/
---

## Q113808: How to Determine Number of Records Returned by SQL-SELECT

	Article: Q113808
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b; MS-DOS:2.0,2.5,2.5a,2.5b,2.6; WINDOWS:2.5,2.5a,2.5b,2.6,3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 09-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a, 2.5b, 2.6 
	- Microsoft FoxPro for Macintosh, version 2.5b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can create generic SELECT statements that programmatically produce result
	sets of records to be output for viewing in a number of ways. However, in
	certain instances, a SELECT statement may not produce any records in the query
	based on the SQL criteria provided.
	
	To avoid having a program act upon an empty result, the system variable _TALLY
	can be evaluated immediately after a query has been executed in order to
	determine the number of records that have been selected. For more information
	about _TALLY, see the code example below.
	
	MORE INFORMATION
	================
	
	The following rudimentary example illustrates the usage of the _TALLY system
	variable:
	
	     * GENERIC.QPR
	     *
	     SET STATUS OFF && SET STATUS BAR OFF in FoxPro for Windows
	     fyl = GETFILE('DBF','Choose a database:')
	     USE (fyl)
	     LIST STRUCTURE
	     USE
	     ACCEPT 'Enter field list, separated by commas (or ENTER for all):' ;
	        TO flds
	     IF EMPTY(flds)
	        flds='*'
	     ENDIF
	     ?
	     ACCEPT 'Enter conditions (or ENTER for none) ' TO cond
	     IF EMPTY(cond)
	        cond=''
	     ELSE
	        cond='WHERE '+cond
	     ENDIF
	
	     SELECT &flds FROM (fyl) &cond INTO CURSOR query NOCONSOLE
	
	     IF _TALLY>0
	        BROWSE
	     ELSE
	        WAIT WINDOW 'No matching records found...'
	     ENDIF
	
	Additional query words: VFoxWin FoxMac FoxDos FoxWin null blank
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro250bMac kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro260DOS kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300
	Version           : MACINTOSH:2.5b; MS-DOS:2.0,2.5,2.5a,2.5b,2.6; WINDOWS:2.5,2.5a,2.5b,2.6,3.0
	
	=============================================================================
	
