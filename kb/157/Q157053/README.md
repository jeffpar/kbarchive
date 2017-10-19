---
layout: page
title: "Q157053: PRB: DisabledBackColor Property of a Label Defaults to Gray"
permalink: /kb/157/Q157053/
---

## Q157053: PRB: DisabledBackColor Property of a Label Defaults to Gray

	Article: Q157053
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbvfp500 kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro 5.0 the DisabledBackColor property of Label objects defaults to
	gray. In Visual FoxPro 3.0b, the DisabledBackColor defaults to white.
	
	CAUSE
	=====
	
	In Visual FoxPro 5.0 the Label's ColorSource property defaults to 4-Windows
	Colors (Default). In Visual FoxPro 3.0b, the ColorSource property defaults to
	0-Object's Color Properties.
	
	WORKAROUND
	==========
	
	Change the ColorSource property to 0-Object's Color Properties. A special Label
	class could be created that has the ColorSource property set to 0- Object's
	Color Properties. Use this Label class instead of the base class Visual FoxPro
	provides.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form.
	
	2. Drop a Label object on the form.
	
	3. Change the Enabled property to .F. False.
	
	4. Note that the DisabledBackColor property is set to gray (192,192,192).
	
	5. Place another label on the form and change its ColorSource property to
	  0-Object's Color Properties.
	
	6. Change the Enabled property to .F. False.
	
	The DisabledBackColor property is set to white (255,255,255).
	
	Additional query words: kbdsd VFoxWin
	
	======================================================================
	Keywords          : kb3rdparty kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	
	=============================================================================
	
