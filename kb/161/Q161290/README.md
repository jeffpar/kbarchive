---
layout: page
title: "Q161290: SMS: Network Adapter Card Information Not Correct"
permalink: /kb/161/Q161290/
---

## Q161290: SMS: Network Adapter Card Information Not Correct

	Article: Q161290
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory smsinv
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a client computer running Windows 95 is inventoried, the hardware scan may
	not report the network adapter card inventory information properly. You may find
	the following line in the [Workstation Status] section of the Sms.ini file on
	the client:
	
	     FailedHardwareCheck=LanmanNetcardInfo.
	
	This problem occurs if the Ms\Sms\Data directory on the client computer has a
	Smssafe.tmp file that contains the following entry:
	
	     LanmanNetcardInfo=Crashed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. A supported fix is now available, but has not been fully
	regression-tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Technical Support for more information.
	
	
	MORE INFORMATION
	----------------
	
	This fix requires you to delete the Smssafe.tmp file and with the
	FailedHardwareChecks line of the Sms.ini file. Once that is done, inventory will
	report the correct data.
	
	Additional query words: prodsms 1.20
	
	======================================================================
	Keywords          : kbnetwork kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS120
	Version           : :1.2
	Issue type        : kbbug
	
	=============================================================================
	
