---
layout: page
title: "Q185228: WD97: New Style or Changes Unavailable in Master or Subdocument"
permalink: /kb/185/Q185228/
---

## Q185228: WD97: New Style or Changes Unavailable in Master or Subdocument

{% raw %}

	Article: Q185228
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbtemplate word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you create a new style or change an existing style, the new style or your
	changes to the existing style may not be available to both the master document
	and subdocument.
	
	Case 1: Style Changes Not Available in Subdocument
	--------------------------------------------------
	
	This problem may occur if you create a new style or change an existing style in a
	master document, and then open the subdocument outside of the master document
	(or within it).
	
	Case 2: Style Changes Not Available in Master Document
	------------------------------------------------------
	
	This problem may occur if you open a subdocument outside of the master document
	(or within it), create a new style or change an existing style in the
	subdocument, and then open the subdocument in the master document.
	
	CAUSE
	=====
	
	This functionality is by design if your master document or subdocuments are
	based on the Normal template (Normal.dot). When you create a document based on
	the Normal template, Word creates the document as a "snapshot" of the template
	at that moment in time.
	
	Subsequent changes to the Normal template are not reflected (updated) in existing
	documents previously created from it; however, these changes will be reflected
	in any new documents based on the Normal template.
	
	WORKAROUND
	==========
	
	Use a Custom Template
	---------------------
	
	To work around this problem, create or change your styles in a custom template,
	and then base both your master document and all subdocuments on your custom
	template.
	
	Turn on the "Automatically update document styles" Option:
	
	To allow your custom styles to update automatically, turn on the option in both
	the master document and each subdocument. To do this, follow these steps:
	
	1. Open the master document or subdocument.
	
	2. On the Tools menu, click Templates And Add-Ins.
	
	3. Click to select the "Automatically update document styles" check box, and
	  then click OK.
	
	4. Repeat steps 1-3 for each master document and subdocument.
	
	When the "Automatically update document styles" option is on, any changes you
	make to an existing style in either the master document or subdocument are
	automatically made to (and available in) each document where the style is
	applied.
	
	For more information about creating a custom template, click Contents and Index
	on the Help menu, click the Index tab in Microsoft Word Help, type the following
	text
	
	  templates, creating
	
	and then double-click the selected text to go to the "Create a template" topic.
	If you are unable to find the information you need, ask the Office Assistant.
	
	Workaround for Normal Template
	------------------------------
	
	If you created your master document or subdocuments using the Normal template,
	use any of the following methods to work around the functionality of the Normal
	template.
	
	Method 1: Create/Change the Style in Both Master and Subdocument:
	
	Create your new style (or change the existing style) in both the master document
	and each of the subdocuments.
	
	For more information about how to create a new style, click Contents and Index on
	the Help menu, click the Index tab in Microsoft Word Help, type the following
	text
	
	  styles, creating
	
	and then double-click the selected text to go to the "Create new styles" topic.
	
	For more information about changing an existing style, click Contents and Index
	on the Help menu, click the Index tab in Microsoft Word Help, type the following
	text
	
	  styles, changing
	
	and then double-click the selected text to go to the "Modify a style" topic.
	
	If you are unable to find the information you need, ask the Office Assistant.
	
	Method 2: Use the Format Painter:
	
	After you open your master document and expand each of your subdocuments, use the
	Format Painter to copy a style from the master document to a subdocument, or
	from a subdocument to the master document.
	
	For more information about using the Format Painter, click Contents and Index on
	the Help menu, click the Index tab in Microsoft Word Help, type the following
	text
	
	  format painter
	
	and then double-click the selected text to go to the "Copy character and
	paragraph formats" topic. If you are unable to find the information you need,
	ask the Office Assistant.
	
	Method 3: Use the Organizer:
	
	Use the Organizer to copy your new or changed styles to each of your subdocuments
	or to your master document.
	
	For more information about how to copy styles between documents, click Contents
	and Index on the Help menu, click the Index tab in Microsoft Word Help, type the
	following text
	
	  styles, copy
	
	and then double-click the selected text to go to the "Copy styles, AutoText
	entries, toolbars, or macros" topic. If you are unable to find the information
	you need, ask the Office Assistant.
	
	MORE INFORMATION
	================
	
	For more information about master documents, click Contents And Index on the
	Help menu, click the Index tab in Microsoft Word Help, type the following text
	(including the comma)
	
	  master documents,
	
	and then click Display. Select the topic you want to know more about and then
	click Display.
	
	For more information about subdocuments, click Contents And Index on the Help
	menu, click the Index tab in Microsoft Word Help, type the following text
	
	  subdocuments
	
	and then click Display. Select the topic you want to know more about and then
	click Display.
	
	If you are unable to find the information you need, ask the Office Assistant.
	
	Additional query words: sub-document sub-doc modify add
	
	======================================================================
	Keywords          : kbdta kbtemplate word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
