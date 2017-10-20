---
layout: page
title: "Q149960: Macs Unable to Connect to PCM Server in Zones with Long Names"
permalink: /kb/149/Q149960/
---

## Q149960: Macs Unable to Connect to PCM Server in Zones with Long Names

{% raw %}

	Article: Q149960
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	The Package Command Manager (PCM) for the Macintosh may report an error 5016 when
	attempting to launch a package. A look at the Sms.ini file confirms that the
	server list is correct. A manual connection to the server with the Chooser
	application also works.
	
	CAUSE
	=====
	
	This can occur if the zone and server names, including the '@' separator, exceed
	32 characters. The Windows NT 'Services for Macintosh' (SFM) documentation
	states that it will support 31 characters for the Zone name, plus the length of
	the server name. This combination can exceed the 31 character length that is
	being used by the Macintosh version of PCM.
	
	
	RESOLUTION
	==========
	
	To work around this problem, reduce the zone or server name so the combined
	length is 31 characters or less.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms buffer volume size truncate netmon
	
	======================================================================
	Keywords          : kbnetwork kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	
	=============================================================================
	

{% endraw %}
