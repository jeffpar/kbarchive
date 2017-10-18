---
layout: page
title: "Q189713: WD97: Visio Unexpected Quits Clicking Open on View Menu"
permalink: kb/189/Q189713/
---

## Q189713: WD97: Visio Unexpected Quits Clicking Open on View Menu

	Article: Q189713
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kb3rdparty kbole
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Visio may close unexpectedly (timing varies) when you edit an embedded Visio
	object in Microsoft Word 97 for Windows. Visio unexpectedly closes when you
	double-click the Visio object to edit it in-place and then click Open on the
	View menu.
	
	CAUSE
	=====
	
	This behavior occurs because of the Word Idle task feature, which automatically
	unloads OLE servers that are deactivated.
	
	
	WORKAROUND
	==========
	
	You can work around this behavior by right-clicking the Visio object in Word,
	and then selecting Visio Object Open on the menu that appears. Opening Visio in
	this manner bypasses the Idle Task feature and allows Visio to remain open until
	you close it manually.
	
	MORE INFORMATION
	================
	
	Visio is a drawing package, manufactured by Visio Corporation, that lets you
	assemble illustrations and diagrams by dragging objects created from stencils,
	called SmartShapes. The Visio program installs icons on the Word and Excel
	toolbars so that you can easily insert Visio drawings.
	
	For information about how to contact Visio, query in the Knowledge Base for one
	of the following articles:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: shape ware
	
	======================================================================
	Keywords          : kb3rdparty kbole 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
