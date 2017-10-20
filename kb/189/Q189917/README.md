---
layout: page
title: "Q189917: PRB: VisualFoxPro.Application Object Does Not Release"
permalink: /kb/189/Q189917/
---

## Q189917: PRB: VisualFoxPro.Application Object Does Not Release

{% raw %}

	Article: Q189917
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Releasing the variable assigned to a VisualFoxPro.Application COM object will
	release the variable but will not terminate the application.
	
	RESOLUTION
	==========
	
	In order to terminate the application, the QUIT method must be executed, as in
	objMyVFPObject.Quit. Here's an example:
	
	In the Command window, issue the following commands:
	
	     objMyVFPObject = CREATEOBJECT("visualfoxpro.application")
	     objMyVFPObject.visible = .t.
	     objMyVFPObject.QUIT
	     &&This releases the variable and terminates the application.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Releasing the assigned variable does not terminate the Visual FoxPro Application
	object. The object's QUIT method must be used to terminate the Application
	object.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In the Command window, issue the following commands:
	
	        objMyVFPObject = CREATEOBJECT("visualfoxpro.application")
	        objMyVFPObject.visible = .t.
	        RELEASE objMyVFPObject
	        &&This releases the variable but the application is still active.
	
	Additional query words: kbVFp500a kbVFp600 kbXBase
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
