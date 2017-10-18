---
layout: page
title: "Q172764: WD97: Changes to List Number Styles May be Lost"
permalink: kb/172/Q172764/
---

## Q172764: WD97: Changes to List Number Styles May be Lost

	Article: Q172764
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97 kbnumbering
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you make changes to any of the tab or indent attributes of the List Number
	or List Bullet styles, those changes may be lost when you close and restart
	Word. This problem occurs even if you selected the Add to Template option in the
	Modify Style dialog box (on the Format menu, click Style, and then click
	Modify.)
	
	CAUSE
	=====
	
	This functionality is by design. The bullets and numbering feature in Word is
	dependent on the tab and indent attributes of the List Number and List Bullet
	styles. If the tab or indent attributes of these styles are changed, the bullets
	and numbering feature may work incorrectly. To prevent this from happening, Word
	resets the tab and indent attributes to their default settings every time you
	restart Word.
	
	WORKAROUND
	==========
	
	Create and use a custom style instead of the List Number styles.
	
	For more information about creating a new custom style, click Contents And Index
	on the Help menu, click the Index tab in Help Topics: Microsoft Word, type the
	following text
	
	  styles, creating
	
	and then double-click the selected text to go to the "creating and editing"
	topic. If you are unable to find the information you need, ask the Office
	Assistant.
	
	MORE INFORMATION
	================
	
	The built-in styles that exhibit the above problem are:
	
	- List Bullet
	
	- List Bullet 2
	
	- List Bullet 3
	
	- List Bullet 4
	
	- List Bullet 5
	
	- List Number
	
	- List Number 2
	
	- List Number 3
	
	- List Number 4
	
	- List Number 5
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q157844 WD97: Format of List Style Unexpectedly Removed
	
	  Q157868 WD97: Custom Style Based on List Number Style Drops Numbering
	
	Additional query words: change format indent level multilevel outline spacing
	
	======================================================================
	Keywords          : word97 kbnumbering 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
