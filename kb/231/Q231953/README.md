---
layout: page
title: "Q231953: How to Restrict Permissions for Telnet Users w/Services for UNIX"
permalink: kb/231/Q231953/
---

## Q231953: How to Restrict Permissions for Telnet Users w/Services for UNIX

	Article: Q231953
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, used with:
	   - Microsoft Windows NT Services for UNIX Add-On Pack 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to restrict permissions for Telnet users with
	Services for UNIX Telnet Server.
	
	MORE INFORMATION
	================
	
	Telnet allows users to gain access to resources on your Telnet servers. It is
	important to review your security policy and implement appropriate protection.
	
	NOTE: Microsoft recommends using the NTFS file system when you use Telnet with
	Services for UNIX. The file allocation table (FAT) file system provides no
	file-level security and may present serious security risks.
	
	To restrict permissions to certain files or folders:
	
	1. Create a local group and name it TelnetUsers.
	
	2. Give the TelnetUsers group No Access permissions for all files and folders on
	  drives C and F. (The Windows NT folder (%SystemRoot%) is located on drive C,
	  and the TelnetUsers Home folders are located on drive F.)
	
	3. Give the TelnetUsers group Read and Add permissions to the %SystemRoot%
	  folder. Set these permissions only to the folder, not to any files or
	  subfolders.
	
	4. Give the TelnetUsers group Read permissions to the following files in the
	  %SystemRoot%\System32 folder:
	
	   - Rpcltc1.dll
	
	   - Cmd.exe
	
	   - Expand.exe
	
	   - Help.exe
	
	   - Pax.exe
	
	   - More.exe
	
	   - Ntlanman.dll
	
	5. Give the TelnetUsers group List permissions to the %SystemRoot%\System32
	  folder.
	
	6. For each user in the TelnetUsers group, specify a home folder of
	  F:\Home\%Username%. Give each individual Full Control to his or her own
	  folder and remove permissions for anyone else.
	
	7. Assign the TelnetUsers group List permissions to drive F.
	
	8. Connect to the Telnet server as a user to ensure everything functions
	  properly. Run Cmd.exe from the shell prompt and see if you can change
	  directories to the F:\Home folder or above. Change to the C drive and try to
	  delete anything or read anything to which you do not explicitly have
	  permissions.
	
	If you need to track the files your users are touching or if you receive error
	messages after using the previously outlined steps, enable Security Auditing
	through "User Manager/Policies/Audit/File and Object Access both success and
	failure."
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q157238 How to Activate Security Event Logging in Windows NT 4.0
	
	Additional query words: telnetd SFU
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTSsearch
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
