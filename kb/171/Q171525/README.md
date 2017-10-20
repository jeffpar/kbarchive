---
layout: page
title: "Q171525: FIX: ListView Causes IPF When Accessing ColumnHeaders Property"
permalink: /kb/171/Q171525/
---

## Q171525: FIX: ListView Causes IPF When Accessing ColumnHeaders Property

{% raw %}

	Article: Q171525
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
	
	When viewing the information on the "Column Headers" tab of the custom property
	sheet for a ListView control, you may receive an error similar to the
	following:
	
	  "VB5 caused an invalid page fault in module COMCTL32.OCX at 0137:202d3d20"
	
	CAUSE
	=====
	
	This problem occurs with version 5.00.3828 of COMCTL32.OCX. The version of this
	control that ships with Visual Basic 5.0 (version 5.00.3714) does not exhibit
	this problem.
	
	RESOLUTION
	==========
	
	Upgrade to Visual Studio 97 Service Pack 2. The updated version of the
	COMCTL32.OCX installed by Service Pack 2 corrects this problem.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 2. For more information on the Visual Studio 97 Service Pack 2, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where,and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 2, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q171554 INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 2
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
