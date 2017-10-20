---
layout: page
title: "Q198710: SMSINST: Edit ini File May Produce Unexpected Results"
permalink: /kb/198/Q198710/
---

## Q198710: SMSINST: Edit ini File May Produce Unexpected Results

{% raw %}

	Article: Q198710
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0,2.0; winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms120 kbsms120bug kbsmsInst smsinst
	Last Modified: 27-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	- Microsoft Systems Management Server Installer versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Edit INI File script item in Systems Management Server Installer is used to
	make modifications to an existing INI file during script execution. When using a
	single script item to make modifications to existing values while at the same
	time removing other sections of an INI file, the resulting contents of the INI
	file may be incorrect.
	
	Example of Script Item Settings That Can Reproduce Problem
	----------------------------------------------------------
	
	[Section1]
	
	[Section2]
	Valueitem=XXXXXX
	
	[Section3]
	Valueitem=XXXXXX
	
	The results of this modification should be to remove [Section1] completely and
	change the values of the entries listed under the other sections. Test results
	have shown that this can actually leave [Section1] in the INI file and
	transcribe the values from the following section back into the unremoved
	[Section1]. To work around this problem, try either of the following:
	
	1. Separate the task into multiple Edit INI File script items.
	
	  -or-
	
	2. Move the section to be deleted to the bottom of the Edit INI File settings.
	
	WORKAROUND
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server 2.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q236325 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server 2.0.
	This problem was first corrected in Systems Management Server 2.0 Service Pack
	Service Pack 1.
	
	Additional query words: prodsms smsinst
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms120 kbsms120bug kbsmsInst smsinst 
	Technology        : kbSMSSearch kbSMS200 kbSMSI100 kbSMSI200
	Version           : WINDOWS:1.0,2.0; winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
