---
layout: page
title: "Q129884: PRB: HWNDs on OLE Controls Are Not Persistent"
permalink: kb/129/Q129884/
---

## Q129884: PRB: HWNDs on OLE Controls Are Not Persistent

	Article: Q129884
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to access the hWND property when it is invalid results in error 438:
	
	  Object doesn't support this method or property.
	
	CAUSE
	=====
	
	OLE controls (such as the Data-Bound Grid, Data-Bound Listbox, and OLE Container
	control) provide an hWND property, but it is not guaranteed to be valid at every
	given instance.
	
	RESOLUTION
	==========
	
	Unlike previous versions of Visual Basic, where the hWND property was
	consistently valid for non-lightweight controls as long it was visible, OLE
	controls are more efficient regarding window usage; therefore, the hWND property
	may not be always valid.
	
	Because each window, including most controls, in Microsoft Windows requires a
	certain amount of overhead and system resources, minimizing the number of
	windows increases the overall performance of the system.
	
	OLE Controls typically have a valid hWND when the control is activated, however
	if the control is not currently being used, the OLE control frequently releases
	the hHWND, making the property invalid. Therefore, when using the hWND property
	of a OLE control, you need to take great care.
	
	It is not advisable to store the hWnd property of OLE controls in a variable for
	later use because the value may have changed by the time you use it. You should
	always reference the hWnd of OLE controls by using the <controlname>.hWnd
	syntax.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB400Search kbVB400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
