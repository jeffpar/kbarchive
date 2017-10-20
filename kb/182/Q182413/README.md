---
layout: page
title: "Q182413: SMS: CTRL+ALT+DEL &quot;Gold Key&quot; May Not Function with IBM PC"
permalink: /kb/182/Q182413/
---

## Q182413: SMS: CTRL+ALT+DEL &quot;Gold Key&quot; May Not Function with IBM PC

{% raw %}

	Article: Q182413
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2,2.0
	Operating System(s): 
	Keyword(s): kbtshoot kbsms200 kbsms120 smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When performing Remote Control of certain Systems Management Server Windows NT
	clients, the Quick Viewer CTRL + ALT + DEL "Gold Key" for system key pass
	through may not work properly. It has no effect on the Systems Management Server
	client.
	
	CAUSE
	=====
	
	If the Remote Control components of IBM NetFinity are loaded upon installation,
	it enables KeyEx and MouX (IBM's keyboard and mouse drivers) by setting keys in
	HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\... Start: REG_DWORD: to
	"0x1". It also disables the KBDCLASS and MOUCLASS (the Microsoft keyboard and
	mouse drivers) by setting their keys to "0x4".
	
	WORKAROUND
	==========
	
	To work around this problem, disable the IBM NetFinity driver (KeyEx) and then
	enable the Keyboard Class driver. To prevent this problem from occurring in the
	future, do not install the Remote Control component of NetFinity if you plan to
	use the Remote Control functionality of Systems Management Server.
	
	MORE INFORMATION
	================
	
	This problem has been attributed to the IBM NetFinity driver (KeyEx). Certain
	IBM computers have the NetFinity driver preinstalled from the manufacturer.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: prodsms Tivoli
	
	======================================================================
	Keywords          : kbtshoot kbsms200 kbsms120 smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120 kbSMS200
	Version           : winnt:1.2,2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
