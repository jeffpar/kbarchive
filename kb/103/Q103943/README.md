---
layout: page
title: "Q103943: Mac Gty: Details Unavailable for Gateway Users"
permalink: /kb/103/Q103943/
---

## Q103943: Mac Gty: Details Unavailable for Gateway Users

{% raw %}

	Article: Q103943
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.0,3.1,3.1a,3.1c,3.1d
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 3.0, 3.1, 3.1a, 3.1c, 3.1d 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Details button in the Addressing screen is unavailable (grayed) after a
	gateway recipient has been selected.
	
	CAUSE
	=====
	
	You are attempting to get details for a gateway recipient defined by the gateway
	server's network manager. Additionally, the gateway recipient name has been
	propagated to the current server via an access gateway. If this is the case, the
	Details button will remain unavailable when you select a gateway recipient. The
	Gateway Installer does not include the necessary resources to allow the access
	gateway to obtain detailed information about the gateway recipients when the
	access component is installed. Therefore, details on server-defined gateway
	recipients are not available to those users on gateway access servers.
	
	However, detailed information for the gateway recipients is available to
	Microsoft Mail users whose accounts are defined on the master gateway server.
	
	Gateway recipients created by individual users within their Personal Address
	Books will still display details.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0 and 3.1 of
	Microsoft Mail for AppleTalk Networks. We are researching this problem and will
	post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	Additional query words: 3.00 3.10 3.10a 3.10c 3.10d names addresses
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN310 kbMailATN310a kbMailATN310c kbMailATN310d
	Version           : WINDOWS:3.0,3.1,3.1a,3.1c,3.1d
	
	=============================================================================
	

{% endraw %}
