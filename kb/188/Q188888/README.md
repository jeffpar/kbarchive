---
layout: page
title: "Q188888: BUG: &quot;String is too long to fit&quot; Error Passing Variables to COM"
permalink: /kb/188/Q188888/
---

## Q188888: BUG: &quot;String is too long to fit&quot; Error Passing Variables to COM

	Article: Q188888
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The error message "String is too long to fit." is received when a character
	variable is passed by reference to a Visual FoxPro COM server, either a DLL or
	EXE.
	
	CAUSE
	=====
	
	This error is received if the character variable exceeds 255 characters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Place the following code into a new program file and save it as Test.prg:
	
	        DEFINE CLASS test AS custom OLEPUBLIC
	           Name = "test"
	           PROCEDURE vartest
	              Parameters xx
	              xx=xx+"ddd"
	              RETURN "Hello"
	           ENDPROC
	        ENDDEFINE
	
	2. Create a new project and add the program from step 1 above to the project.
	  Name the project Test.pjx.
	
	3. From the Project Manager, build either an Executable or an OLE DLL. Name it
	  Test.exe or Test.dll.
	
	4. Place the following code into a new program file and run it:
	
	        CLEAR
	        x=CREATEOBJECT("test.test")
	        IF TYPE("x")!="O"
	           RETURN
	        ENDIF
	        z=REPLICATE("z",256)
	        ? x.vartest(@z)
	        ? z
	        RETURN
	
	Additional query words: kbDSupport kbDSE kbVFp500abug kbVFp500bug
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
