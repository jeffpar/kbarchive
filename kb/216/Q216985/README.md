---
layout: page
title: "Q216985: BUG: Scrollbars Not Seen if Objects Placed Past Some Coordinates"
permalink: kb/216/Q216985/
---

## Q216985: BUG: Scrollbars Not Seen if Objects Placed Past Some Coordinates

	Article: Q216985
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbContainer kbCtrl kbvfp kbvfp600bug kbGrpDSFox
	Last Modified: 20-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After placing objects on a form that has scrollbars, the objects will not be
	seen and the scrollbars will disappear when the form is run. This happens when
	the objects have been placed too far vertically or horizontally down or across
	the form.
	
	CAUSE
	=====
	
	Visual FoxPro 6.0's forms were designed to have scrollbars that only scroll
	approximately twice the length or width of the computer's video resolution.
	Placing any objects past this point will result in the scrollbars disappearing
	from the form.
	
	RESOLUTION
	==========
	
	Do not set the Top and Left properties of any objects past the formula described
	in the MORE INFORMATION section below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	
	MORE INFORMATION
	================
	
	By design, objects should not be placed beyond the coordinates (video resolution
	* 2 - object height or width) in a form.For example, if the video resolution is
	800x600, then placing a command button's Top property to 1173 (600 * 2 - 27) on
	a form with vertical scrollbars will allow the user to scroll down the form and
	select that command button at run-time. If the command button's Top property is
	set to 1174, then the scrollbars will disappear and the command button cannot be
	accessed. This number is based on the vertical resolution being 600, and the
	height of the command button being 27.
	
	The same situation occurs if the command button is positioned on a form with
	horizontal scrollbars. Setting the Left property of the command button to 1516
	(800 * 2 - 84) would allow the user to scroll across the form and select the
	command button. Any number higher than that will make the scrollbars disappear
	on the form.
	
	This can be a problem if the form is run on another computer with a lower
	resolution setting. For example, if a form is created on a computer with
	1024x768 resolution and then run on a computer with 800x600 resolution, the
	scrollbars will not be visible at the lower resolution. To ensure that the
	scrollbars are visible at all resolutions, any objects placed on the form would
	have to be set to the above formula using 640x480 as the base for the video
	resolution.
	
	It is not by design that the scrollbars disappear if an object is placed past
	these points: the scrollbars should stay active, but the user would not be able
	to scroll to any object that has been placed past these coordinates.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code. It creates a form with vertical and horizontal
	  scrollbars that will have a command button in the bottom-right corner when
	  both scrollbars are scrolled all the way down and right:
	
	       scr_horizontal=SYSMETRIC(1) * 2 - 84 && Add one to the width or height
	       scr_vertical=SYSMETRIC(2) * 2 - 27   && and the scrollbars will disappear.
	       ? scr_horizontal
	       ? scr_vertical
	       DO get_form with scr_horizontal, scr_vertical
	
	       PROCEDURE get_form
	
	       PARAMETERS but_width, but_height
	       PUBLIC oform1
	       oform1=NEWOBJECT("form1")
	       oform1.Show
	       RETURN
	
	       ****************************************
	       DEFINE CLASS form1 AS form
	                Top = 0
	                Left = 0
	                Height = 241
	                Width = 209
	                ScrollBars = 3
	                DoCreate = .T.
	                Caption = "Form1"
	                Name = "Form1"
	
	                       ADD OBJECT command1 AS commandbutton WITH ;
	                              Top = 0, ;
	                              Left = 0, ;
	                              Height = 27, ;
	                              Width = 84, ;
	                              Caption = "Command1", ;
	                              Name = "Command1"
	
	                         PROCEDURE Init
	                               Thisform.Command1.Left = but_width
	                               Thisform.Command1.Top = but_height
	                        ENDPROC
	       ENDDEFINE
	
	2. Increase the values of either the scr_horizontal or scr_vertical variable by
	  one (1) and note that the scrollbars disappear.
	
	REFERENCES
	==========
	
	For additional information about Scrollbars on forms, please see the following
	article in the Microsoft Knowledge Base:
	
	Q193749 PRB: Setting Scrollbars > 0 Changes Height and Width Property
	
	Additional query words:
	
	======================================================================
	Keywords          : kbContainer kbCtrl kbvfp kbvfp600bug kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
