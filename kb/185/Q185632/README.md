---
layout: page
title: "Q185632: WD97: How to Share a Customized Built-in Toolbar"
permalink: /kb/185/Q185632/
---

## Q185632: WD97: How to Share a Customized Built-in Toolbar

{% raw %}

	Article: Q185632
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to share a customized toolbar with other users and
	how to test a button on one of the toolbars.
	
	MORE INFORMATION
	================
	
	You can share a customized toolbar by using one of the following methods.
	
	Method 1: Add the Customized Toolbar to a Document or Custom Template
	---------------------------------------------------------------------
	
	To add the customized toolbar to a document or custom template, do either of the
	following:
	
	- Create or open a custom Word template, save your customized toolbar in the
	  template, and then share the template with other users.
	
	  -or-
	
	- Create or open a Word document, save your customized toolbar in the document
	  and then share the document with other users.
	
	Method 2: Add the Customized Toolbar to the Default Template (Normal.dot)
	-------------------------------------------------------------------------
	
	Add the customized toolbar to the default Word template, Normal.dot, but save the
	template using a new name, such as SpecialNormal.dot. Share the new template
	with other users.
	
	NOTE: Because the Normal.dot template is a global file, if you customize it, the
	changes will be visible in all documents or templates as long as the toolbar is
	visible.
	
	CAUTION: Microsoft does not recommend sharing the Normal.dot template with other
	users. This template contains user-specific, customized settings. If you replace
	another user's Normal.dot template with your version, the settings, macros,
	AutoText entries, and styles stored in the other user's default template will be
	lost. Also, if another user changes a default setting that is stored in the
	shared copy of the default template, this change will affect all instances of
	the shared copy of the template. For example, if one user wants to set the
	default left and right margins at one- half inch while another user wants to set
	the default left and right margins at one inch, the last user to save his or her
	settings will overwrite the previous settings. All new documents that are
	created based on the default template will then inherit those settings.
	
	When you customize a toolbar, you can specify where you want to store these
	settings. To do this, click Customize on the Tools menu, and then click the
	Commands tab. From the Save In list, select a document or template that you
	currently have opened or select the Normal.dot file.
	
	NOTE: To save a customized toolbar in a document or template other than the
	default template, open the document or template before you specify where you
	want to store your settings.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q163547 WD97: How to Create Custom Toolbars and Toolbar Buttons
	
	For more information about customizing toolbars, click Contents And Index on the
	Help menu, click the Index tab in Word Help, type the following text
	
	  toolbars, customizing
	
	and then double-click the selected text to go to the list of associated topics.
	If you are unable to find the information you need, ask the Office Assistant.
	
	Testing the Customized Toolbar Button
	-------------------------------------
	
	If you customized the Normal template, the changes will be visible in all
	documents or templates as long as the toolbar is visible.
	
	If you customized a document or template other than the Normal template, you can
	test the customized button by closing the document or template in which you
	saved your changes. If the toolbar returns to its default state, the
	customization was stored in the document or template (not the Normal template).
	If the changes you made are still visible after closing the document or
	template, either of the following may be true:
	
	- You saved the customized toolbar settings in the Normal template.
	
	  -or-
	
	- You have a document open that is based on the template you just customized.
	
	If this is the case, close all documents based on the custom template or remove
	the toolbar button you added to the default Normal template.
	
	For information about how to remove a button from a toolbar, click Contents And
	Index on the Help menu, click the Index tab in Word Help, type the following
	text
	
	  toolbars, customizing
	
	and then double-click the selected text to go to the "Delete a toolbar button"
	topic. If you are unable to find the information you need, ask the Office
	Assistant.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
