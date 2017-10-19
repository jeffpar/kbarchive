---
layout: page
title: "Q235738: SMS: Restart Computer Options Fails when Logged on User Doesn't"
permalink: /kb/235/Q235738/
---

## Q235738: SMS: Restart Computer Options Fails when Logged on User Doesn't

	Article: Q235738
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 11-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the released version of Microsoft's Systems Management Server version 2.0,
	when Smsapm32 (Systems Management Server Advertised Program Manager) attempts to
	restart a computer where the logged on user does not have rights, Smsapm32 fails
	to restart the computer.
	
	If the local user is logged on as Domain1\UserA and they do not have the right
	Shut Down the System granted to them, then when APM attempts to restart the
	computer, it will fail. The administrator may see the following in the
	Smsmon32.log or LO_ file.
	
	  "IPC PIPE : Return code = 0x552; A required privilege is not held by the
	  client.~~; Reboot request"
	
	This is likely to occur whether the program is scheduled to run with or without a
	user logged in. If the program is scheduled to run without the users
	credentials, the program will run using the Smsclitoken& account. The
	problem is caused by the Smsmon32 (Systems Management Server Advertised Programs
	Monitor) which is dependent on the user's credentials. Therefore, if the user
	doesn't have rights to shut down the system, then neither will Smsmon32.
	
	Smsapm32 now has the ability to restart when the program requires it even though
	the currently logged on user may not have the appropriate rights. Security has
	been placed on the shutdown event so that only administrators can invoke it.
	
	Smsapm32 will make an attempt to restart a client workstation once it receives
	the notification from Smsmon32 that the user has been logged off. Smsmon32 is
	responsible for logging off the user if the user does not have the rights to
	shut down the workstation. Smsapm32 will try every 10 seconds for up to 5
	minutes to restart the system. If the retries never find the system in a logged
	out state after 5 minutes, Smsapm32 will terminate. The client service on the
	client will restart Smsapm32 later.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	
	=============================================================================
	
