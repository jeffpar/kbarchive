---
layout: page
title: "Q153656: Shared Applications and Drive Mapping Problems"
permalink: /kb/153/Q153656/
---

## Q153656: Shared Applications and Drive Mapping Problems

{% raw %}

	Article: Q153656
	Product(s): Microsoft Systems Management Server
	Version(s): 1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbPGC smspgc
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The following problems may occur with shared applications and drive mappings:
	
	- When you use MSOFFICE as a shared application, more than one drive may be
	  mapped to the MSAPPS and OFFICE shares.
	
	- Shared applications do not use existing connections to the appropriate
	  shares. Drives mapped prior to going into Windows are not used and new drives
	  are mapped for each application launched.
	
	- Not all of the connections are deleted after closing a shared application.
	  Some are deleted within three minutes but others remain indefinitely.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms appctl16 appctl32 win95 shared app
	
	======================================================================
	Keywords          : kbnetwork kbPGC smspgc 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : :1.0,1.1
	
	=============================================================================
	

{% endraw %}
