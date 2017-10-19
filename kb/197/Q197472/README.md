---
layout: page
title: "Q197472: WD97: Default Numbering in PAGE Field Doesn't Change Default"
permalink: /kb/197/Q197472/
---

## Q197472: WD97: Default Numbering in PAGE Field Doesn't Change Default

	Article: Q197472
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbfield winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you select Use Default Numbering in the PAGE Field Options dialog box and
	then click Add To Field, the following message may appear:
	
	  This action will not change the default page number format. To change the
	  default page number format for this section, use Insert Page Number and
	  choose the Format button.
	
	Clicking OK three times will insert the Page Number Field.
	
	CAUSE
	=====
	
	When you select the Use Default Numbering setting, Word uses the default page
	number format that you set in the Page Numbers command on the Insert menu. No
	field switch is associated with the default setting. Word uses the default
	numbering setting regardless of whether you select Use Default Numbering in the
	PAGE Field Options dialog box.
	
	By design, the Use Default Numbering setting confirms that you want to use the
	default settings.
	
	
	MORE INFORMATION
	================
	
	When you insert a PAGE field using the Field command on the Insert menu, you do
	not need to click Options and change any settings in the PAGE Field Options
	dialog box if you want to use the default page number settings for the current
	section.
	
	The only time you need to change the settings in the PAGE Field Options dialog
	box is when you want to change the page number formatting from the default
	settings for the current section.
	
	Additional query words: numbering blank 8.0 8.00
	
	======================================================================
	Keywords          : kbfield winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
