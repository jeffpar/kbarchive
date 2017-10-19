---
layout: page
title: "Q162956: WD97: Cannot Delete Certain Objects in HTML Document"
permalink: /kb/162/Q162956/
---

## Q162956: WD97: Cannot Delete Certain Objects in HTML Document

	Article: Q162956
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbwdinternet
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Scrolling text (the marquee), Background Sound Clips, and Video Clips can be
	difficult to remove from a document. For example the scrolling text may not be
	removed when you click the object and then press DELETE on the keyboard or when
	you click Cut on the Edit menu.
	
	NOTE: That Word Help states that you should be able to remove the marquee by
	clicking Cut on the Edit menu.
	
	CAUSE
	=====
	
	The scrolling text, Background Sound Clip, and Video Clip are ActiveX controls.
	An ActiveX controls owns its own window and processes all of the keystrokes that
	are given to them. You cannot delete an ActiveX control in run mode with a
	keystroke.
	
	RESOLUTION
	==========
	
	To remove the scrolling text (marquee), Background Sound Clip, or Video Clip use
	the following steps:
	
	- Select the item and then click Clear on the Edit menu.
	
	  -or-
	
	- Select the item area by moving the mouse into the selection bar area on the
	  far left of the screen and clicking the mouse button.
	
	  Once the item is selected, you can now delete the it by clicking DELETE, or by
	  clicking Cut on the Edit menu.
	
	Additional query words: 97 embedded sound video
	
	======================================================================
	Keywords          : kbwdinternet 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
