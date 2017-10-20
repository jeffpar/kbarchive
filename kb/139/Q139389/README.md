---
layout: page
title: "Q139389: How to Read OLE Type Library Information in Visual FoxPro"
permalink: /kb/139/Q139389/
---

## Q139389: How to Read OLE Type Library Information in Visual FoxPro

{% raw %}

	Article: Q139389
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual FoxPro allows the use of OLE controls in your applications. These
	controls are available from a variety of sources. Often, it is necessary to
	determine the names of the properties, methods, and events available in an OLE
	control.
	
	MORE INFORMATION
	================
	
	This information is available through the OLE control's type library, which was
	created by the .ocx developer. Visual FoxPro allows you to read this information
	programmatically by using the AMEMBERS() function.
	
	Steps to Determine Events, Methods, and Properties Exposed in an .Ocx File
	--------------------------------------------------------------------------
	
	1. Create a new form.
	
	2. Add an OLE Container control to the form.
	
	3. On the Insert menu, click Control, and select the desired control.
	
	4. Save and run the form. Minimize the form.
	
	5. In the Command window, type:
	
	     =AMEMBERS(aType, formname.olecontrol1,1)
	     _SCREEN.SHOW
	     DISPLAY MEMORY LIKE aType
	
	The array containing the exposed properties and methods of the .ocx should be
	displayed.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
