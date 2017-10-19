---
layout: page
title: "Q180216: PRB: Error Setting CanGetFocus Property to False"
permalink: /kb/180/Q180216/
---

## Q180216: PRB: Error Setting CanGetFocus Property to False

	Article: Q180216
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When creating a custom ActiveX control using Microsoft Visual Basic, you get the
	following error when setting the CanGetFocus of the UserControl object to
	False:
	
	  Can't have child controls capable of receiving focus on a UserControl whose
	  CanGetFocus property is False.
	
	RESOLUTION
	==========
	
	To work around this behavior, do one of the following:
	
	- Remove all controls that can receive focus.
	
	-or-
	
	- Set the UserControl's Enabled property to False instead of setting the
	  CanGetFocus property.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Microsoft Visual Basic, create a new ActiveX Control project.
	
	2. Add a Textbox to the form.
	
	3. Click on the background of the UserControl to select it, and then change the
	  CanGetFocus property from True to False. The following message will be
	  displayed:
	
	  Can't have child controls capable of receiving focus on a UserControl whose
	  CanGetFocus property is False.
	
	  NOTE: If you try step 3 prior to step 2, all controls in the ToolBox capable
	  of receiving focus will be disabled so you will be unable to add the textbox.
	
	Additional query words: kbVBp500bug kbdse kbDSupport kbVBp
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500
	Version           : WINDOWS:5.0
	Issue type        : kbbug kbprb
	
	=============================================================================
	
