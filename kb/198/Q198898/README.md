---
layout: page
title: "Q198898: XADM: Using Proxy Name Parameters with Unattended Setup"
permalink: /kb/198/Q198898/
---

## Q198898: XADM: Using Proxy Name Parameters with Unattended Setup

{% raw %}

	Article: Q198898
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you install Exchange Server in unattended (batch) mode, you can use the
	parameters OrganizationProxyName and SiteProxyName in addition to
	OrganizationName and SiteName. These proxy parameters are used to generate the
	Network and PostOffice names for the MS Mail connector.
	
	MORE INFORMATION
	================
	
	The parameters OrganizationProxyName and SiteProxyName can be found in the
	[Organization] and [Site] sections of the Setup.ini file as shown below. This
	file is used with the Setup /Q switch.
	
	When deciding names for the OrganizationProxyName and SiteProxyName, be aware
	that they should not exceed ten characters in length, and only the standard MS
	Mail characters can be used for each entry.
	
	[Organization]
	
	This section contains entries that specify the names of directory objects in the
	organization.
	
	- Entry: OrganizationName=
	
	  Description: Organization name if a new site is being created.
	  Value: Organization name
	
	- Entry: OrganizationProxyName=
	
	  Description: Organization proxy name that is used to determine the site
	  addresses for the connector if a new site is being created.
	  Value: Organization proxy name
	
	[Site]
	
	This section contains entries that specify the names of directory objects in the
	site, such as the site and server names.
	
	- Entry: ExistingServerName=
	
	  Description: Name of the server in the existing site.
	  Value: Server name
	
	- Entry: SiteName=
	
	  Description: Name of the new site if ExistingServerName is not provided.
	  Value: Site name
	
	- Entry: SiteProxyName=
	
	  Description: Proxy name of the new site that is used to determine the site
	  addresses for connectors.
	  Value: Site proxy name
	
	- Entry: InternetSiteName=
	
	  Description: Internet site name if Internet Mail Service is being installed.
	  Value: Internet site name
	
	After installation has completed, open the property pages for the MS Mail
	connector. You should see that the OrganizationProxyName and SiteProxyName
	entries you used in the Setup.ini file are configured for the Network name and
	PostOffice name respectively on the Local Postoffice tab. In addition, a new
	mailbox will use OrganizationProxyName and SiteProxyName for the MS Mail proxy
	address, for example, OrganizationProxyName/SiteProxyName/PAULKI.
	
	For more information on installing Exchange Server in batch mode, see the
	following articles in the Microsoft Knowledge Base:
	
	  Q188625 XADM: Unattended Exchange Server 5.5 Setup
	
	  Q168490 XADM: Unattended Exchange Server Setup
	
	In addition, example Setup.ini files are provided on the Exchange Server CD-ROM
	in the Support directory.
	
	Additional query words: OrganizationProxyName SiteProxyName unattended batch proxy
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
