---
layout: page
title: "Q306079: PRB: SET PROCEDURE TO Causes Unknown Error with FoxPro DLL"
permalink: kb/306/Q306079/
---

## Q306079: PRB: SET PROCEDURE TO Causes Unknown Error with FoxPro DLL

	Article: Q306079
	Product(s): Microsoft FoxPro
	Version(s): 5.0,5.0a,6.0,7.0
	Operating System(s): 
	Keyword(s): kbCOMt kbvfp kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet kbvfp500xSearch kbv
	Last Modified: 30-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0, 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a COM dynamic-link library (DLL) which uses SET PROCEDURE TO is instantiated
	more than once, the Init method of the second instance may fail with one of the
	following messages:
	
	  OLE error code 0x80004005: Unspecified error.
	
	  OLE error code 0x80020009: Exception occurred.
	
	CAUSE
	=====
	
	To instantiate an OLEPUBLIC class, Visual FoxPro must be able to find all the
	code for the class. There is an internal SET PROCEDURE/SET CLASSLIB to detect
	all the related code; if you try to change this setting, an error occurs.
	
	RESOLUTION
	==========
	
	Use SET PROCEDURE TO with the ADDITIVE keyword.
	
	STATUS
	======
	
	This is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	To see this behavior, run the following code. Uncomment the ADDITIVE clause for
	the code to work.
	
	  CLOSE ALL
	  SET SAFETY OFF
	  ERASE testLib.*
	  ERASE comTest.*
	
	  SET TEXTMERGE TO testLib.prg NOSHOW
	  TEXT 
	     *!* Dummy function library
	  ENDTEXT
	
	  SET TEXTMERGE TO comTest.prg NOSHOW
	  TEXT 
	     DEFINE CLASS comTest AS Custom OLEPUBLIC
	        FUNCTION SetProc
	           SET PROCEDURE TO testlib &&ADDITIVE
	        ENDFUNC
	     ENDDEFINE
	  ENDTEXT
	
	  BUILD PROJECT comtest FROM comtest.prg
	  BUILD DLL comtest FROM comtest
	
	  loComTest1 = CREATEOBJECT("ComTest.ComTest")
	  loComTest1.SetProc()
	  loComTest2 = CREATEOBJECT("ComTest.ComTest")  && This line will give error.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCOMt kbvfp kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet kbvfp500xSearch kbvfp700 _IK283 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP700 kbVFP500a
	Version           : :5.0,5.0a,6.0,7.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
