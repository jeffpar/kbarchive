---
layout: page
title: "Q134690: INVDOS Fails When Inventorying an Unformatted Partition"
permalink: /kb/134/Q134690/
---

## Q134690: INVDOS Fails When Inventorying an Unformatted Partition

{% raw %}

	Article: Q134690
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork smsgeneral kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	InvDOS fails and an "Abort, Retry, Fail" error message appears when the agent
	attempts to inventory a partitioned but unformatted drive.
	
	WORKAROUND
	==========
	
	To work around this problem, format the partition.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms client smsls.bat smsls login hang sms
	
	======================================================================
	Keywords          : kbnetwork smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	

{% endraw %}
