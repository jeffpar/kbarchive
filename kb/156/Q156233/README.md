---
layout: page
title: "Q156233: SMS: Windows NT Clients Stop Responding After Clicking Display"
permalink: kb/156/Q156233/
---

## Q156233: SMS: Windows NT Clients Stop Responding After Clicking Display

	Article: Q156233
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kbnetwork kbtshoot smsremtshoot kbRemoteProg
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you are working on a client computer running Windows NT 3.51 that uses a
	Cirrus Logic video adapter with the 5434 chipset, the system may stop responding
	after you click on the Display icon in Control Panel. To restore the
	functionality of the system, the system must be shut down and restarted.
	
	CAUSE
	=====
	
	This is problem occurs when the client is configured to use the Accelerated
	Screen Transfer driver Idis_nt.dll.
	
	WORKAROUND
	==========
	
	To work around this problem, use the following steps:
	
	1. Open the Systems Management Server Administrator and go to the Site
	  Properties screen.
	
	2. Click Clients and select Proposed Properties.
	
	3. Click Options.
	
	4. Disable 'Install Accelerated Screen Transfer on Windows NT Clients.'
	
	5. Click 'OK' until you have closed the Site Properties window.
	
	6. Wait until the Site Properties changes are processed (30 minutes should be
	  sufficient).
	
	7. Run Upgrade.bat from the SMS_SHR share on a Systems Management Server logon
	  server, to update the client's configuration.
	
	The next time the Systems Management Server client script runs, the client will
	be updated.
	
	After the Windows NT client is reconfigured, you will receive the following
	message:
	
	  SMS Client Services Change Notification
	
	  The system management services on this client have changed. You must restart
	  the system for this change to take effect. The following components have been
	  changed:
	
	  Remote Control
	
	At this point, the client will no longer stop responding after clicking the
	Display icon in Control Panel.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms prodnt freeze lockup hang CL 543x respond
	
	======================================================================
	Keywords          : kb3rdparty kbenv kbnetwork kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120
	Version           : :1.2
	
	=============================================================================
	
