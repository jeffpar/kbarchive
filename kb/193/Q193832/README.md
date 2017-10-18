---
layout: page
title: "Q193832: Permissions Needed on SNA Server Services User Account"
permalink: kb/193/Q193832/
---

## Q193832: Permissions Needed on SNA Server Services User Account

	Article: Q193832
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1,4.0SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0SP1, 3.0SP2, 3.0SP3, 4.0, 4.0SP1, 4.0SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The services installed by SNA Server version 3.0 and later run under a user
	account context. This user account is set to be a domain administrator with
	additional permissions. Though Microsoft recommends that the user context not be
	changed after initial installation, some instances may arise where the service
	user account needs to be changed to a different user. If this user context does
	not have the correct permissions, the services may fail to start and cause SNA
	Server to fail.
	
	MORE INFORMATION
	================
	
	In most cases when the SNA Server services fail to start, it is the result of
	the services[ASCII 146] user password being changed, the user account being
	deleted, or the user being deleted and re-added through the Windows NT User
	Manager utility. Also note that if the user account that the SNA Server services
	are running under does not have "Password Never Expires" selected under that
	user profile, every time the password for this user is changed, each SNA Server
	service must be manually changed to reflect the new password. This is not done
	dynamically and must be done by the administrator. This can be a source of more
	administrative overhead and greater chance of incorrect settings being made to
	the SNA Server services.
	
	By default, the SNA Server installer creates a user account with domain
	administrator privileges and some additional privileges (or modifies a pre-
	existing user account with privileges to this level) for use by the SNA Server
	services. If SNA Server is being installed on a Windows NT Server computer that
	is not participating in a domain (that is, a workgroup), the account is added to
	the local Administrators group. If it is in a Windows NT domain, the installer
	adds the account to the domain administrators group. If it is a Windows NT
	member server, the account is also added to the local Administrators group.
	
	A minimum of three privileges is required for a new service account to work with
	the SNA Server services. These include:
	
	- Logon as a service (se_service_logon_name privilege)
	
	- Act as part of operating system (se_tcb_name privilege)
	
	- Manage auditing and security log (se_audit_name privilege)
	
	The SnaBase service and SNA Server service also require the following privilege
	(which the DMOD grants during runtime):
	
	- Generate security audits (se_security_name)
	
	The following privileges can be added but are not required:
	
	- Take ownership of files or other objects
	
	- Backup and restore
	
	Changes to the user account are made through the User Account Manager in Windows
	NT. Services can be changed by going to Control Panel and double- clicking
	Services.
	
	Most issues involving a problem with the SNA Server services can be resolved by
	saving the <snaroot>\System\Config\Com.cfg file, removing SNA Server, and
	reinstalling SNA Server. This re-writes the registry and updates the user
	manager with an account that has the correct permissions and service
	dependencies.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400
	Version           : WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1,4.0SP2
	Issue type        : kbhowto
	
	=============================================================================
	
