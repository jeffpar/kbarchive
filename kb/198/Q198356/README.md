---
layout: page
title: "Q198356: WD97: Float Over Text Object Disappears Inserting to a Frame"
permalink: /kb/198/Q198356/
---

## Q198356: WD97: Float Over Text Object Disappears Inserting to a Frame

	Article: Q198356
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97 kbframe
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you select a Float Over Text object and then use the Insert Frame command,
	the floating object disappears.
	
	WORKAROUND
	==========
	
	
	To convert a floating object to a framed object, use either of the following
	methods.
	
	Method 1: Change to an Inline Object and Frame the Object
	---------------------------------------------------------
	
	1. Convert the floating object to an inline object as follows:
	
	  a. Right-click the floating object.
	
	  b. On the shortcut menu, click Format <object>.
	
	  c. Click the Position tab.
	
	  d. Click to clear the Float Over Text check box.
	
	2. Convert the inline object to a framed object as follows:
	
	  a. Click the object to select it.
	
	  b. On the Tools menu, point to Macro, and then click Macros.
	
	  c. In the Macros In box, select Word Commands.
	
	  d. For the Macro Name, type "InsertFrame" (without the quotation marks), and
	     click the Run button.
	
	Method 2: Use the Convert To Frame Option
	-----------------------------------------
	
	Text boxes and callouts have a special Convert To Frame option that is not
	available for other shapes. To use this feature, follow these steps:
	
	1. Right-click the text box or callout object.
	
	2. On the shortcut menu, click Format <object>.
	
	3. Click the text box tab.
	
	4. Click the Convert To Frame button.
	
	The text box or callout is now a frame in the text layer of the document.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q167738 WD97: Can't See or Manipulate Objects (and Other Odd Behavior)
	
	Additional query words: word97 word8
	
	======================================================================
	Keywords          : word97 kbframe 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
