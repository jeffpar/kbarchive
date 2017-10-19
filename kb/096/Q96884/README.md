---
layout: page
title: "Q96884: PC Win: Can't Repair MMF on Novell Without File Scan Privilege"
permalink: /kb/096/Q96884/
---

## Q96884: PC Win: Can't Repair MMF on Novell Without File Scan Privilege

	Article: Q96884
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to repair the Mail message file (MMF) fails, and Mail generates the
	following message:
	
	  An inconsistency has been detected in the mail message file.
	
	After you choose the OK button, Mail generates the following message:
	
	  Inconsistencies in your message file could not be repaired.
	
	After you choose the OK button, Mail generates the following message:
	
	  Your message file could not be found.
	
	CAUSE
	=====
	
	The MMF repair utility, which you can invoke by holding down the SHIFT key when
	you start Mail, cannot locate the MMF because the Novell File Scan right is
	disabled.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Mail for Windows,
	versions 3.0b and 3.2. This problem was corrected in version 3.2a.
	
	For information on obtaining this update, query on the following word in the
	Microsoft Knowledge Base:
	
	  mailupd
	
	Additional query words: 3.00b 3.20 kbbug3.00b checkmmf
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320 kbMail300b
	Version           : WINDOWS:3.0b,3.2
	
	=============================================================================
	
