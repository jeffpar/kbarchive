---
layout: page
title: "Q261012: How to Change MdbDomains Value for SNAPMP Service in HIS2000"
permalink: /kb/261/Q261012/
---

## Q261012: How to Change MdbDomains Value for SNAPMP Service in HIS2000

{% raw %}

	Article: Q261012
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-MAY-2000
	
	This article discusses a Beta release of a Microsoft product. The 
	information in this article is provided as-is and is subject to change
	without notice.
	
	No formal product support is available from Microsoft for this Beta 
	product. For information about obtaining support for a Beta release, 
	please see the documentation included with the Beta product files, or 
	check the Web location from which you downloaded the release.
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows Account Synchronization (SNAPMP) service coordinates all updates to
	the host account cache(s) and all password synchronization activities in
	Microsoft Windows NT and Microsoft Windows 2000 and host security domains. The
	SNAPMP service that is operating in a master (or primary) role registers itself
	with the master SNA Host Account Cache service in all Windows NT and Windows
	2000 domains listed in its MDBDomains registry parameter. The SNAPMP service
	does not complete initialization and start normal operation until it has
	registered in each of the configured domains.
	
	MORE INFORMATION
	================
	
	The Host Security Setup program included in Microsoft SNA Server 3.0 and 4.0
	displays a dialog box that allows you to enter the Windows NT or Windows 2000
	domain that contains the host account cache(s). However, the Setup program that
	installs the SNAPMP service in Microsoft Host Integration Server 2000 does not
	include a dialog box that allows you to enter the Windows NT or Windows 2000
	domain(s) that contain host account cache(s).
	
	The SNAPMP service maintains the list of Windows NT and Windows 2000 domains that
	contain the host account cache(s) in the following registry entry:
	
	  
	
	  HKEY_LOCAL_MACHINE
	  \SYSTEM
	      \CurrentControlSet
	          \Services
	              \SnaPMP
	                  \Parameters
	                      \MdbDomains:REG_MULTI_SZ: <list of domains>          
	
	The SNAPMP service included with Host Integration Server 2000 determines the
	domain name of the computer running Windows NT or Windows 2000 that it is being
	installed on. It then adds this domain name to the MdbDomains registry
	parameter. In a single domain environment, the SNAPMP service is installed in
	the same domain as the Host Account Cache service. Therefore, the MdbDomains
	value is correct.
	
	In a multiple domain environment, the SNAPMP service needs to be installed on the
	PDC (Windows NT 4.0) or PDC Emulator (Windows 2000) in each domain that contains
	accounts for users that will participate in the host security domain. In these
	environments, the MdbDomains parameter may be incorrect on at least some of the
	systems because the master host account cache is likely to reside in a domain
	other then the one the SNAPMP service resides in.
	
	In an environment that contains multiple master (primary) host account caches,
	the MdbDomains parameter must contain the domain names for all domains that
	contain master host account caches. The MdbDomains parameter will be incomplete
	because it will only have one domain name, which may also be incorrect if the
	local domain does not contain a master host account cache.
	
	The last two scenarios require an update to the MdbDomains parameter. This update
	can be done by modifying the registry manually on all the servers that the
	SNAPMP service has been installed on. However, Host Integration Server 2000
	includes a the command line utility Hostseccfg.exe that can be used to update
	this registry parameter.
	
	The Hostseccfg.exe file can also be used to perform a few other host security
	related functions. The following is a list of the available options for this
	utility:
	
	  /? - Displays help
	
	  /PRIMARY - Sets the SNAPMP role to primary.
	
	  /BACKUP - Sets the SNAPMP role to backup.
	
	  /UDBDOMAIN <domain names> - Windows NT or Windows 2000 domain names that
	  will be written to the MdbDomains registry parameter. Any current domains in
	  MdbDomains are overwritten unless the /APPEND or /REMOVE options are used.
	  Domain names must be separated by spaces.
	
	  /APPEND - Used with /UDBDOMAIN to append domain name(s) to the MdbDomains
	  registry parameter.
	
	  /REMOVE - Used with /UDBDOMAIN to remove domain name(s) from the MdbDomains
	  registry parameter.
	
	  /ACCOUNTPASSWORD - Used to specify new service account password for the SNAPMP
	  and SNA Host Account Cache services.
	
	  /PRINT - Displays the current role of the SNAPMP service and the current
	  MdbDomains list.
	
	NOTE: The parameters are not case sensitive.
	
	The following are examples of how to use the Hostseccfg.exe file to update the
	MdbDomains parameter:
	
	- Overwrite and replace the existing MDbDomains value with a domain name of
	  DOMAIN1:
	
	  hostseccfg /udbdomain DOMAIN1
	
	- Add domains DOMAIN2 and DOMAIN3 to the current MDbDomains list:
	
	  hostseccfg /udbdomain DOMAIN2 DOMAIN3 /APPEND
	
	- Remove DOMAIN2 from the existing MdbDomains list:
	
	  hostseccfg /UDBDOMAIN DOMAIN2 /REMOVE
	
	NOTE: HOSTSECCFG must be run on each system that the SNAPMP service is installed
	on in order to update the MdbDomains registry parameter on each system.
	
	Additional query words: pmp hsd hostsec multi-master hsi
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
