---
layout: page
title: "Q145588: SMS Client Group and Icons Not Created for RAS Client"
permalink: kb/145/Q145588/
---

## Q145588: SMS Client Group and Icons Not Created for RAS Client

	Article: Q145588
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup smssetup
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you execute the Systems Management Server (SMS) Client Setup from a Windows
	for Workgroups or Windows 95 client via Remote Access Service (RAS), the SMS
	Client Group and Icons are not created.
	
	CAUSE
	=====
	
	After the first phase of Client Setup completes, you are instructed to restart
	the system to allow changes to take affect. Since Windows for Workgroups and
	Windows 95 RAS clients do not have a network connection when they are started,
	the SMSRUN16.EXE file, called from the load= line in the WIN.INI, does not
	execute properly. The SMS Client Group and Icons are not created. This also
	prevents any autostart components such as PGC and PCM from starting at bootup.
	
	WORKAROUND
	==========
	
	After the system has started, make a RAS connection to your network and the
	manually execute SMSRUN16.EXE located in the \MS\SMS\BIN directory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.1. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbsetup smssetup 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	
	=============================================================================
	
