---
layout: page
title: "Q186262: BUG: Name Conflict When Using Binary Compatibility"
permalink: kb/186/Q186262/
---

## Q186262: BUG: Name Conflict When Using Binary Compatibility

	Article: Q186262
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,97sp3
	Operating System(s): 
	Keyword(s): kbVBp500bug kbGrpDSVB
	Last Modified: 13-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Studio 97sp3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When compiling a project in Visual Basic with binary compatibility, you receive
	the following error:
	
	  "Name conflicts with existing module, project or object library."
	
	However, you have not made any change that would warrant such an error.
	
	CAUSE
	=====
	
	This is a bug in the Visual Studio Service Pack 3 version of VBA5.DLL for Visual
	Basic 5.0. The error typically occurs only after compiling several generations
	of a component with binary compatibility.
	
	RESOLUTION
	==========
	
	Turn off binary compatibility.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: kbVBp500bug kbDSupport kbdss kbVS97sp3bug kbVBp500
	
	======================================================================
	Keywords          : kbVBp500bug kbGrpDSVB 
	Technology        : kbVSsearch kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500 kbVS97SP3 kbVS97Search
	Version           : WINDOWS:5.0,97sp3
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
