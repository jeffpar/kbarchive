---
layout: page
title: "Q172248: FIX: Change Event Not Fired When Selecting an Item in DBCombo"
permalink: /kb/172/Q172248/
---

## Q172248: FIX: Change Event Not Fired When Selecting an Item in DBCombo

{% raw %}

	Article: Q172248
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp2fix kbGrpDSVBDB kbvbp500sp2fix
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With Visual Basic 5.0, prior to Visual Studio 97 Service Pack 2, the Change
	event of the DBCombo control does not fire when the user makes a selection from
	the drop down list. This behavior is different from previous versions of Visual
	Basic.
	
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
	
	MORE INFORMATION
	================
	
	Please note: This change in behavior affects Visual Basic applications built
	with both Visual Basic 4.0 (32-bit) and Visual Basic 5.0 because they both use
	the same file, DBList32.ocx, for the DBCombo control. Once Visual Studio 97
	Service Pack 2 is installed, the problem no longer occurs.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVBDB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500
	Version           : WINDOWS:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
