---
layout: page
title: "Q275016: SMS: Access Violation with Windows CE Platform Builder Add-on"
permalink: kb/275/Q275016/
---

## Q275016: SMS: Access Violation with Windows CE Platform Builder Add-on

	Article: Q275016
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbenv kbsms200 kbsms200bug kbsms120 kbsms120bug kbsms200preSP3fix kbsms200SP3fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On Windows NT-based Systems Management Server (SMS) client computers that have
	the Microsoft Windows CE Platform Builder add-on installed, you may receive
	access violation error messages in the Odpusr32.exe, Smsapm32.exe, and
	Smsmon32.exe programs.
	
	NOTE: On client computers that experience this problem, software distribution is
	not functional.
	
	CAUSE
	=====
	
	This problem occurs because there is a fault in the method that is used by the
	SMS client to detect an interactive user session. The Platform Builder add-on
	adds numerous performance monitor counters to the computer. Some of these
	additional counters have duplicate names to those that are used by SMS. Because
	the counters have duplicate names, the SMS client accesses the incorrect
	information.
	
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
	Systems Management Server 2.0 Service Pack 3.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kbsms200 kbsms200bug kbsms120 kbsms120bug kbsms200preSP3fix kbsms200SP3fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
