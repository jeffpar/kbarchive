---
layout: page
title: "Q180594: WD97: Document Map Applies Level 1 to Incorrect Paragraphs"
permalink: /kb/180/Q180594/
---

## Q180594: WD97: Document Map Applies Level 1 to Incorrect Paragraphs

	Article: Q180594
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kblayout
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you open a document based on a template that contains text with the Normal
	style applied, the Document Map will view the Normal style even when Show
	Heading 1 has been selected.
	
	CAUSE
	=====
	
	With AutoFormat activated, the Normal Style's outline level setting changes from
	"Body text" to "Level 1."
	
	WORKAROUND
	==========
	
	To work around this problem, use either of the following methods.
	
	Method 1: Undo Autoformatting
	-----------------------------
	
	To undo autoformatting when you first open a document based on the template that
	contains your heading styles, do the following:
	
	1. On the View menu, click Document Map.
	
	2. On the Edit menu, click Undo AutoFormat.
	
	Method 2: Define a Custom Style
	-------------------------------
	
	1. Select the text that contains the formatting you want to include in your
	  style.
	
	2. Click in the Style box.
	
	3. Type over the existing style name to create the name for the new style.
	
	4. Press ENTER.
	
	To set additional attributes for paragraph styles, such as the style for the next
	paragraph or whether the style is saved in the template, follow these steps:
	
	1. Click Style on the Format menu.
	
	2. Click the style whose settings you want to change, and then click Modify.
	
	3. Select the options you want and make sure you select Add To Template.
	
	4. Click OK, and then click Apply.
	
	For more information about Styles Levels, click Contents And Index on the Help
	menu, click the Index tab in Word Help, type the following text
	
	  How do I create my own style?
	
	and then double-click the selected text to go to the "Create new styles" topic.
	If you are unable to find the information you need, ask the Office Assistant.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	If you want to work with a document in Outline view or the Document Map, you
	need to impose a hierarchical structure on the document. You can do this in two
	ways:
	
	- Format your text with the built-in heading styles (Heading 1 through Heading
	  9)
	
	  -or-
	
	- Use outline-level paragraph formats (Level 1 through Level 9).
	
	Use outline levels when you do not want to change the appearance of your text
	(the heading styles apply specific formatting, while the outline levels apply an
	"invisible" format).
	
	1. Select a paragraph in which you want to assign an outline level.
	
	2. On the Format menu, click Paragraph, and then click the Indents And Spacing
	  tab.
	
	3. In the Outline level box, click the level you want, and then click OK.
	
	To use the functionality of heading styles without modifying the built-in heading
	styles, create a new set of custom heading styles that include the outline-level
	paragraph format. Once you create your own heading styles, you can work with
	them, instead of the built-in styles.
	
	For more information about Outline Levels, click Contents And Index on the Help
	menu, click the Index tab in Word Help, type the following text
	
	  How do I change Outline level?
	
	and then double-click the selected text to go to the "Assign an outline level to
	a paragraph" topic. If you are unable to find the information you need, ask the
	Office Assistant.
	
	
	Additional query words: promote section Office folder user
	
	======================================================================
	Keywords          : kblayout 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
