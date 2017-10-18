---
layout: page
title: "Q171508: FIX: Add-ins May Cause Menu Corruption When Exiting Visual Basic"
permalink: kb/171/Q171508/
---

## Q171508: FIX: Add-ins May Cause Menu Corruption When Exiting Visual Basic

	Article: Q171508
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
	
	Menu corruption may occur in the Tools or Add-Ins menu.
	
	CAUSE
	=====
	
	An Add-in fails to delete its Commandbar upon exiting Visual Basic.
	
	RESOLUTION
	==========
	
	Install Visual Studio 97 Service Pack 2 (SP2) or delete the Add-in's Commandbar
	in the Add-in's IDTExtensibility_OnDisconnection Event.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 2, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q171554 INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 2
	
	MORE INFORMATION
	================
	
	If you have an Add-in containing a Commandbar and you exit Visual Basic, it
	could possibly result in a corrupt menu system if the Add-in does not delete its
	Commandbar before Visual Basic exits. Specifically, the Tools or Add-in menus
	may become corrupt. For example, the Add Procedure, Procedure Attributes, and
	Menu Editor may be missing from the Tools menu.
	
	This is caused by not properly deleting the Commandbar from the Add-in's Menu
	when the Add-in is removed (usually in the IDTExtensibility_OnDisconnection
	event).
	
	This is not a common occurrence because the code to delete the Commandbar from
	the Add-in is automatically generated for you when you create a new Add-in
	project and is placed in the IDTExtensiblity_OnDisconnection event. This code
	should resemble the following:
	
	     'Delete the Commandbar entry
	     mcbMenuCommandBar.Delete
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
