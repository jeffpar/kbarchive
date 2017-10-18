---
layout: page
title: "Q125454: SMS Service Account Requirements for Different Configurations"
permalink: kb/125/Q125454/
---

## Q125454: SMS Service Account Requirements for Different Configurations

	Article: Q125454
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The services running on a Systems Management Server site require various
	administrator-type rights on all site server systems maintained by Systems
	Management Server. This article describes what rights are required for the
	supported configurations.
	
	MORE INFORMATION
	================
	
	The Systems Management Server service account requires administrative rights on
	each Systems Management Server maintained server. Systems Management Server
	creates new shares and directories on each installed server in order to populate
	them with files.
	
	On Windows NT and OS/2 servers, Systems Management Server installs and starts the
	Inventory Agent service. On Windows NT servers, Systems Management Server also
	installs the Package Command Manager. To install these services, the Systems
	Management Server Windows NT service account must have the right to logon as a
	service at each Windows NT server.
	
	For a single Windows NT domain Systems Management Server site, the Systems
	Management Server service account must be in the Domain Administrators group and
	have been granted Logon As A Service rights. If OS/2 servers are added to the
	Windows NT domain, the Systems Management Server service account must be in the
	Global Administrators group.
	
	If an OS/2 domain is added to an existing Systems Management Server site, create
	an identical Systems Management Server user account in the Administrators group
	on the OS/2 domain (with the same password). This is necessary because OS/2 does
	not understand the concept of Local groups.
	
	If a NetWare domain is added, each NetWare server must have a supervisor-
	equivalent user account identical to the Windows NT Systems Management Server
	account.
	
	If you add a Windows NT domain to an existing site, create a one-way trust
	relationship from the new domain to the domain that contains the Systems
	Management Server service account. When the trust relationship is active, add
	the Systems Management Server service account to the Local Administrators group
	in the new domain and give the account the right to Logon As A Service. Make
	sure that you use the full <trusted domain>\<username> syntax. This
	ensures that the proper domain validates the account through the trust
	relationship.
	
	When connecting sites in a hierarchy, no administrative rights are required, and
	you do not have to create a trust relationship between the sites. The connection
	address for the respective sites must include the <destination
	domain>\<username> of the other site, and the account must have Change
	access to the Sms_Site share.
	
	Additional query words: sms prodsms
	
	======================================================================
	Keywords          : kbnetwork kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Issue type        : kbinfo
	
	=============================================================================
	
