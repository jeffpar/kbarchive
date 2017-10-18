---
layout: page
title: "Q167620: WD97: TOC Styles Don't Have Tab Stop When Applied Manually"
permalink: kb/167/Q167620/
---

## Q167620: WD97: TOC Styles Don't Have Tab Stop When Applied Manually

	Article: Q167620
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
	
	When one of the built-in TOC styles (TOC 1-TOC 9) is applied manually to a
	paragraph, the paragraph will not contain the formatting for the 6-inch
	flush-right tab with a dotted leader as it does when the style is automatically
	applied by the table of contents feature.
	
	CAUSE
	=====
	
	This is a change in behavior from earlier versions of Word. Earlier versions of
	Word apply a 6-inch flush-right tab to the paragraph to which the TOC style is
	applied.
	
	WORKAROUND
	==========
	
	If you need a style that mimics a built-in TOC style and also has a right-
	aligned tab, you can create a custom style based on the TOC style by following
	these steps.
	
	1. On the Format menu, click Style.
	
	2. In the List box, click All Styles.
	
	3. Click the built-in TOC style you want to mimic (for example, TOC 2).
	
	4. Click the New button.
	
	5. Type a name for the new style. For example, type "My TOC 2."
	
	6. Click the Format button and click Tabs.
	
	7. Type the desired tab stop value [for example, type "6.0" (without the
	  quotation marks)].
	
	8. Select the desired alignment (for example, Right).
	
	9. Select the desired leader (for example, dotted or option "2").
	
	10. Click OK to close the dialog boxes.
	
	Use this new style to simulate a TOC style in the body of the document.
	
	NOTE: When you create the new style, you can customize other formatting
	attributes if needed.
	
	MORE INFORMATION
	================
	
	When you click Styles on the Format menu and you select one of the built-in TOC
	styles, the definition will be "Normal + Automatically update." A right- aligned
	tab stop will not be listed as part of the style definition because it is
	dynamically added to the table of contents entries as direct formatting when the
	table of contents is created.
	
	Other styles in Word 97 for Windows that behave in a similar way to the TOC
	styles are:
	
	- Index 1-9 (Index 1-Index 9)
	
	- Table of Figures
	
	- Table of Authorities
	
	REFERENCES
	==========
	
	For more information about how the tabs in table of contents styles have
	changed, please see the following article in the Microsoft Knowledge Base:
	
	  Q109884 TOC Style Tabs Redefined When Updating Table of Contents
	
	For more information about "working with a table of contents," click the Office
	Assistant, type "table of contents," click Search, and then click one of the
	topics.
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
