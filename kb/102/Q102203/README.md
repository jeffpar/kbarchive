---
layout: page
title: "Q102203: BUG: Print Job Is Not Released to Printer"
permalink: kb/102/Q102203/
---

## Q102203: BUG: Print Job Is Not Released to Printer

	Article: Q102203
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.0,2.5,2.5a,2.5b,2.6; UNIX:2.6; WINDOWS:2.5,2.5a,2.5b,2.6,3.0,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbnetwork kbprint kbPrinting kbvfp500aBUG kbvfp250bug kbvfp250bBUGkbbuglist
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 5.0a, 6.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a, 2.5b, 2.6 
	- Microsoft FoxPro for UNIX, version 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are printing in FoxPro, the print job is not immediately released to
	the printer if a print spooler (such as Windows Print Manager) is being used.
	
	NOTE: Print spoolers are often used in network environments.
	
	CAUSE
	=====
	
	FoxPro still has a current connection to the spooler. Until this connection is
	terminated, the spooler will not release the print job.
	
	RESOLUTION
	==========
	
	To resolve this problem, do one of the following:
	
	- Issue the SET PRINTER TO command without any other parameters; for example:
	
	  
	
	        REPORT FORM test TO PRINTER
	        SET PRINTER TO
	
	  -or-
	
	- Quit FoxPro. This will terminate FoxPro's connection to the spooler and the
	  print job will be sent to the printer.
	
	  -or-
	
	- If you are using FoxPro for Windows, under Windows 3.x, turn off Print
	  Manager in the Windows Control Panel by double-clicking the Printers icon and
	  then clearing the Use Print Manager check box.
	
	  -or-
	
	- Issue a RUN command; for example:
	
	  
	
	       RUN DIR > NUL
	
	  NOTE: Using the RUN command will bring up an MS-DOS session.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words: netware novell novel lantastic lan manager flush Buffer kbvfp300 kbvfp500 kbvfp500a kbvfp600
	
	======================================================================
	Keywords          : kbnetwork kbprint kbPrinting kbvfp500aBUG kbvfp250bug kbvfp250bBUG kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro260DOS kbFoxPro260UNIX kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300 kbVFP500 kbVFP600 kbVFP500a
	Version           : MS-DOS:2.0,2.5,2.5a,2.5b,2.6; UNIX:2.6; WINDOWS:2.5,2.5a,2.5b,2.6,3.0,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
