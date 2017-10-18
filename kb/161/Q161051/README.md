---
layout: page
title: "Q161051: Windows NT Shares Inaccessible with Net Use in Login Script"
permalink: kb/161/Q161051/
---

## Q161051: Windows NT Shares Inaccessible with Net Use in Login Script

	Article: Q161051
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1
	Operating System(s): 
	Keyword(s): kbnetwork osr2 win95kbfixlist
	Last Modified: 13-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When NET USE commands are used in a Windows NT login script to connect to
	Windows NT servers in various domains, you may not be able to access those
	drives.
	
	A network drive may appear in Windows Explorer, but when you click the drive, an
	error message such as "No files found" or "Access denied" may appear. If you
	disconnect the network drive and then reconnect to the same resource, you can
	then access the files on the drive.
	
	Also, the following error message may occur when a login script with NET USE
	commands is being used:
	
	  Profile error 4: The file cannot be created. The volume may not support long
	  file names. Some of your profile settings may not be available. Do you want
	  to see this message in future?
	
	Also, when you try to map a drive through a login script with NET USE commands,
	you may intermittently be prompted for your password.
	
	CAUSE
	=====
	
	This symptom can occur if all of the following conditions exists:
	
	- The Windows NT domains are organized into a Multiple Master domain model, in
	  which there are at least two Master (account) domains trusted by the Resource
	  domains.
	
	- User accounts with the same user name, but different passwords, exist in more
	  than one of the Master domains.
	
	- The NET USE command in the login script is attempting to map a drive to a
	  share on a server that is a member of a Resource domain.
	
	RESOLUTION
	==========
	
	To work around this issue, ensure that user account names are unique across all
	Master Domains.
	
	This issue is resolved by the following updated file for Windows 95 and OSR2, and
	later versions of this file:
	
	  MSNET32.DLL  version 4.00.952  dated 5/23/96  60,416 bytes
	
	STATUS
	======
	
	This issue is resolved in Microsoft Windows 98.
	
	MORE INFORMATION
	================
	
	This problem occurs when different user accounts exist in different Master
	domains, but with the same user name. For example:
	
	   Domain    User name   Password   Full name
	   --------------------------------------------
	   MASTER1   JOHNSMIT    abcdefg    John Smith
	   MASTER2   JOHNSMIT    tuvwxyz    John Smiter
	
	Under these conditions, the logon domain name is not included in the user account
	information sent by Windows 95 when the NET USE command is issued. Therefore,
	the user name is not necessarily resolved to the correct user account in the
	correct domain. The NET USE command may finish without errors, but the command
	is processed for the wrong user account. If the passwords are different, the
	password is incorrect for that account, and access is denied.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork osr2 win95 kbfixlist
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	Issue type        : kbprb
	
	=============================================================================
	
