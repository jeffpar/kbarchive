---
layout: page
title: "Q310577: Winmgmt May Cause Access Violation During Hardware Inventory"
permalink: /kb/310/Q310577/
---

## Q310577: Winmgmt May Cause Access Violation During Hardware Inventory

	Article: Q310577
	Product(s): Microsoft Systems Management Server
	Version(s): 1.1,2.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbnetwork kbtool kbsms200preSP4fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	- Microsoft Windows Management Instrumentation, version 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Windows Management Instrumentation (WMI) version 1.1 (698) under
	Microsoft Windows NT 4.0, the Winmgmt service may cause an access violation
	error during an SMS hardware inventory.
	
	CAUSE
	=====
	
	On some hardware configurations, WMI enumeration of the following WMI classes
	may lead to an access violation error in the Winmgmt service:
	
	- Win32_NetworkAdapter
	
	- Win32_NetworkadapterConfiguration
	
	- Win32_Operatingsystem
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	It may be possible to determine if the WMI classes that are listed in the
	"Cause" section of this article are the problematic classes by attempting
	class-instance enumeration with the Wbemtest.exe WMI utility.
	
	Using Wbemtest.exe
	------------------
	
	1. Connect to the root\Cimv2 namespace on the computer with the problem.
	
	2. Click the Query button to open the WQL query window.
	
	3. Type "Select * from Win32_NetAdapter" (without the quotation marks).
	
	4. Click Apply.
	
	Try each of the WMI classes that are listed in the "Cause" section of this
	article in the WMI query. If the Winmgmt service causes an access violation
	error during instance enumeration, upgrade WMI on the affected computer or
	computers to WMI version 1.5.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg kbnetwork kbtool kbsms200preSP4fix 
	Technology        : kbWMISearch kbSMSSearch kbAudDeveloper kbWMI110 kbSMS200
	Version           : :1.1,2.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
