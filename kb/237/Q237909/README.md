---
layout: page
title: "Q237909: XADM: Error Listed in Output File for KM Server Bulk Enrollment"
permalink: /kb/237/Q237909/
---

## Q237909: XADM: Error Listed in Output File for KM Server Bulk Enrollment

	Article: Q237909
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 10-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The text file that is generated when you run a Key Management server (KM server)
	bulk enrollment by using the Exchange Server Administrator program contains text
	that is similar to the following:
	
	  /o=orgname/ou=sitename/cn=recipients/cn=username, ****** Error
	
	CAUSE
	=====
	
	The user whose mailbox Distinguished Name (DN) is displayed in the error message
	already has an enrollment token, but has not enrolled in advanced security.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	MORE INFORMATION
	================
	
	The output in the text file contains information for users who are newly
	enrolled, users who have been revoked, and users who have already received
	tokens.
	
	If a user is new, the file lists the DN and the token issued. If the user has
	been revoked, the file lists the DN and revoked status. If the user has a token
	and has not enrolled, the file lists the DN and the following text:
	
	  ****Error****
	
	NOTE: If the user has been revoked, the Bulk Enrollment tool does not re-enable
	advanced security for the user.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
