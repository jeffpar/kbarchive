---
layout: page
title: "Q153299: SMS Directory Structure Is Duplicated"
permalink: /kb/153/Q153299/
---

## Q153299: SMS Directory Structure Is Duplicated

{% raw %}

	Article: Q153299
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork smsgeneral kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If SMS is installed within a subdirectory structure (for example, \Ntapps\Sms),
	SMS will create this structure on each logon server.
	
	MORE INFORMATION
	================
	
	SMS takes the structure that it is installed in and re-creates it on each logon
	server. Consequently SMS may not necessarily be installed in a structure
	beginning with \SMS.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbnetwork smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	

{% endraw %}
