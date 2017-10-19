---
layout: page
title: "Q114164: PC Win: Err Msg: The Application Could Not Be Executed"
permalink: /kb/114/Q114164/
---

## Q114164: PC Win: Err Msg: The Application Could Not Be Executed

	Article: Q114164
	Product(s): Microsoft Mail For PC Networks
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to view a WordPerfect 5.1 or 5.2 for Windows document as an
	attachment in Microsoft Mail for Windows with WordPerfect for Windows running as
	a background application, will result in the following error message:
	
	  The application could not be executed
	
	CAUSE
	=====
	
	This error message is not caused by Microsoft Mail for PC Networks; it occurs as
	a result of WordPerfect for Windows not supporting the Multiple Document
	Interface (MDI).
	
	RESOLUTION
	==========
	
	According to WordPerfect Technical Support, this is a known issue with
	WordPerfect and there is no workaround at this time. To open a WordPerfect
	attachment from within any Windows application, you cannot have WordPerfect
	running as a background application at the same time. For Microsoft Mail, you
	must leave the Mail client, close WordPerfect for Windows, reenter the Mail
	client, and then open the attachment.
	
	MORE INFORMATION
	================
	
	The same error message can be generated and demonstrated without Microsoft Mail
	running, as follows:
	
	1. Start WordPerfect for Windows and minimize it.
	
	2. Either
	
	  - Again attempt to start WordPerfect for Windows from its icon.
	
	  -or-
	
	  - Use File Manager and try to run WPWIN.EXE.
	
	WordPerfect for Windows is manufactured by WordPerfect Corporation, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	
	=============================================================================
	
