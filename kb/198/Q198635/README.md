---
layout: page
title: "Q198635: SMS: Expected CPU Utilization During a Remote Control Session"
permalink: kb/198/Q198635/
---

## Q198635: SMS: Expected CPU Utilization During a Remote Control Session

	Article: Q198635
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbtshoot kbConfig kbsms200 smsremtshoot smsconfig kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Systems Management Server (SMS) version 2.0, remote control tends to cause
	CPU utilization to rise depending on the configuration of the remote control
	settings.
	
	MORE INFORMATION
	================
	
	Remote Control in SMS 2.0 has been shown to utilize more of the CPU when
	controlling clients running with higher screen resolutions.
	
	On a Windows NT 4.0 system, running with low compression and no acceleration, the
	percentage of "Privileged" CPU time is higher than the "User" CPU time. The task
	of capturing screen data is what raises the CPU utilization.
	
	The CPU utilization as reported by the Task Manager may consistently stay between
	90 percent and 100 percent during a remote control session in which acceleration
	is loaded and compression is set to High. This can also be attributed to the
	work the CPU must perform in order to compress the data to reduce the amount of
	network bandwidth used.
	
	If compression is set to Low, then CPU utilization can be expected to fall
	between 50 and 65 percent (approximate values) according to the Task Manager and
	never goes to 100 percent.
	
	You may experience some performance issues during a remote control session.
	Memory usage on the client should remain normal during any remote control
	sessions.
	
	For these reasons, you should keep in mind the performance impact on Application
	servers and how long you leave a remote control session open to one.
	
	Additional query words: prodsms rc32
	
	======================================================================
	Keywords          : kbtshoot kbConfig kbsms200 smsremtshoot smsconfig kbRemoteProg 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
