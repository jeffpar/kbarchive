---
layout: page
title: "Q171528: FIX: Using &quot;Unload Me&quot; in a Listbox Causes Crash"
permalink: kb/171/Q171528/
---

## Q171528: FIX: Using &quot;Unload Me&quot; in a Listbox Causes Crash

	Article: Q171528
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to unload the current form via the Unload statement in the ItemCheck
	event of a Listbox control may cause your application to terminate with the
	following error:
	
	  "VB5 caused an invalid page fault in module VB5.EXE at 0137:004b5923"
	
	This problem may be intermittent and may only occur when running the project in
	the IDE (Integrated Development Environment).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where,and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 2, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q171554 INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 2
	
	MORE INFORMATION
	================
	
	The Unload statement is used to close a specified form. If you use "Unload Me"
	in the ItemCheck event of a Listbox control, you may encounter the error stated
	above. The recommended procedure for unloading a form is to add the Unload
	statement to the Click event of a CommandButton or Menu control.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
