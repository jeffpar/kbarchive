---
layout: page
title: "Q130831: Converter: How the Position of Screens Is Converted"
permalink: /kb/130/Q130831/
---

## Q130831: Converter: How the Position of Screens Is Converted

{% raw %}

	Article: Q130831
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article addresses the issue of positioning converted screens. It explains
	how window position is calculated in FoxPro version 2.x for Windows and in
	Visual FoxPro. It also describes how the converter converts screen position. The
	source code to the CONVERT.APP application is included with the Professional
	Edition of Visual FoxPro, and is installed in the TOOLS\CONVERT directory.
	
	MORE INFORMATION
	================
	
	FoxPro version 2.x for Windows uses foxels to calculate window and object
	location. A foxel is a unit of measure unique to FoxPro that is equivalent to
	the average height and width of a character. In FoxPro versions 2.x for Windows,
	a window position is based on the font of its container. In other words, if a
	user window is defined on the desktop, the font of the main FoxPro window
	determines the top and left position of the screen. Developers often place a
	MODIFY WINDOW SCREEN FONT <fontname>,<fontsize> statement in the
	Setup code of a FoxPro version 2.x screen to ensure that windows are
	consistently displayed at the same location on different systems.
	
	A screen added to a FoxPro version 2.x project can be positioned by using the
	Arrange button. The window's coordinates are saved in foxels in the Project
	Manager (ARRANGED field of the PJX table). The information relative to the
	position of the window is not stored anywhere if the screen is not included in a
	project.
	
	A Visual FoxPro form can use pixels or foxels. A pixel is the smallest element
	that can be displayed on a screen. It is resolution dependent but is not
	affected by font information.
	
	Visual FoxPro provides an application (CONVERT.APP) that converts FoxPro 2.x
	projects to a Visual FoxPro format. The converter dialog is displayed when you
	open a FoxPro version 2.x project in Visual FoxPro. Screen sets are converted to
	form sets, and each screen contained in a screen set is converted to a form. The
	SCALEMODE property of a converted form is set to 3- Pixels.
	
	During the conversion process, CONVERT.APP converts the window position from
	foxels to pixels. The calculation is defined in the AddPos method of the
	FP25FORM class in the CONVERT.PRG file. CONVERT.APP uses the font of the desktop
	in the current Visual FoxPro session as a basis for the conversion.
	
	For example, if the desktop font is MSSansSerif 10, the converter uses the
	fontmetrics of MSSansSerif 10 to convert the position of the form window. On the
	other hand, if the desktop font is MSSansSerif 12, MSSansSerif 12 is the basis
	for the conversion from foxel to pixel, and the resulting window appears at a
	lower position than it was previously located.
	
	Therefore, to ensure that windows are located at the same absolute position in a
	converted screen, verify that the font of the main FoxPro window is the same as
	the one used by FoxPro version 2.6 screens.
	
	NOTE: When the SCALEMODE property of a form is set to 0-Foxels, the window
	position is based on the font it uses. As opposed to windows defined with a
	DEFINE WINDOW command used in FoxPro version 2.x screen definition, the top and
	left positions of a Visual FoxPro form are not set by the font of the container
	window. Thus, in Visual FoxPro, the MODIFY WINDOW SCREEN FONT <FontName>
	command does not alter the position of a form.
	
	The following example code illustrates the fact that the position of a window is
	based on its font:
	
	     omyform1=CREATEOBJECT('myform')
	     omyform1.show
	
	     oMyform2=CREATEOBJECT('myform2')
	     omyform2.show
	
	     suspend
	
	     DEFINE CLASS MyForm2 AS Form
	        caption = "Arial, 18"
	        scalemode = 0
	        fontname="Arial"
	        fontsize=18
	        top = 1
	        left = 1
	        height = 10
	        width = 20
	     ENDDEFINE
	
	     DEFINE CLASS MyForm AS Form
	        caption= "Arial,10"
	        scalemode = 0
	        fontname="Arial"
	        fontsize=10
	        top = 1
	        left = 1
	        height = 10
	        width = 20
	     ENDDEFINE
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
