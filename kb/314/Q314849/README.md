---
layout: page
title: "Q314849: FIX: Parameters Passed as Empty Placeholders Default to NULL"
permalink: kb/314/Q314849/
---

## Q314849: FIX: Parameters Passed as Empty Placeholders Default to NULL

	Article: Q314849
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbCOMt kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you pass a parameter as an empty placeholder to a COM object from Visual
	FoxPro (VFP) 7.0, the placeholder defaults to a value of NULL (rather than .F.
	as in earlier versions of VFP).
	
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
	
	1. Create a new folder on your hard disk.
	
	2. Copy the VFP 7.0 run-time files Vfp7r.dll and Vfp7enu.dll to the new folder.
	  The version number of these files should be 9262.
	
	3. Paste the following code in a new program (.prg) file and then save the file
	  in the folder that you created in step 1:
	
	  CD JUSTPATH(SYS(16))
	  LOCAL lcDLLStr AS STRING, ;
	  	loMyDll AS OBJECT
	  CLEAR
	
	  TEXT TO lcDLLStr NOSHOW
	  DEFINE CLASS SERVER AS SESSION OLEPUBLIC
	  	PROCEDURE SomeMethod(p1, p2, p3)
	  	   	RETURN p2
	  	ENDPROC
	  ENDDEFINE
	  ENDTEXT
	
	  STRTOFILE(lcDLLStr, "DLLMAIN.PRG", 0)
	  CREATE PROJECT DLLMAIN NOWAIT
	  _VFP.ACTIVEPROJECT.FILES.ADD("DLLMAIN.PRG")
	  _VFP.ACTIVEPROJECT.BUILD('DLLMAIN',4)
	  _VFP.ACTIVEPROJECT.CLOSE
	
	  loMyDll = CREATEOBJECT("DLLMAIN.SERVER")
	  ? "With params like loMyDll.SomeMethod(.F.,,.F.), P2 =",loMyDll.somemethod(.F.,,.F.)
	  RELEASE loMyDll
	
	4. Run the code.
	
	The COM DLL that is created by the sample code returns NULL for the second
	parameter that it is passed. If you delete the run-time files from the folder
	(causing the COM DLL to use the VFP 7.0 SP1 versions of these files) and then
	rerun the sample code, the DLL will instead return .F. for the second parameter.
	
	Additional query words: kbVFP700sp1fix
	
	======================================================================
	Keywords          : kbCOMt kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
