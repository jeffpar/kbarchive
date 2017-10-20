---
layout: page
title: "Q302967: SMS: Black Screen May Appear Instead of the Windows Logon Screen"
permalink: /kb/302/Q302967/
---

## Q302967: SMS: Black Screen May Appear Instead of the Windows Logon Screen

{% raw %}

	Article: Q302967
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bug kbsms200preSP4fix
	Last Modified: 09-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the Remote Control feature of Systems Management Server (SMS)
	2.0 and you connect a second time to remotely control a computer that is running
	Windows 2000 Service Pack 2, a blank screen may appear in place of the Windows
	Logon screen. This issue occurs if the user has logged off or locked the
	remotely viewed workstation between Remote Control sessions.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, use either of the following methods:
	
	- Log on without viewing the Windows Logon screen. Although you cannot see it,
	  mouse and keyboard activity is being passed to the other computer. Click the
	  Gold Key button, type your credentials, and then press ENTER. The default
	  desktop appears after you have logged on.
	
	- Stop and restart the SMS Remote Control agent service on the desktop after
	  each remote control session in which you have logged off or locked the
	  workstation. The Windows Logon screen appears as expected on the next remote
	  control attempt.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 4.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200SP2 kbSMS200SP3
	Version           : :2.0 SP2,2.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
