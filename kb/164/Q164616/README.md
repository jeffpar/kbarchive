---
layout: page
title: "Q164616: WD97: Cannot Resolve Hyperlink That Contains Punctuation"
permalink: kb/164/Q164616/
---

## Q164616: WD97: Cannot Resolve Hyperlink That Contains Punctuation

	Article: Q164616
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta word8 kbfield word97 kbwdinternet
	Last Modified: 21-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you type a hyperlink, one of the following may occur when you click the
	hyperlink:
	
	- In Microsoft Word, you receive the following error message:
	
	  Cannot open the specified file
	
	  -or-
	
	- In Microsoft Outlook with Word set as your e-mail editor, when you click the
	  hyperlink, nothing happens.
	
	CAUSE
	=====
	
	If you type certain punctuation marks with the hyperlink, Word incorrectly
	resolves the punctuation marks as part of the hyperlink.
	
	The following punctuation marks are resolved incorrectly by Microsoft Word:
	
	Character     Description
	--------------------------------
	      :         Colon
	      ;         Semi-colon
	      )         Closing Parenthesis
	      !         Exclamation Point
	
	WORKAROUND
	==========
	
	To work around this problem, type a space between the hyperlink and the
	punctuation mark, or type the hyperlink on a separate line from the rest of the
	text and its punctuation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.<A0>This problem was corrected in Microsoft
	Word 2000.
	
	MORE INFORMATION
	================
	
	You can enrich Web pages and Word publications that others read online by
	inserting hyperlinks to other items. The hyperlink can jump to a location in the
	current document or Web page, to a different Word document or Web page, or to a
	file that was created in a different program. You can even use hyperlinks to
	jump to multimedia files, such as sounds and videos. The destination the
	hyperlink jumps to can be on your hard disk, on your company's intranet, or on
	the Internet, such as a page on the World Wide Web. For example, you can create
	a hyperlink that jumps from a Word file to a chart in Microsoft Excel. A
	hyperlink is represented by a "hot" image or display text, which is often blue
	and underlined, that the reader clicks to jump to a different location.
	
	Use the automatic formatting features for Word documents and Web pages when you
	know the addresses to jump to or when you have a document that contains file
	names or addresses that you want to format as hyperlinks. Use the Insert
	Hyperlink command to insert a hyperlink into Word files and Web pages when you
	aren't using the automatic formatting features or when you want to browse for
	the destination address. Use a drag-and-drop operation in Word files when you
	want to use the mouse to quickly create a hyperlink for text located within
	another Office file.
	
	For more information about hyperlinks, click "Contents and Index" on the Help
	menu, click the Index tab in Microsoft Word Help, type the following text
	
	  hyperlinks, inserting
	
	and then double-click the selected text to go to the "Create hyperlinks" topic.
	If you are unable to find the information you need, ask the Office Assistant.
	
	Additional query words: wd97 ol98 ol97 outlook 97 98 email link links
	
	======================================================================
	Keywords          : kbdta word8 kbfield word97 kbwdinternet 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
