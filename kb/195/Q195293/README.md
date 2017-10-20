---
layout: page
title: "Q195293: BUG: Code Profiler Add-In Gives Errors With Project Using ADO"
permalink: /kb/195/Q195293/
---

## Q195293: BUG: Code Profiler Add-In Gives Errors With Project Using ADO

{% raw %}

	Article: Q195293
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbAddIn kbCompiler kbVBp500bug kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to use the Visual Basic Code Profiler DLL with a project that
	utilizes ADO, the following compiler error message will be returned from the
	"VBCP_Startup" subroutine found in VBCPCODE.BAS module:
	
	  Method or Data Member Not Found
	
	The Visual Basic Compiler will be referring to the "index" property of the
	mtblVBCPTbl Recordset object.
	
	CAUSE
	=====
	
	The Visual Basic Code Profiler (VBCP) uses DAO to perform the profiling. When it
	is used in a project that contains ADO, the declarations of Recordset get
	created as ADO Recordsets and therefore cause the error.
	
	RESOLUTION
	==========
	
	The workaround is to use DAO as a prefix to all the Database and Recordset
	declarations in the vbcpcode.bas module as in the following:
	
	     Dim mdbVBCPDB As DAO.Database
	     Dim mtblVBCPTbl As DAO.Recordset
	     Dim recTmp As DAO.Recordset
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	======================================================================
	Keywords          : kbAddIn kbCompiler kbVBp500bug kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
