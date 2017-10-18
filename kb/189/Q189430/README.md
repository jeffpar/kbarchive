---
layout: page
title: "Q189430: Domain Name Shows up Twice in Browse List"
permalink: kb/189/Q189430/
---

## Q189430: Domain Name Shows up Twice in Browse List

	Article: Q189430
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use a one-letter domain name and if WINS is installed on the primary
	domain controller (PDC), the domain name shows up twice in the browse list. For
	example: F and F... (F with 3 dots).
	
	RESOLUTION
	==========
	
	Do not use one-letter domain names or install WINS on a computer other than the
	PDC.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
