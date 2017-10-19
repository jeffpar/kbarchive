---
layout: page
title: "Q191954: PRB: OLE DLL with Exposed Objects Returns Incorrect Description"
permalink: /kb/191/Q191954/
---

## Q191954: PRB: OLE DLL with Exposed Objects Returns Incorrect Description

	Article: Q191954
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under certain circumstances, an OLE .dll with two exposed objects can return the
	wrong class description in an error message.
	
	CAUSE
	=====
	
	The error routine for a User Interface error in a Visual FoxPro .dll always
	takes the class description from the first class.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new project called OLETest1.
	
	2. Place the following code into a program file called Test1.prg:
	
	        DEFINE CLASS ErrTest1 AS CUSTOM OLEPUBLIC
	
	           NAME="ErrTest1"
	           PROCEDURE gettime
	              5 &&Put here to generate an error
	              RETURN TIME()
	           ENDPROC
	        ENDDEFINE
	
	        DEFINE CLASS ErrTest2 AS CUSTOM OLEPUBLIC
	           NAME="ErrTest2"
	           PROCEDURE gettime
	              5 &&Put here to generate an error
	              RETURN TIME()
	           ENDPROC
	        ENDDEFINE
	
	3. Build this into an OLE .dll named OLETest1.
	
	4. Run the following code in the Command window:
	
	        oTmp5=CREATEOBJECT("OLETest1.ErrTest1")
	        oTmp6=CREATEOBJECT("OLETest1.ErrTest2")
	        *  ?oTmp5.gettime() && Uncomment to show correct error.
	        ?oTmp6.gettime()
	
	This produces the following error:
	
	  OLE IDispatch Exception Code 1031 from OLETest1.ErrTest1 ErrTest1:
	  ErrTest2.gettime e:\mytest\test1.prg Error Line 13 User Interface operation
	  not allowed at this time. 1031
	
	To see the error message referencing the correct class description, uncomment the
	third line of the code in step 4 and comment the fourth line.
	
	Additional query words: kbVFp600 kbAutomation kbInterOp
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
