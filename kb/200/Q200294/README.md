---
layout: page
title: "Q200294: BUG: Cannot Use LoadPicture() with Images Included in Project"
permalink: /kb/200/Q200294/
---

## Q200294: BUG: Cannot Use LoadPicture() with Images Included in Project

	Article: Q200294
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbProjManager kbvfp500 kbvfp500a kbvfp600 kbXBase kbGrpDSFox kbDSupport
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you call the LoadPicture function from within a Visual FoxPro .app or .exe
	program, and you use a file name that is the same as one that is included in the
	project, you may receive the following OLE error:
	
	  OLE error code 0x800a01e1: Unknown COM status code.
	
	CAUSE
	=====
	
	Visual FoxPro first looks at the files that are included in the project, and
	then calls application programming interfaces (APIs) that do not handle embedded
	files.
	
	RESOLUTION
	==========
	
	Change file names so that the LoadPicture function is not called with names that
	are included in the project. You can do this manually by using different names
	for your files, or programmatically at run time by using code like the
	following:
	
	  LOCAL lcOldFile, lcNewFile
	  lcOldFile = "D:\graphics\picture1.bmp"
	  lcNewFile = JUSTPATH(lcOldFile) + SYS(3) + ".bmp"
	  RENAME (lcOldFile) TO (lcNewFile)
	  x = LOADPICTURE(lcNewFile)
	  RENAME (lcNewFile) TO (lcOldFile)
	
	NOTE: The JUSTPATH function was introduced in Visual FoxPro 6.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create an empty project named Test.
	
	2. Add a new program that contains the following line of code to the project:
	
	  x = LOADPICTURE(GETFILE())
	
	3. Add a bitmap named Picture1.bmp to the project.
	
	4. Build the project to an executable named Test.exe.
	
	5. Copy both Test.exe and Picture1.bmp to a test folder, and then run Test.exe.
	
	6. When prompted, select Picuture1.bmp. You should received the OLE error that
	  is shown in the "Symptoms" section.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Brian
	Shreves, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbProjManager kbvfp500 kbvfp500a kbvfp600 kbXBase kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
