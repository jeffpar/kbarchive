---
layout: page
title: "Q139676: Finding Out Who Has Locked the SNA Server Configuration File"
permalink: kb/139/Q139676/
---

## Q139676: Finding Out Who Has Locked the SNA Server Configuration File

	Article: Q139676
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Within a Windows NT domain, all SNA Servers in the domain share a common
	configuration file, where only one SNA Server in the domain is designated as the
	"primary" configuration server. When the SNA Admin program is started, Admin
	attempts to open the primary server's configuration file in Read/Write mode. If
	this open succeeds, all other users who attempt to run SNA Admin will only be
	able to access the configuration file in read-only mode.
	
	Read/write access is needed to update the configuration file, though read-only
	access still allows that administrator to start/stop SNA Server services and
	view their status.
	
	Under SNA Server 2.11, if the configuration file is already open for read\write
	access and another SNA Administration program tries to open the configuration
	file, the user will be prompted with the following dialog box:
	
	  Insufficient privilege or the file is locked. The file is locked by Domain
	  Name\User on computer (computer name). OK to open the configuration in read
	  only mode?
	
	The user will only be able to open the configuration file for read access at this
	time.
	
	Previous versions of SNA Server Admin do not show what user has the primary
	configuration file locked open for write access. If the SNA Admin program is not
	running locally on the primary configuration server, then Windows NT Server
	Manager can be used to determine which user has the configuration file open in
	write mode. Choose Server Manager/servername/<in use>/ look at which user
	has the <COM.C$$> file locked.
	
	MORE INFORMATION
	================
	
	Under SNA Server 2.11, SNA Server Admin is able to determine who has the
	configuration file open by parsing the COM.LOK file. This file is created when
	the configuration file is opened for read\write access. The file is deleted when
	the SNA Server Administration program that has locked the configuration file is
	shutdown.
	
	Sample COM.LOK file:
	
	SNASERVER\Snauser SNAUSER
	
	If this file is deleted while the COM.CFG is still locked by SNA Server Admin
	then any other SNA Server Admin will not be able to tell the user (in the popup
	message) who has the configuration file opened for Read\write access.
	
	NOTE: SNA Server Admin 2.1 and 2.11 support the ability to configure SNA Server
	administration rights, using the SNA Admin Security/Permissions dialog. Users
	can be granted the following rights:
	
	No access: Disallow a particular user or group from administering SNA Server
	
	Read (manage only): Allow the user to open the configuration file in read mode,
	so the user can view the server status and start/stop services.
	
	Read/Write: Allow the user to manage the server and change the SNA Server
	configuration.
	
	Full control: View SNA Server status, start and stop services, change SNA Server
	configuration information and assign configuration privileges for other users.
	
	WARNING: The SNA Server administrator should never attempt to set Windows NT file
	system (NTFS) file privileges on the primary SNA Server configuration file. The
	SNA Server Admin program should be used exclusively to manage SNA Administration
	rights of users.
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211
	Version           : WINDOWS:2.11
	Issue type        : kbinfo
	
	=============================================================================
	
