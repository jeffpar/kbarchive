---
layout: page
title: "Q130210: Error Message Parameters Displayed with SYS(2018)"
permalink: /kb/130/Q130210/
---

## Q130210: Error Message Parameters Displayed with SYS(2018)

{% raw %}

	Article: Q130210
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Using a single function, SYS(2018), Visual FoxPro can return the file, field, or
	variable name as a parameter for the error messages listed here. Error messages
	that have optional error message parameters may not always return a parameter
	through SYS(2018). This article describes what is returned from error message
	parameters by SYS(2018) depending on which error SYS(2018) is returning.
	
	MORE INFORMATION
	================
	
	Error Message Parameters Returned by SYS(2018)
	----------------------------------------------
	
	  "<cursor>" must be created with SELECT ... INTO TABLE. (1815)
	
	  "<field>" is not related to the current work area. (1165)
	
	  "<field> | <variable>" is not unique and must be qualified.
	  (1832)
	
	  "<file>" is not a FoxPro EXE file. (1196)
	
	  "<file>" is not an object file. (1309)
	
	  "<name>" is not a file variable. (226)
	
	  "<name>" is not a file variable. (226)
	
	  "<name>" is not a memory variable. (225)
	
	  "<name>" is not an array. (232)
	
	  ALIAS ["<alias>"] not found. (13)
	
	  Application file "<file>" not closed. (1178)
	
	  Cannot create file "<file>". (102)
	
	  Cannot open file "<file>". (1101)
	
	  File ["<file>"] does not exist. (1)
	
	  Key label ["<label>"] is invalid. (1255)
	
	  Not enough disk space for "<file name>". (56)
	
	  Object file "<file>" is the wrong version. (1195)
	
	  Procedure "<procedure>" not found. (1162)
	
	  Queue "<queue>" not found. (1716)
	
	  Server "<server>" not found. (1715)
	
	  SQL column "<field> | <variable>" not found. (1806)
	
	  Variable ["<variable>"] not found. (12)
	
	  WINDOW ["<window name>"] has not been defined. (214)
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
