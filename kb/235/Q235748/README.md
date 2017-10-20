---
layout: page
title: "Q235748: SMS: Options in &quot;Delete Files&quot; Script Item Function Improperly"
permalink: /kb/235/Q235748/
---

## Q235748: SMS: Options in &quot;Delete Files&quot; Script Item Function Improperly

{% raw %}

	Article: Q235748
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0,2.0; winnt:1.2,2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms120 kbsms120bug kbsmsInst
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2, 2.0 
	- Microsoft Systems Management Server Installer versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	"Include Sub-Directory" and "Remove directory containing files" options in
	Delete File function of SMS Installer are not functional.
	
	CAUSE
	=====
	
	This happens after a recursive search for the file on the drive is completed.
	The directory cannot be deleted through the script (or manually in Explorer)
	until a reboot has occurred.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server 2.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server 2.0.
	This problem was first corrected in Systems Management Server 2.0 Service Pack
	Service Pack 1.
	
	Additional query words: prodsms delete file smsinst
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms120 kbsms120bug kbsmsInst 
	Technology        : kbSMSSearch kbSMS120 kbSMS200 kbSMSI100 kbSMSI200
	Version           : WINDOWS:1.0,2.0; winnt:1.2,2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
