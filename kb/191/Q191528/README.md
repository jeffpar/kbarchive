---
layout: page
title: "Q191528: FIX: DBCombo Not Appearing on SSTab After Changing Settings"
permalink: kb/191/Q191528/
---

## Q191528: FIX: DBCombo Not Appearing on SSTab After Changing Settings

	Article: Q191528
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you put a DBCombo control on a SSTab control in a form, and then switch
	your Display Settings from Small Fonts to Large Fonts, or vice versa, the
	DBCombo control no longer appears on the SSTab control, or it appears on the
	wrong tab. This problem occurs in both design time and run- time.
	
	RESOLUTION
	==========
	
	Place a Frame control on the SSTab and then place the DBCombo control inside the
	Frame control. Set the BorderStyle property of the Frame to "0 - None" to hide
	the Frame.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Microsoft Visual
	Basic, 6.0.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project in Visual Basic 5.0. Form1 is created by
	  default.
	
	2. From the Project menu, choose Components and add the "Microsoft Tabbed
	  Dialog" and "Microsoft Data Bound List" components to the project.
	
	3. Place a SSTab control on Form1. There should be three (3) tabs: Tab0, Tab1
	  and Tab2.
	
	4. Place a DBCombo control on Tab0 of the SSTab control.
	
	5. Save the project and quit Visual Basic.
	
	6. Click Start, Settings, Control Panel. Double-click "Display" to view the
	  Display properties.
	
	7. Select the Settings tab and change your Font size to the opposite setting.
	  For example, if the Font size is currently set to Small Fonts, change it to
	  Large Fonts. Otherwise, if the Font size is currently Large Fonts, change it
	  to Small Fonts. Depending on your video driver, you may have to click the
	  Advanced button to change the Font size setting.
	
	8. Click OK and answer Yes when prompted to restart Windows.
	
	9. Start Visual Basic and open the previously saved project.
	
	10. Notice that the DBCombo correctly appears on Tab0. However, click Tab1 and
	  then click back to Tab0. The DBCombo control does not appear on Tab0.
	
	You can select the DBCombo by using the drop-down list box in the Properties
	window. Once the control is selected, you can resize it and force it to
	redisplay.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q186270 : BUG: SSTab Control Containing OLE Control May Crash
	
	WORKAROUND
	==========
	
	Put a Frame control on Tab0. Next, place the DBCombo control inside the Frame
	control. Set the BorderStyle of the Frame control to "0 - None" to hide the
	Frame.
	
	Additional query words: kbVBp kbCtrl kbVBp500bug kbVBp600fix
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
