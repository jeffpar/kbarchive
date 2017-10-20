---
layout: page
title: "Q139391: Mac Gen: Extracting Access Document Does Not Extract User List"
permalink: /kb/139/Q139391/
---

## Q139391: Mac Gen: Extracting Access Document Does Not Extract User List

{% raw %}

	Article: Q139391
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.1x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.1x 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run the Connection Installer to extract a gateway access component from
	a gateway Macintosh server, the user list associated with the gateway will not
	be extracted.
	
	When the access component is installed on a downstream postoffice, a system mail
	message is sent to the gateway postoffice notifying it of the new downstream
	server. An address update is then sent containing the gateway addresses that
	match the gateway address types that were made active upon installing the access
	component.
	
	MORE INFORMATION
	================
	
	The message sent to the gateway postoffice is an Enslave Request. You can run
	the Mail Network Administrator utility to see the queued system mail messages,
	and while you hold down the Option key, choose queued mail from the Admin menu.
	
	
	Additional query words: 3.10 3.10x
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN31xSearch
	Version           : WINDOWS:3.1x
	
	=============================================================================
	

{% endraw %}
