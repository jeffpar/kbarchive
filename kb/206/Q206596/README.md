---
layout: page
title: "Q206596: WD97: Bulleted or Numbered Style Shows Additional Tab Stop"
permalink: /kb/206/Q206596/
---

## Q206596: WD97: Bulleted or Numbered Style Shows Additional Tab Stop

	Article: Q206596
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta kbtemplate word8 word97
	Last Modified: 07-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you create a new style with a customized bulleted or numbered format (on the
	Format menu, click Bullets and Numbering), an extra tab setting may be included
	with the style when you add the style to the template.
	
	NOTE: To view the description of your custom style, click Style on the Format
	menu, click to select your custom style in the Style dialog box, and then view
	the Description.
	
	For additional information about a similar problem when you create a custom style
	that contains an outline numbered format, click the article number below to view
	the article in the Microsoft Knowledge Base:
	
	  Q173070 WD97: Unwanted Tab Stop Inserted in Outline Numbered Sequence
	
	
	CAUSE
	=====
	
	This functionality is by design in Microsoft Word when you use the "Add to
	template" option when you create a new custom style. Word automatically adds an
	additional 0.25" value to the tab that follows the bullet or number of the
	bulleted or numbered style that you customized.
	
	WORKAROUND
	==========
	
	To work around this problem, use either of the following methods.
	
	Method 1: Use the Organizer
	---------------------------
	
	Use the Organizer to copy the new custom style to your template. To do this,
	follow these steps:
	
	1. On the Format menu, click Style.
	
	2. In the Style dialog box, click Organizer.
	
	3. On the Styles tab, open the document that contains your custom style on one
	  side, and open the template to which you want to copy the style on the other
	  side.
	
	4. On the document side, click to select the style that you want to copy, and
	  then click Copy. Your new custom style will be copied to the template that
	  you specified.
	
	5. Click Close to close the Organizer dialog box.
	
	Method 2: Create the Style in Your Custom Template
	--------------------------------------------------
	
	Instead of creating your custom style in a Word document and selecting the Add to
	template check box, open your template and create the custom style directly in
	the template, just as you would in a Word document. For more information about
	how to create a custom style, please see the "More Information" section of this
	article.
	
	MORE INFORMATION
	================
	
	To create a new custom style that contains either a bulleted or numbered format,
	follow these steps:
	
	1. On the Format menu, click Style.
	
	2. In the Style dialog box, click New.
	
	3. In the New Style dialog box, type a name for your new style in the Name box.
	
	4. Click Format, and then click Numbering.
	
	5. In the Bullets and Numbering dialog box, click to select either the Bulleted
	  or Numbered tab.
	
	6. Click to select the type of bullet or numbering format that you want to use,
	  and then click Customize.
	
	7. In the Customize dialog box, change the format of the bullet or numbering to
	  what you want to use, and then click OK.
	
	8. In the New Style dialog box, click Format, and then click Tabs.
	
	9. In the Tabs dialog box, click Clear All, and then click OK.
	
	10. Click Format and make any additional formatting changes to your new custom
	  style that you want.
	
	11. In the New Style dialog box, click to select the "Add to template" check
	  box, and then click OK. Selecting the "Add to template" option saves your
	  new style to your attached template.
	
	  NOTE: If you are creating your new custom style directly in your custom
	  template, you do not need to select the "Add to template" check box.
	
	12. Click Close to close the Style dialog box.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta kbtemplate word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
