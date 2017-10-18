---
layout: page
title: "Q96501: PC Win: Incorrect Unread Message Count"
permalink: kb/096/Q96501/
---

## Q96501: PC Win: Incorrect Unread Message Count

	Article: Q96501
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An incorrect unread message count appears in the version 3.0 Microsoft Mail for
	Windows Mail message file (MMF).
	
	CAUSE
	=====
	
	This problem is most likely caused by minor corruption of the .MMF file.
	
	RESOLUTION
	==========
	
	.MMF file integrity checking is available in in version 3.0b of Microsoft Mail
	for Windows. You can view version information by choosing About from the Mail
	Help menu. To obtain a Mail version 3.0b upgrade at no extra charge, contact
	Microsoft Corporate Sales at (800) 227-4679.
	
	You may also use the utility REVERT.EXE. REVERT.EXE resets the unread count for
	the Mail message file (MMF). The REVERT.EXE utility is available as part of the
	Database Maintenance Utilities document.
	
	To obtain the document containing the Database Maintenance Utilities, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q99419 PC DB: Database Maintenance Utilities (Complete)
	
	
	MORE INFORMATION
	================
	
	It is possible to check and repair some forms of corruption. When you sign in to
	Mail, type your password and press the ENTER key, then immediately hold down the
	SHIFT key. Continue to hold down the SHIFT key until you are prompted to confirm
	checking of the .MMF file. The check may take a few minutes or several hours,
	depending on the size of your .MMF file. A status bar will appear, indicating
	the progress of the check.
	
	Additional query words: 3.00 3.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
