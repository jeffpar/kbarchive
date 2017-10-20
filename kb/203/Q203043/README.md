---
layout: page
title: "Q203043: Windows NT Diagnostics Does Not Locate a Client Computer"
permalink: /kb/203/Q203043/
---

## Q203043: Windows NT Diagnostics Does Not Locate a Client Computer

{% raw %}

	Article: Q203043
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbHelpDesk
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT Diagnostics in the Systems Management Server (SMS) Administrator
	console relies solely on name resolution to locate an SMS client. The following
	error message is displayed if a computer that is running the SMS Administrator
	console is not able to locate an SMS client through name resolution:
	
	  A Windows NT system named \\<Computer name> could not be found on the
	  network
	
	CAUSE
	=====
	
	Windows NT Diagnostics in the SMS Administrator console does not use the
	client's IP address from the SMS database. It uses only name resolution to
	locate the SMS client.
	
	WORKAROUND
	==========
	
	As a workaround, run the following command to invoke Windows NT Diagnostics
	using the client's IP address:
	
	  winmsd.exe \\<IP address>
	
	Additional query words: prodsms RC32 help desk
	
	======================================================================
	Keywords          : kbHelpDesk 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
