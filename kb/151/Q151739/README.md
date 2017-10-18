---
layout: page
title: "Q151739: How to Create a List of Users from Other Domains"
permalink: kb/151/Q151739/
---

## Q151739: How to Create a List of Users from Other Domains

	Article: Q151739
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	User Manager for Domains does not allow administrators to generate a list of
	user accounts, and Net user /domain will only pull user accounts from the domain
	that the computer account is located in. You can generate a list of user
	accounts from domains (trusted) other than the domain your computer has an
	account in by using the Resource Kit utility addusers.exe.
	
	MORE INFORMATION
	================
	
	With the command line
	
	  addusers \\servername /d filename.txt
	
	(where servername is the name of the primary domain controller), administrators
	can generate a list of users in domains other than their own; this list is
	generated into a text file. This file will also contain information such as the
	profile, home directory, and scripts.
	
	Additional query words: net user q149781
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
