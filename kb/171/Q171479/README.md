---
layout: page
title: "Q171479: FIX: Mod 0 Causes an IPF or Access Violation"
permalink: kb/171/Q171479/
---

## Q171479: FIX: Mod 0 Causes an IPF or Access Violation

	Article: Q171479
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbVBp kbVBp500bug kbVS97sp2fix kbVS97sp3fix kbGrpDSVB kbDSupport kbvbp500sp2fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you compile or run your Visual Basic 5.0 project, you receive an error and
	Visual Basic 5.0 shuts down.
	
	With Windows 95, you may receive one of the following errors:
	
	  "VB5 caused a divide error in module VBA5.DLL at 0137:0faf74c1"
	
	  - or -
	
	  "VB5 caused an invalid page fault in module <unknown> at 00de:48737953"
	
	With Windows 98, you may receive the following error:
	
	  "VB5 caused a divide error in module VBA5.DLL at 015f:0faf74c1"
	
	With Windows NT or Windows 2000, you may receive the following error.
	
	  "Exception: Divide By Zero (0xc0000094), Address 0x0faf74c1"
	
	CAUSE
	=====
	
	You may receive this error if you attempt an operation with the Modulus operator
	on two literals where the divisor evaluates to zero.
	
	You will not receive an error if one or both of the Modulus arguments is a
	variable. If one or both of the Modulus arguments is a variable, you will
	receive a run-time error 11 "Division By Zero" as expected.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170365 : INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 2, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q171554 : INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 2
	
	
	Additional query words: ipf gpf crash hang division
	
	======================================================================
	Keywords          : kbVBp kbVBp500bug kbVS97sp2fix kbVS97sp3fix kbGrpDSVB kbDSupport kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
