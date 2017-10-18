---
layout: page
title: "Q317493: FIX: &quot;Unable to find Visual Class Library&quot; Msgs with NewObject"
permalink: kb/317/Q317493/
---

## Q317493: FIX: &quot;Unable to find Visual Class Library&quot; Msgs with NewObject

	Article: Q317493
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbProjManager kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283
	Last Modified: 06-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you build a project that includes a program or method that contains the
	NewObject function, and the program passes the NewObject function a long
	parameter that calls a Visual FoxPro function, the following error messages may
	appear:
	
	  Unable to find Visual Class Library PASSING A LONG STRING AS A NEWOBJECT()
	  EPARAMETER1,
	
	  -and-
	
	  Unable to find Visual Class Library VFP 7
	
	This problem does not occur when the parameter does not contain a Visual FoxPro
	function call.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Visual FoxPro for
	Windows 7.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q316964 How to Obtain the Latest Visual FoxPro for Windows 7.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Visual FoxPro for
	Windows 7.0. This problem was first corrected in Visual FoxPro for Windows 7.0
	Service Pack 1.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Paste the following code in a program (.prg) file named Test.prg and then run the
	program from the Command window.
	
	Note: If you use the Project Manager to build the project, you receive the same
	error messages.
	
	  #DEFINE PROJNAME 'testxx'
	
	  CLEAR ALL
	  SET SAFETY OFF
	  CLEAR
	  DELETE FILE PROJNAME+ '.pj?'
	  DELETE FILE PROJNAME+ '.exe'
	  TEXT to lcProgram NOSHOW
	
	  newobject("TestClass","mainxx.prg","", ;
	  "This is a test of a strange behavior of the"+CHR(32)+ ;
	  "Test1 VFP7 Project Manager.  Something to do with "+ ;
	  "passing a long string as a NEWOBJECT() eParameter1, "+ ;
	  "and that string including a function call.")
	
	  newobject("TestClass","mainxx.prg","", ;
	  PROGRAM() + " This is a test of a strange behavior of the " + ;
	  "XFP 7.0 Project Manager.  Something to do with " + ;
	  "passing a long string as a NEWOBJECT() eParameter1, " + ;
	  "and that string including a function call.")
	
	  newobject("TestClass","mainxx.prg","", ;
	  "Note that this string is just about as long, but does not " + ;
	  "generate an error in the VFP 7.0 Project Manager.  " + ;
	  "Something to do with " + ;
	  "passing a long string as a NEWOBJECT() eParameter1, " + ;
	  "and that string including a function call.")
	
	  RETURN
	
	  DEFINE CLASS TestClass AS Custom
	  PROCEDURE Init(tcString)
	     MESSAGEBOX(tcString)
	  ENDPROC
	  ENDDEFINE
	
	  ENDTEXT
	
	  =STRTOF(lcProgram,'mainxx.prg')
	  CREATE PROJECT PROJNAME NOWAIT
	  LOCAL pj AS VisualFoxpro.IFoxProject
	  pj=_VFP.APPLICATION.ACTIVEPROJECT
	  pj.DEBUG = .F.
	  pj.FILES.ADD('mainxx.prg')
	  * Rebuild the project and display errors if there are any.
	  ? pj.BUILD(PROJNAME,1,.T.,.T.)
	  * Build an executable and display errors if there are any.
	  ? pj.BUILD(PROJNAME,3,.T.,.T.)
	  pj.CLOSE
	  RETURN
	
	Additional query words: kbVFP700sp1fix
	
	======================================================================
	Keywords          : kbProjManager kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
