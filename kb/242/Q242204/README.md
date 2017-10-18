---
layout: page
title: "Q242204: BUG: Cannot Insert Multiple Images into the Image List Control"
permalink: kb/242/Q242204/
---

## Q242204: BUG: Cannot Insert Multiple Images into the Image List Control

	Article: Q242204
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:1.1,1.2,6.0
	Operating System(s): 
	Keyword(s): kbMMC kbVBp600bug kbGrpDSPlatform kbMMC110bug kbDSupport kbMMC120bug kbSnapIn
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Management Console, versions 1.1, 1.2 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The image list control provided by the Microsoft Windows common controls
	supports the ability to insert multiple images into the control at design time.
	The image control provided by the Microsoft Management Console (MMC) Snap-in
	Designer for Visual Basic does not support this feature; all images must be
	inserted into the control one at a time.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Visual Basic and select a new SnapIn Project from the New Project
	  dialog box.
	
	2. Open the SnapIn1 Designer from the Project Explorer.
	
	3. Right-click the Image List node under the Tools node in the SnapIn1 Designer
	  and select the Add Image List command.
	
	4. Right-click the newly inserted image list control and select the Properties
	  command from the pop-up menu.
	
	5. When the Image List property dialog box appears, select Insert Picture.
	
	6. When the Choose an image dialog box appears, try to select more than one
	  image to insert into the image list control.
	
	REFERENCES
	==========
	
	
	Additional query words: snapin designer mmc
	
	======================================================================
	Keywords          : kbMMC kbVBp600bug kbGrpDSPlatform kbMMC110bug kbDSupport kbMMC120bug kbSnapIn 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600 kbMMCSearch kbMMC110 kbMMC120
	Version           : WINDOWS:1.1,1.2,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
