---
layout: page
title: "Q269177: SMS: Calls to GetKeyboardType() May Not Work"
permalink: kb/269/Q269177/
---

## Q269177: SMS: Calls to GetKeyboardType() May Not Work

	Article: Q269177
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200preSP3fix kbsms200SP3fix kbsms200preSP4fix
	Last Modified: 09-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Programs that call the GetKeyboardType function on Microsoft Windows 2000-based
	computers may not return the correct keyboard information, even if a standard
	keyboard is in use. This issue may cause a variety of symptoms to occur. The
	symptoms depend on how the program is designed to deal with a return value of
	'0' from GetKeyboardType.
	
	This behavior occurs when Systems Management Server (SMS) Remote Control is
	installed on the Windows 2000-based computer, or on a Windows NT 4.0
	workstation.
	
	RESOLUTION
	==========
	
	Windows 2000:
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	Windows NT 4.0:
	
	There is no supported fix at this time.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	Valid keyboard types that GetKeyboardType can return are 1 through 7. 0 is not a
	valid keyboard type. For more information about the GetKeyboardType function,
	see the following Microsoft Developer Network (MSDN) Web site:
	
	  http://msdn.microsoft.com/library/psdk/sysmgmt/sysinfo_3qsl.htm
	
	Sample Symptoms
	---------------
	
	When this issue occurs, symptoms similar to the following sample symptoms may
	occur.
	
	IBM Personal Communicator:
	
	You may receive the following error message:
	
	  PCSKBD110 - Enhanced 101 or 102 key US and Non US keyboards is not supported.
	
	Oracle Client Software:
	
	You may receive the following error message:
	
	  Event ID 26
	  Application error: F45RUN caused a General Protection Fault in module
	  UT23WIN.DLL at 0001:09D0.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200preSP3fix kbsms200SP3fix kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
