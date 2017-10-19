---
layout: page
title: "Q318264: FIX: DO FORM Command in an .exe Holds Form Until Process Ends"
permalink: /kb/318/Q318264/
---

## Q318264: FIX: DO FORM Command in an .exe Holds Form Until Process Ends

	Article: Q318264
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbProjManager kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 kbVFP700sp1fix
	Last Modified: 10-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an executable (.exe) file calls a form that is not part of the .exe file,
	and you then attempt to delete the form file, you may receive the following
	error message:
	
	  File is in use.
	
	CAUSE
	=====
	
	The DO FORM command in the .exe file does not release the form file until the
	process ends.
	
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
	
	Steps to Reproduce Behavior:
	
	Paste the following code in a program (.prg) file named Test, and then run the
	program from the Command window:
	
	NOTE: The code creates and runs an .exe file, that runs a form. The .exe file
	then tries to delete the form file.
	
	  SET SAFETY OFF
	
	  *  Using VFP6 compatible code:
	  set print to myexe.prg
	  set print on
	
	  \	myform = "testform1"
	  \	DO FORM (myform)
	  \	CLEAR ALL
	  \	CLOSE ALL
	  \	RELEASE ALL
	  \	CLEAR ALL
	  \	CLOSE ALL
	  \	myform = "testform1"
	  \	ERASE (myform + ".*")
	  	
	  set print off
	  set print to
	
	  clear typeahead
	  KEYBOARD "{ctrl+W}"
	  CREATE FORM testform1
	
	  BUILD PROJECT myexe FROM myexe
	  BUILD EXE myexe FROM myexe
	  RUN /n myexe
	
	Because the .exe file has not released the form file, you receive the error
	message that is described in the "Symptoms" section.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbProjManager kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 kbVFP700sp1fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
