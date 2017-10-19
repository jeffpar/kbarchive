---
layout: page
title: "Q262939: XADM: Internet Mail Service Won't Start After DC Demoted"
permalink: /kb/262/Q262939/
---

## Q262939: XADM: Internet Mail Service Won't Start After DC Demoted

	Article: Q262939
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3, on platform(s):
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you demote a Windows 2000 Server-based Exchange Server computer from a
	domain controller and re-promote that computer to a domain controller, the
	Internet Mail Service may not start during the last step of the Internet Mail
	Service Wizard. The following error message may be displayed:
	
	  The service did not respond to the start or control request in a timely
	  fashion.
	
	  Microsoft Windows NT
	  ID no: 0xc002041d
	
	The following event may be logged in the Windows 2000 Event Viewer:
	
	  Event ID: 4018
	  Source: MSExchangeIMC
	  Category: Initialization/Termination
	  Unable to start the Internet Mail Connector service because MAPI could not be
	  initialized.
	
	CAUSE
	=====
	
	This issue can occur if the group membership of the local users changes after
	the computer is re-promoted to a domain controller.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. In the Active Directory Users and Computers Microsoft Management Console
	  (MMC) snap-in, click the Users container, and then double-click the service
	  account user.
	
	2. Click the "Member of" tab.
	
	3. Make sure that the service account is a member of the Domain Administrators
	  group.
	
	4. If the service account is member of the Domain Users group only, click Add,
	  and then add the Domain Administrators group to the membership list.
	
	Additional query words: IMS Win2k domain admins
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2
	Version           : winnt:5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	
