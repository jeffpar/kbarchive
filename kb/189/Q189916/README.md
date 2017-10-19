---
layout: page
title: "Q189916: BUG: SET(&quot;DEBUGOUT&quot;) Returns Filename After SET DEBUGOUT TO"
permalink: /kb/189/Q189916/
---

## Q189916: BUG: SET(&quot;DEBUGOUT&quot;) Returns Filename After SET DEBUGOUT TO

	Article: Q189916
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
	
	You issue a SET DEBUGOUT TO <some filename> to direct debug output to a
	file. Subsequently, you issue a SET DEBUGOUT TO to direct output to the Debug
	Output window. If you then check the return value of SET("DEBUGOUT"), it will
	continue to indicate that DEBUGOUT is directed to the file.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code from a program (.prg) file:
	
	        CLEAR
	        ?1, SET("DEBUGOUT")
	        SET DEBUGOUT TO TestDebg.Txt
	        ?2, SET("DEBUGOUT")
	        DEBUGOUT "Set to file"
	        SET DEBUGOUT TO
	        DEBUGOUT "Not set to file"
	        ?3, SET("DEBUGOUT")
	        MODIFY FILE TestDebg.Txt NOWAIT
	
	The file TestDebg.txt will be displayed containing the text "Set to file." This
	is expected behavior. The SET DEBUGOUT TO is working properly, as the second
	DEBUGOUT statement is not sent to the file.
	
	You will get the following output printed to the screen:
	
	  1
	  2 <current drive and directory>\TESTDEBG.TXT
	  3 <current drive and directory>\TESTDEBG.TXT
	
	This is not expected behavior. The line following the 3 should be empty, as is
	the line following the 1.
	
	You may change the SET DEBUGOUT TO <another file>, and SET("DEBUGOUT") will
	then return the new file name, but to clear the return value, you must restart
	Visual FoxPro. Otherwise, SET('debugout') will return the most recent file name
	it was set to for the remainder of the Visual FoxPro session.
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Jim Saunders, Microsoft Corporation
	
	
	Additional query words: kbVFp500abug kbXBase
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
