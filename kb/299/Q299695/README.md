---
layout: page
title: "Q299695: FIX: Err Msg: &quot;Ambiguous date/datetime constant&quot; with View"
permalink: /kb/299/Q299695/
---

## Q299695: FIX: Err Msg: &quot;Ambiguous date/datetime constant&quot; with View

{% raw %}

	Article: Q299695
	Product(s): Microsoft FoxPro
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp600 kbvfp600bug kbXBase KbDBFDBC kbGrpDSFox kbCodeSnippet kbvfp700fix kbvfp7
	Last Modified: 29-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you create a view with a WHERE clause that uses a date in the following
	format
	
	  {^yyyy-mm-dd}
	
	you may receive the following error message:
	
	  Ambiguous date/datetime constant. Use the format:
	  {^yyyy-mm-dd[,][hh[:mm[:ss]] [a|p]]}
	
	STATUS
	======
	
	This problem was corrected in Visual FoxPro version 7.0 for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. In Visual FoxPro (VFP), save the following code as a program:
	
	  *!*
	  SET STRICTDATE TO 1
	  #DEFINE DBCNAME 'testdb'
	  #DEFINE TABNAME 'testtab'
	  #DEFINE TABCOUNT 1
	
	  CLEAR
	  CLOSE DATABASES ALL
	  DELETE FILE testdb.DBC
	  DELETE FILE testdb.dc?
	
	  CREATE DATABASE DBCNAME
	
	  FOR lni = 1 TO TABCOUNT
	  	DELETE FILE (TABNAME+ALLTR(STR(lni)))+'.dbf'
	  	DELETE FILE (TABNAME+ALLTR(STR(lni)))+'.cdx'
	  	CREATE TABLE (TABNAME+ALLTR(STR(lni))) (F1 C(10) NOT NULL ;
	  		PRIMARY KEY, F2 d NOT NULL)
	  ENDFOR
	
	  USE testtab1
	  FOR lni = 1 TO 3
	  	INSERT INTO testtab1 (F1, F2) VALUES ('Number '+ALLTR(STR(lni)), DATE()+lni-1)
	  ENDFOR
	
	  CREATE SQL VIEW vtesttab1 AS SELECT * FROM testtab1 WHERE F2 = ?dDate
	  DBSETPROP('VTESTTAB1', 'View', 'UpdateType', 1)
	  DBSETPROP('VTESTTAB1', 'View', 'WhereType', 1)
	  DBSETPROP('VTESTTAB1', 'View', 'SendUpdates', .T.)
	  DBSETPROP('VTESTTAB1', 'View', 'Tables', 'testdb!testtab1')
	  DBSETPROP('VTESTTAB1.f1', 'Field', 'KeyField', .T.)
	  DBSETPROP('VTESTTAB1.f1', 'Field', 'Updatable', .T.)
	  DBSETPROP('VTESTTAB1.f1', 'Field', 'UpdateName', 'testdb!testtab1.f1')
	  DBSETPROP('VTESTTAB1.f1', 'Field', 'DataType', "C(10)")
	
	  DBSETPROP('VTESTTAB1.f2', 'Field', 'KeyField', .F.)
	  DBSETPROP('VTESTTAB1.f2', 'Field', 'Updatable', .T.)
	  DBSETPROP('VTESTTAB1.f2', 'Field', 'UpdateName', 'testdb!testtab1.f2')
	  DBSETPROP('VTESTTAB1.f2', 'Field', 'DataType', "d")
	  DBSETPROP('VTESTTAB1', 'View', 'ParameterList', "dDate,'D'")
	
	  cDate = "{^"+TRANS(YEAR(DATE()))+"-"+TRANS(MONTH(DATE()))+"-"+TRANS(DAY(DATE()))+"}"
	  ?cDate
	
	  lcFails = .T.  && Change this to .F. for it to work correctly.
	  IF lcFails
	     _CLIPTEXT = cDate  && This fails
	  ELSE
	     dDate = &cDate  && This works
	  ENDIF
	
	  USE vtesttab1
	  BROWSE NOWAIT
	
	2. Run the program that you just created. When the View Parameter dialog box
	  appears, press CTRL+V to paste in the date that is contained in the
	  clipboard.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp600 kbvfp600bug kbXBase KbDBFDBC kbGrpDSFox kbCodeSnippet kbvfp700fix kbvfp700 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
