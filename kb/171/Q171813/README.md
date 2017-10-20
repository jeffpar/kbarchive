---
layout: page
title: "Q171813: FIX: IPF in MSO97RT.DLL When Starting Visual Basic"
permalink: /kb/171/Q171813/
---

## Q171813: FIX: IPF in MSO97RT.DLL When Starting Visual Basic

{% raw %}

	Article: Q171813
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbVBp kbVBp500bug kbVS97sp2fix kbVS97sp3fix kbGrpDSVB kbDSupport kbvbp500sp
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to start Visual Basic may fail with the following error:
	
	  VB5 caused an invalid page fault in module MSO97RT.DLL at 0137:306d820a
	
	CAUSE
	=====
	
	This problem is caused by corrupt information in the Windows registry at the
	following key:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Visual Basic\5.0\UI
	
	This setting includes information regarding Visual Basic command bars (menus). If
	this information is invalid, Visual Basic will crash at startup while attempting
	to load command bar information.
	
	
	RESOLUTION
	==========
	
	One solution is to reset (clear out) this setting using the Registry Editor
	(regedit.exe). However, the recommended solution is to install the Visual Studio
	97 Service Pack 2.
	
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
	
	Additional query words: office crash gpf starting launch
	
	======================================================================
	Keywords          : kbnokeyword kbVBp kbVBp500bug kbVS97sp2fix kbVS97sp3fix kbGrpDSVB kbDSupport kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
