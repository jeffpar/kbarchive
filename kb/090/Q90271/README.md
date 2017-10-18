---
layout: page
title: "Q90271: Password Caching in Windows for Workgroups"
permalink: kb/090/Q90271/
---

## Q90271: Password Caching in Windows for Workgroups

	Article: Q90271
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 3.10 3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Windows for Workgroups, password caching is a feature that maintains a list
	of the passwords you have used and the resources to which they apply. Passwords
	are saved and retrieved transparently to the user. The password cache
	facilitates restoration of connections to shared resources when you log on.
	
	This article describes the functionality of file caching in Windows for
	Workgroups.
	
	MORE INFORMATION
	================
	
	Password List File
	------------------
	
	When you log on to Windows for Workgroups, the network driver looks up your
	username in the [Password Lists] section of SYSTEM.INI. This entry gives the
	path to your password list file (PWL), which is encrypted to maintain system
	security. Part of this file is decrypted using your logon password. If the
	decryption is successful, your password cache file is unlocked. When you log
	off, the password to your PWL file is erased from memory.
	
	If there is no SYSTEM.INI entry for your username, or if the file named there
	doesn't exist, a new PWL file is created for you, initially with no passwords in
	it. Windows for Workgroups asks you to confirm your logon password before it
	encrypts your PWL file.
	
	When you need to establish a connection to a network resource (either explicitly,
	from the Connect dialog box, or implicitly, at logon), the network driver first
	attempts to make the connection with a blank password. If the resource requires
	a password, the network driver then searches your PWL file for an entry
	corresponding to the resource to which you are connecting. That password is used
	on the next attempt to make a connection. If there is no entry in the file for
	the resource, or if the password recorded in the file is not correct (if, for
	example, the owner of the server changed the password), a password prompt is
	displayed.
	
	Whenever a password prompt is displayed, and the password you type turns out to
	be the correct one for the resource, it is saved in your PWL file for later use.
	If the server is running with share-level security (this applies to Windows for
	Workgroups servers and to some Microsoft LAN Manager servers), the server name
	and share name are recorded in the PWL file. If the server is running with
	user-level security, the password you used works for any share on that server,
	so a separate record containing only the server name is created.
	
	Additionally, if you choose to have your logon validated at a LAN Manager domain
	controller, your LAN Manager logon password is stored in your PWL file also, so
	that the only logon password you need to type is the one that encrypts the PWL
	file.
	
	NOTE: If a Windows for Workgroups client belongs to a workgroup and a domain, and
	is using the same password (which may be cached) to logon, a problem may occur
	if the passwords expire at different times and are no longer synchronized. This
	can occur if the Windows for Workgroups administrator enforces password changing
	(also called "aging"). The user is prompted to change the workgroup password,
	but not the domain password. When the domain password eventually expires, the
	user may not be able to remember it and may not be able to logon to the domain.
	
	How to Prevent the Saving of a Password in Your PWL File
	--------------------------------------------------------
	
	Sometimes you may not want Windows for Workgroups to save a password. To prevent
	the saving of a password, clear the Save This Password In Your Password List
	option in the Enter Network Password dialog box. Next time Windows for
	Workgroups attempts to connect to this resource, another password prompt
	appears.
	
	If you connect from the MS-DOS prompt (using the NET USE command), use the
	/SAVEPW:NO option to prevent Windows for Workgroups from recording the password
	in the PWL file.
	
	If you connect without saving the password, Windows for Workgroups does not add
	the password to your PWL file, but it does not delete the password if it's
	already in the PWL file.
	
	To disable password caching and prevent your PWL file from being accessed, add
	the following line to the [NETWORK] section of the System.ini file:
	
	  PasswordCaching=no
	
	PWL File Limits
	---------------
	
	Windows for Workgroups does not limit the length of time a password remains
	valid. The PWL file is limited to 255 password entries. Once there are 255
	entries in the PWL file, adding another password causes Windows for Workgroups
	to delete the oldest password. Each time a password entry is used to make a
	connection, it's marked as the "newest" entry, so frequently-used passwords are
	not the first candidates for removal.
	
	Password Caching Does Not Work When You Connect Using a UNC Name
	----------------------------------------------------------------
	
	If you try to open a file on a password-protected share by typing the UNC name,
	password caching is not activated, so Windows for Workgroups cannot make later
	connections for you. This happens because password caching is done by the
	network driver, at the user interface (UI) level (the UI level is where most
	interaction with the password cache occurs in Windows for Workgroups). To make
	it possible for password caching to be available in all circumstances, it would
	need to be implemented in the redirector instead of at the UI level. Password
	caching at the redirector level would have made Windows for Workgroups more
	complicated, due to the additional interfaces, which would result in slower
	connection time. Password caching at the redirector level would also increase
	the amount of memory used by the basic and full redirectors, leaving less
	available memory for other MS- DOS-based applications.
	
	
	Location of the PWL File
	------------------------
	
	Your PWL file can reside on any directory that Windows for Workgroups can access
	without a password. If you move your PWL file, you must edit the [Password
	Lists] section of your SYSTEM.INI file so it lists the correct path. If you want
	to put the PWL file on a network server, there are some restrictions:
	
	1. Because persistent connections are not restored until after the PWL file is
	  open, if the file is to be stored on a Windows for Workgroups or LAN Manager
	  server, you must type the path in UNC format, such as
	  \\server\share\user\user.pwl (rather than x:\user\user.pwl).
	
	2. Because the file is accessed using UNC when it is located on a network
	  server, the server or share cannot require a password to connect.
	  Additionally, Because the PWL file is not yet open, caching the password for
	  the file's location does not help.
	
	3. If you do not have write access to the server, you cannot save any new
	  passwords in your PWL file.
	
	REFERENCES
	==========
	
	"Microsoft Windows for Workgroups User's Guide," version 3.1, page 144
	
	Additional query words: 3.10 universal naming convention
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : 3.10 3.11
	
	=============================================================================
	
