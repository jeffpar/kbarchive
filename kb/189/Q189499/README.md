---
layout: page
title: "Q189499: FIX: VB5.EXE Application Error with UserControls in Project"
permalink: /kb/189/Q189499/
---

## Q189499: FIX: VB5.EXE Application Error with UserControls in Project

{% raw %}

	Article: Q189499
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Large projects or project groups that contain UserControls that are not compiled
	OCXs may experience the following application error:
	
	  The instruction at "0x0fbb54bb" referenced memory at "0x00000000". The memory
	  could not be "read".
	
	This behavior occurs when either compiling the project or opening a form that may
	contain a UserControl.
	
	CAUSE
	=====
	
	The UserControls contain either references to global objects or circular
	references to Forms/Modules within the project.
	
	RESOLUTION
	==========
	
	There are three possible resolutions to this issue:
	
	- Select Options from the Tools menu, select the General tab, and then deselect
	  Background Compile.
	
	- Use compiled OCXs in the project instead of having a UserControl project as
	  part of the Project Group.
	
	- Late bind global object references within UserControls and attach them to
	  instances at run-time.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual Basic version
	6.0.
	
	Additional query words: kbDSupport kbCrtl kbVBp500bug kbdss kbVBp kbVBp600fix
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
