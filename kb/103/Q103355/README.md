---
layout: page
title: "Q103355: EXPORT/ COPY TO Commands Don't Work with Entire Tables"
permalink: /kb/103/Q103355/
---

## Q103355: EXPORT/ COPY TO Commands Don't Work with Entire Tables

{% raw %}

	Article: Q103355
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.0,2.5,2.5a,2.5b; WINDOWS:2.5,2.5a,2.5b,3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a, 2.5b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The EXPORT/COPY TO commands export or copy only as many records as are allowed
	by the type of file chosen to export or copy to.
	
	MORE INFORMATION
	================
	
	Lotus 1-2-3 files (.WK1, .WKS) have a limit of 8192 records. When you try to
	export or copy a FoxPro table with more than 8192 records to a Lotus 1-2-3 file,
	FoxPro transfers only the first 8192 records in the table to the .WK1 file
	because this is the established limit of this type of file. Similarly, only
	16,384 records can be export or copied to a Microsoft Excel (.XLS) file.
	
	Listed below are the limits for all the EXPORT/COPY TO file types:
	
	  Type              Record limit
	  ------------------------------
	
	  DIF                  65,534
	  MOD                  16,383
	  SYLK                  9,998
	  WK1(S)                8,191
	  WR1(K)                8,191
	  XLS                  16,383
	
	
	Sample Code
	-----------
	
	     SET STATUS ON
	     USE <x>
	     * where <x> is a table with less than 8192 records.
	     GO TOP
	     * Note that the record pointer is on record 1.
	     EXPORT/COPY TO expfile.wk1 TYPE WK1
	     * Note the record pointer is now at EOF.
	     USE <y>
	     * where <y> is a table with more than 8192 records.
	     GO TOP
	     * Note that the record pointer is on record 1.
	     EXPORT/COPY TO expfile.wk1 TYPE WK1
	     * Note the record pointer is now on record 8192.
	
	Additional query words: vFoxWin FoxDos FoxWin third party 3rd-party
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300 kbVFP300b
	Version           : MS-DOS:2.0,2.5,2.5a,2.5b; WINDOWS:2.5,2.5a,2.5b,3.0,3.0b
	
	=============================================================================
	

{% endraw %}
