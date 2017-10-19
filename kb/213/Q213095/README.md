---
layout: page
title: "Q213095: SMS: SMS Icons Don't Appear After Windows NT 4 Client Discovery"
permalink: /kb/213/Q213095/
---

## Q213095: SMS: SMS Icons Don't Appear After Windows NT 4 Client Discovery

	Article: Q213095
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbClient kbsms kbsms200
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Systems Management Server icons do not appear in Control Panel after you
	perform Windows NT 4.0 client discovery.
	
	CAUSE
	=====
	
	This behavior occurs because the Mfc42.dll file in the \%system root%\System32
	folder must be updated to a later version. A user with insufficient rights
	cannot replace files in the \%system root%\System32 folder. This may be caused
	by any MFC42.dll file whose version is earlier than 4.21.7303.
	
	WORKAROUND
	==========
	
	If a client installation method has been enabled, the newer version of Mfc42.dll
	is copied over to the client. Or, if another application has been installed that
	will update Mfc42.dll to a later version, such as Microsoft Office 2000, the
	Systems Management Server icon will then appear in the client's Control Panel.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbClient kbsms kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	
