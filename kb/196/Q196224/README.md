---
layout: page
title: "Q196224: SMS: STOP 1E Error When Using the &quot;Gold Key&quot; to Remote Control"
permalink: /kb/196/Q196224/
---

## Q196224: SMS: STOP 1E Error When Using the &quot;Gold Key&quot; to Remote Control

{% raw %}

	Article: Q196224
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbRemote kbsms120bug kbHelpDesk kbRemoteProg
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some systems will generate a Windows NT blue screen error message with a STOP 1E
	(0x0000001E) when the Quick Viewer "gold key" is used to generate a
	"CTRL+ALT+DEL" sequence through Systems Management Server Remote Control.
	
	CAUSE
	=====
	
	This problem appears to be the same as that described in the following article
	in the Microsoft Knowledge Base:
	
	  Q164157 SMS: Kbstuff.sys May Cause a STOP 1E Blue Screen Error
	
	However, a different code path is being taken, so the error checking included in
	that code fix is not used.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 1.2. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodsms sp sp3 rc
	
	======================================================================
	Keywords          : kbRemote kbsms120bug kbHelpDesk kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
