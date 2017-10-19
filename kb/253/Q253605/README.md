---
layout: page
title: "Q253605: XADM: Clients Hang at Logon If Duplicate OFL Folders Exist"
permalink: /kb/253/Q253605/
---

## Q253605: XADM: Clients Hang at Logon If Duplicate OFL Folders Exist

	Article: Q253605
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 12-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Exchange Server clients stop responding (hang) during logon when duplicate
	English Organization Forms library (OFL) folders exist in the Exchange Server
	organization.
	
	CAUSE
	=====
	
	The existence of duplicate OFL folders can occur when two or more sites are
	connected through directory replication connectors. If these OFL folders exist
	in both sites prior to establishing directory replication, you can end up with
	duplicate OFL folders after directory replication is finished between the
	sites.
	
	If public folder affinity is configured between the sites that contain the
	duplicate OFL folders, clients in one or both sites may attempt to gain access
	to the remote version of the OFL folder during logon. If connectivity to this
	folder requires traversing a slow network link or if connectivity is not
	possible because of a lack of permissions and/or an absence of remote procedure
	call (RPC) connectivity, clients may hang and/or may be prompted for credentials
	at logon.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following steps:
	
	1. Download all forms that you want to keep from each OFL folder to a .pst file,
	  using the following steps:
	
	  a. Log on with a client in the site where you want to remove the duplicate
	     OFL folders.
	
	  b. Go to Manage Forms in the Microsoft Outlook client, and export the forms
	     you want to save to a .pst file.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q190994 XADM: How to Save Organizational Forms to a PST File
	
	2. Delete the OFL folder(s) that you do not want to keep, using the following
	  steps:
	
	  a. Start the Exchange Server Administrator program against a server in the
	     site where the duplicate OFL folder exists.
	
	  b. On the Tools menu, click Forms Administrator.
	
	  c. Click the appropriate OFL folder, and then click Remove.
	
	NOTE: Make sure you do not delete the wrong OFL folders. For additional
	information, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q175129 XADM: Wrong OFL Deleted in Forms Administrator
	
	3. Restart all Exchange Server computers to delete any cached OFL folder
	  information in the site.
	
	4. Publish any missing forms to the remaining OFL by logging on with a client in
	  the site containing the English OFL folder and publishing any saved custom
	  forms to the OFL.
	
	  NOTE: You can also simply create a new OFL folder with a unique name in the
	  site that contained the duplicate. You can then publish forms into the newly
	  created OFL folder of that site, rather than publishing the previously
	  exported forms into the OFL folder of the site that contains the last copy of
	  what was previously the duplicate folder (which is now the unique English OFL
	  folder). For additional information, click the article number below to view
	  the article in the Microsoft Knowledge Base:
	
	  Q184765 XADM: Setting up the Organization Forms Library
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
