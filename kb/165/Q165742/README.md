---
layout: page
title: "Q165742: Addusers Errors &amp; Bad File Output When Using Incorrect Version"
permalink: /kb/165/Q165742/
---

## Q165742: Addusers Errors &amp; Bad File Output When Using Incorrect Version

	Article: Q165742
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to output a list of users through the Addusers resource kit
	utility, it is possible that you will repeatedly receive the following message:
	
	  User account <username> saved to file!
	
	The resulting file can be very large for the number of accounts originally
	exported (for example, a 1 MB file results for only five user accounts
	processed).
	
	When you attempt to import a list of users from a previously created user dump
	file, it is possible that the following error could repeatedly appear:
	
	  Error 2224 - Username "<username>" not added
	
	A normal export should look similar to the following:
	
	  [User]
	  Administrator,,,Build-in account for administering the
	  computer/domain,,,,
	  Guest,,,Build-in account for guest access to the computer/domain
	  <Userid1>,,,,,,
	  <Userid2>,,,,,,
	  <Userid3>,,,,,,
	  <Userid4>,,,,,,
	  [Global]
	  Domain Admins,Designated administrators of the domain,Administrator,
	  Domain Guests,All domain guests,Guests,
	  Domain Users,All domain users,<userid>,etc.,
	  [Local]
	  Account Operators,Members can administer domain user and group accounts,
	  Administrators,Members can fully administer the computer/domain,
	  Backup Operators,Member can bypass file security to back up files,
	  Guests,Users granted guest access to the computer/domain,
	  Print Operators,Members can administer domain printers,
	  Server Operators,Members can administer domain servers,
	  Users,Ordinary users, Replicator,Directory Replication,
	
	Output from a wrong version of Addusers.exe will produce something similar to the
	following:
	
	  User Name,Full Name,Password,Comment,Home Drive,Home Path,Profile,Script
	  Administrator,,,Built-in account for administering the computer/domain,
	  Guest,,,Built-in account for guest access to the computer/domain,
	  <Userid1>,
	  <Userid2>,
	  <Userid3>,
	  <Userid4>,
	  <Userid1>,
	  <Userid2>,
	  <Userid3>,
	  <Userid4>,
	  <Userid1>,
	  ...etc.
	
	There will be no section names for [User], [Global], and [Local].
	
	MORE INFORMATION
	================
	
	The preceding error messages and export file result if you attempt to use a
	version of Addusers.exe from the Windows NT Resource Kit on a version of Windows
	NT different than the one on which your computer is running (in other words, if
	you use Addusers.exe from the Windows NT 3.51 Resource Kit on a computer running
	Windows NT version 4.0 or Addusers.exe from the Windows NT 4.0 Resource Kit on a
	computer running Windows NT version 3.51).
	
	RESOLUTION
	==========
	
	Run the version of Addusers.exe compiled for the intended platform.
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
