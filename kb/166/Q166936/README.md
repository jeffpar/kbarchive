---
layout: page
title: "Q166936: PRB: Letters A through J and M Invalid Object Variable Names"
permalink: /kb/166/Q166936/
---

## Q166936: PRB: Letters A through J and M Invalid Object Variable Names

{% raw %}

	Article: Q166936
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbprogramming kbHWMAC kbvfp kbvfp300 kbvfp500 kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error occurs when trying to access the properties of an object
	that is named by a single character from A through J, or M:
	
	  Variable '<variablename>' not found.
	
	CAUSE
	=====
	
	The letters A through J are reserved by Visual FoxPro to reference workspace
	names. The letter M is reserved for backward compatibility with the SCATTER and
	GATHER commands.
	
	RESOLUTION
	==========
	
	Do not name object variables by the single characters from A through J or M.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form.
	
	2. Place a command button on the form.
	
	3. In the Click event of the command button, place the following code:
	
	        C=THISFORM
	        WAIT WINDOW C.NAME
	
	  When this code is run, it produces this error:
	
	  Variable 'NAME' Not Found
	
	If you need to use one of these letters as an object variable, use the following
	method to return the value of a property. This does not allow the setting of
	properties, nor does it expose any methods of the object.
	
	        C="THISFORM"
	        WAIT WINDOW EVALUATE(C+".NAME")
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbHWMAC kbvfp kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
