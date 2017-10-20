---
layout: page
title: "Q317491: FIX: Project.Files.Count Property Not Incremented Properly"
permalink: /kb/317/Q317491/
---

## Q317491: FIX: Project.Files.Count Property Not Incremented Properly

{% raw %}

	Article: Q317491
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbProjManager kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283
	Last Modified: 26-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you add a file to a project through the Visual FoxPro 7.0 user interface,
	the Count property does not increment properly.
	
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
	
	The following code will create a new project and add three files to the project.
	The program uses the project's ADD method to add the first two files to the
	project. The program then opens the Add dialog box in Visual FoxPro for you to
	add the third file to the project.
	
	After the program adds each file to the project, the program prints the value of
	the Project.Files.Count property to the screen. Note that this value still
	returns 2 after you add the third file.
	
	NOTE: The Count property also does not decrement correctly when you use the
	Visual FoxPro user interface to delete files from the project. You must close
	and reopen the project to refresh the Count property.
	
	To reproduce the problem, follow these steps:
	
	1. Paste the following code in a new program and run the program:
	
	  CLEAR
	  SET RESOURCE OFF
	  IF TYPE('_VFP.ACTIVEPROJECT') != "U"
	  	_VFP.ACTIVEPROJECT.CLOSE
	  ENDIF
	  LOCAL lcText AS STRING
	  CLEAR
	  DELETE FILE testxx.pj?
	  CREATE PROJECT testxx NOWAIT
	  MOVE WINDOW "Project Manager - Testxx" TO 0,40
	  DELETE FILE testxx.prg
	  =STRTOFILE("WAIT WINDOW 'Hello'",'testxx.prg',.T.)
	  _VFP.ACTIVEPROJECT.FILES.ADD('testxx.prg')
	  ? "The value of the Count Property is "+ ALLTRIM(STR(_VFP.ACTIVEPROJECT.FILES.COUNT))
	  _VFP.ACTIVEPROJECT.FILES.ADD(HOME()+'ffc\_base.vcx')
	  ? "The value of the Count Property is "+ ALLTRIM(STR(_VFP.ACTIVEPROJECT.FILES.COUNT))
	  _CLIPTEXT = HOME()+'ffc\_dialogs.vcx'
	  * Select Classes node in tree
	  KEYBOARD '{tab}{DNARROW}{DNARROW}{DNARROW}'
	  DOEVENTS
	  * Select Project/Add from menu
	  KEYBOARD '{pause 1}'
	  DOEVENTS
	  KEYBOARD '{pause 1}{alt+o}a'
	  DOEVENTS
	  ? "You just added a third file."
	  ? "The value of the Count Property is "+ ALLTRIM(STR(_VFP.ACTIVEPROJECT.FILES.COUNT))
	  SET RESOURCE ON
	  RETURN
	
	2. When the Add dialog box appears, press CTRL+V, and then press ENTER to add
	  the third file to the project. Note that the output to the screen indicates
	  that Project.Files.Count still equals 2.
	
	Additional query words: kbVFP700sp1fix
	
	======================================================================
	Keywords          : kbProjManager kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
