---
layout: page
title: "Q192306: XADM: Access Directory Through LDAP When Search Control is Set"
permalink: /kb/192/Q192306/
---

## Q192306: XADM: Access Directory Through LDAP When Search Control is Set

	Article: Q192306
	Product(s): Microsoft Exchange
	Version(s): winnt:2.5,5.5
	Operating System(s): 
	Keyword(s): kbADSI
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Active Directory Service Interfaces, version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Lightweight Directory Access Protocol (LDAP) client querying the Exchange
	directory using LDAP may fail with an access denied error when the search
	control is set to restrict access to the Global Address List as described in the
	following article in the Microsoft Knowledge Base:
	
	  Q182902 XADM: How to Set Up Container Level Search Control
	
	This can happen even though the LDAP client authentication method appears to be
	correct, using either Windows NT LAN Manager (NTLM) or simple authentication
	(cn=<nt account>, cn=<nt domain>), and the Exchange Server computer
	is configured to accept those LDAP authentication methods.
	
	When you try to access the Exchange Server directory with Outlook Express using
	the LDAP protocol, you get the following error message:
	
	  The specified Directory Service has denied access. Check the Properties
	  for this Directory Service and verify that your Authentication Type
	  settings and parameters are correct.
	
	On the server you see the event:
	
	  Event ID: 1354
	  Source: MSExchangeDS
	  Description: "LDAP search request failed with error: 50."
	
	CAUSE
	=====
	
	This happens because your LDAP client tries to connect to the directory using a
	search base for which you don't have permissions.
	
	MORE INFORMATION
	================
	
	To access through LDAP a directory with search control enabled, perform the
	following steps:
	
	1. Set the search rights and Address Book views in the Exchange Server directory
	  according to the Knowledge Base article Q182902, "XADM: How To Setup
	  Container Level Search Control."
	
	2. Set the search base in your LDAP client to match the Address Book view you
	  have access to. For example, if you create an Address Book view named "By
	  City," in the organization Microsoft, the search base will be:
	
	  "Cn=By City,ou=_ABVIEWS_,o=Microsoft" (or
	  "LDAP://SERVER:389/Cn=By City,ou=_ABVIEWS_,o=Microsoft" using ADSI)
	
	  For Outlook Express, the search base is configured in the advanced properties
	  of the directory account.
	
	3. If the simple authentication method is chosen, you will have to add the
	  account which has the search control at the organization level into the
	  Windows NT global group, Domain Admin.
	
	NOTE: Simple rights modifications in the directory take effect immediately, but
	you will have to stop and start the directory service if something has been
	changed in the Windows NT security database, which is the case when you add the
	account with the search control in the Windows NT global group, Domain Admin.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbADSI 
	Technology        : kbAudDeveloper kbExchangeSearch kbADSISearch kbExchange550 kbZNotKeyword2 kbADSI250
	Version           : winnt:2.5,5.5
	Issue type        : kbprb
	
	=============================================================================
	
