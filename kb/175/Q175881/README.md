---
layout: page
title: "Q175881: XADM: View Only Admin can Modify MS Mail Connector Properties"
permalink: kb/175/Q175881/
---

## Q175881: XADM: View Only Admin can Modify MS Mail Connector Properties

	Article: Q175881
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	It is possible to configure a Microsoft Exchange View Only Administrator (VOA)
	at the Microsoft Exchange Site level for accounts that you want to be able to
	view the configuration of a Microsoft Exchange Server, but not be able to modify
	it. This article discusses the complications in configuring VOAs that arise due
	to fact that the Microsoft Mail Connector does not store most of its
	configuration in the Microsoft Exchange Directory, like other Microsoft Exchange
	Server objects.
	
	MORE INFORMATION
	================
	
	If the VOA is also a Windows NT Domain Administrator, they will also be able to
	modify the Microsoft Mail Connector properties. This is because the Microsoft
	Mail Connector does not read the permissions set in the Microsoft Exchange
	Directory like other Microsoft Exchange Server objects. The Microsoft Mail
	Connector stores most of its configuration information in the Windows NT
	Registry and in the Microsoft Mail Connector Postoffice.
	
	Upon opening the Microsoft Mail Connector properties, the Windows NT Service
	Control Manager (SCM) permissions are checked. If there is administrator access
	to the SCM, the Microsoft Mail Connector properties page is opened with full
	read-write access. If there is read-only access to the SCM, the Microsoft Mail
	Connector is opened in read-only mode and changes to the configuration are not
	possible.
	
	Because read-only or read-write access to the Microsoft Mail Connector properties
	page is determined by the Windows NT level of access to the SCM, the following
	four cases exist. Relevant workarounds are detailed as appropriate and can be
	implemented to bring the Microsoft Mail Connector access in line with that of
	the Microsoft Exchange Server Site permissions.
	
	- CASE 1: Windows NT Administrator and Microsoft Exchange View Only
	  Administrator
	
	  Assign read-only access to the Microsoft Exchange Connector Postoffice share
	  (\\exchsrvr\maildat$) for all VOAs. This simulates another account already
	  administering the Microsoft Mail Connector because the Flag.glb file cannot
	  be locked for write access. The Microsoft Mail Connector's properties page
	  will be opened in read-only mode. When this happens, the following dialog
	  will be displayed:
	
	  An instance of the Administrator program is already running
	  against the MS Mail Connector. You can view the configuration
	  information, but you cannot edit it.
	
	  Alternatively, the VOA can have it's Windows NT Administrator access
	  restricted to Windows NT User access.
	
	- CASE 2: Windows NT Administrator and Microsoft Exchange Administrator
	
	  The behaviour here is as expected and no alterations are needed.
	
	- CASE 3: Windows NT User and Microsoft Exchange View Only Administrator
	
	  The behaviour here is as expected and no alterations are required.
	
	- CASE 4: Windows NT User and Microsoft Exchange Administrator
	
	  In this case, the Microsoft Exchange Administrator will not be able to
	  administer the Microsoft Mail Connector properties because they will not have
	  the appropriate SCM access. Full Windows NT Administrator permissions will be
	  needed if this account is to be able to administer the Microsoft Mail
	  Connector properties.
	
	Additional query words: exchange view only admin connector msmail
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbprb
	
	=============================================================================
	
