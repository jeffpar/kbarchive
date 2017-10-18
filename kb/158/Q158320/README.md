---
layout: page
title: "Q158320: RSHSVC Included in WinNT 3.5x/4.0 ResKit Has Potential Leak"
permalink: kb/158/Q158320/
---

## Q158320: RSHSVC Included in WinNT 3.5x/4.0 ResKit Has Potential Leak

	Article: Q158320
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbtool
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Although the RSHSVC utility included in the Windows NT Server Resource Kit uses
	the .Rhosts file for the Account Level Equivalence (ALE) security, RSHSVC does
	not do the ALE security check as is explicitly specified in the Rshsvc.txt or
	Rshsvc.htm files, therefore it poses a security leak or hole.
	
	MORE INFORMATION
	================
	
	A Remote Shell Server Service (RSH) Daemon normally provides one or two levels
	of security: the Host Level Equivalence (low/loose), by using the Hosts.equiv
	file and the Account Level Equivalence (high/tighter), by using the .Rhosts file
	(The period "." is part of the name!).
	
	According to the Rshsvc.txt or Rshsvc.htm file, the Rshsvc.exe file running on an
	IP host (local computer) provides the ALE security and is supposed to check the
	user name (either the client user name or server user name) of a user who tries
	to remotely access from a remote host, and the remote host name against the
	entries in the .Rhosts file under the %SystemRoot%\System32\Drivers\Etc
	directory on the local computer.
	
	RSHSVC supposedly returns an access denied error message when any of the
	following conditions occur:
	
	- The RSH client computer name is not specified in the .Rhosts file.
	
	- The name of the user that is logged on to the RSH client computer is not
	  present in the .Rhosts files.
	
	- RHSVC (using GetHostByName) failed to resolve the IP Address of a computer,
	  say Mx, specified in the .Rhosts files and a user is trying to access this
	  service from that computer Mx.
	
	But RSHSVC fails to check whether the user name is authorized or not in the
	.Rhost file and mistakenly let any unauthorized user name access the local
	computer as long as it comes from an authorized host computer.
	
	This poses serious security problems such as delete file, kill process, and so
	forth.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in NT version 3.5x/4.0 and we are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	REFERENCES
	==========
	
	1. Rshsvc.txt or Rshsvc.htm coming with the Rshsvc.exe and .DLL file in the
	  Windows NT Resource Kit.
	
	2. Essential System Administration, O'Reilly & Assoc, 2nd Ed., Chapter 13
	  Network Security, Pages 622-623.
	
	3. UNIX Network Programming, W. R. Stevens, Prentice Hall, Chapter 9 Security,
	  Pages 421-424
	
	Additional query words: Reskit
	
	======================================================================
	Keywords          : kbnetwork kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	
