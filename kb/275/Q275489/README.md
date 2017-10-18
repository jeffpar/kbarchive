---
layout: page
title: "Q275489: SMS: SMS 2.0 SP2 Administrator Console Hangs on WIN 2K Server"
permalink: kb/275/Q275489/
---

## Q275489: SMS: SMS 2.0 SP2 Administrator Console Hangs on WIN 2K Server

	Article: Q275489
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbtool kbsms200
	Last Modified: 20-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On some Dell computers that are running Microsoft Windows 2000 Server, and
	Microsoft Systems Management Server (SMS) Service Pack 2, the SMS Administrator
	Console may stop responding (hang) when you are trying to expand the Site
	Hierarchy.
	
	CAUSE
	=====
	
	The Dell Version Assistant modifies the default Distributed Component Object
	Model (DCOM) user-access permissions to include the currently logged-on user.
	This may cause the SMS Administrator Console to stop responding (hang).
	
	WORKAROUND
	==========
	
	To work around this behavior, remove the logged-on user account from Default
	Access Permissions in the DCOM Configuration utility. To do so, follow these
	steps:
	
	1. Click Start, click Run, type "dcomcnfg.exe" (without the quotation marks),
	  and then click OK.
	
	2. Click Default Security, and then click Default Access Permissions.
	
	3. Click Edit Default. This tab should be blank. If it is not blank, remove the
	  user name that was added by the Dell Version Assistant.
	
	Additional query words: prodsms dcomcnfg dcomcnfg.exe hang sms sp2
	
	======================================================================
	Keywords          : kb3rdparty kbtool kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
