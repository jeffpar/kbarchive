---
layout: page
title: "Q168554: FIX: Resource Drain with PictureBox on Form"
permalink: /kb/168/Q168554/
---

## Q168554: FIX: Resource Drain with PictureBox on Form

{% raw %}

	Article: Q168554
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbVBp kbVBp500bug kbVS97sp1fix kbGrpDSVB kbDSupport kbControl
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual Basic 5.0 running under Windows 95 or Windows 98, setting the
	Appearance property of a PictureBox to 0-Flat causes resources to be lost each
	time the form is unloaded. If the Appearance Property is set to 1-3D, resources
	are not lost.
	
	This occurs with a PictureBox placed either directly on a form or on a
	UserControl that is placed on the form.
	
	RESOLUTION
	==========
	
	Set the appearance property to 1-3D or use a different container, such as an
	Image control or UserControl, depending on your application.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in the Visual Studio 97
	Service Pack 1.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Place a PictureBox on a Form1 in a new project in Visual Basic 5.0.
	
	2. Set the Appearance property of the PictureBox to 0-Flat.
	
	3. Add a Module to your project and add the following code to it:
	
	        SUB Main
	          DIM i as Integer
	
	          FOR i = 1 TO 1000
	            Form1.Show
	            DoEvents
	            Unload Form1
	            DoEvents
	          Next i
	
	        END SUB
	
	4. Set the Startup Object of your project to Sub Main.
	
	5. Run the application while monitoring resources with a tool such as the
	  Windows 95 Resource Meter.
	
	6. As the form is loaded and unloaded repeatedly, GDI resources will diminish.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp kbVBp500bug kbVS97sp1fix kbGrpDSVB kbDSupport kbControl 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
