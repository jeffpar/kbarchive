---
layout: page
title: "Q163457: WD97: Customized Toolbar Button Reappears After Removing Button"
permalink: /kb/163/Q163457/
---

## Q163457: WD97: Customized Toolbar Button Reappears After Removing Button

	Article: Q163457
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbinterop kbtemplate
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When modifying a Word 7.0 template in Word 97, a custom toolbar button that is
	assigned to a macro will reappear after the toolbar button is removed and the
	template is saved as a Word 97 template.
	
	WORKAROUND
	==========
	
	Use the following procedure to remove your custom toolbar buttons and then
	re-create the desired buttons in Word 97:
	
	1. Open the Word 7.0 template in Word 97.
	
	2. On the Tools menu, click Customize.
	
	3. Under Toolbars, click the toolbar that contains the custom toolbar button,
	  and then click Reset.
	
	  Word will present the Reset Toolbar dialog box, prompting you to:
	
	  Reset changes made to <toolbar name> toolbar for: <macro name>
	
	  Click OK. The custom toolbar button will be deleted, and the macro will be
	  retained.
	
	  NOTE: This procedure will reset all custom toolbar buttons on the specified
	  toolbar.
	
	4. Re-create any toolbar buttons you may want assigned to your macros.
	
	5. Save and close your template after making your changes.
	
	  Word will prompt you with the following message when you save your Word 7.0
	  template in Word 97:
	
	  The template <file name> and its macros will be converted to Word 97
	  format when this template is saved. Do you want to save the converted
	  template to a new file, or overwrite <file name>?
	
	  Do one of the following:
	   - Click "New File" to save your Word 7.0 template to a new Word 97 template
	     name.
	
	     NOTE: You will now have two versions of the template on your system. One
	     template in Word 7.0 format and one template in Word 97 format.
	
	     -or-
	
	   - Click "Overwrite" to save your Word 7.0 template to a Word 97 template
	     using the same template name.
	
	     NOTE: Your Word 7.0 template will not exist anymore. It will be converted
	     to a Word 97 template. You will no longer be able to use the template in
	     Word 7.0.
	
	Additional query words: 97 8.0 word8 word97 cannot remove delete
	
	======================================================================
	Keywords          : kbinterop kbtemplate 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	
