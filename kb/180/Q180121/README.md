---
layout: page
title: "Q180121: XCLN: Agents Tab Is Missing from Folder Properties"
permalink: kb/180/Q180121/
---

## Q180121: XCLN: Agents Tab Is Missing from Folder Properties

	Article: Q180121
	Product(s): Microsoft Exchange
	Version(s): 8.03
	Operating System(s): 
	Keyword(s): kbsetup kbtshoot kbusage
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97, version 8.03 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view the properties of a Microsoft Exchange Server folder, the Agents
	tab that is used to configure Server Scripting may be missing. This article
	explains some of the possible reasons why this tab may not appear.
	
	The Exchange Server Scripting Agent extension is included with Microsoft Outlook
	97, version 8.03. It allows you to create server-side scripts that can be run on
	Microsoft Exchange Server. The extension adds an Agents tab which is visible on
	the Properties dialog box of a private or public folder.
	
	RESOLUTION
	==========
	
	If the Agents tab does not appear for any reason, check the following items:
	
	1. Is the correct version of Microsoft Outlook installed?
	
	  You must have Microsoft Outlook, version 8.03.4629 or later, installed.
	
	2. Is the Exchange Scripting Agent installed?
	
	  By default, the Scripting Agent extension is installed during a Typical or
	  Custom installation of Microsoft Outlook. In some cases, the extension may
	  not be installed properly. Another possibility is that you may have performed
	  a Custom installation or run Setup in Maintenance mode, and removed the
	  Exchange Scripting Agent option. To verify that the extension is installed
	  correctly:
	
	  a. On the Tools menu, click Options, and then click the General tab. Click
	     the Add-In Manager button. The Server Scripting extension should be listed
	     and selected in the Add-Ins dialog box.
	
	     -OR-
	
	     On the Tools menu, click Options. On the Other tab in the General section,
	     click Advanced Options, then click Add-In Manager. The Server Scripting
	     extension should be listed and selected in the Add-Ins dialog box.
	
	  b. If it is not listed, run Setup, and use the Add/Remove option to install
	     the Exchange Scripting Agent extension. You may also want to verify that
	     the following files are installed on the workstation:
	
	  File Name      Version      Size (bytes)
	  ------------   ----------   ------------
	  Esconf.dll     5.5.1960.0   94,480
	  Scrptxtn.dll   5.5.1960.0   54,032
	
	3. Are permissions set correctly on the Microsoft Exchange Server computer?
	
	  In order to install and administer event scripts, the user must be granted at
	  least Author permissions on the EventConfig_servername object in the Exchange
	  Server directory. To configure the appropriate permissions:
	
	  a. In the Microsoft Exchange 5.5 Administrator program, select the
	     EventConfig_servername object from the Folders\System Folders\Events Root
	     container.
	
	  b. On the File menu, click Properties. On the General tab, click Client
	     Permissions.
	
	  c. In the Client Permissions dialog box, select the Add button.
	
	  d. Select one or more users who will be managing scripts on the server and
	     grant them a role of at least Author. Press OK twice.
	
	4. Is the correct server specified as the Public Folder server?
	
	  A setting for the Private Information Store on the Microsoft Exchange Server
	  computer specifies which server in the Exchange organization will be
	  responsible for creating and managing public folders. In order for the Agents
	  tab to appear on the client side, the server referenced by this setting must
	  be running Microsoft Exchange Server, version 5.5 or later. To verify this
	  setting:
	
	  a. In the Microsoft Exchange Server Administrator program, select the Private
	     Information Store container for the Microsoft Exchange Server 5.5 computer
	     that contains the EventConfig_servername object.
	
	  b. On the File menu, click Properties.
	
	  c. On the General tab, select the Public Folder Server dropdown list and
	     select a Microsoft Exchange Server 5.5 (or later) computer. This option
	     tells Exchange Server where to obtain the Public Folder hierarchy, in
	     which the EventConfig_servername folder is listed. Click OK.
	
	  d. Restart the Microsoft Outlook client.
	
	5. Is the folder a Public Folder?
	
	  To have the Agents tab appear on the properties of a public folder rather than
	  a user's mailbox folder, in addition to the previous steps, a user must have
	  permission on the public folder itself. To configure the appropriate
	  permissions:
	
	  a. In the Exchange Server Administrator program's left pane, expand the
	     Organization container, the Folders container, and the Public Folders
	     container. Then double-click on the folder name to open its Properties
	     page.
	
	  b. Click the Client Permissions button on the General tab and give the user
	     (or an alias the user is in) Owner rights. Author rights are insufficient
	     for scripting in a public folder; the Owner role must be assigned.
	
	     NOTE: It may also be necessary to cycle the Exchange Server services in
	     order to force this change to take effect immediately.
	
	The Agents tab should now appear in the Microsoft Outlook client.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbtshoot kbusage 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3 kbOutlook803
	Version           : :8.03
	Issue type        : kbprb
	
	=============================================================================
	
