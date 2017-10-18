---
layout: page
title: "Q318969: FIX: Second Instance of STDLL Object Causes Exception Error"
permalink: kb/318/Q318969/
---

## Q318969: FIX: Second Instance of STDLL Object Causes Exception Error

	Article: Q318969
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 kbVFP700sp1fix
	Last Modified: 01-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run Visual FoxPro 7.0 on a computer with the locale set to a non-English
	language that has a corresponding Visual FoxPro run-time file, and you use the
	CreateObject() function to create two instances of a single-threaded DLL that
	was created with Visual FoxPro, you receive the following error message after
	Visual FoxPro creates the second instance of single-threaded DLL:
	
	  Fatal exception: Exception code: C0000005
	
	This error might not occur if Vfp7renu.dll is in the VFP7 home directory or the
	default directory.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Visual FoxPro for
	Windows 7.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q316964 How to Obtain the Latest Visual FoxPro for Windows 7.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Visual FoxPro for
	Windows 7.0.
	
	This problem was first corrected in Visual FoxPro for Windows 7.0 Service Pack 1.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	The following steps reproduce the problem when you use the German locale. This
	problem occurs in any non-English language that has its own localized run-time
	files.
	
	1. Configure the German locale on your computer. Make sure that this is the
	  default locale for the operating system.
	
	2. Paste the following code in a program (.prg) file, and then run the program
	  from the Command window:
	
	  Set Safety off
	    StrToFile( ;
	     "Define Class ClsA as Custom OlePublic"+Chr(13)+"Enddefine", ;
	     "b010828_1a.Prg" ;
	    )
	    Build Project b010828_1a from b010828_1a.Prg
	    Build Dll b010828_1a from b010828_1a
	    StrToFile( ;
	     "Define Class ClsB as Custom OlePublic"+Chr(13)+"Enddefine", ;
	     "b010828_1b.Prg" ;
	    )
	    Build Project b010828_1b from b010828_1b.Prg
	    Build Dll b010828_1b from b010828_1b
	    oRefA = CreateObject("b010828_1a.ClsA")
	    oRefB = CreateObject("b010828_1b.ClsB")
	  RETURN 
	
	Note that you receive the error that is described in the "Symptoms" section, and
	Visual FoxPro quits.
	
	To remove the entries that are placed in the Windows registry by steps 1 and 2,
	run the following code from the Command window:
	
	  CD <dir with STDLLs>
	  DECLARE INTEGER DllUnregisterServer in b010828_1a.dll
	  ? DllUnregisterServer()
	  CLEAR DLLS DllUnregisterServer
	
	  DECLARE INTEGER DllUnregisterServer in b010828_1b.dll
	  ? DllUnregisterServer()
	  CLEAR DLLS DllUnregisterServer
	
	Additional query words: crash
	
	======================================================================
	Keywords          : kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 kbVFP700sp1fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
