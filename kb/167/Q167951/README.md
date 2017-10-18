---
layout: page
title: "Q167951: FIX: Autmgr32.exe Fails After Component Download"
permalink: kb/167/Q167951/
---

## Q167951: FIX: Autmgr32.exe Fails After Component Download

	Article: Q167951
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0 97
	Operating System(s): 
	Keyword(s): kbsetup kbVBp500 kbVS97sp1fix kbVS97sp2fix kbGrpDSVB kbvbp500sp1fix kbvbp500sp2fix
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After the Internet Component Download of the MSRACLI.CAB file is complete,
	AUTMGR32.EXE fails to run.
	
	CAUSE
	=====
	
	The order in which the files in the CAB were decompressed and registered was
	incorrect.
	
	RESOLUTION
	==========
	
	The CAB file has been updated and AUTMGR32.EXE will install and run.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual Studio 97
	Service Pack 1.
	
	For additional information about the Visual Studio 97 Service Pack 1, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbVBp500 kbVS97sp1fix kbVS97sp2fix kbGrpDSVB kbvbp500sp1fix kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500
	Version           : 5.0 97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
