---
layout: page
title: "Q157844: WD97: Format of List Style Unexpectedly Removed"
permalink: kb/157/Q157844/
---

## Q157844: WD97: Format of List Style Unexpectedly Removed

	Article: Q157844
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbusage word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Text applied with the List Number or List Bullet styles will lose their
	formatting when a custom style is applied that is based on these styles.
	
	CAUSE
	=====
	
	This functionality is by design. The List styles are the base styles for numbers
	and bullets in Word. When you create new styles based on the List styles, you
	change which styles Word uses for numbers and bullets.
	
	For additional information about the behavior of List styles, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q172764 WD97: Changes to List Number Styles May be Lost
	
	WORKAROUND
	==========
	
	Method 1: Changing the Formatting of Numbers or Bullets
	-------------------------------------------------------
	
	To create a custom style, follow these steps:
	
	1. On the Format menu, click Style.
	
	2. In the Style dialog box, click New.
	
	3. In the New Style dialog box, under Based on, click to select the List style
	  you want to base your new style on.
	
	4. Click to select the Add To Template check box if you want to apply this style
	  to the current and future documents.
	
	  NOTE: If you do not select the Add To Template check box, your new style will
	  only be available in the current document.
	
	5. Click Format and make your changes as desired to the new number/bullet style.
	
	6. Click OK to return to the Style dialog box, and then click Close.
	
	7. Apply your new number or bullet style as desired.
	
	Method 2: Using the Default List Styles for Numbers or Bullets
	--------------------------------------------------------------
	
	Do not create custom styles that are based on any of the List Number or List
	Bullet styles.
	
	NOTE: If you change the formatting of any List style, those changes may be lost
	when you restart Word. If changes to the tab or indent attributes of these
	styles are needed, create and apply a custom style as described in method 1.
	
	Method 3: Create a base template containing pre-defined styles
	--------------------------------------------------------------
	
	Create a base template containing pre-defined styles for each of the numbering
	format types desired. Do not use the pre-defined styles or other styles
	containing number formatting. Create this template and styles from scratch.
	Then, when creating a new style, base it on the pre-defined style with the same
	number formatting.
	
	MORE INFORMATION
	================
	
	Word supplies some built-in styles that are formatted with numbers or bullets.
	If a custom style is created that is based on one of these built- in styles, any
	text that is formatted with the built-in style will lose its default list style
	formatting and will acquire the Normal style formatting.
	
	The built-in styles that exhibit this functionality are:
	
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
	
	
	Additional query words: revert attributes
	
	======================================================================
	Keywords          : kbualink97 kbusage word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	
