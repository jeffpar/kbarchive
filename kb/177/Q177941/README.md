---
layout: page
title: "Q177941: 16-bit Windows Mail Client Slow on Windows NT 4.0"
permalink: /kb/177/Q177941/
---

## Q177941: 16-bit Windows Mail Client Slow on Windows NT 4.0

	Article: Q177941
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The 16-bit Windows mail client will intermittently perform slowly on Windows NT
	4.0. This slow performance will affect all other 16-bit Windows applications
	running in the WOW. After mail is unloaded, performance will return to normal.
	This behavior does not exist when running the 16-bit Windows mail client on
	Windows NT 3.51.
	
	CAUSE
	=====
	
	This problem happens because the compression routine used by the 16-bit Windows
	Mail client performs slowly on Windows NT 4.0.
	
	WORKAROUND
	==========
	
	To work around this problem, use the Windows Messaging client that is bundled
	with Windows NT 4.0 as the primary Mail Server client on Windows NT 4.0
	computers. Or, disable background compression of the MMF with the following
	entry in the Msmail.ini:
	
	     [Microsoft Mail]
	     No_Compress=1
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Mail for Windows
	versions 3.2 and 3.5. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail350 kbMail320
	Version           : WINDOWS:3.2,3.5
	Issue type        : kbprb
	
	=============================================================================
	
