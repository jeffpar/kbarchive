---
layout: page
title: "Q166137: PRB: SELECT-SQL COUNT() Field Function Ignores SET DELETED ON"
permalink: /kb/166/Q166137/
---

## Q166137: PRB: SELECT-SQL COUNT() Field Function Ignores SET DELETED ON

{% raw %}

	Article: Q166137
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): kbvfp
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual Foxpro, the SQL COUNT field function does not work correctly when SET
	DELETED is ON. It returns the count of all records including the deleted records
	instead of just the non-deleted records. However, the SQL COUNT field function
	is working correctly in Visual FoxPro 3.x.
	
	RESOLUTION
	==========
	
	Use one of the following commands:
	
	     SELECT COUNT(*) FROM <table name> WHERE !DELETED()
	
	  -or-
	
	     COUNT TO <memvar>
	
	However, using the COUNT TO <memvar> moves the record pointer while using
	the SELECT statement does not.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Run the following code in a program file.
	
	     CLEAR
	     SET DELETED ON
	     CREATE CURSOR Test ( cTest C(10))
	     INSERT INTO Test VALUES ( "One")
	     INSERT INTO Test VALUES ( "Two")
	     DELETE
	
	     LOCAL aRet[1]
	     SELECT COUNT(*) FROM Test INTO ARRAY aRet
	     ?aRet[1]       && Incorrectly returns 2
	
	     SELECT COUNT(cTest) FROM Test INTO ARRAY aRet
	     ?aRet[1]       && Incorrectly returns 2
	
	     SELECT cTest FROM Test INTO CURSOR Temp
	     ?_TALLY        && Incorrectly returns 2
	
	     SELECT COUNT(cTest) FROM Test WHERE !DELETED() INTO CURSOR Temp
	     ?_TALLY        && Correctly returns 1
	
	     COUNT TO aRet
	     ?aRet          && Correctly returns 1
	
	     CLOSE ALL
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
