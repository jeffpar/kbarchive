---
layout: page
title: "Q176987: Remoteboot Client Records Incorrect Timestamp"
permalink: /kb/176/Q176987/
---

## Q176987: Remoteboot Client Records Incorrect Timestamp

	Article: Q176987
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:95; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	The Windows 95 Remoteboot Client will record an incorrect timestamp for files
	that it saves to the Windows NT Remoteboot server. The timestamp is offset by an
	increment equal to the difference between Greenwich Mean Time (GMT) and the time
	zone of the Remoteboot client and server. Essentially, the timestamp of the file
	is GMT.
	
	This problem only occurs for files saved by an application running on the
	Remoteboot client to the Remoteboot server. Files created by the Windows NT
	Server will show the correct time when viewed from the Remoteboot client. Files
	created by the Remoteboot client on another Windows NT Server in the network
	also show the correct time.
	
	CAUSE
	=====
	
	The problem occurs when you build the server message block (SMB) to save a file
	to the remote initial program load (RPL) server. The timestamp is obtained, and
	the time zone offset is used to calculate the local time, which is placed in the
	SMB and used as the timestamp for the file. The problem is that the time zone
	offset, which is normally obtained from the registry, is unable to be obtained
	there in RPL situations. Instead, for an RPL client, the time zone offset is
	read from the registry during startup and saved in a global variable. This
	variable is then used when building the SMB. In this case, the variable is
	initialized prior to use.
	
	RESOLUTION
	==========
	
	
	
	
	A possible workaround is for the user of a Windows 95 Remoteboot client to store
	files on another server in the domain. The timestamp for these files should be
	correct.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows 95.
	
	Additional query words: rpl remote boot win95 timezone GMT
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95; winnt:3.5,3.51,4.0
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	
