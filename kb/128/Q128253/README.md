---
layout: page
title: "Q128253: Differences in Login Scripts in NetWare 4.x and NetWare 3.x"
permalink: /kb/128/Q128253/
---

## Q128253: Differences in Login Scripts in NetWare 4.x and NetWare 3.x

	Article: Q128253
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the Microsoft Client for NetWare Networks (Nwredir.vxd) and
	you log on to a Novell NetWare version 4.x server, login scripts created with
	NetWare's NETADMIN or NWADMIN utilities do not run.
	
	CAUSE
	=====
	
	The Microsoft client that is available with Windows 95 can access login scripts
	only through NetWare 3.x Bindery-type connections to NetWare servers. Because
	the login scripts for NetWare 4.x servers are stored in a different form, they
	are not available at logon and cannot be run.
	
	RESOLUTION
	==========
	
	To resolve this issue, use either of the following methods:
	
	- Obtain and install the Microsoft Service for NetWare Directory Services
	  (MSNDS). For information about obtaining MSNDS, please see the following
	  article in the Microsoft Knowledge Base:
	
	  Q138709 Microsoft Service for NetWare Directory Services Available
	
	- Set the NetWare server to Bindery emulation. Then, use the SYSCON utility
	  from a NetWare 3.x server to connect to the NetWare 4.x server and create the
	  System and User login scripts that you want to use.
	
	  For assistance in modifying your NetWare configuration, please consult the
	  Novell documentation, your network administrator, or Novell Technical
	  Support.
	
	
	MORE INFORMATION
	================
	
	Login scripts are stored differently on NetWare 3.x servers using Bindery
	services than they are on NetWare 4.x servers using NetWare Directory Services
	(NDS). On a Bindery server the System login script is stored in the file
	NET$LOG.DAT in the SYS:PUBLIC directory. The User login scripts are stored in
	subdirectories of the SYS:MAIL directory (with names corresponding to the users'
	internal IDs, usually 8-digit hexadecimal numbers) in files named LOGIN. On an
	NDS server, the Container, Profile, and User login scripts are stored in the
	Directory Services database as properties of the Container, Profile, and User
	objects.
	
	Because the Microsoft Client for NetWare Networks that is included with Windows
	95 can make only Bindery-type connections to a NetWare 4.x server, the server
	must be running Bindery emulation or you must install the Microsoft Service for
	NetWare Directory Services (MSNDS). To emulate a Bindery-type login, the
	NET$LOG.DAT and LOGIN files must exist in the proper directories. These files do
	not ordinarily exist on a NetWare 4.x server.
	
	This behavior also occurs when you log on to a NetWare 4.x server using the NETX
	client, or when you use the VLM (NetWare MS-DOS requester) client with the
	"Preferred Server" setting (in the NET.CFG file) set to specify the login server
	name instead of using the "Preferred Tree" setting to specify the login tree
	name.
	
	The third-party products discussed in this article are manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	REFERENCES
	==========
	
	Novell NetWare version 3.11 "Concepts" manual: "Login Scripts"
	
	Additional query words: default nwredir
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
