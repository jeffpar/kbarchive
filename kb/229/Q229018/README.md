---
layout: page
title: "Q229018: SMS: APM Re-Executes Some Advertisements"
permalink: /kb/229/Q229018/
---

## Q229018: SMS: APM Re-Executes Some Advertisements

{% raw %}

	Article: Q229018
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When multiple programs belonging to the same package are advertised to a client,
	the Available Programs Manager (APM) scheduler might fail to keep track of some
	programs that have been executed, causing the scheduler to re-execute some of
	those programs.
	
	The scheduler executes the jobs stored in Ms\Sms\Clicomp\Apa\Data\Jobs and keeps
	track of executed jobs in the Ms\Sms\Clicomp\Apa\Data\Complete directory. The
	jobs are stored as with a file name composed of the package ID and a numerical
	extension (index), such as:
	
	  F1200007.000
	  F1200007.001
	  F1200007.002
	
	To work around this problem, advertise only one program per package.
	
	CAUSE
	=====
	
	A problem with the management of the jobs indexes is the cause of this issue.
	
	WORKAROUND
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server 2.0. For additional information, click the following article number to
	view the article in the Microsoft Knowledge Base:
	
	  Q236325 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Systems Management Server 2.0.
	This problem was first corrected in Systems Management Server 2.0 Service Pack
	Service Pack 1.
	
	MORE INFORMATION
	================
	
	You can determine the version of APM that your clients are using by doing either
	of the following:
	
	- On your site server, open the Compver.ini file in the
	  SMS\Inboxes\Clicomp.src\Smsapm32 directory. If this file is version
	  2.00.1239.0020 or later, you do not need the fix.
	
	- On the Systems Management Server client, double-click the Systems Management
	  icon in Control Panel and then click the Components tab. If the version
	  number of the Available Programs Manager is 2.00.1239.0020 or later, you do
	  not need the fix.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
