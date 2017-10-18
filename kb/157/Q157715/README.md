---
layout: page
title: "Q157715: PRB: VSS OLE Add-in Model Not Supported by Visual Basic 4.0"
permalink: kb/157/Q157715/
---

## Q157715: PRB: VSS OLE Add-in Model Not Supported by Visual Basic 4.0

	Article: Q157715
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbinterop kbSSafe500 kbVBp400
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When creating an add-in OLE server with Visual Basic 4.0, Visual SourceSafe may
	crash or may not register the add-in properly.
	
	CAUSE
	=====
	
	Visual Basic 4.0 does not support creating OLE interfaces. This is required by
	the OLE automation add-in model in order to create an add-in OLE server.
	
	RESOLUTION
	==========
	
	A language that supports OLE interfaces, such as Microsoft Visual C++, should be
	used.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The Visual SourceSafe add-in model expects an IVSSEventHandler interface that
	has an INIT event exposed. If this interface is not available, Visual SourceSafe
	cannot establish the communication channel between itself and the add-in OLE
	server.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbSSafe500 kbVBp400 
	Technology        : kbVBSearch kbSSafeSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB400Search kbVB400 kbSSafe500
	Issue type        : kbprb
	
	=============================================================================
	
