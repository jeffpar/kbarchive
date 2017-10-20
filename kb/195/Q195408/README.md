---
layout: page
title: "Q195408: PRB: Specifying View KeyField Sets Other Fields Updateable"
permalink: /kb/195/Q195408/
---

## Q195408: PRB: Specifying View KeyField Sets Other Fields Updateable

{% raw %}

	Article: Q195408
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 KbDBFDBC
	Last Modified: 10-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Specifying the keyfield of a View sets the rest of the fields to be updateable,
	although the fields are not being set to be updateable explicitly.
	
	RESOLUTION
	==========
	
	Use a DBSETPROP() command similar to the following to clear the fields in the
	view that you do not want to be updateable:
	
	     DBSETPROP("TstVw.Fld1","Field","Updatable",.F.)
	
	Also, you can open the view in the View Designer and clear the fields that you do
	not want to be updateable, from the Update Criteria tab.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Create and run a program with the following code:
	
	     CLOSE DATA ALL
	     CREATE DATA TstDBC
	     CREATE TABLE Tbl1 (Fld1 c(10),Fld2 d, Fld3 n(4))
	     FOR i = 1 TO 4
	        INSERT INTO Tbl1 VALUES (STR(i),DATE(),1234)
	     ENDFOR
	     CREATE SQL VIEW TstVw AS SELECT * FROM Tbl1
	     USE TstVw
	     =DBSETPROP("TstVw.Fld1","Field","KeyField",.T.)
	     ? DBGETPROP("TstVw.Fld2","Field","Updatable")
	     ? DBGETPROP("TstVw.Fld3","Field","Updatable")
	
	If the table for which the view is being created has a primary key, then that
	field is set as the keyfield automatically when the view is created. The
	following code reproduces this behavior:
	
	     CLOSE DATA ALL
	     CREATE DATA TstDBC
	     CREATE TABLE Tbl1 (fld1 c(10) PRIMARY KEY,fld2 d, fld3 n(4))
	     FOR i = 1 TO 4
	        INSERT INTO Tbl1 VALUES (STR(i),DATE(),1234)
	     ENDFOR
	     CREATE SQL VIEW TstVw AS SELECT * FROM tbl1
	     USE TstVw
	     ? DBGETPROP("TstVw.Fld2","Field","Updatable")
	     ? DBGETPROP("TstVw.Fld3","Field","Updatable")
	
	Note that both of the DBGETPROP() commands return .T., meaning that both of the
	fields are updateable.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 KbDBFDBC 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
