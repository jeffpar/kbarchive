---
layout: page
title: "Q167959: WD97: &quot;_Underline_&quot; AutoFormat Option Applies Italic"
permalink: /kb/167/Q167959/
---

## Q167959: WD97: &quot;_Underline_&quot; AutoFormat Option Applies Italic

	Article: Q167959
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the "*Bold* and _underline_ with real formatting" AutoFormat
	option, any text preceded and followed by an underscore character has italic
	applied instead of an underline.
	
	NOTE: This problem does not occur in Microsoft Word 2000.
	
	CAUSE
	=====
	
	The "*Bold* and _underline_ with real formatting" options on both the
	"AutoFormat As You Type" and the AutoFormat tabs are incorrectly labeled. The
	correct labeling should be "*Bold* and _italic_ with real formatting." To locate
	the "AutoFormat As You Type" and AutoFormat tabs, click AutoCorrect on the Tools
	menu.
	
	The ToolTip is also incorrectly labeled for this feature. To locate the ToolTip,
	on either of the "AutoFormat As You Type" or AutoFormat tabs, right-click the
	"*Bold* and _underline_ with real formatting" option, and then click What's
	This? on the shortcut menu.
	
	MORE INFORMATION
	================
	
	The "*Bold* and _underline_ with real formatting" AutoFormat feature uses two
	character styles to do the formatting.
	
	- The *Bold* AutoFormat uses the Strong character style.
	
	  -and-
	
	- The _Underline_ AutoFormat uses the Emphasis character style.
	
	By default, the Strong style is "Default Paragraph Font + Bold," and the Emphasis
	style is "Default Paragraph Font + Italic." Because these styles are
	customizable, you can change the format of the Emphasis style from italic to
	underline.
	
	To change Emphasis style to underline:
	
	1. On the Format menu, click Style.
	
	2. In the List box, click All Styles.
	
	3. In the Styles list, click Emphasis, and then click Modify.
	
	4. In the Modify Style dialog box, click to select the Add To Template check
	  box, click Format, and then click Font.
	
	5. In the Font dialog box, click the Font tab.
	
	6. In the Font Style list, click Regular, and in the Underline box, click
	  Single.
	
	7. Click OK twice, and then click Close to return to your document.
	
	After following these steps, Microsoft Word automatically underlines your text
	when you type text preceded and followed by an underscore character.
	
	For more information about the "_underline_" AutoFormat feature, click the Office
	Assistant, type "AutoFormat as you type," click Search, click to view "What
	types of automatic changes does Word make," and then click to view "Learn about
	AutoFormat changes Word makes."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Microsoft Help is not installed on your computer, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q139564 WD97: How to Disable Word AutoFormat Features
	
	Additional query words: 8.0 underscore italicizes
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
