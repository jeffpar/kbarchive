---
layout: page
title: "Q95586: PRB: Unable to Find Unknown &lt;Array&gt;"
permalink: /kb/095/Q95586/
---

## Q95586: PRB: Unable to Find Unknown &lt;Array&gt;

{% raw %}

	Article: Q95586
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are building a project, the "Unable to Find Unknown <array>"
	message appears.
	
	CAUSE
	=====
	
	There are two causes for this error message. When you are passing an array to a
	procedure file, either the array has not been defined as EXTERNAL or it has been
	renamed in the procedure file using the PARAMETERS statement.
	
	When an array is passed to a procedure, the Project Manager must be able to
	identify the array; otherwise, the above error message appears.
	
	RESOLUTION
	==========
	
	If the same array name is used in the calling program and the procedure, declare
	the array as PUBLIC or as EXTERNAL in the calling program.
	
	If the array name is changed in the procedure by using the PARAMETERS
	<newname> statement, then <newname> must be declared as PUBLIC or
	EXTERNAL.
	
	Alternatively, the references may be resolved by dimensioning <newname> in
	the procedure and providing the appropriate dimensions for the array. The
	EXTERNAL statement is for use only by the Project Manager and is ignored during
	program execution.
	
	The Program Example section should be changed as following:
	
	Program Example
	---------------
	
	1. Create a program called TEST.PRG using following code:
	
	     DIMENSION invoice(4)
	     STORE 'Paid' TO invoice
	     DO dispinvo
	
	2. Create a program called DISPINVO.PRG using the following code:
	
	     ?invoice(1)
	     ?invoice(2)
	     ?invoice(3)
	     ?invoice(4)
	     RETURN
	
	3. Include both the programs in a new project and select TEST.PRG as the MAIN
	  Program.
	
	4. Select the Build option in the Project dialog box, and then select one of the
	  Rebuild Project, Build Application, or Build Executable options.
	
	NOTE: To keep the error message from appearing, add the following line of code to
	the beginning of DISPINVO.PRG:
	
	  EXTERNAL ARRAY invoice
	
	REFERENCES
	==========
	
	"Commands & Functions," version 2.0, EXTERNAL command
	
	Additional query words: VFoxWin FoxDos FoxWin error errmsg err msg
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250 kbFoxPro250a kbVFP300
	Version           : MS-DOS:2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0
	
	=============================================================================
	

{% endraw %}
