---
layout: page
title: "Q92588: WFWG: Password Caching and How It Affects LAN Manager Security"
permalink: /kb/092/Q92588/
---

## Q92588: WFWG: Password Caching and How It Affects LAN Manager Security

	Article: Q92588
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-SEP-1999
	
	3.10
	
	WINDOWS
	
	kbnetwork kbusage
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows for Workgroups version 3.1 uses share-level security. As a result, when
	you type a password to start the network, the only purpose this serves is to
	provide access to the network from the workstation.
	
	The access granted provides reconnection services to shares to which the
	workstation was previously connected. If these connections were password
	protected on a share-level basis, then these passwords were saved in a password
	cache and are only accessible if the correct password was entered when the
	network was started. You must type the correct password for a given user name,
	or the network does not start.
	
	MORE INFORMATION
	================
	
	If an alternate user name is typed at the login prompt, then the reconnection
	services are still provided, but you are prompted to enter a password to any
	shares that are secured by one. If you do not know the share password, then you
	are not allowed to reconnect.
	
	When using LAN Manager connectivity with Windows for Workgroups, user-level
	security is implemented for all LAN Manager servers. If there is a server
	available during logon, then it validates the user by checking for the correct
	user name and user-level password. If the user is not validated during logon,
	then any LAN Manager server that is set up to use user-level security validates
	the user name and user-level password before it allows connection. If you do not
	give the correct password, you can connect but only with guest privileges.
	
	User-level security is implemented when a server is set up with restrictions that
	govern who can access the server. These restrictions, may include the time of
	day that the user has access to the server, the files and subdirectories the
	user may access, and the level of rights the user is granted (such as read,
	write, create, and delete).
	
	Share-level security serves to restrict connections to a specified drive that has
	been set up as a share. Security is established by assigning a password to the
	drive. There are two levels of privileges that can be granted: read only and
	full access.
	
	Windows for Workgroups has built-in functionality to store passwords to shares
	that are secured by a password. This feature is optional, and is only
	implemented when the user chooses to enter a password when starting the network.
	Null is a valid password and if used, the user is not prompted for the password.
	It is only implemented for LAN Manager logon if the user selects the check box
	that saves the password in the password cache.
	
	If password caching is enabled, Windows for Workgroups saves the LAN Manager
	logon and user-level passwords in the cache so that the next time the user tries
	to log on or connect to a server the user is not prompted for the password. It
	is also possible to choose not to save an individual connection's password.
	Within File Manager this is done by clearing the option that saves the password
	in the password cache. Password saving can also be prevented when making the
	connection at the MS-DOS command prompt by using the SAVEPW:NO command. For
	example, type:
	
	  net use \\server\share password \savepw:no
	
	To disable password caching and prevent your PWL file from being accessed, add
	the following line to the [NETWORK] section of the System.ini file:
	
	     PasswordCaching=no
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch
	Version           : WINDOWS:
	
	=============================================================================
	
