---
layout: page
title: "Q145690: Quick Viewer Blank When You Remote Control to Clients"
permalink: /kb/145/Q145690/
---

## Q145690: Quick Viewer Blank When You Remote Control to Clients

{% raw %}

	Article: Q145690
	Product(s): Microsoft Systems Management Server
	Version(s): 1.1 SP1
	Operating System(s): 
	Keyword(s): kbnetwork kbtshoot smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade your Systems Management Server 1.1 client computers to Service
	Pack 1 and use Remote Control to access the client, the fonts are displayed
	incorrectly. They are spaced out and cannot be read. In addition, the Systems
	Management Server Quick View windows is blank.
	
	
	CAUSE
	=====
	
	This problem occurs if the remote control client uses a higher pixel or color
	depth resolution than the Systems Management Server.
	
	
	WORKAROUND
	==========
	
	To work around this problem, install the IDIS_LM.DLL file from the System
	Management Server 1.1 compact disc (not Service Pack 1).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. A fix to this problem is in development, but has not been
	regression-tested and may be destabilizing in production environments. Microsoft
	does not recommend implementing this fix at this time. Contact Microsoft
	Technical Support for more information on the availability of this fix.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS110SP1
	Version           : :1.1 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
