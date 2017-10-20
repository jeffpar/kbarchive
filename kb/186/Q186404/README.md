---
layout: page
title: "Q186404: SMS: Rservice Fails to Enumerate Clients"
permalink: /kb/186/Q186404/
---

## Q186404: SMS: Rservice Fails to Enumerate Clients

{% raw %}

	Article: Q186404
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsetup kbPCM kbsmsUtil smssetup smspcm smsutil
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft Systems Management Server, you can use Rservice to remotely install
	Package Command Manager (PCM) as a service on Windows NT-based systems. Rservice
	uses the browse list to enumerate potential computers for service installation.
	Rservice does not enumerate a computer that is not in the browse list, and will
	not install PCM as a service on it.
	
	It is important to note, however, that using Rservice with the /M switch allows
	you to specify a computer rather than depending on the browse list.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsetup kbPCM kbsmsUtil smssetup smspcm smsutil 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
