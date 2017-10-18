---
layout: page
title: "Q242039: PRB: NT Perms for Distribution List when Owner Set ADSI/LDAP"
permalink: kb/242/Q242039/
---

## Q242039: PRB: NT Perms for Distribution List when Owner Set ADSI/LDAP

	Article: Q242039
	Product(s): Microsoft Exchange
	Version(s): winnt:1.0,2.0,2.5,5.5
	Operating System(s): 
	Keyword(s): kbADSI kbExchange kbExchange550 kbMsg kbVBp kbGrpDSPlatform kbGrpDSMsg kbDSupport
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Active Directory Service Interfaces, versions 1.0, 2.0, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The owner of a distribution list is set through a Lightweight Directory Access
	Protocol (LDAP) and the new owner is unable to modify the membership of the
	list.
	
	CAUSE
	=====
	
	When the owner for a distribution list (DL) is set, the Microsoft Exchange
	Administrator program (Admin.exe) retrieves the associated Windows NT account of
	the owning object, usually a mailbox. This Windows NT account is then given user
	permissions on the distribution list. This allows the owner of the mailbox to
	add and remove members of the distribution list.
	
	If the owner of the distribution list is set through ADSI/LDAP, the owner is not
	automatically retrieved and permissions for the associated Windows NT account
	are not set. This prevents the new owner from altering the list's membership.
	
	NOTE: Improper permissions can also occur by changing the associated Windows NT
	account of the mailbox set as the owner. For further information see the
	following Knowledge Base article:
	
	  Q177838 XADM: NT Security Descriptor Associated w/ DL Owner Not Updated
	
	
	
	
	RESOLUTION
	==========
	
	In order to allow the distribution list owner to be able to add and remove
	members, the permissions must be properly set. This can be done by either making
	a change through Microsoft Exchange Administrator program (see the Knowledge
	Base Article Q177838) or by explicitly setting the security descriptor via
	LDAP.
	
	Normally, when an owner is set on a distribution list, the only permissions which
	are added are for the associated Windows NT account. Setting a user to a
	distribution list requires LDAP to read the security descriptor of the
	distribution list, removing the Discretionary Access Control List (DACL), adding
	an Access Control Entry (ACE) with a trustee for that Windows NT account,
	replacing the DACL, then writing the security descriptor back to the directory.
	
	MORE INFORMATION
	================
	
	For simplicity, the following ADSI code example copies the entire security
	descriptor from the owner's mailbox and places it on the distribution list. This
	will have the effect of giving all the users who have permission on that mailbox
	the same permissions on the distribution list.
	
	  strDNofDL = "cn=MyDL,cn=Recipients,ou=MySite,o=MyOrg"
	  strDNofMailbox = "cn=MyMailbox,cn=Recipients,ou=MySite,o=MyOrg"
	  strServer = "MyExchangeServerName"
	  set oDL = GetObject("LDAP://" + strServer + "/" + strDNofDL )
	  oDL.put "owner", strDNofMailbox
	  set oMailbox  = GetObject("LDAP://" + strServer + "/" + strDNofMailbox)
	  oMailbox.GetInfoEx Array("NT-Security-Descriptor"), 0
	  oDL.Put "NT-Security-Descriptor", oMailbox.Get("NT-Security-Descriptor")
	  oDL.SetInfo
	
	REFERENCES
	==========
	
	For additional information about this particular problem, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q177838 XADM: NT Security Descriptor Associated w/ DL Owner Not Updated
	
	For general information on Active Directory Services Interfaces(ADSI) please view
	the following Web site:
	
	  http://www.microsoft.com/adsi
	
	For information about working with Exchange Mailboxes and Distribution Lists from
	ADSI, please see the following article in the Microsoft Knowledge Base:
	
	  Q220043 HOWTO: Find Distribution List Membership for a Given Recipient
	
	Additional query words:
	
	======================================================================
	Keywords          : kbADSI kbExchange kbExchange550 kbMsg kbVBp kbGrpDSPlatform kbGrpDSMsg kbDSupport 
	Technology        : kbAudDeveloper kbExchangeSearch kbADSISearch kbExchange550 kbZNotKeyword2 kbADSI100 kbADSI200 kbADSI250
	Version           : winnt:1.0,2.0,2.5,5.5
	Issue type        : kbprb
	
	=============================================================================
	
