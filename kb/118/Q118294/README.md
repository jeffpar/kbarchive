---
layout: page
title: "Q118294: How To Create a List of Duplicate Records"
permalink: /kb/118/Q118294/
---

## Q118294: How To Create a List of Duplicate Records

	Article: Q118294
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,2.5c; MS-DOS:2.0,2.5,2.5a,2.5b,2.6; WINDOWS:2.5,2.5a,2.5b,2.6,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a, 2.5b, 2.6 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6 
	- Microsoft FoxPro for Macintosh, versions 2.5b, 2.5c 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows how to generate a list of duplicate records in a database so
	that you can visually determine what records need to be deleted.
	
	MORE INFORMATION
	================
	
	The following code generates a full list of the duplicate records in
	INVOICES.DBF and places the list in a cursor named XXX:
	
	     USE <FoxPro_directory>\tutorial\invoices
	     SELECT * FROM invoices WHERE cno IN ;
	        (SELECT cno FROM invoices GROUP BY cno HAVING COUNT(cno) > 1) ;
	        ORDER BY cno ;
	        INTO CURSOR xxx
	
	
	Additional query words: VFoxWin FoxMac FoxDos FoxWin identical exact same having clause
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro250bMac kbFoxPro250cMac kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro260DOS kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300
	Version           : MACINTOSH:2.5b,2.5c; MS-DOS:2.0,2.5,2.5a,2.5b,2.6; WINDOWS:2.5,2.5a,2.5b,2.6,3.0
	
	=============================================================================
	
