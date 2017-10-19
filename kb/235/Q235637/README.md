---
layout: page
title: "Q235637: SMS: Remote Control Agent Is Uninstalled on Windows NT Clients"
permalink: /kb/235/Q235637/
---

## Q235637: SMS: Remote Control Agent Is Uninstalled on Windows NT Clients

	Article: Q235637
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsetup kbtool kbsms200 kbsms200bug kbHelpDesk kbsms200sp2fix
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After the Systems Management Server (SMS) Remote Control Services Manager
	performs the client verification cycle and you restart your computer, the SMS
	Remote Control Agent may be uninstalled.
	
	CAUSE
	=====
	
	This problem can occur if the Remote Control Services Manager is unable to stop
	the Remote Control Agent. When this occurs, the service is marked for deletion
	when you next restart your computer.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	WORKAROUND
	==========
	
	To work around this problem and stop the Remote Control Agent from being marked
	for deletion, ensure that the service can stop correctly. For additional
	information about the only known issue that prevents the service from stopping
	correctly, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q173594 SMS: Remote Control Agent Hangs on Startup and Shutdown
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	When the SMS Remote Control Agent service is reinstalled, or repaired through
	the Systems Management tool in Control Panel, the service is first uninstalled
	if it already exists. Before actually uninstalling the service, the Remote
	Control Services Manager attempts to stop the Remote Control Agent.
	
	If the attempt to stop the Remote Control Agent does not work, the service is
	only marked for deletion. The subsequent command to install the agent finds it
	still running and no problems are reported even though the service is pending
	uninstallation. When the client is restarted, the Microsoft Windows NT Service
	Control Manager removes the SMS Remote Control Agent service because it is still
	marked for deletion.
	
	The following entries in the %windir%\MS\SMS\Logs\RemCtrl.log file always
	accompany this problem:
	
	********** RCSvcs - Starting Remote Control Services Manager **********  
	RCSvcs:  Commanded to Stop and remove WUSER32 Service.  
	RCSvcs - Stopping WUSER32 service.  
	RCSvcs - WUSER32 service stopped, return code 1.  
	RCSvcs - Deleting WUSER32 service.  
	
	The return code of "1" indicates a problem when stopping the service.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsetup kbtool kbsms200 kbsms200bug kbHelpDesk kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
