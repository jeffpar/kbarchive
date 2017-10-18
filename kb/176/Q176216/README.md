---
layout: page
title: "Q176216: WD97: Cannot Undo Automatic Field Updates"
permalink: kb/176/Q176216/
---

## Q176216: WD97: Cannot Undo Automatic Field Updates

	Article: Q176216
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbfield word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you open a document containing a Date field, the field is updated
	automatically and you cannot undo the field update.
	
	WORKAROUND
	==========
	
	To work around this problem, use one of the following methods.
	
	Method 1: Save the File in Normal View
	--------------------------------------
	
	To prevent the field from being updated when you open a document, save the
	document in normal view after inserting the date. If the file is saved in normal
	view it will open in normal view and the Date field will not update
	automatically. The field should not update until you print or change views that
	cause Word to update the fields in your document (views that cause fields to be
	updated include page layout and print preview).
	
	Method 2: Insert the Date without Enabling Update Automatically
	---------------------------------------------------------------
	
	NOTE: This method will insert the date as static text which can not be updated.
	
	To insert the date field without enabling Update Automatically, follow these
	steps:
	
	1. On the Insert menu click Date And Time.
	
	2. In the Available formats list, select the Date or Time format you wish to
	  use.
	
	3. Clear the Update automatically check box.
	
	4. Click OK.
	
	Method 3: Refer to the Following Articles in the Microsoft Knowledge Base
	-------------------------------------------------------------------------
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q173670 WD97: How to Recover a Saved Field Value
	
	  Q168100 WD97: Fields Inserted in an Autotext Entry are Updated Automatically
	
	MORE INFORMATION
	================
	
	This problem does not occur in Word versions 6.x, 7.x.
	
	Additional query words: 8.0 8.00 lost changed
	
	======================================================================
	Keywords          : kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
