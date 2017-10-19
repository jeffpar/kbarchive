---
layout: page
title: "Q190196: FIX: Command Line Compile Fails with MFC ActiveX Control"
permalink: /kb/190/Q190196/
---

## Q190196: FIX: Command Line Compile Fails with MFC ActiveX Control

	Article: Q190196
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
	
	When compiling a Microsoft Visual Basic project from a command line, the
	following error may occur:
	
	  The instruction at "0x00000000" referenced memory at "0x00000000". The memory
	  could not be "read".
	
	However, the project does compile successfully from the Visual Basic IDE
	(Integrated Development Environment.)
	
	CAUSE
	=====
	
	An ActiveX Control used within the project does not have a default Icon
	resource.
	
	RESOLUTION
	==========
	
	You must include a Bitmap resource in each ActiveX control used in the project.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Microsoft Visual C++ 5.0, create a new MFC ActiveX Control Wizard project
	  with all the default selections. Name this project TestControl.
	
	2. Click the ResourceView tab in the Workspace Window. There should be Bitmap
	  Resource containing the default "OCX" bitmap.
	
	3. Double-click the Bitmap Resource, and delete the Bitmap entry.
	
	4. From the Build menu, click Build TestControl.ocx.
	
	5. Start Microsoft Visual Basic, creating a Standard EXE project.
	
	6. From the Project menu, click Components.
	
	7. Check the TestControl ActiveX Control Module entry, and click OK.
	
	8. Site the TestControl onto the default form (Form1).
	
	9. Save the project, and compile it within the IDE.
	
	  NOTE: The project should compile with no errors.
	
	10. Shell out to MS-DOS, and attempt to compile the project through the command
	  line parameters. For example:
	
	     VB5.EXE /M C:\TestProject\Project1.VBP
	
	  NOTE: The Microsoft Visual Basic directory should be included in the
	  environment path or a command line compile will not work. Proper quotation
	  marks should be used if the path contains long filenames.
	
	  The following error message will be displayed:
	
	  The instruction at "0x00000000" referenced memory at "0x00000000". The memory
	  could not be "read".
	
	Additional query words: kbDSupport kbVC kbdsd kbVBp500bug kbVBp600fix kbCompiler
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
