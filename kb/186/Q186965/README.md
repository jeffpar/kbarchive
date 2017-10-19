---
layout: page
title: "Q186965: WD97: Cannot Turn Off List of Most Recently Used Fonts"
permalink: /kb/186/Q186965/
---

## Q186965: WD97: Cannot Turn Off List of Most Recently Used Fonts

	Article: Q186965
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
	
	When you attempt to turn off the list of most recently used fonts using the
	RegOptions macro found in the Support8.dot template, or if you manually change
	the value of the NoFontMRUList setting to equal 1 in the Microsoft Windows 95
	registry, the most recently used (MRU) list of fonts still appears.
	
	To view the list of most recently used fonts, on the Format toolbar click the
	Font list and scroll to the top of the list of fonts.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	This problem has been corrected in Word 2000.
	
	MORE INFORMATION
	================
	
	The RegOptions macro can be used to modify Word settings that are stored in the
	Windows registry.
	
	To run the RegOptions macro supplied in the Support8.dot template, follow these
	steps:
	
	1. On the Tools menu, click Templates and Add-ins, and then click Add.
	
	2. Change to the Office\Macros folder (for example, C:\Program files\Microsoft
	  Office\Office\Macros). Click to select the Support8.dot file and click OK
	  twice.
	
	  This adds the Support8 template to the "Global Templates and Add-ins" box.
	
	3. On the Tools menu, point to Macro, and then click Macros. In the Macros In
	  list, select "Support8.dot (Global template)." In the Macros Name list, click
	  RegOptions, and then click Run.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q161810 WD97: Font MRU List Not Retained After You Quit Word
	
	Additional query words: drop down use lists
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
