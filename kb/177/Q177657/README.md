---
layout: page
title: "Q177657: Explanation of NTBackup /Nopoll Parameter Is Incorrect"
permalink: /kb/177/Q177657/
---

## Q177657: Explanation of NTBackup /Nopoll Parameter Is Incorrect

{% raw %}

	Article: Q177657
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The NTBackup Help file does not correctly explain the NTBackup /nopoll
	parameter.
	
	MORE INFORMATION
	================
	
	The /nopoll parameter disables the standard scan function for the DAT tape type
	when you start NTBackup.
	
	NOTE: Do not use the /nopoll parameter with any other parameters.
	
	The /nopoll parameter can not erase a tape.
	
	Note that moving tapes between different manufacturers of tape drives may cause
	problems if one manufacturer supports compression and the other manufacturer
	does not. Depending on the tape drive, you may receive one of the following
	error messages:
	
	   - Tape Drive Error Detected.
	
	- Tape Drive Not Responding.
	
	- Bad Tape.
	
	To erase a tape that is causing one of these issues, start NTBackup from the
	command prompt with the /nopoll parameter, erase the tape, and then quit
	NTBackup.
	
	NOTE: Do not use the /nopoll parameter for any operation other than erase.
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
