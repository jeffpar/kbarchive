---
layout: page
title: "Q250578: XADM: InterOrg Synchronization Tool May Not Import Some Users"
permalink: /kb/250/Q250578/
---

## Q250578: XADM: InterOrg Synchronization Tool May Not Import Some Users

{% raw %}

	Article: Q250578
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the InterOrg Synchronization tool from the Back Office Resource
	Kit, some users that should be imported into the global address list are not
	imported. You may not be able to determine why those users were not imported in
	the Microsoft Windows NT Event Viewer program.
	
	CAUSE
	=====
	
	This problem may occur if:
	
	- The user does not have a SMTP e-mail address.
	
	  -or-
	
	- The user does not have a unique SMTP e-mail address.
	
	RESOLUTION
	==========
	
	A new version of the InterOrg Synchronization tool is now available that
	includes increased event logging to help troubleshoot this problem.
	
	Component: Exchange Server OrgSynch Windows NT Service
	
	+--------------------------+
	| File name    | Version   | 
	+--------------------------+
	| Orgsynch.exe | 1.2.0.378 | 
	+--------------------------+
	
	To obtain this feature immediately, so that you can find which mailboxes are
	causing the problem, contact Microsoft Product Support Services. For a complete
	list of Microsoft Product Support Services phone numbers and information on
	support costs, please go to the following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	After you obtain this feature, event logging is enhanced for the following
	situations:
	
	Entry Has No SMTP Address:
	
	When the InterOrg Synchronization tool does not add an entry because the entry
	has no SMTP address, the following events are logged in the application event
	log. To identify the mailbox that has no SMTP address, examine the Distinguished
	Name of the object (ObjDistName) in the event:
	
	  Event Type: Warning
	  Event Source: _Exchange Inter-Org Synch
	  Event Category: None
	  Event ID: 4096
	  Date: 1/31/2000
	  Time: 1:45:20 PM
	  User: N/A
	  Computer: SERVER
	  Description:
	  InterOrg: CImportData::PerformImport Warning: Failed to find SMTP e-mail
	  address DisplayName=NOSMTP
	  DirectoryName=NOSMTP@o@Organization@ou@SITE@cn@SMTP@cn@NOSMTP
	  ObjDistName=/o=Organization/ou=SITE/cn=SMTP/cn=NOSMTP
	
	  Event Type: Error
	  Event Source: _Exchange Inter-Org Synch
	  Event Category: None
	  Event ID: 4096
	  Date: 1/31/2000
	  Time: 1:45:20 PM
	  User: N/A
	  Computer: SERVER
	  Description:
	  InterOrg: **DAPIWrite**
	  Error: c0000123 (null) (null) (null)
	  NOSMTP@o@Organization@ou@SITE@cn@SMTP@cn@NOSMTP
	  22
	  21
	
	Entry Has a Duplicate SMTP Address:
	
	When the InterOrg Synchronization tool does not add an entry because there is a
	duplicate SMTP address, the following event is logged in the application event
	log. To identify the mailbox that has the duplicate SMTP address, examine the
	line that begins with SMTP in the event:
	
	  Event Type: Error
	  Event Source: _Exchange Inter-Org Synch
	  Event Category: None
	  Event ID: 4096
	  Date: 1/31/2000
	  Time: 3:26:15 PM
	  User: N/A
	  Computer: SERVER
	  Description:
	  InterOrg: **DAPIWrite**
	  Error: c00000ec (null) (null) (null)
	  Custom@o@Organization@ou@SITE@cn@Recipients@cn@Custom
	  SMTP:Custom@Organization.SITE.com
	  /o=Organization/ou=SITE/cn=Recipients/cn=Custom
	
	STATUS
	======
	
	The InterOrg Synchronization tool is available in the Microsoft BackOffice
	Resource Kit, Second Edition, and is supported on a "Commercially Reasonable"
	basis by Microsoft Product Support Services. Please do not confuse the InterOrg
	Synchronization tool with the InterOrg Replication utility for public folders,
	which is available on the Microsoft Exchange Server 5.5 Service Pack 2 CD-ROM.
	
	MORE INFORMATION
	================
	
	For additional information about how to install, configure, or troubleshoot the
	InterOrg Synchronization tool, click the article numbers below to view the
	articles in the Microsoft Knowledge Base:
	
	  Q198789 XADM: Installing, Configuring, and Using the InterOrg Synch
	
	  Q198798 XADM: Troubleshooting the InterOrg Synch Tool
	
	Additional query words: t-shoot tshot dirsynch Synch BORKIII LDSU LDAP BORK
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : :5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
