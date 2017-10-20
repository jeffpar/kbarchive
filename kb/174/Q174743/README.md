---
layout: page
title: "Q174743: XADM: Cannot Install 4.0/5.0 KMS After Installing 5.5 Server"
permalink: /kb/174/Q174743/
---

## Q174743: XADM: Cannot Install 4.0/5.0 KMS After Installing 5.5 Server

{% raw %}

	Article: Q174743
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you run Setup to install a Key Management (KM) server version 4.0 or 5.0 in a
	site that has a mix of version 4.0, 5.0, and 5.5 servers, Setup will fail with
	the following error message:
	
	  Unable to create Encryption-Cfg object in the site you are running
	  Setup. Verify the Microsoft Exchange Directory is running then try
	  again.
	
	MORE INFORMATION
	================
	
	This is by design. This error occurs because Exchange Server version 5.5 Setup
	creates the encryption-cfg object for the site, and earlier versions of the KM
	server Setup program cannot utilize an existing version of this object.
	
	Additional query words: KMS KM
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : 5.5
	
	=============================================================================
	

{% endraw %}
