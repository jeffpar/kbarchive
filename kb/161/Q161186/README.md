---
layout: page
title: "Q161186: FIX: MODIFY MEMO Command Ignores IN WINDOW Clause"
permalink: kb/161/Q161186/
---

## Q161186: FIX: MODIFY MEMO Command Ignores IN WINDOW Clause

	Article: Q161186
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbprogramming kbvfp kbvfp500aFIX kbvfp500bugkbbuglist kbfixlist
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Visual FoxPro 5.0 ignores the IN WINDOW clause of the MODIFY MEMO command. The
	memo's window appears outside the parent window. Visual FoxPro 3.0b and FoxPro
	2.x respect this clause. In those versions, the memo window appears within the
	parent window.
	
	RESOLUTION
	==========
	
	The MODIFY FILE... IN WINDOW command functions properly. Use the COPY MEMO
	command to place the contents of the memo field into a text file. Then display
	the text file with the MODIFY FILE command.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro
	5.0a.
	
	MORE INFORMATION
	================
	
	The following program illiterates this behavior.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a program containing the following code:
	
	     IF 'Visual'$VERS()
	        USE HOME() + 'samples\data\employee'
	     ELSE
	        USE HOME() + 'tutorial\salesman'
	     ENDIF
	     DEFINE WINDOW Test FROM 1,1 TO 25, 70 ;
	      SYSTEM FLOAT GROW CLOSE Title "Test"
	     ACTIVATE WINDOW Test
	     MODIFY MEMO notes IN WINDOW Test
	     USE
	
	2. Run the program. Notice the window containing the memo appears outside the
	  window called Test.
	
	Additional query words: window
	
	======================================================================
	Keywords          : kbprogramming kbvfp kbvfp500aFIX kbvfp500bug kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
