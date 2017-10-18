---
layout: page
title: "Q140556: Securing SNA Server to Not Require Everyone:Read Access"
permalink: kb/140/Q140556/
---

## Q140556: Securing SNA Server to Not Require Everyone:Read Access

	Article: Q140556
	Product(s): Microsoft SNA Server
	Version(s): 2.0,2.1,2.11
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork kbsetup
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By default, SNA Server requires that at least Everyone has read access on the
	COMCFG share (<sna_root>\SYSTEM\COMCFG) that SNA Server creates during
	Setup. Administrators may want to prevent read access so that unprivileged users
	do not copy the <sna_root>\SYSTEM\COMCFG\COM.CFG to view its contents;
	this article explains how to do that.
	
	NOTE: The SNA Server 3.0 setup program allows the administrator to install SNA
	Server services to run under a user account, and automatically performs all the
	steps described in this article. So, this is not an issue with SNA Server 3.0
	when this setup option is chosen.
	
	MORE INFORMATION
	================
	
	1. Create a user that is a member of the "Domain Admins" global group and
	  "Administrators" local group.
	
	2. Using User Manager for Domains, add "Domain Admins" and "Administrators" to
	  the following rights:
	
	   - Manage Auditing and security log
	
	   - Take ownership of files or other objects
	
	   - Act as Part of the Operating System
	
	   - Generate Security Audits
	
	   - logon as a service
	
	   - backup and restore
	
	3. Using the Services applet in Control Panel, configure each SNA Server service
	  to start in the context of the user that was just created in step 1. Do this
	  for every SNA Server in the subdomain.
	
	4. In File Manager, a. remove the Everyone group and b. add this newuser with
	  Full Control to the following shares:
	
	     Share:      Directory
	     ------------------------
	     snaserv      <sna_root>\ 
	     comlogs      <sna_root>\system\ 
	     COMCFG       <sna_root>\system\COMCFG\ 
	
	  Repeat step 4 for each SNA Server in the subdomain.
	
	5. Stop and start the SNABase service on each SNA Server in the subdomain.
	
	  Warning: Stopping the SNABase service on a particular machine will stop all
	  SNA Server services on that machine.
	
	6. Test changes.
	
	- To test whether SNA Server is still normally operating with the above changes
	  in place:
	
	   - Note the date/time of the <sna_root>\SYSTEM\COMCFG\COM.CFG on the
	     Primary SNA Server.
	
	   - Load SNA Admin on the primary SNA Server.
	
	   - Click the save button in SNA Admin.
	
	   - Note the change in date/time of the COM.CFG on the primary SNA Server.
	
	   - After a couple of seconds, the date/time of the
	     <sna_root>\SYSTEM\COMCFG\COM.CFG on one of the Backup SNA Servers
	     should match the new date/time on the primary.
	
	- To test whether SNA Server is denying access to users that are not members of
	  the Domain Administrators group:
	
	   - Logoff the backup SNA Server.
	
	   - Logon as a Domain User.
	
	   - Launch SNA Server Admin.
	
	   - The user should receive the following error message:
	
	  Error : 250
	
	     The SNA Server Base Service is not started. Unable to continue.
	
	- To test that Domain Users cannot get to the SNA Server shares to read SNA
	  Server system binaries and COM.CFG:
	
	   - Logon as a Domain User.
	
	   - Try to "net use" to the following shares:
	
	  \\Any_sna_server\snaserv
	  \\Any_sna_server\comlogs
	  \\Any_sna_server\COMCFG
	
	     The result should be that the user is able to map the drive but the
	     following should appear in File Manager:
	
	  You do not have permission to access this directory.
	
	     NOTE: If the password is changed for this user, then the administrator will
	     have to change the password with Service Control Manager for each SNA
	     Server service on each SNA Server in the subdomain. One way to prevent
	     having to do this is to select "Password Never Expires" for this user in
	     User Manager for Domains.
	
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbinterop kbnetwork kbsetup 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : :2.0,2.1,2.11
	Issue type        : kbinfo
	
	=============================================================================
	
