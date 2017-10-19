---
layout: page
title: "Q188671: XADM: How to Determine When Permissions Have Been Altered"
permalink: /kb/188/Q188671/
---

## Q188671: XADM: How to Determine When Permissions Have Been Altered

	Article: Q188671
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how an Exchange administrator can determine when
	permissions have been modified on the Organization, Site, or Configuration
	objects in the Exchange Administrator program.
	
	MORE INFORMATION
	================
	
	The following event appears in the application log of the event viewer after an
	administrator has modified the permissions on one of these objects:
	
	  Event ID 1175
	  Source  MSExchangeDS
	  Type  Information
	  Category  Security
	
	With the following descriptions:
	
	- If the change is made at the Organizational level: Description: The Security
	  attributes of object /o=<Organization Name> were modified.
	
	- If the change is made at the Site level: Description: The Security attributes
	  of object /o=<Organization Name>/ou=<Site Name> were modified.
	
	- If the change is made at the Configuration level: Description: The Security
	  attributes of object /o=<Organization Name>/ou=<Site
	  Name>/cn=Configuration were modified.
	
	With diagnostic logging set to Maximum on "Security" in the properties of
	Directory Service/Diagnostic Logging, the following event is logged:
	
	  Event ID 1053
	  Source MSExchangeDS
	  Type Information
	  Category Security
	
	With the following descriptions:
	
	- If the change is made at the Organizational level: Description: The security
	  descriptor granted 0x80 access on object /o=<Organization Name> for
	  this user.
	
	- If the change is made at the Site level: Description: The security descriptor
	  granted 0x80 access on object /o=<Organization Name>/ou=<Site
	  Name> for this user.
	
	- If the change is made at the Configuration level: Description: The security
	  descriptor granted 0x80 access on object /o=<Organization
	  Name>/ou=<Site Name>/cn=Configuration for this user.
	
	In the previous Events, "admin" permissions were granted to a user; this equals
	"0x80" in the description. This number varies depending on which permissions
	were modified.
	
	The description does not state which user made the modification to the objects;
	however, in the application log under the USER column, it states which user
	caused the event to be generated.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
