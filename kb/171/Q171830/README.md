---
layout: page
title: "Q171830: FIX: ActiveX Document Menu Changing Places"
permalink: /kb/171/Q171830/
---

## Q171830: FIX: ActiveX Document Menu Changing Places

{% raw %}

	Article: Q171830
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp2fix kbvbp500sp2fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Menus for ActiveX Documents (.vbd) change location in IE 3.0x. When you first
	view the .vbd document in IE 3.0x and the menu is in one location, then select a
	new address to view from IE 3.0x. Now return to the original .vbd document and
	the menu for the .vbd document is in a different location in IE 3.0x.
	
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
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open IE3.0x.
	
	2. Open a local .vbd document that has a menu.
	
	3. Menu appears as a sub-menu to IE Help Menu.
	
	4. Go to another URL or .vbd and return. The menu appears on same level as the
	  IE Help Menu. Note that the menu changes places after selecting a new address
	  and returning to the original .vbd document.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
