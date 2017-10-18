---
layout: page
title: "Q167653: WD97: Redo Deletion of Toolbox Control Causes Invalid Page Fault"
permalink: kb/167/Q167653/
---

## Q167653: WD97: Redo Deletion of Toolbox Control Causes Invalid Page Fault

	Article: Q167653
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg kbtool word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you undo and then redo the deletion of a control object (such as a command
	button) inserted from the Control Toolbox toolbar, you receive the following
	error message:
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	If you click Details, you will receive the following error message:
	
	  WINWORD caused an invalid page fault in module WINWORD.exe at
	  <address>.
	
	CAUSE
	=====
	
	This problem occurs when you insert a control from the Control Toolbox and do
	the following:
	
	- Clear the Float Over Text check box for the object (on the Position tab of
	  the Format Control dialog box).
	
	- Select the "Track changes while editing" check box (on the Tools menu, point
	  to Track Changes and click Highlight Changes).
	
	- Select and delete the in-line control object.
	
	- Click Undo on the Edit menu to undo the deletion and then click Redo on the
	  Edit menu to redo the deletion.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem has been corrected in Word 2000.
	
	Additional query words: 8.0 button checkbox listbox text box optionbutton combobox scrollbar toggle image
	
	======================================================================
	Keywords          : kberrmsg kbtool word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
