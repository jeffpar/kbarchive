---
layout: page
title: "Q181993: WD97: How to Show Access Check Boxes During a Mail Merge"
permalink: /kb/181/Q181993/
---

## Q181993: WD97: How to Show Access Check Boxes During a Mail Merge

	Article: Q181993
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbinterop kbdta word97 kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you perform a mail merge using data from a Microsoft Access 97 database,
	Microsoft Word displays fields from the database with a Yes/No Data Type as a 0
	or -1, rather than as a check box.
	
	This article explains how to display a check box that is either cleared or
	selected (checked) instead of a 0 or -1.
	
	MORE INFORMATION
	================
	
	To receive a check box instead of a 0 or -1 when mail merging from an Access
	database, follow these steps:
	
	1. Open the main document for the mail merge and place the insertion point where
	  you want the check box to appear.
	
	2. On the Mail Merge Toolbar, click the drop-down arrow next to Insert Word
	  Field and then click If...Then...Else.
	
	3. Under If, in the Field Name list, click to select the field name that is the
	  check box column in Microsoft Access.
	
	4. In the Comparison list, click to select Equal To.
	
	5. In the Compare To box, type 0 (zero).
	
	6. In the Insert This Text box, hold down ALT and on the numeric keypad, make
	  sure NUM LOCK is turned on, and type "0168" (without the quotation marks)
	  (ALT+0168).
	
	7. Select the symbol that appears in the Insert This Text box, and press CTRL+D.
	
	8. In the Font list, click Wingdings, and then click OK. You should now see an
	  empty check box.
	
	9. Under "Otherwise insert this text", press ALT and on the numeric keypad, type
	  "0254" (without the quotation marks) (ALT+0254).
	
	10. Select the symbol that appears in the Insert This Text box, and press
	  "CTRL+D" (without the quotation marks).
	
	11. In the Font list, click Wingdings, and then click OK. You should now see a
	  check box that is selected (checked).
	
	12. Click OK.
	
	  A check box will appear at the insertion point of the main document.
	
	13. Continue with the mail merge.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbdta word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
