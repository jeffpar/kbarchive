---
layout: page
title: "Q133003: BUG: SQL SELECT Brings Up Dialog Twice Erroneously"
permalink: /kb/133/Q133003/
---

## Q133003: BUG: SQL SELECT Brings Up Dialog Twice Erroneously

	Article: Q133003
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.6a; MS-DOS:2.6a; WINDOWS:2.6a,3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500aBUG kbvfp260aBUGkbbuglist
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft FoxPro for Windows, version 2.6a 
	- Microsoft FoxPro for Macintosh, version 2.6a 
	- Microsoft FoxPro for MS-DOS, version 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An SQL SELECT command, using LOCFILE() or GETFILE() to find the source table or
	using PUTFILE() to specify the destination table, may bring up the dialog box
	for LOCFILE(), GETFILE(), or PUTFILE() twice.
	
	WORKAROUND
	==========
	
	Store the return value of the LOCFILE(), GETFILE(), or PUTFILE() function in a
	variable, and pass this variable to the SELECT command as a named expression
	(that is, in parentheses) as in this example:
	
	  cFilename=LOCFILE('','DBF','Select a Table')
	     SELECT * FROM (cFilename)
	
	  -or-
	
	  cFilename=PUTFILE('Table','','DBF')
	     SELECT * FROM <tablename> INTO TABLE (cFilename)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	Run the following command:
	
	  SELECT * FROM customer INTO TABLE PUTFILE()
	
	The Save As dialog appears twice. To make it work correctly, modify it to:
	
	  cFilename=PUTFILE()
	     SELECT * FROM customer INTO TABLE (cFilename)
	
	Additional query words: kbvfp300 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbvfp kbvfp500aBUG kbvfp260aBUG kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro260aMac kbFoxPro260aDOS kbFoxPro260a kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : MACINTOSH:2.6a; MS-DOS:2.6a; WINDOWS:2.6a,3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
