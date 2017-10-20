---
layout: page
title: "Q299955: FIX: Using SET('PRINTER) in COM Server Causes Error"
permalink: /kb/299/Q299955/
---

## Q299955: FIX: Using SET('PRINTER) in COM Server Causes Error

{% raw %}

	Article: Q299955
	Product(s): Microsoft FoxPro
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbCOMt kbvfp kbvfp600 kbvfp600bug kbGrpDSFox kbCodeSnippet kbvfp700fix kbvfp700
	Last Modified: 29-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use SET('PRINTER',2) or SET('PRINTER,3) in a Component Object Model (COM)
	server, you may receive an error message that resembles the following:
	
	  OLE IDispatch exception code 1031...
	  User-interface not allowed at this time.
	
	STATUS
	======
	
	This problem was corrected in Visual FoxPro version 7.0 for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Visual FoxPro (VFP) 6.0, paste the following code in a new program:
	
	   *!* Q299955
	   *!* Q299955
	  LOCAL lcVar
	  #DEFINE CRLF CHR(13) + CHR(10)
	
	  CREATE PROJECT PrnTest NOWAIT
	
	  lcVar = "DEFINE CLASS PrnTest AS CUSTOM OLEPUBLIC" + CRLF + ;
	          "   PROCEDURE ShowProblem" + CRLF + ;
	          "         LOCAL lcPrinter" + CRLF + ;
	          "         SYS(2335,0)" + CRLF + ;
	          "         lcPrinter = SET('PRINTER', 2)"  + CRLF + ;
	          "   ENDPROC" + CRLF + ;
	          "ENDDEFINE"
	
	  =STRTOFILE(lcVar, 'PrnTest.prg', .F.)
	  _VFP.ACTIVEPROJECT.FILES.ADD('PrnTest.prg')
	  _VFP.ACTIVEPROJECT.BUILD('PrnTest.dll', 4) 
	
	2. Save and run the program (the name is unimportant).
	
	3. Type the following commands in the Command window:
	
	  x = CREATEOBJECT("PrnTest.PrnTest")
	  x.ShowProblem()
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCOMt kbvfp kbvfp600 kbvfp600bug kbGrpDSFox kbCodeSnippet kbvfp700fix kbvfp700 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
