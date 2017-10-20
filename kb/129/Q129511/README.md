---
layout: page
title: "Q129511: PRB: &quot;Property Command Not Found&quot; Error When Modifying Caption"
permalink: /kb/129/Q129511/
---

## Q129511: PRB: &quot;Property Command Not Found&quot; Error When Modifying Caption

{% raw %}

	Article: Q129511
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The error "Property Command Not Found" is displayed when you try to modify the
	caption of a command button in a command button group. The code used to access
	the command button is:
	
	     FOR I = 1 TO 10
	      THISFORM.CommandGroup1.Command(I).Caption = "test"+ALLTRIM(STR(I))
	     ENDFOR
	
	CAUSE
	=====
	
	Visual FoxPro cannot interpret the reference made to Command(x). It is reading
	it literally, expecting an array member called command. The "Property Not Found"
	error message (error 1734) is displayed when a property cannot be located. It is
	sometimes the direct result of a typing error, and can be displayed if you are
	trying to access an object or a property.
	
	RESOLUTION
	==========
	
	In this specific case, you can use the Buttons collection to access every
	command button of a command group. For example, you can place the following code
	in the Init of the Command Group:
	
	     FOR I=1 to THISFORM.CommandGroup1.ButtonCount
	       THISFORM.CommandGroup1.Buttons(I).Caption="TEST"+ALLTRIM(STR(I))
	     ENDFOR
	
	You can also evaluate the expression that returns the command button name as
	follows:
	
	     FOR I=1 to THISFORM.CommandGroup1.ButtonCount
	       oRef=EVAL("THISFORM.CommandGroup1.Command"+ALLTRIM(STR(I)))
	       oRef.Caption="TEST"+ALLTRIM(STR(I))
	     ENDFOR
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	To isolate the source of the problem when you receive a "Property Not Found"
	error message during program execution, you can suspend execution of the
	program. If the object has been created, you can use the AMEMBERS() function or
	the DISPLAY OBJECT command to verify the name of properties and object members.
	For example:
	
	      DISPLAY OBJECT LIKE Thisform
	
	Additional query words: VFoxWin 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
