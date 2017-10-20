---
layout: page
title: "Q182246: WD97: Custom Toolbar Lost Saving Document as New Template"
permalink: /kb/182/Q182246/
---

## Q182246: WD97: Custom Toolbar Lost Saving Document as New Template

{% raw %}

	Article: Q182246
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
	
	When you create a document based on a custom template containing custom
	toolbars, if you try to save the document as a new template, your custom toolbar
	is not saved to the new template.
	
	NOTE: To create a document based on a custom template, click New on the File
	menu, select your custom template and then click Document (under Create New).
	
	CAUSE
	=====
	
	This behavior is by design. When you create a new document based on a custom
	template, custom toolbars from the template are not copied to the new document.
	Therefore, when you save your document as a new template, custom toolbars are
	not saved in the new template.
	
	RESOLUTION
	==========
	
	Create a new template from the template containing the custom toolbar using the
	following steps:
	
	1. On the File menu, click New.
	
	2. Select the custom template containing the custom toolbar, select Template
	  under Create New, and then click OK.
	
	3. On the File menu, click Save As. Type in a new template file name, and then
	  click Save.
	
	  NOTE: In the Save As dialog box, you can change the location you want to save
	  your new custom template by changing the Save in box.
	
	4. Close your new template.
	
	When you click New on the File menu, select your new template and then click OK,
	a new document containing the custom toolbar will be opened.
	
	WORKAROUND
	==========
	
	Use the Organizer to copy the custom toolbar from your custom template to the
	document before you save as a new template.
	
	For more information about copying a toolbar, click Contents And Index on the
	Help menu, click the Index tab in Word Help, type the following text
	
	  templates
	
	and then double-click the selected text to go to the "Copy styles, AutoText
	entries, toolbars, or macros" topic. If you are unable to find the information
	you need, ask the Office Assistant.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q125586 WD: Copying Toolbar Does Not Copy Associated Macros
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta kbtemplate word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
