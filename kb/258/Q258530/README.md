---
layout: page
title: "Q258530: FIX: Multiple References to File Object Causes OLE Error"
permalink: kb/258/Q258530/
---

## Q258530: FIX: Multiple References to File Object Causes OLE Error

	Article: Q258530
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbProjManager kbvfp600 kbvfp600bug kbGrpDSFox kbDSupport kbCodeSnippet kbVS600sp4fix kb
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When obtaining multiple references to an object in the Project.Files collection,
	you may receive the error message:
	
	  OLE Exception error: Exception code c0000005. OLE object may be corrupt.
	
	RESOLUTION
	==========
	
	A workaround in builds of Visual FoxPro 6.0 prior to Visual Studio Service Pack
	4 is to refer to the objects in the Files collection by number instead of name.
	The following code does not produce the exception error in Visual Studio Service
	Pack 3 and earlier:
	
	  *Start of Code
	  MODIFY PROJECT proj1 NOWAIT NOSHOW
	  loFile = Application.ActiveProject.Files(1)
	  ? VARTYPE(loFile)            && Should be "O" for object
	  RELEASE loFile
	  loFile = Application.ActiveProject.Files(1)
	  *End of Code
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article. This bug was corrected in the latest
	service pack for Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the following
	article numbers to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	To download the latest Visual Studio service pack, visit the following Microsoft
	Web site:
	
	  http://msdn.microsoft.com/vstudio/downloads/updates.asp
	
	MORE INFORMATION
	================
	
	1. Create a new project called "Proj1" (without the quotation marks).
	
	2. Add an empty file to the Code tab called "MyProg.prg" (without the quotation
	  marks).
	
	3. Type the following code into the Command Window:
	
	  MODIFY PROJECT proj1 NOWAIT NOSHOW
	  loFile = Application.ActiveProject.Files("myprog.prg")
	  ? VARTYPE(loFile)            && Should be "O" for Object
	  RELEASE loFile
	  loFile = Application.ActiveProject.Files("myprog.prg")
	
	After running the code, you receive the error message listed in the "Symptoms"
	section.
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbProjManager kbvfp600 kbvfp600bug kbGrpDSFox kbDSupport kbCodeSnippet kbVS600sp4fix kbVS600sp4 kbVS600sp5fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
