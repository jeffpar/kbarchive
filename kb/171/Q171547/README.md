---
layout: page
title: "Q171547: FIX: New DBGrid32.OCX Breaks VB4 Apps that Use VB4 Version"
permalink: /kb/171/Q171547/
---

## Q171547: FIX: New DBGrid32.OCX Breaks VB4 Apps that Use VB4 Version

	Article: Q171547
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,97,97sp1
	Operating System(s): 
	Keyword(s): kberrmsg kbVBp400 kbVBp500 kbVS97sp2fix kbGrpDSVBDB kb32bitOnly kbvbp500sp3fix
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Visual Basic 5.0 application using the DBGrid32.ocx is installed on a
	machine that previously had a Visual Basic 4.0 application installed and was
	also using its version of the DbGrid32.ocx, an untrappable run-time error
	(-1)(ffffffff) may result when editing a cell within the Visual Basic 4.0
	application. This behavior should not occur because the new DBGrid should be
	backwards-compatible.
	
	You receive the following error messages:
	
	  Runtime Error -1, (ffffffff)
	
	when you expect no error.
	
	CAUSE
	=====
	
	This problem is caused by a bug in the Visual Basic 5.0 Data Bound Grid Controls
	(DBGrid32.ocx) in the version that ships with the product (5.00.3714) and in the
	version that ships with Visual Studio 97 Service Pack 1 (5.00.3817). Visual
	Studio 97 Service Pack 2 did not include an updated version of the control.
	
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
	
	This problem does not occur if the application that uses the DBGrid control has
	been built with Visual Basic 5.0.
	
	This problem does not occur if the application built by Visual Basic 4.0 is a
	16-bit application. That application would use the 16-bit DBGrid control and
	would be unaffected by this problem in the 32-bit version of the control.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbVBp400 kbVBp500 kbVS97sp2fix kbGrpDSVBDB kb32bitOnly kbvbp500sp3fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVB500 kbVB400Search kbVB400 kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0,97,97sp1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
