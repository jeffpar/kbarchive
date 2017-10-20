---
layout: page
title: "Q129795: PRB: Excel Doesn't Use Container's Name for Embedded Objects"
permalink: /kb/129/Q129795/
---

## Q129795: PRB: Excel Doesn't Use Container's Name for Embedded Objects

{% raw %}

	Article: Q129795
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbprogramming kbVBp400
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Excel 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Excel does not display the name specified in the HostName property of
	the OLE control in its worksheet when an embedded worksheet object is opened.
	This behavior is exhibited by both the 16-bit and 32-bit versions of Microsoft
	Excel version 5.0.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The following is from the Remarks section of the HostName topic in the Visual
	Basic help file:
	
	  "When editing an object, the HostName property setting may be displayed in
	  the object's window title. However, some applications that provide objects
	  don't display HostName."
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add an OLE Client control to Form1. When the Insert Object dialog box
	  appears, select Microsoft Excel 5.0 WorkSheet.
	
	3. Select the HostName property of the OLE control and set it to "My Server."
	
	4. Press the F5 key to Run the program.
	
	5. Right-click the OLE Client control, and choose Open.
	
	The worksheet in Microsoft Excel displays "Book1" rather than "My Server."
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbVBp400 
	Technology        : kbVBSearch kbExcelSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
