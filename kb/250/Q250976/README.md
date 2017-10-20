---
layout: page
title: "Q250976: SMS: Software Metering Does Not Use Original Program Name Policy"
permalink: /kb/250/Q250976/
---

## Q250976: SMS: Software Metering Does Not Use Original Program Name Policy

{% raw %}

	Article: Q250976
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2,2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms120 kbsms120bug kbsms200preSP3fix kbsms200SP3fix
	Last Modified: 07-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2, 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using software metering in Offline mode, the original program name
	policy is not used. The original program name policy setting requires that the
	Software Metering client agent check the file header instead of the Explorer.exe
	name.
	
	This also affects the use of the Forbidden Programs list when you are using the
	original program name policy. The Forbidden Programs list is a list that is
	downloaded locally by the client. You can add programs to the Forbidden Programs
	list by metering a program and then restricting the use of the program to 24
	hours a day. With Offline metering, if you are using an original program name
	policy, and a program that is in the Forbidden Programs list is renamed on a
	metering client, the program can be run successfully.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	WORKAROUND
	==========
	
	To work around this issue, use software metering in Online mode.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 3.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms120 kbsms120bug kbsms200preSP3fix kbsms200SP3fix 
	Technology        : kbSMSSearch kbSMS120 kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :1.2,2.0,2.0 SP1,2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
