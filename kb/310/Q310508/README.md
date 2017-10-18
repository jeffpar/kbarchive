---
layout: page
title: "Q310508: SMS: Client May Not Accelerate After Uninstalling Remote Control"
permalink: kb/310/Q310508/
---

## Q310508: SMS: Client May Not Accelerate After Uninstalling Remote Control

	Article: Q310508
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200preSP4fix
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you uninstall and then reinstall the Systems Management Server (SMS) 2.0
	Remote Control feature on either a Microsoft Windows 2000-based or Microsoft
	Windows XP-based client computer, the clients may not be accelerated. You can
	determine that this is the problem that you are experiencing if you click Show
	Status in the Remote Control tool in Control Panel.
	
	CAUSE
	=====
	
	This problem occurs because the SMS Remote Control Uninstall program
	(Rcunist.exe), changes the Start value from 3 to 4 in the following registry
	key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\Idisw2km
	
	When this occurs, the Microsoft SMS Mirror driver (Idisw2km) is disabled. When
	you reinstall the Remote Control feature, Windows detects that Idisw2km is
	installed but does not verify that it is disabled.
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	To work around this problem:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate and click the Start value in the following registry key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\Idisw2km
	
	3. On the Edit menu, click DWORD, type "3" (without the quotation marks), and
	  then click OK.
	
	4. Quit Registry Editor.
	
	5. Restart the computer.
	
	NOTE: Use these steps only if you experience the problem that is described in the
	Symptoms section. If you uninstall and then reinstall the client again, you must
	repeat these steps.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	The problem that is described in the Symptoms section does not occur if you use
	the Repair Installation feature in the Systems Management tool in Control Panel.
	When you use the Repair Installation feature, Rcuninst.exe does not run.
	
	Support for Windows 2000 and Windows XP Remote Control acceleration is available
	for versions of SMS that are later than SMS 2.0 Service Pack 3 (SP3). For more
	information, view the following Microsoft Knowledge Base article:
	
	  Q264884 SMS: Windows 2000 Client Video Cannot Be Accelerated During a Remote
	  Control Session
	
	Additional query words: prodsms idisntkm RC remctrl
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
