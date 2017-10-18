---
layout: page
title: "Q184150: WD97: Text Marked as Deleted Marked as Inserted After Insert Fil"
permalink: kb/184/Q184150/
---

## Q184150: WD97: Text Marked as Deleted Marked as Inserted After Insert Fil

	Article: Q184150
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbconversion WordCon word97 kbconvert
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Text that has been marked as deleted in one document, is marked as inserted
	after that document is inserted into another document using the File command on
	the Insert menu.
	
	CAUSE
	=====
	
	This behavior occurs if the "Track changes while editing" option is active in
	the current document at the time the file is inserted.
	
	WORKAROUND
	==========
	
	To work around this problem, use any of the following methods.
	
	Method 1: Turn Off the "Track changes while editing" Option
	-----------------------------------------------------------
	
	Turn off the "Track changes while editing" option prior to inserting the file.
	
	To turn off "Track changes while editing," follow these steps:
	
	1. On the Tools menu under Track Changes, click Highlight Changes.
	
	2. In the Highlight Changes dialog box click to clear the "Track changes while
	  editing" check box.
	
	Method 2: Don't Use the File Command on the Insert Menu
	-------------------------------------------------------
	
	Don't use the File command on the Insert menu. Instead, copy and paste the text
	from one document to the other.
	
	NOTE: Text marked for deletion will not be transferred in this operation.
	
	Method 3: Accept Changes Before You Insert the File
	---------------------------------------------------
	
	Accept or reject any marked changes in the file to be inserted prior to inserting
	it. To do this, follow these steps:
	
	1. In the document to be inserted, on the Tools menu, under Track Changes, click
	  Accept or Reject Changes.
	
	2. Accept or reject the changes made to the document, and then click Close.
	
	You can now insert the document because no text is marked as deleted.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	When the "Track changes while editing"" option is turned off in the current
	document, any marked text inserted using the File command on the Insert menu
	comes in just as it is marked in the document that is being inserted.
	
	When the "Track changes while editing" option is turned on in the current
	document, all text from an inserted file is marked as inserted.
	
	When copying and pasting marked text, any text marked for deletion will not be
	pasted, regardless of the "Track changes while editing" setting.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta kbconversion WordCon word97 kbconvert 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
