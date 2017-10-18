---
layout: page
title: "Q171476: FIX: Masked Edit Control Right-Aligned with NT 4.0 SP3"
permalink: kb/171/Q171476/
---

## Q171476: FIX: Masked Edit Control Right-Aligned with NT 4.0 SP3

	Article: Q171476
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	As you enter data using a Masked Edit control, the cursor and data are
	right-aligned instead of left-aligned. However, with certain fonts (such as
	Courier New) the cursor may be left-aligned although the data you type is still
	right-aligned.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem is fixed in the newer version of the
	Masked Edit control (MSMASK32.OCX) provided with Visual Studio 97 Service Pack
	2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170365 : INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 2, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q171554 : INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 2
	
	MORE INFORMATION
	================
	
	The normal behavior of the Masked Edit control is that the cursor and text are
	left-aligned. The right-alignment problem only occurs when you are using
	Microsoft Windows NT 4.0 and you install the NT 4.0 Service Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500 kbVB400Search kbVB400
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
