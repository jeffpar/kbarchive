---
layout: page
title: "Q124429: SMS Shared Version of Works 3.0 Displays OLE Error on Startup"
permalink: /kb/124/Q124429/
---

## Q124429: SMS Shared Version of Works 3.0 Displays OLE Error on Startup

{% raw %}

	Article: Q124429
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbinterop smsgeneral kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After configuring and distributing Microsoft Works 3.0 as a Systems Management
	Server shared application, an OLE registration error message appears when you
	attempt to start Works. After choosing OK, Works runs normally with no further
	errors.
	
	CAUSE
	=====
	
	OLE applications are supposed to update their Registry entries on startup to
	reflect the actual locations from which they run. Works is reporting an error if
	these settings are as expected. In this instance, Works objects to the SMS proxy
	applications file specification in its OLE Registry entries. This has no effect
	on how OLE and the MSAPPS proxies work as the actual path is resolved when an
	MSAPPs program is executed. The message is a warning and not an indication that
	Works is improperly configured.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.0. This problem has been corrected in Systems Management Server
	version 1.1.
	
	
	Additional query words: sms prodsms
	
	======================================================================
	Keywords          : kbinterop smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	

{% endraw %}
