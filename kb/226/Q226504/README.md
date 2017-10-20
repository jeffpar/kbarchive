---
layout: page
title: "Q226504: SMS: APM Does Not Execute the Correct Number of Advertisements"
permalink: /kb/226/Q226504/
---

## Q226504: SMS: APM Does Not Execute the Correct Number of Advertisements

{% raw %}

	Article: Q226504
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200fix kbAdvertisement
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an advertised program directs Systems Management Server to restart the
	client, the Available Program Manager (APM) scheduler may fail to detect the
	shutdown and instead start a new program.
	
	When the shutdown is finally detected, the advertisement is cancelled, and no
	programs are executed.
	
	When a job is executed, the status or return code is stored in the
	Ms\Sms\Clicomp\Apa\Data\Complete directory. The executed jobs are stored as text
	files in this directory with a name composed of the package ID and a numerical
	extension (index), for example:
	
	  F1200007.000
	
	When a job is cancelled, the value stored in LastRunStatus within each text file
	in the Data\Complete directory is 0x12. To work around this problem, ensure that
	no restart is requested (when possible).
	
	CAUSE
	=====
	
	The shutdown event is improperly detected by the APM.
	
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
	  Sms\Inboxes\Clicomp.src\Smsapm32 directory. If this file lists version number
	  2.00.1239.0020 or later, you do not need the fix.
	
	- On the Systems Management Server client, double-click the Systems Management
	  icon in Control Panel and then click the Components tab. If the version
	  number of the Available Programs Manager is 2.00.1239.0020 or later, you do
	  not need the fix.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200fix kbAdvertisement 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
