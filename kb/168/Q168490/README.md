---
layout: page
title: "Q168490: XADM: Unattended Exchange Server Setup"
permalink: kb/168/Q168490/
---

## Q168490: XADM: Unattended Exchange Server Setup

	Article: Q168490
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbsetup kbusage
	Last Modified: 23-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Running Exchange Server Setup Unattended
	
	You can customize your server installation by running Setup unattended using
	customized default settings specified in a Setup.ini file. If you're installing
	Microsoft Exchange Server on multiple computers for the first time and want to
	use the same configuration on all servers, you can run the Setup program in
	unattended batch mode.
	
	Running batch mode Setup is useful if you need to install Microsoft Exchange
	Server quickly and don't want to be prompted to enter additional information.
	Batch mode Setup (Setup /q) can be used with an .ini file containing
	configuration settings so you can install Microsoft Exchange Server without user
	input. For example, you can use batch mode Setup to install Microsoft Exchange
	Server in offices that don't have full-time administrators who can set up the
	servers.
	
	Before you can run batch mode Setup, you must create an .ini file containing
	default installation settings. In the .ini file, you can specify preferences,
	such as the installation directory, the organization name, and the components,
	that will be installed. Using an .ini file is equivalent to selecting options in
	dialog boxes during Setup; however, the .ini file provides additional options so
	you have more control over your installation.
	
	You can use any text editor to create an .ini file with any name. Several .ini
	file examples are included on the Microsoft Exchange Server compact disc in the
	Support\Samples\Setup directory. The following example shows the format of the
	.ini file.
	
	     [Paths]
	     ;Where the server will be installed if selected.
	     ServerDest= C:\Exchsrvr
	
	     ;Where Admin will be installed if selected. This entry is optional.
	     AdminDest= C:\Exchsrvr
	
	For more information about .ini file settings, see the More Information section
	below.
	
	To run batch mode Setup once you have created an .ini file, type the following at
	the command prompt:
	
	  Setup /q <filepath>
	
	where filepath is the path and file name of the .ini file.
	
	MORE INFORMATION
	================
	
	The following appendix describes the format of all possible entries for creating
	an .ini file that you can run with Microsoft Exchange Server Setup in batch mode
	(Setup /q) in detail. Using an .ini file is equivalent to selecting options in
	dialog boxes during Setup; however, the .ini file provides additional options,
	so you have more control over your installation.
	
	Each section of the .ini file follows with the setting, a description, and the
	value. The .ini file settings are not case-sensitive.
	
	[Paths]
	
	This section contains entries that specify the location where optional components
	will be installed. All entries are optional.
	
	Entry: Description: Value:
	
	- Entry: ServerDest=
	  Description: Where the server component will be installed if selected.
	  Value: Server name
	
	- Entry: AdminDest=
	  Description: Where the Administrator program will be installed if selected.
	  Value: Path
	
	[Components]
	
	This section contains entries that specify which components will be installed.
	All entries are optional.
	
	- Entry: Services=
	  Description: Whether to install the services for the system attendant, the
	  directory, the information store, and the message transfer agent (MTA).
	  Value: True or false
	
	- Entry: Administrator=
	  Description: Whether to install the Administrator program.
	  Value: True or false
	
	[Site] This section contains entries that specify the names of directory objects
	in the site, such as the site and server names.
	
	- Entry: ExistingServerName=
	  Description: Name of the server in the existing site.
	  Value: Server name
	
	- Entry: SiteName=
	  Description: Name of the new site if ExistingServerName is not provided.
	  Value: Site name
	
	- Entry: SiteProxyName=
	  Description: Proxy name of the new site. Used to determine the site addresses
	  for connectors.
	  Value: Site proxy name
	
	- Entry: InternetSiteName=
	  Description: Internet site name if the Internet Mail Connector is being
	  installed.
	  Value: Internet site name (for example, Litware.com)
	
	[Organization]
	
	This section contains entries that specify the names of directory objects in the
	organization.
	
	- Entry: OrganizationName=
	  Description: Organization name if a new site is being created.
	  Value: Organization name
	
	- Entry: OrganizationProxyName=
	  Description: Organization proxy name if a new site is being created. Used to
	  determine the site addresses for connectors.
	  Value: Organization proxy name
	
	[ServiceAccount]
	
	This section contains entries that specify the service account name and
	password.
	
	- Entry: AccountName=
	  Description: Service account name. This entry is required if a new site is
	  being created.
	  Value: Service account name
	
	- Entry: AccountPassword=
	  Description: Service account password. This entry is required.
	  Value: Service account password
	
	[Licensing]
	
	This section contains entries that specify licensing information.
	
	- Entry: PerSeat=
	  Description: Whether to set up licensing on a per-seat basis.
	  Value: True or false
	
	- Entry: PerServer=
	  Description: Whether to set up licensing on a per-server basis.
	  Value: True or false
	
	- Entry: PerServerUsers=
	  Description: Number of users licensed on this server. Required if PerServer=
	  is used.
	  Value: Number of users
	
	NOTE: The following is required in the [Licensing] section if the Services
	setting in the [Components] section is set to true:
	
	- Either PerSeat= or PerServer= must be true.
	
	- If PerServer= is true, PerServerUsers= must be specified.
	
	[SitePermissions]
	
	This section contains entries that specify the user account(s) that will have
	Administrator permission in the site.
	
	- Entry: Account1=
	  Account2=
	  Account3=
	  Account4=
	  Description: Account that will be granted site Administrator permission. Up to
	  four accounts can be specified. These accounts are in addition to the service
	  account specified in the [ServiceAccount] section.
	  Value: User account (for example, Namerica\mariab)
	
	[X.400]
	
	This section configures X.400 support and is optional. For more information about
	these entries, see your X.400 documentation.
	
	- Entry: Organization=
	  Description: X.400 attribute for organization
	  Value: X.400
	
	- Entry: OrgUnit1=
	
	- DescriptionX.400 attribute for organizational unit
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
	
	- Entry: MSMailConnector=
	  Description: Whether to install the Microsoft Mail Connector.
	  Value: True or false
	
	- Entry: Internet=
	  Description: Whether to install the Internet Mail Connector.
	  Value: True or false
	
	- Entry: X400=
	  Description: Whether to install the X.400 Connector.
	  Value: True or false
	
	- Entry: Sample Applications=
	  Description: Whether to install the sample applications that clients can use.
	  Value: True or false
	
	- Entry: Books Online=
	  Description: Whether to install online documentation.
	  Value: True or false
	======================================================================
	Keywords          : kbsetup kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
