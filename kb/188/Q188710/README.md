---
layout: page
title: "Q188710: File Locking Behavior in FPNW"
permalink: /kb/188/Q188710/
---

## Q188710: File Locking Behavior in FPNW

	Article: Q188710
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft File and Print Services for NetWare version 3.51 
	- Microsoft Services for NetWare version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article describes the file locking behavior of Microsoft File and Print
	Services for NetWare (FPNW). It also describes registry entries that can be used
	to modify the default behavior.
	
	MORE INFORMATION
	================
	
	To maintain data integrity, file locking is used by applications to ensure that
	a file or a region within the file cannot be accessed by another application at
	the same time. When an exclusive lock is set on a file, the file cannot be
	opened for read or write access by any other application, and a sharing
	violation will result.
	
	Network or multiple user-aware applications often must allow access to one or
	more files for multiple users at the same time, especially in the case of
	executable files. This can be done by opening files that do not require write
	access for shared read-only access.
	
	Some older applications tend to open files for exclusive use when, in fact,
	shared access to the file would be preferred. Novell NetWare servers work around
	this problem by using the Shareable file attribute to indicate that a file can
	be opened for shared access, even when an application requests exclusive access
	to the file.
	
	When a file on a NetWare server is marked as Shareable, requests to open a file
	for exclusive use are translated to Read/Write Deny None, allowing multiple
	clients to open the same file for read and write access. However, if a client
	specifies that the file should be opened with Deny Read and Deny Write access,
	the NetWare server will grant exclusive access to the file for that client, even
	with the Shareable attribute set.
	
	While there is not an equivalent file attribute in Windows NT to the NetWare
	Shareable attribute, FPNW does provide compatibility for older applications by
	emulating the behavior of the Shareable attribute settings. FPNW does this by
	globally marking all files on an FPNW volume as Shareable, but requiring a
	separate request for exclusive write access before allowing a write to a file
	that has been opened by multiple clients.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	There are several registry entries that can be used to modify the default file
	locking behavior with FPNW. They are located in the following registry key:
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\FPNW\Parameters
	
	EmulateShareableFlag REG_DWORD 0 to 3
	Default: 0
	
	This affects how FPNW grants access to files that are opened for exclusive
	access. Valid values are 1-3. Meanings of these values are listed below:
	
	
	NCPSRV_COMPATIBILITYOPEN_DENYNONE   (1)
	
	All requests for Read-only Exclusive are mapped to Read/Write Deny None. If the
	same client later opens the file for write purposes, the same handle is used.
	FPNW ensures that only one client at a time has the file open for write. This
	allows NetWare clients to run programs concurrently, and enables setup programs
	that open the file for write, when they already have it open exclusively for
	read, to run correctly. However, Microsoft clients or local clients can modify
	the file without FPNW knowing about it because FPNW only has it open as
	Read/Write Deny None. Also, clients using a file for synchronization or clients
	that must have the file exclusively may encounter difficulty. This option is
	recommended only for administrators who are sure they do not have applications
	that will experience problems with this mode. This value is equivalent to the
	Shareable bit being set on a NetWare server.
	
	NCPSRV_COMPATIBILITYOPEN_DENYWRITE  (2)
	
	This is the default mode. In this mode, all requests for Read-only Exclusive are
	translated to Read/Deny Write. This enables most older programs to be loaded
	concurrently from multiple clients. However, requests for write exclusive cannot
	be folded into existing read-inclusive requests, so some setup programs fail in
	this mode.
	
	NCPSRV_COMPATIBILITYOPEN_EXCLUSIVE  (3)
	
	This is the strictest option. When clients request exclusive use of a file, they
	get exclusive use. NetWare clients cannot load the same executable files at the
	same time because one of them will have it open exclusively. The file is opened
	Read/Write Exclusive even if the client requests Read- only Exclusive. This mode
	usually causes the most errors, but it is the only way to enable some
	applications to function. This value is equivalent to the Shareable bit being
	not set on a NetWare server.
	
	NCPSRV_COMPATIBILITYOPEN_DEFAULT  (0)
	
	If a value of 0 is specified (or if no value is specified), the server defaults
	to DenyWrite (2).
	
	ReturnShareableFlag     REG_DWORD     0 or 1
	Default: 1
	
	This indicates whether FPNW sets the Shareable property globally for all files in
	all volumes on the server. The default is set to 1, which enables the Shareable
	property.
	
	EnableNtfsShareable     REG_DWORD     0 or 1
	
	Note: This registry value is incorrectly documented as EmulateNtfsShareable in
	the Service for NetWare online help file.
	
	
	This value enables per-file Shareable attribute to be set. If set to 0, or on
	volumes that do not use NTFS, volume-wide shareable processing as specified by
	EmulateShareableFlag is used.
	
	If set to 1, administrators can set the Shareable flag on a per-file basis on
	NTFS volumes, and the registry value for EnableNtfsShareable is ignored. For
	files marked with the Shareable flag set, files are opened with Read/Write Deny
	None. If a file is marked as not Shareable, files are opened with Read/Write
	Exclusive.
	
	FPNW does not currently ship with a utility to set the Shareable attribute. To
	set the Shareable attribute, use the Flag.exe utility that can be found in the
	PUBLIC directory on your NetWare server.
	
	
	LockRetryCount REG_DWORD 0 to 100
	Default: 5
	
	When FPNW encounters an error opening a file, it will wait 600ms, then retry the
	operation. This value specifies the number of times FPNW retries an open on a
	file if the result of the open is that the file is in use.
	
	
	OplockBreakWait REG_DWORD 0 to 240
	Default: 60
	
	Oplocks are used to enable write caching for compatibility mode opens (shared
	read/write access). This value specifies the time in seconds that the server
	waits for a client to respond to an oplock break request. Smaller values can
	allow detection of crashed clients more quickly.
	
	REFERENCES
	==========
	
	Complete information on available FPNW registry entries can be found in the
	Service for NetWare online help file, Ms-sfn.hlp, on the CD-ROM in the
	Online.doc folder and in the Administrator's Guide for File and Print Services
	for NetWare version 3.51.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbServicesNetware400 kbServicesNetwareSearch kbFPNW351
	Version           : winnt:3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
