---
layout: page
title: "Q188625: XADM: Unattended Exchange Server 5.5 Setup"
permalink: kb/188/Q188625/
---

## Q188625: XADM: Unattended Exchange Server 5.5 Setup

	Article: Q188625
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	NOTE: The content for this article is taken from the BackOffice Resource Kit.
	
	Running Exchange Server 5.5 Setup Unattended
	--------------------------------------------
	
	You can customize your server installation by running Setup unattended using
	customized default settings specified in a Setup.ini file. If you are installing
	Microsoft Exchange Server 5.5 on multiple computers for the first time and want
	to use the same configuration on all servers, you can run the Setup program in
	unattended batch mode.
	
	Running batch mode Setup is useful if you need to install Microsoft Exchange
	Server quickly and do not want to be prompted to type additional information.
	Batch mode Setup (Setup /q) can be used with an .ini file containing
	configuration settings so you can install Microsoft Exchange Server without user
	input. For example, you can use batch mode Setup to install Microsoft Exchange
	Server in offices that do not have full-time administrators who can set up the
	servers.
	
	Before you can run batch mode Setup, you must create an .ini file containing
	default installation settings. In the .ini file, you can specify preferences,
	such as the installation directory, the organization name, and the components
	that will be installed. Using an .ini file is equivalent to selecting options in
	dialog boxes during Setup; however, the .ini file provides additional options so
	you have more control over your installation.
	
	You can use any text editor to create an .ini file with any name. Several .ini
	file examples are included on the Microsoft Exchange Server CD in the
	Support\Samples\Setup directory. The following example shows the format of the
	.ini file.
	
	  [Paths]
	  ;Where the server will be installed if selected.
	  ServerDest= C:\Exchsrvr
	
	  ;Where Admin will be installed if selected. This entry is optional.
	  AdminDest= C:\Exchsrvr
	
	For more information about .ini file settings, see the "More Information" section
	below.
	
	To run batch mode Setup after you have created an .ini file, type the following
	at an MS-DOS command prompt:
	
	  "Setup /q <filepath>" (without the quotation marks)
	
	where <filepath> is the path and file name of the .ini file.
	
	MORE INFORMATION
	================
	
	This article describes the format for creating an .ini file that you can run
	with Microsoft Exchange Server 5.5 Setup in batch mode (Setup /q). Using an .ini
	file is equivalent to selecting options in dialog boxes during setup; however,
	the .ini file provides additional options. For more information about batch
	Setup, see Chapter 2, "Planning and Setup," of the BackOffice Resource Kit.
	
	INI File Format
	---------------
	
	Each section of the .ini file is shown with the setting, a description of the
	setting, and the value. These settings are not case sensitive.
	
	[Product ID]
	This section specifies the product identifier (ID) for this copy of Microsoft
	Exchange Server; this information is required. If the product ID information is
	not included, batch setup fails unless this copy of Microsoft Exchange Server
	was received under the Microsoft Select Agreement.
	
	- Entry: pid=
	
	  Description: Product ID number used by OEMs
	  Value: XXXXXXXXXXXXX
	
	- Entry: cdkey=
	
	  Description: The product ID number
	  Value: Number in XXX-XXXXXXX format
	
	[Paths]
	This section contains entries that specify the location where optional components
	are installed. All entries are optional.
	
	- Entry: ServerDest=
	
	  Description: Location where the server component is installed if it is
	  selected
	  Value: Servername
	
	- Entry: AdminDest=
	
	  Description: Location where the Administrator program is installed if it is
	  selected
	  Value: Path
	
	[Components]
	This section contains entries that specify which components are to be installed.
	All entries are optional.
	
	- Entry: Services=
	
	  Description: Whether to install services for the system attendant, the
	  directory, the information store, and the message transfer agent (MTA)
	  Value: True or false
	
	- Entry: Administrator=
	
	  Description: Whether to install the Administrator program
	  Value: True or false
	
	- Entry: MSMailConnector=
	
	  Description: Whether to install the Microsoft Mail Connector
	  Value: True or false
	
	- Entry: CC:Mail=
	
	  Description: Whether to install the cc:Mail connector
	  Value: True or false
	
	- Entry: Internet=
	
	  Description: Whether to install the Internet Mail Service
	  Value: True or false
	
	- Entry: X400=
	
	  Description: Whether to install the X.400 Connector
	  Value: True or false
	
	- Entry: Active Server Components=
	
	  Description: Whether to install Microsoft Outlook Web Access
	  Value: True or false
	
	- Entry: NNTP=
	
	  Description: Whether to install NNTP
	  Value: True or false
	
	- Entry: KMServer=
	
	  Description: Whether to install KM server
	  Value: True or false
	
	- Entry: Sample Applications=
	
	  Description: Whether to install the sample applications that clients can use
	  Value: True or false
	
	- Entry: Books Online=
	
	  Description: Whether to install online documentation
	  Value: True or false
	
	- Entry: Event Service=
	
	  Description: Whether to install the Microsoft Exchange Scripting Agent
	  Value: True or false
	
	[Site]
	This section contains entries that specify the names of directory objects in the
	site, such as the site and server names.
	
	- Entry: ExistingServerName=
	
	  Description: Name of the server in the existing site
	  Value: Server name
	
	- Entry: SiteName=
	
	  Description: Name of the new site if ExistingServerName is not provided
	  Value: Site name
	
	- Entry: SiteProxyName=
	
	  Description: Proxy name of the new site that is used to determine the site
	  addresses for connectors
	  Value: Site proxy name
	
	- Entry: InternetSiteName=
	
	  Description: Internet site name if Internet Mail Service is being installed
	  Value: Internet site name
	
	[Organization]
	This section contains entries that specify the names of directory objects in the
	organization.
	
	- Entry: OrganizationName=
	
	  Description: Organization name if a new site is being created
	  Value: Organization name
	
	- Entry: OrganizationProxyName=
	
	  Description: Organization proxy name that is used to determine the site
	  addresses for connector if a new site is being created
	  Value: Organization proxy name
	
	[ServiceAccount]
	This section contains entries that specify the service account name and
	password.
	
	- Entry: AccountName=
	
	  Description: Service account name (required if a new site is being created)
	  Value: Service account name
	
	- Entry: AccountPassword=
	
	  Description: Service account password (required)
	  Value: Service account password
	
	[Licensing]
	This section contains entries that specify licensing information.
	
	- Entry: PerSeat=
	
	  Description: Whether to set up licensing on a per-seat basis
	  Value: True or false
	
	[SitePermissions]
	This section contains entries that specify the user account(s) that are to have
	Administrator permission in the site.
	
	- Entry: Account1=
	<A0><A0><A0><A0><A0><A0><A0><A0><A0><A0>Account2=
	<A0><A0><A0><A0><A0><A0><A0><A0><A0><A0>Account3=
	<A0><A0><A0><A0><A0><A0><A0><A0><A0><A0>Account4=
	
	  Description: Account that is to be granted site Administrator permission. Up
	  to four accounts can be specified. These accounts are in addition to the
	  service account specified in the [ServiceAccount] section.
	  Value: User account (for example, Namerica\mariab)
	
	[X400]
	This section configures X.400 support and is optional. For more information about
	these entries, see your X.400 documentation.
	
	- Entry: Organization=
	
	  Description: X.400 attribute for organization
	  Value: X.400 O
	
	- Entry: OrgUnit1=
	
	  Description: X.400 attribute for organizational unit
	  Value: X.400 OU1
	
	- Entry: OrgUnit2=
	
	  Description: X.400 attribute for organizational unit
	  Value: X.400 OU2
	
	- Entry: OrgUnit3=
	
	  Description: X.400 attribute for organizational unit
	  Value: X.400 OU3
	
	- Entry: OrgUnit4=
	
	  Description: X.400 attribute for organizational unit
	  Value: X.400 OU4
	
	- Entry: PrivManDomName=
	
	  Description: X.400 attribute for the private management domain (PRMD)
	  Value: X.400 PRMD
	
	- Entry: AdminManDomName=
	
	  Description: X.400 attribute for the administrative management domain (ADMD)
	  Value: X.400 ADMD
	
	- Entry: Country=
	
	  Description: X.400 attribute for country
	  Value: X.400 C
	
	Additional query words: XADM kbsetup kbusage
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
