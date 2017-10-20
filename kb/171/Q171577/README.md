---
layout: page
title: "Q171577: FIX: Using Set for ListItem's SubItem Results in GPF"
permalink: /kb/171/Q171577/
---

## Q171577: FIX: Using Set for ListItem's SubItem Results in GPF

{% raw %}

	Article: Q171577
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp2fix kbGrpDSVBDB kbvbp500sp2fix
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the Set keyword when setting the value of a ListItem's SubItem results in
	a General Protection Fault.
	
	CAUSE
	=====
	
	The SubItems collection of the ListItem is designed to handle strings, not
	objects.
	
	RESOLUTION
	==========
	
	Do not use the Set keyword. Instead of code similar to:
	
	     Set ListItem.SubItems(1) = Text1
	
	use the following code:
	
	     ListItem.SubItems(1) = Text1
	
	where Text1 is a textbox object.
	
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
	
	Although the code listed above that uses the Set keyword is incorrect, it should
	not result in a General Protection Fault. Once the Visual Studio 97 Service Pack
	2 is installed, the Visual Basic correctly raises the "Type Mismatch" error.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVBDB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
