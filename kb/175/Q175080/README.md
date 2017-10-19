---
layout: page
title: "Q175080: PRB: RDORESULTSET's SOURCETABLE Property Won't Return a Value"
permalink: /kb/175/Q175080/
---

## Q175080: PRB: RDORESULTSET's SOURCETABLE Property Won't Return a Value

	Article: Q175080
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	RDO's SOURCETABLE property will not return a value when used in conjunction with
	Microsoft's Oracle ODBC Driver or the Oracle ODBC Driver supplied by Oracle.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start the Visual Basic 5.0 or 6.0 Enterprise edition.
	
	2. Add "Microsoft's Remote Data Objects 2.0" under the Project References.
	
	3. Place the following code in the Load Method of a Visual Basic Form:
	
	       Dim rdocn As rdoConnection
	       Dim rdors As rdoResultset
	       Set rdocn = rdoEngine(0).OpenConnection("", rdDriverNoPrompt, False, _
	         "Driver={Microsoft ODBC for Oracle}; UID=PSS; PWD=pss;" _
	         & "ConnectString=TNS:NCORACLE73")
	       On Error GoTo MyErr
	         rdocn.Execute ("drop table TESTA1")
	       MyErr:
	       rdocn.Execute ("create table testa1 (col1 char(5), col2 char(5))")
	       Set rdors =rdocn.OpenResultset("select * from testa1",rdOpendynamic, _
	          rdConcurLock)
	       Debug.Print "sourcecolumn:  " & rdors(0).SourceColumn
	       Debug.Print "sourcetable:  " & rdors(0).SourceTable 'Nothing Returned
	
	4. Run the form and note the Intermediate Window's output.
	
	Additional query words: msorcl10.dll dated 01/09/97 msorcl32.dll dated 08/21/97 kbVBp500 kbVBp600 kbdse kbDSupport kbVBp kbOdbc kbRDO
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
