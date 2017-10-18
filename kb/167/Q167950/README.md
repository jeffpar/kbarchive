---
layout: page
title: "Q167950: FIX: DAO Internet Component Download Fails to Install"
permalink: kb/167/Q167950/
---

## Q167950: FIX: DAO Internet Component Download Fails to Install

	Article: Q167950
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0 97
	Operating System(s): 
	Keyword(s): kbsetup kbVBp500 kbVS97sp1fix kbVS97sp2fix kbGrpDSVB kbvbp500sp1fix kbvbp500sp2fix
	Last Modified: 13-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Studio 97 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If Office97 is already installed, the MSJET35.CAB file fails to install.
	
	CAUSE
	=====
	
	The version of VBAJET32.DLL installed by Office97 does not register as a Win32
	DLL. Internet Explorer looks for this property in DLLs that are to be
	overwritten and will fail to download if this property is not found.
	
	RESOLUTION
	==========
	
	The MSJET35.CAB file and the setup toolkit have been updated. DAO will install
	correctly even if the Office97 version of VBAJET32.DLL is on the client system.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual Studio 97
	Service Pack 1.
	
	For additional information about the Visual Studio 97 Service Pack 1, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q170365 : INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	======================================================================
	Keywords          : kbsetup kbVBp500 kbVS97sp1fix kbVS97sp2fix kbGrpDSVB kbvbp500sp1fix kbvbp500sp2fix 
	Technology        : kbVSsearch kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVB500 kbZNotKeyword3 kbVS97 kbVS97Search
	Version           : 5.0 97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
