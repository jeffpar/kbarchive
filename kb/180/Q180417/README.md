---
layout: page
title: "Q180417: XWEB: Error Msg: Sorry! The Microsoft Exchange Server Is Down"
permalink: /kb/180/Q180417/
---

## Q180417: XWEB: Error Msg: Sorry! The Microsoft Exchange Server Is Down

{% raw %}

	Article: Q180417
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5; winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	- Microsoft Exchange Active Server Components, version 5.0 
	- Microsoft Outlook Web Access, version 5.5 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	The following error message may be displayed when you attempt to access an
	Exchange Server mailbox by means of the Microsoft Outlook Web Access (OWA)
	client:
	
	  Sorry! The Microsoft Exchange Server is down or the HTTP service has been
	  disabled by an administrator. Please try your request again later.
	
	CAUSE
	=====
	
	Several factors may cause this error to occur. This article discusses how to
	troubleshoot and resolve these issues.
	
	WORKAROUND
	==========
	
	1. Verify that the HTTP service is enabled at the site level. To do this, follow
	  these steps:
	
	  a. Start the Exchange Server Administrator program.
	
	  b. Click the Site container in which the server is located, click the
	     Configuration container, and then click the Protocols object.
	
	  c. Open the HTTP (Web) Site Settings object, and verify that the Enable
	     Protocol option is enabled.
	
	  NOTE: In some cases where the HTTP protocol has been disabled, the Logon.asp
	  screen reappears and an error message is not displayed.
	
	2. Verify that the Lightweight Directory Access Protocol (LDAP) protocol is
	  enabled at the site or server level and that the Allow Anonymous Access
	  option is enabled for the LDAP protocol at the site or server level. To do
	  this, follow these steps:
	
	  a. Start the Exchange Server Administrator program.
	
	  b. Click the Site container in which the server is located, click the
	     Configuration container, and then click the Protocols object.
	
	  c. Verify that the Protocol Enabled option is enabled.
	
	  d. Open the LDAP (Directory) Site Defaults object, and click the Anonymous
	     tab.
	
	  e. Verify that the Allow Anonymous Access option is enabled.
	
	  f. Now that you have verified the site settings, you need to verify the
	     server settings. To do this, click the Protocols object of the server that
	     you are connecting to.
	
	  g. Open the LDAP (Directory) Settings object, and click the Anonymous tab.
	
	  h. Verify that the Allow Anonymous Access option is enabled.
	
	3. Verify that the MSExchangeWeb registry key contains the correct values for
	  the Organization, Site, and Server names of the Exchange Server computer that
	  you are connecting to. To do this, follow these steps:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	  a. Start the Exchange Server Administrator program.
	
	  b. Note the Organization, Site, and Server names that are displayed for the
	     server that you are connecting to.
	
	  c. Start the Registry Editor (Regedt32.exe) on the Exchange Server computer.
	
	  d. Select the following registry key:
	
	  \HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeWeb\Parameters
	
	  e. Verify that the following three values match the names found above:
	
	  Enterprise - (Must match the organization name)
	  Site - (Must match the site in which the server is located)
	  Server - (Must match the server to which you are connecting)
	
	     If any of the above values are incorrect, change them to match the names
	     that the Exchange Server Administrator program displays.
	
	     NOTE: These values are not case sensitive.
	
	  f. Quit the Registry Editor.
	
	  g. In Control Panel/Services, stop and restart the World Wide Web Publishing
	     Service.
	
	     NOTE: You must start and stop the WWW service with the Control
	     Panel/Services. In some reported cases, stopping and starting the WWW
	     service in the Internet Service Manager program has not corrected the
	     problem.
	
	4. Verify that the WWW Anonymous Logon account (IUSR_<machine name>) on
	  the Microsoft Internet Information Server (IIS) is at least a member of the
	  Domain Users and Guests groups. This account must have the proper Windows NT
	  credentials to access the IIS and Exchange Server. This may be an issue if
	  you are attempting to access an Exchange Server computer that is located in
	  another domain. Another alternative is to specify an account from the Domain
	  Administrators group as the Anonymous Logon account for the WWW service. To
	  change this account, perform the following steps:
	
	  a. Start the Microsoft Internet Service Manager (ISM).
	
	  b. Click the WWW service.
	
	  c. Click the General tab, and then type an existing Windows NT account name
	     and password for the Anonymous Logon option.
	
	  d. Click OK, and then quit the Internet Service Manager.
	
	5. Exchange Server version 5.5 introduces a new right (and role) called Search,
	  which controls read access of the Exchange Server directory. To enable this
	  functionality for an account on any object in the Exchange Server directory,
	  you must first define an anonymous account on the General tab of the DS Site
	  Configuration object. After you do this, any account can be granted the
	  Search permission on any object in the directory. However, the Anonymous
	  account must also be explicitly granted Search permissions at the
	  Configuration container level.
	
	  To verify whether Search permissions have been enabled within the Exchange
	  Server directory, check the Permissions tab of the Organization, Site, and
	  Configuration containers. If any account has been given the Search
	  permission, you also need to grant this right on the Configuration container
	  to the Anonymous account specified in the DS Site Configuration object.
	
	  The other alternative is to remove the Search permission for all accounts from
	  each object in the Exchange Server directory that has this permission set.
	
	6. Verify that all Web Access files have been installed on the server and that
	  they are the proper versions. This scenario may occur if any MAPI- enabled
	  applications (Exchange or Microsoft Outlook clients, UPS systems, and so on)
	  were not closed or disabled before running the Setup program. Because
	  Exchange Server is forced to use older versions of certain system files such
	  as the Mapi32.dll file, the OWA components may not function correctly. To
	  verify that the files are correct, perform the following steps:
	
	  a. Run Exchange Server Setup and choose the Reinstall option. This runs
	     through the last successful installation and updates any corrupt or
	     missing registry entries and system files.
	
	     -or-
	
	  a. If you have made any customizations in the \Webdata directory, you must
	     back up the directory.
	
	  b. Run Exchange Server Setup, choose the Add/Remove option, and remove the
	     Active Server (5.0) or Outlook Web Access (5.5) components. Complete the
	     Setup to uninstall these components.
	
	  c. Run Setup again to add the Active Server or OWA components. This creates a
	     clean \Webdata directory.
	
	7. In the Exchange Server Administrator program, in the properties of the
	  organization-level container, make sure that the Display Name is the same as
	  the Directory Name. Do the same thing with site-level container.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbZNotKeyword6 kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2 kbOWASearch kbOWA550 kbExchangeActiveServComp500
	Version           : WINDOWS:5.0,5.5; winnt:5.0,5.5
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
