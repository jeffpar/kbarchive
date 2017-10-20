---
layout: page
title: "Q153651: Appstart Cannot Resolve Long Server Names in Windows 3.1 Client"
permalink: /kb/153/Q153651/
---

## Q153651: Appstart Cannot Resolve Long Server Names in Windows 3.1 Client

{% raw %}

	Article: Q153651
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbPGC smspgc
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	Appstart cannot resolve long server names when processing a reference to the
	MSTest directory. Therefore, an application configured to use any program in the
	MSTest directory will fail to establish a connection to the server from a
	Windows 3.1 client computer.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. This problem has been corrected in Systems Management
	Server version 1.2.
	
	Additional query words: prodsms pgc appctrl
	
	======================================================================
	Keywords          : kbnetwork kbPGC smspgc 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	

{% endraw %}
