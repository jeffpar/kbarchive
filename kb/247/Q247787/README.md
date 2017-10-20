---
layout: page
title: "Q247787: XFOR: SMTP Mail Staying in MTA Queue, with Events 9297 and 3161"
permalink: /kb/247/Q247787/
---

## Q247787: XFOR: SMTP Mail Staying in MTA Queue, with Events 9297 and 3161

{% raw %}

	Article: Q247787
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are administering Microsoft Exchange Server, you may discover that
	Simple Mail Transport Protocol (SMTP) mail is sitting in the Message Transfer
	Agent (MTA) queue rather than going out through the Internet Mail Service (IMS).
	The following events may appear in the Event Viewer:
	
	  Event ID: 9297
	  Source: MSExchangeMTA
	  Description: The user /o=ORGanization /ou=SITE1 /cn=Configuration /cn=Servers
	  /cn=SERVER1 /cn=Microsoft Private MDB has caused a security violation.
	  Locality table (LTAB) index: 5. Windows NT error code: 0. [BASE IL MAIN BASE
	  1 237] (14)
	
	  Event ID: 3161
	  Source: MSExchangeMTA
	  Description: An internal MTA error occurred. The logon violated security.
	  Entity name: . Error code: 0. [XAPI MAIN BASE 1 92] (14)
	
	RESOLUTION
	==========
	
	To resolve this issue, make sure that the Permissions pages for the
	organization, site, and configuration objects list the service account with the
	Service Account Admin role:
	
	1. Make sure that the Permissions page and the rights and roles are displayed in
	  Exchange Administrator:
	
	  a. On the Tools menu, click Options.
	
	  b. Click to select the "Show Permissions page for all objects" check box.
	
	  c. Click to select the "Display rights for roles on Permissions page" check
	     box.
	
	2. Click the organization object, and then click Properties on the File menu.
	
	3. Click the Permissions tab, add the service account, and then click Service
	  Account Admin from the Role box.
	
	4. Click the site object, and then click Properties on the File menu.
	
	5. Click the Permissions tab, add the service account, and then click Service
	  Account Admin from the Role box.
	
	6. Click the configuration object, and then click Properties on the File menu.
	
	7. Click the Permissions tab, add the service account, and then click Service
	  Account Admin from the Role box.
	
	8. Stop and then restart IMS and MTA services.
	
	9. Send an Internet-bound e-mail to verify that the IMS is working properly.
	
	
	Additional query words: SOX980128700065
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : :5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
