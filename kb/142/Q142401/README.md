---
layout: page
title: "Q142401: PRB: OLE Controls May Be Hidden by Group Box in Dialog"
permalink: kb/142/Q142401/
---

## Q142401: PRB: OLE Controls May Be Hidden by Group Box in Dialog

	Article: Q142401
	Product(s): Microsoft C Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbGenInfo kbVC kbprb kbArtTypeINF
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	OLE controls may be covered by a group box if the group box precedes the OLE
	control in the tab order. In the case of an OLE Control that subclasses an edit
	control -- 3D look enabled only -- the control's border will be drawn but the
	control itself will not be visible, and the control will appear to be disabled.
	
	CAUSE
	=====
	
	The tab order in a dialog is synonymous with the Z order, meaning that a control
	that is first in the tab order will have a higher Z order than a control that
	follows it in the Z order. A control with the WS_CLIPSIBLINGS window style set
	that is overlapped by another control will not be painted in the area that is
	overlapped. OLE controls have the WS_CLIPSIBLINGS window style set by default.
	
	RESOLUTION
	==========
	
	Set the tab order position of the group box to be later in the tab order than
	the controls it contains. This can be done without affecting the physical tab
	order of the dialog.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Standard window's controls typically do not have the WS_CLIPSIBLINGS window
	style set. However, any control that does have the WS_CLIPSIBLINGS window style
	set will behave as described here. In the case of OLE controls, WS_CLIPSIBLINGS
	is set by default. This being the case, this behavior will be noticed any time
	an OLE control is placed in a group box and the group box precedes the control
	in the tab order.
	
	Additional query words: 4.00 hidden
	
	======================================================================
	Keywords          : kbGenInfo kbVC kbprb kbArtTypeINF 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
