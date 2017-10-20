---
layout: page
title: "Q191585: PRB: File Collections' Add Method Closes Table"
permalink: /kb/191/Q191585/
---

## Q191585: PRB: File Collections' Add Method Closes Table

{% raw %}

	Article: Q191585
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Invoking a file collections' Add method to add a table to a project object
	causes the table to close.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	This behavior also occurs in the user interface. If you add an open table to a
	project, Visual FoxPro closes the open table.
	
	The following code programmatically demonstrates this behavior. The IIF()
	statement checks if the table is open and returns a message based on the
	results.
	
	Steps to Reproduce Behavior
	---------------------------
	
	Sample Code
	-----------
	
	     CLOSE ALL
	     CLEAR ALL
	     CLEAR
	     DELETE FILE test.pj?
	     SET SAFETY OFF
	
	     CREATE TABLE testtable (field1 c(10), field2 m)
	
	     LOCAL ;
	        loFIle
	     USE testtable
	     ? IIF(USED("TestTable"), "Test Table is Open!", "Test Table is NOT ;
	     Open!")
	     MODIFY PROJECT test NOWAIT NOSHOW
	     loFIle = APPLICATION.ACTIVEPROJECT.FILES.ADD("TestTable.Dbf")
	
	     IF VARTYPE(loFIle) = "O"
	        WAIT WINDOW "File Added!" TIME 1
	     ELSE
	        WAIT WINDOW "File Not Added!" TIME 1
	     ENDIF
	
	     ? IIF(USED("TestTable"), "Test Table is Still Open!", ;
	      "Test Table is NOT still Open!")
	     APPLICATION.ACTIVEPROJECT.CLOSE()
	
	Additional query words: kbVFp600 kbProjManager
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
