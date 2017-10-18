---
layout: page
title: "Q300102: Site ID and Encryption Key from Different Computer Not Working"
permalink: kb/300/Q300102/
---

## Q300102: Site ID and Encryption Key from Different Computer Not Working

	Article: Q300102
	Product(s): Microsoft Developer Network
	Version(s): 1.3,1.4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Passport, versions 1.3, 1.4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Installing the Passport encryption key and Site ID on a computer that does not
	fall into the domain that is provided when you registered results in the site
	not working correctly.
	
	MORE INFORMATION
	================
	
	All validation of cobranding, routing, and encryption is based on the Site ID
	and return URL that your code passes to the Passport network servers. The same
	configuration information can be installed on several computers that are part of
	the same cluster or farm, and thus are intended to act as if they were a single
	server.
	
	The key installation program that is used to install the Passport keys must be
	run individually on each server that hosts Passport Manager. This is because the
	key is actually locally encrypted into the server's registry, and one of the
	elements that is used for encryption and decryption is the Media Access Control
	(MAC) address that is obtained specifically from the primary network card of the
	server. Merely copying the Passport registry node from one server to another is
	not sufficient and results in an unreadable key on the destination server.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbPassport140 kbPassport130 kbPassportSearch
	Version           : :1.3,1.4
	Issue type        : kbinfo
	
	=============================================================================
	
