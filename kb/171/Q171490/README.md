---
layout: page
title: "Q171490: FIX: Crash After Toggling Folders in ActiveX EXE Project"
permalink: kb/171/Q171490/
---

## Q171490: FIX: Crash After Toggling Folders in ActiveX EXE Project

	Article: Q171490
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While expanding and collapsing folders in the Project Explorer Window of an
	ActiveX EXE project that contains a UserDocument and an ActiveX Designer, the
	UserDocument disappears and is no longer found in the Project Explorer. Often a
	General Protection Fault or Invalid Page Fault will follow, either after the
	UserDocument disappears or when attempting to save the project.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 2, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q171554 INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 2
	
	MORE INFORMATION
	================
	
	The bug is difficult to reproduce, but can be reproduced with an ActiveX EXE
	project that contains a UserDocument and an ActiveX Designer. If you toggle the
	folders in the Project Explorer from one state to another, the UserDocument will
	no longer be visible. Once the UserDocument disappears, it cannot be retrieved
	and, in most cases, a General Protection Fault or similar error will occur.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
