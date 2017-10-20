---
layout: page
title: "Q213097: SMSINST: Create Shortcut Command Truncates Source Path Directory"
permalink: /kb/213/Q213097/
---

## Q213097: SMSINST: Create Shortcut Command Truncates Source Path Directory

{% raw %}

	Article: Q213097
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0,2.0; winnt:1.2,2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms120 kbsms120bug smsinst
	Last Modified: 10-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer versions 2.0, 1.0 
	- Microsoft Systems Management Server versions 1.2, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using long file names for directories in the path to a shortcut in the
	Create Shortcut command, Systems Management Server Installer truncates the
	directory names in the path to 8 characters. This happens when there are no
	mappings to the drive specified in the Source Path.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms sms installer shortcut long file name
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms120 kbsms120bug smsinst 
	Technology        : kbSMSSearch kbSMS120 kbSMS200 kbSMSI100 kbSMSI200
	Version           : WINDOWS:1.0,2.0; winnt:1.2,2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
