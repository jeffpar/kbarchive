---
layout: page
title: "Q159313: DOCERR: Incorrect Help Information on Number of Tables Open"
permalink: /kb/159/Q159313/
---

## Q159313: DOCERR: Incorrect Help Information on Number of Tables Open

	Article: Q159313
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual FoxPro 5.0 Help has incorrect information about the Maximum number of
	tables that can be open at the same time.
	
	MORE INFORMATION
	================
	
	In Help under Contents, click Technical Reference and System Information. Click
	the Visual FoxPro System Capacities topic and look at the entry under "Table and
	Index Files" for "Maximum # of tables open at one time." Following is the
	entry:
	
	  Maximum # of tables open at one time 2551
	
	Visual FoxPro 5.0 does not have a limit of 2551 tables--the limit is much higher.
	To test that Visual FoxPro 5.0 allows you to have more than 2551 tables open at
	the same time run the following code:
	
	     SET ESCAPE ON
	     SET TALK OFF
	     CLEAR
	     FOR n = 1 TO 3000
	        lcTable = "TBL" + PADL(n,4,"0")
	        CREATE TABLE (lcTable) ( smallfield C(1) )
	        WAIT WINDOW "Creating " + lcTable nowait
	     ENDFOR
	
	The actual limit is approximately 65535 tables per data session. However, if you
	have more than 2000 tables open at one time, performance may be affected.
	
	Additional query words: vfoxwin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : WINDOWS:5.0
	
	=============================================================================
	
