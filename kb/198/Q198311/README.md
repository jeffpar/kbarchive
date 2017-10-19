---
layout: page
title: "Q198311: WD97: Style Does Not Change with Automatically Update Setting On"
permalink: /kb/198/Q198311/
---

## Q198311: WD97: Style Does Not Change with Automatically Update Setting On

	Article: Q198311
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you have the Automatically update setting turned on for a particular style,
	changes are not always reflected in the definition for the style or in the Style
	dialog box.
	
	CAUSE
	=====
	
	This problem occurs if you have selected more than one paragraph and you make
	manual changes to update the style.
	
	WORKAROUND
	==========
	
	Select only one paragraph when you make manual changes to the style. With only
	one paragraph selected, the changes are automatically applied to any other text
	formatted with that style in the document, and the changes are displayed in the
	Style dialog box and in the definition of the style found by clicking Style on
	the Format menu.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	When the Automatically update setting is turned on for a style, the style is
	automatically updated when you apply manual formatting to text that is formatted
	with that style (this rule applies to all styles except the Normal style). That
	is, when you manually format text in an area of your document that has a
	specific style applied to it, the other text in the document that is formatted
	with that same style is updated to include whatever manual formatting changes
	you make.
	
	The setting to automatically update a style can be turned on or off for each
	individual style. To do this, follow these steps:
	
	1. On the Format menu, click Style.
	
	2. Under Styles, click the name of the style that you want to modify.
	
	3. Click Modify and then under Description, select the Automatically update
	  check box.
	
	4. Click OK and then click Close.
	
	For additional information about the automatic features of Word, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q159941 WD97: General Information About "Auto" Features in Word 97
	
	  Q170351 WD97: Style List Shows Styles Out of Order
	
	Additional query words: word8 word97
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
