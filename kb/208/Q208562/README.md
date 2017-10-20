---
layout: page
title: "Q208562: BUG: VBCE Special Methods Do Not Appear in IntelliSense Help"
permalink: /kb/208/Q208562/
---

## Q208562: BUG: VBCE Special Methods Do Not Appear in IntelliSense Help

{% raw %}

	Article: Q208562
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp600bug kbOSWinCEsearch kbGrpDSVB
	Last Modified: 24-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using methods that apply only towards the Windows CE Toolkit for Visual
	Basic (they don't exist in Visual Basic itself), they might not appear in
	IntelliSense help.
	
	CAUSE
	=====
	
	The Visual Basic run-time and OLE Automation libraries are permanently installed
	at the top of the Project References and thus override all other references.
	This behavior causes the design environment for the toolkit to display
	IntelliSense help for Visual Basic 6.0 instead of VBCE.
	
	RESOLUTION
	==========
	
	To bypass this default behavior, use Dim...As with Windows CE-specific types.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Some examples that exhibit this behavior are App.End, Form1.DrawLine,
	Form1.DrawCircle, and App.WaitForEvents.
	
	The following example shows how to use IntelliSense help with these references:
	
	1. Create a new Windows CE HPC Project in Visual Basic.
	
	2. Add pvbhost2.dll and pvbform2.dll to your project references. These files are
	  located, by default, in your VB98/vbce/Bin/Emulation/RunTime folder.
	
	3. Use the following code in Form1 so that you can use the variables A and F
	  instead of App and Form1 in your code to get IntelliSense help:
	
	  Dim A as PVBApp, F as PVBForm
	  'The names of the objects are PVBApp, PVBForm, PVBClip, and PVBScreen.
	  Set A = App
	  Set F = Form1
	
	Additional query words: vbce vbce6 wce wince
	
	======================================================================
	Keywords          : kbToolkit kbVBp600bug kbOSWinCEsearch kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbWinCETKVBSearch kbWinCESearch kbWinCETK100VB600
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
