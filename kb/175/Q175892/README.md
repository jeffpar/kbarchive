---
layout: page
title: "Q175892: XWEB: Permissions Required for Outlook Web Access"
permalink: kb/175/Q175892/
---

## Q175892: XWEB: Permissions Required for Outlook Web Access

	Article: Q175892
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): kbusagekbfaq
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you are running Microsoft Exchange Server version 5.5 with the Outlook Web
	Access (OWA) component, various permissions need to be set for OWA to work
	properly. This article defines those Exchange Server and Windows NT permissions.
	
	MORE INFORMATION
	================
	
	Outlook Web Access uses the Microsoft Internet Information Server with Active
	Server Pages to grant users access to their mailbox and calendar through a Web
	browser. There are three areas of permissions to be set up to make this work
	correctly:
	
	- Everyone in the Windows NT domain. Everyone must be granted "Access this
	  computer from the network" and "Log on locally" permissions through User
	  Manager for Domains. Everyone also requires Search permission at the Exchange
	  Site Container.
	
	  NOTE: Exchange search permissions for everyone and the annonymous account only
	  need to be set if search permission are used in you organization at or below
	  the site container level. If search permissions are not being used, do not
	  set this property, because it may have adverse side effects on Directory
	  Access.
	
	  Please refer to the Microsoft Knowledge Base or your Microsoft Exchange Server
	  Administrator's Guide for additional information regarding the Exchange
	  Search permission.
	
	- Directory Anonymous Account. The Anonymous account is specified at the
	  Directory Site Configuration object on the General page. This account must
	  have Search permissions at the Exchange Configuration container. However, DO
	  NOT add search permissions for this account at the Directory Site
	  Configuration or at the Site Container. These permissions are granted by
	  default. Adding Search permissions will cause problems on directory access
	  for other recipients.
	
	- The account used by the Internet Information Service (IIS). This account must
	  have "Log on locally" and "Access this computer from the network" rights
	  specified. IIS must be configured to allow Anonymous logon, and Basic (Clear
	  Text) should be set as the authentication method.
	
	- Verify that the permissions on the Exchsrvr/Webdata directory and all of its
	  sub-directories are set to READ and that the permissions on the
	  Exchsrvr/Webtemp directory and all of its sub-directories are set to CHANGE.
	
	Additional query words: exfaqold
	
	======================================================================
	Keywords          : kbusage kbfaq
	Technology        : kbOutlookSearch kbOWASearch kbOWA550
	Version           : WinNT:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
