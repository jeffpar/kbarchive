---
layout: page
title: "Q171550: FIX: Recompiling with SP2 Breaks Binary Compatibility"
permalink: kb/171/Q171550/
---

## Q171550: FIX: Recompiling with SP2 Breaks Binary Compatibility

	Article: Q171550
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,97,97sps
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp3fix
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After adding functionality to a server application (.EXE, .DLL or .OCX) and
	recompiling several times with Microsoft Visual Basic version 5.0 with Visual
	Studio Service Pack 2 installed, the following errors may occur:
	
	1. Existing client applications may fail when attempting to create an object
	  type from the server.
	
	2. The Object Browser may not display all of the classes of the server or all of
	  the members of a particular class of the server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 3.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q170365 : INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 3, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q175450 : INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 3
	
	MORE INFORMATION
	================
	
	NOTE: The problems caused by this bug are difficult to reproduce consistently.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Make an ActiveX DLL (Knowledge Base article Q173407 contains the specific
	  steps). After the first compilation (to create the DLL), copy the DLL and
	  rename the copy to <filename>.CMP. This will create a file that will
	  not be overwritten by future recompiles. (CMP is shorthand for compatible.)
	  Then set the server project properties for version compatibility to Binary
	  and refer to the .CMP file.
	
	2. Add new functionality to the server without changing any existing
	  functionality. Recompile the server to a new DLL. Make a copy of the DLL with
	  the extension .CMP.
	
	3. Change the server project version compatibility file to the new .CMP file.
	  Add more functionality and recompile to a new DLL. The problems may not
	  appear until the third generation of the DLL has been created.
	
	One workaround for the problem is to recompile the server project to a new DLL
	and use the new DLL as the binary compatibility file listed in the project
	properties dialog.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp3fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVB500 kbZNotKeyword3
	Version           : WINDOWS:5.0,97,97sps
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
