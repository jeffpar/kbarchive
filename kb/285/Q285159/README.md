---
layout: page
title: "Q285159: How to Create Virtual Directories to a Remote NetWare Share"
permalink: /kb/285/Q285159/
---

## Q285159: How to Create Virtual Directories to a Remote NetWare Share

	Article: Q285159
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to create a virtual directory in Internet Information
	Services (IIS) 5.0 to connect to a Novell NetWare share.
	
	To gain access to the NetWare File System, IIS must pass credentials with the
	appropriate permissions for the databases that you are attempting to access. By
	default, IIS attempts to pass credentials for the IUSR_MachineName account.
	
	NOTE: The IUSR_MachineName account appears as though it is being used by IIS 5.0
	Web sites that are running out of process. However, the IWAM_Machine Name
	account impersonates the IUSR_MachineName account. Therefore, the IUSR account
	is the only account discussed in the following resolution.
	
	NetWare uses the NetWare Directory Service to authenticate users to its servers.
	To access any file systems, a legitimate account for the credentials that are
	being passed must exist on the NetWare server.
	
	MORE INFORMATION
	================
	
	To access the Novell NetWare 5 shares running only TCP/IP, perform the following
	steps exactly:
	
	1. On the IIS computer that is attempting to communicate with Novell, install
	  the Novell NetWare Client for Microsoft Windows NT (Required). During setup,
	  choose a custom installation, choose to install into an NDS system, and only
	  choose IP for the protocol. Do not install Workstation Manager.
	
	2. On the computer running IIS 5.0, open Control Panel, double-click
	  Administrative Tools, double-click Computer Management, click to expand Local
	  Users and Groups, double-click Users, right-click the IUSR_Machine Name
	  account, and then click Set Password. Change the password, save it, and then
	  close the Computer Management console.
	
	3. In the Internet Services Manager, do the following:
	
	  a. Right-click the server name (for example, MYWEB01) under Internet
	     Information Services.
	
	  b. Click the Edit button next to WWW to open the master properties.
	
	  c. On the Directory Security tab, click the Edit button next to Anonymous and
	     Authentication methods.
	
	  d. On the Authentication Methods tab, click Edit under the Anonymous section
	     to open the Anonymous User properties.
	
	  e. Click to uncheck the option for IIS to control the password, and then
	     enter the password that you changed in step 2.
	
	4. Open the NetWare Administrator located in the sys: volume in the Public\WIN32
	  folder of the NetWare 5 Server. In the root of the container where the server
	  exists, create an IUSR_Machine Name account that is identical to the one on
	  the Windows NT Server computer. In the properties for that user, click
	  Password Restrictions, and then make sure that only the Require password
	  option is checked. Click Set Password, and then set the password to that of
	  the Windows NT account. Do not require passwords to be changed on the NetWare
	  system.
	
	  NOTE: This is the most crucial step to the entire process.
	
	5. In the NetWare Administrator, open the properties for the newly created IUSR,
	  click the Rights to files and directories tab, and then add the appropriate
	  permissions to the database files that need to be accessed. Give at least
	  Read permissions, unless changes will be made through the Internet, which
	  requires all permissions except Supervisor and Access Control.
	
	NOTE: After you add the virtual directory in IIS, you may see a red stop sign
	with the word "Error" inside. This warning appears because IIS does not support
	the UNC connection to a computer in a domain that does not have a trust
	relationship with the domain in which the IIS server resides.
	
	
	Additional query words: iis 5
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbinfo
	
	=============================================================================
	
