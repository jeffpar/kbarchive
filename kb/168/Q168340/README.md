---
layout: page
title: "Q168340: SMS: .Tmp Files Not Converted to .Raw Files In Logon.srv"
permalink: /kb/168/Q168340/
---

## Q168340: SMS: .Tmp Files Not Converted to .Raw Files In Logon.srv

	Article: Q168340
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory kbMaintMan smsinv smsmaintman
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After moving a Systems Management Server NetWare Logon Server from site A to
	site B, you may see some extraneous .tmp files in the Sms\Logon.srv directory of
	that logon server.
	
	CAUSE
	=====
	
	When clients log on to a NetWare server that has been moved from one site to
	another and run the Systems Management Server script, the inventory will not be
	taken for three times (or however many times InvAgtFalseLogonCount is set for).
	On the third logon, the clients write a .tmp file in the
	Sms\Logon.srv\Inventry.box directory on that NetWare logon server. The .tmp file
	is a small file, and does not contain all the inventory information. The .tmp
	file will not be converted to a .raw file, and therefore is not moved by
	Maintenance Manager to the site server.
	
	WORKAROUND
	==========
	
	To work around this problem, manually delete the .tmp files. Be sure to only
	delete those files that are affected by this problem, and do not delete any new
	.tmp files that are waiting to be converted to .raw files.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms sms execute
	
	======================================================================
	Keywords          : kbnetwork kbInventory kbMaintMan smsinv smsmaintman 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	
