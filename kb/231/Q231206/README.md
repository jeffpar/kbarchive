---
layout: page
title: "Q231206: SMS: Problems Installing Netmon When Dialog Box Is Open"
permalink: /kb/231/Q231206/
---

## Q231206: SMS: Problems Installing Netmon When Dialog Box Is Open

{% raw %}

	Article: Q231206
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsetup kbtool kbsms200 kbsms200bug
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the full version of the Network Monitor tool on a Microsoft
	Windows 2000-based computer, the Network Monitor driver is not added to Local
	Area Connection properties. Note that this problem does not occur unless you
	install the full version of the Network Monitor tool.
	
	CAUSE
	=====
	
	This problem can occur if a Local Area Connection Properties dialog box is open
	when you install the Network Monitor tool. The Network Monitor installation
	program cannot automatically add the Network Monitor driver if this dialog box
	is open.
	
	
	WORKAROUND
	==========
	
	To work around this problem, use either of the following methods:
	
	Method 1
	--------
	
	Verify that there are no Local Area Connection Properties dialog boxes open
	before you install Network Monitor.
	
	Method 2
	--------
	
	Install the Network Monitor driver again from the Local Area Connection
	Properties dialog box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: netmon
	
	======================================================================
	Keywords          : kbsetup kbtool kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
