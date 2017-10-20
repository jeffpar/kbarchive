---
layout: page
title: "Q150505: DOCERR: Commands Not Supported by Visual FoxPro ODBC Driver"
permalink: /kb/150/Q150505/
---

## Q150505: DOCERR: Commands Not Supported by Visual FoxPro ODBC Driver

{% raw %}

	Article: Q150505
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for Visual FoxPro, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Visual FoxPro ODBC driver Help file (Drvvfp.hlp) lists all the commands
	supported by the driver. However, the ODBC driver does not support all of the
	documented commands.
	
	MORE INFORMATION
	================
	
	The following Visual FoxPro commands are incorrectly listed as supported by the
	Visual FoxPro driver:
	
	  APPEND FROM
	  APPEND MEMO
	  DECLARE - DLL
	  ERROR Command
	  GETCP()
	  GETEXPR()
	  MESSAGE()
	  ON KEY Interface command
	  PAD() Interface Function
	  REMOVE TABLE
	  CLOSE DATA
	  REFRESH()
	  REQUERY()
	  SET CARRY
	  SET DEFAULT
	  SET FIELDS TO
	  SET PROC TO
	  UPDATE ON
	  CREATE DATA
	
	Calling these commands in a trigger results in the following error messages:
	
	  Connectivity error: [Microsoft][ODBC Visual FoxPro Driver]Unsupported command
	  in rule or trigger
	
	-or-
	
	  Connectivity error: [Microsoft][ODBC Visual FoxPro Driver]Unsupported
	  function in rule or trigger
	
	
	Additional query words: 1.00 VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbODBCSearch kbODBCVFP100
	Version           : WINDOWS:1.0
	
	=============================================================================
	

{% endraw %}
