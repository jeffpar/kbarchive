---
layout: page
title: "Q216744: SMS: APM Detects Non-Zero Exit Code as a Failed Advertisement"
permalink: /kb/216/Q216744/
---

## Q216744: SMS: APM Detects Non-Zero Exit Code as a Failed Advertisement

	Article: Q216744
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2,2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms120 kbsms120bug kbAdvertisement
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Systems Management Server 2.0 client runs an advertisement that returns a
	non-zero exit code, the Available Program Manager (APM) reports that the
	advertisement failed. Under these conditions, the client will also not be
	restarted even though the Program Properties specify that Systems Management
	Server will restart the computer.
	
	This will happen even if the installation program creates a status MIF stating
	"Success".
	
	CAUSE
	=====
	
	This problem occurs because APM considered any non-zero exit code to be a failed
	install, even if the installation status MIF stated success.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server 2.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server 2.0.
	
	MORE INFORMATION
	================
	
	The updated APM will now read the status MIF created by the installation to
	determine whether or not the process was successful. If the status MIF created
	by your installation states success, APM will report that the Advertisement was
	successful and restart the client if the program properties are set for it to do
	so.
	
	You can determine the version of APM that your clients are using by doing either
	of the following:
	
	- On your site server, open the Compver.ini file in the
	  SMS\Inboxes\Clicomp.src\Smsapm32 directory. If this file lists a version
	  2.00.1239.0003 or later, you do not need the fix.
	
	  -or-
	
	- On the Systems Management Server client, double-click the Systems Management
	  icon in Control Panel and then click the Components tab. If the version
	  number of the Available Programs Manager is 2.00.1239.0003 or later you do
	  not need the fix.
	
	Additional query words: prodsms machine reboot reboots rebooted reskit
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms120 kbsms120bug kbAdvertisement 
	Technology        : kbSMSSearch kbSMS120 kbSMS200
	Version           : winnt:1.2,2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
