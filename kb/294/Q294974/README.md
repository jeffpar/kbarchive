---
layout: page
title: "Q294974: Password Synchronization to AS/400 Fails with Events 1506 &amp; 6005"
permalink: kb/294/Q294974/
---

## Q294974: Password Synchronization to AS/400 Fails with Events 1506 &amp; 6005

	Article: Q294974
	Product(s): Microsoft SNA Server
	Version(s): 3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbDSupport kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2
	Last Modified: 17-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	End users may be unable to log on to their IBM AS/400 after changing their
	Windows NT or Windows 2000 password if SNA Server or Host Integration Server
	2000 is configured to replicate password changes to the AS/400. The following
	events will be logged in the Application Event log when this occurs:
	
	  Event ID: 1506
	  Source: SNA Host Security
	  Description: Security DLL could not establish network connection to host side
	  components.
	
	  Event ID: 6005
	  Source: AS400 MDSI
	  Description: The SNA APPC service returned the following error when attempting
	  an operation for <userid> in the <Host Security Domain name>
	  domain:
	
	  The userid or password is not valid. Try again or contact System
	  Administrator.
	
	Similar events would be logged if SNA Server or Host Integration Server 2000 is
	configured to replicate password changes to an IBM mainframe instead of an
	AS/400.
	
	CAUSE
	=====
	
	The password synchronization fails if the user changing his or her Windows NT or
	Windows 2000 password has an uninitialized password in the Host Account Cache
	(HAC) database.
	
	For additional information on other scenarios that can cause the same event
	messages, click the article numbers below to view the articles in the Microsoft
	Knowledge Base:
	
	  Q201359 Synchronizing Windows NT to AS/400 Passwords Using HSI
	
	  Q232035 AS/400 Password Change Using Host Security May Not Complete
	
	RESOLUTION
	==========
	
	This problem can be avoided if users are added to the Host Account Cache
	database through the use of the Host Account Manager (Udconfig.exe) tool, which
	is included with SNA Server and Host Integration Server 2000. The user's Windows
	password is specified when the user is added to the Host Account Cache database,
	which prevents an uninitialized password from being sent to the host system.
	
	MORE INFORMATION
	================
	
	Host security domains (HSD) are configured in SNA Manager. A Host Security
	Domain Wizard is provided to simplify the process of creating an HSD. Each HSD
	represents a "host" user database. When configured initially, an HSD is assigned
	to a particular host connection. Within the Host Account Cache (HAC) database,
	each user's record contains an entry for every host security domain of which
	they are a member.
	
	When a host security domain is created, a Windows 2000 (or Windows NT) user group
	must be created with the same name. Users who are members of this group can
	cache information in the Host Account Cache database for this HSD. A second
	group is also created that appends "_Proxy" to the HSD name for its group name.
	Members of the "<HSD name>_Proxy" group can use the APPC Privileged Proxy
	feature.
	
	For example, if a host security domain called "AS400" is created, the Host
	Security Domain Wizard will create the following Windows 2000 (or Windows NT)
	groups:
	
	- AS400
	
	- AS400_Proxy
	
	The Host Security Domain Wizard adds the <domain>\Domain Users group to the
	HSD group (in this case, AS400) when an HSD is created. Users in this group are
	authorized to populate host user IDs and passwords to the HAC database. The HSD
	Wizard adds the <domain>\Domain Admins group to the "_Proxy" HSD group
	when an HSD is created.
	
	Users that are not explicitly added to the Host Account Cache database will be
	added dynamically when they change their Windows 2000 (or Windows NT) password
	if they are members of the HSD group. Because the Domain Users group is added to
	the HSD group, by default every user in the Windows 2000 (or Windows NT) domain
	is a valid host security domain member.
	
	If the HSD is configured to replicate passwords to a host system (IBM AS/400s or
	IBM mainframes), the host security components will replicate a user's new
	Windows password to the host system when the password is changed. If the user
	has not been explicitly added to the HAC database, the user will be dynamically
	added to the HAC database when the user changes his or her password.
	
	When a user is added dynamically, the HAC database does not have any way to get
	the user's previous Windows password, and the user's new Windows password won't
	be sent to the HAC database until later. In this case, the HAC database has an
	"uninitialized" Windows password for the user.
	
	As the password synchronization process continues, the user's previous password
	must be obtained from the HAC database because it is needed to log on to the
	host system in order to have the password change to the new password. Because
	the HAC database does not have the user's previous password, it returns a
	default "uninitialized" value for the user's previous Windows password.
	
	The logon to the host system fails because the previous password (the
	"uninitialized" value) is not valid. This causes an error to be returned to the
	SNA Server or Host Integration Server 2000, resulting in the events listed in
	the "Symptoms" section of this article when an attempt is made to connect to the
	host system.
	
	See the following Microsoft Knowledge Base article for an overview of the Host
	Security components and architecture:
	
	  Q175063 Host Security Integration Setup and Architectural Overview
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbhis2000 kbsna400sp4 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : :3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbprb
	
	=============================================================================
	
