---
layout: page
title: "Q288547: SMS: WMI Returns Win32_Share Instances Indefinitely"
permalink: kb/288/Q288547/
---

## Q288547: SMS: WMI Returns Win32_Share Instances Indefinitely

	Article: Q288547
	Product(s): Microsoft Systems Management Server
	Version(s): 1.1,1.5,2.0
	Operating System(s): 
	Keyword(s): kbWBEM kbsms200 kbsms200bug kbInventory kbSysAdmin kbsms200preSP4fix kbWin2000sp3fix
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows Management Instrumentation (WMI) can return instances of the Win32_Share
	class indefinitely. This problem can occur until you restart the computer or you
	stop the Winmgmt service. When this problem occurs, the Winmgmt exhibits high
	levels of CPU usage.
	
	On the Systems Management Server (SMS) clients, this problem may cause symptoms
	such as high CPU usage by the Winmgmt service and the creation of large hardware
	inventory MIF files by the SMS Hardware Inventory agent. The MIF files may be so
	large that they exceed the default maximum MIF file processing size that is
	defined in SMS 2.0 (5,000,000 bytes) and may not be processed.
	
	CAUSE
	=====
	
	If more than approximately 256 shares exist on the computer, querying for
	instances of the Win32_Share class by using WMI may be reiterative.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	
	
	WORKAROUND
	==========
	
	To work around this problem with SMS 2.0, disable the Win32_Share class
	enumeration in the SMS site's Sms_def.mof file.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 4. This problem was first corrected
	in Windows 2000 Service Pack 3.
	
	
	Additional query words: kbMgmtAdmin prodsms
	
	======================================================================
	Keywords          : kbWBEM kbsms200 kbsms200bug kbInventory kbSysAdmin kbsms200preSP4fix kbWin2000sp3fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : :1.1,1.5,2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
