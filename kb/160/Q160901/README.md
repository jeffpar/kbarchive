---
layout: page
title: "Q160901: SMS: Delete Special Doesn't Remove Entries from Machine Groups"
permalink: /kb/160/Q160901/
---

## Q160901: SMS: Delete Special Doesn't Remove Entries from Machine Groups

{% raw %}

	Article: Q160901
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbusage kbsmsAdmin smsadmin smsgeneral kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A delete special based on "Machines with last activity" from the Sites window
	will remove inactive computers from the Sites window, but will not remove any
	static Machine groups that included those computers. In their place, there will
	be a blank line with a machine icon at the beginning.
	
	In Systems Management Server, version 1.1 only, this can result in an Dr. Watson
	error if a package is dropped on a machine group where old deleted machines
	remain. For example:
	
	An application error has occurred and an application error log is being
	generated.
	
	  SMSEXEC.exe
	  Exception: access violation (0xc0000005), address 0x1f0f1dd4
	
	WORKAROUND
	==========
	
	To work around this problem, do either of the following:
	
	- Manually delete the inactive computer from the machine group.
	
	-or-
	
	- Manually delete the computer from the Sites window.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1 and 1.2. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: blank admin
	
	======================================================================
	Keywords          : kbnetwork kbusage kbsmsAdmin smsadmin smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	
	=============================================================================
	

{% endraw %}
