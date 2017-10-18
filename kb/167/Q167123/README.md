---
layout: page
title: "Q167123: FIX: Comctl32.ocx Is Binary Incompatible with Previous Version"
permalink: kb/167/Q167123/
---

## Q167123: FIX: Comctl32.ocx Is Binary Incompatible with Previous Version

	Article: Q167123
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0 97
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp1fix kbVS97sp2fix kbGrpDSVB
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Office 97 Developer Edition 
	- Microsoft Visual Studio 97 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your application may experience a crash if it was created using COMCTL32.OCX
	version 5.00.3422 or 5.00.3601 and your system has been upgraded to COMCTL32.OCX
	version 5.00.3714. Version 5.00.3601 shipped in the Microsoft Office Developer's
	Edition 97 and version 5.00.3422 shipped in Beta-1 of the Visual Basic Control
	Creation Edition.
	
	CAUSE
	=====
	
	Some changes in version 5.00.3714 caused the V-Table of COMCTL32.OCX to change.
	With the V-Table changed, it is possible that an application will call a method
	or property and crash because the function signature does not match. Version
	5.00.3714 ships with Visual Basic 5.0 Learning, Professional, and Enterprise
	Editions.
	
	RESOLUTION
	==========
	
	This problem has been fixed in version 5.00.3828 of COMCTL32.OCX. This version
	is binary-compatible with the 5.00.3422 version of COMCTL32.OCX and the
	5.00.3714 and 5.00.3601 versions of COMCTL32.OCX.
	
	There is no need to re-build applications built with version 5.00.3422 and
	5.00.3601; to get them running correctly, you simply need to install version
	5.00.3828. However, if you are going to re-deploy your application, you may want
	to rebuild your setup program so that it distributes version 5.00.3828.
	
	To obtain the latest version of COMCTL32.OCX Visual Basic 5.0, Visual C++ 5.0,
	and Visual Studio 97, owners should install the Visual Studio 97 Service Pack
	1.
	
	For additional information about the Visual Studio 97 Service Pack 1, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q170365 : INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	The COMCTL32.OCX update file is also available as a separate download for
	customers that do not own Visual Basic 5.0, Visual C++ 5.0, or Visual Studio
	97.
	
	To obtain the latest version of COMCTL32.OCX, see the following article in the
	Microsoft Knowledge Base:
	
	  Q167121 : FILE: Updated COMCTL32.OCX Version 5.00.3828 Available
	
	Version 5.00.3828 of COMCTL32.OCX also shipped with the final release of the
	Visual Basic 5.0 Control Creation Edition.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in COMCTL32.OCX, version
	5.00.3828. This bug has also been corrected in Visual Studio 97 Service Pack 1.
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp1fix kbVS97sp2fix kbGrpDSVB 
	Technology        : kbVCsearch kbVSsearch kbVBSearch kbOfficeSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbOffice97Search kbVBA500Search kbVB500 kbOffice97 kbZNotKeyword3 kbVC500 kbVC32bitSearch kbVS97 kbVS97Search kbVC500Search kbOffice97DevSearch
	Version           : 5.0 97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
