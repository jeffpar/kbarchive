---
layout: page
title: "Q95734: PC Win: Attachments Cannot Be Added to Message"
permalink: /kb/095/Q95734/
---

## Q95734: PC Win: Attachments Cannot Be Added to Message

	Article: Q95734
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to use the Attach button to add an attachment in version 3.0 of
	Microsoft Mail for Windows, the dialog box to select the file appears and you
	can select the file; however, no attachment is added to the message.
	
	CAUSE
	=====
	
	This problem may occur if you have different versions of COMMDLG.DLL on your
	machine.
	
	RESOLUTION
	==========
	
	Find and delete all COMMDLG.DLL files that are not in the Windows SYSTEM
	directory.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
