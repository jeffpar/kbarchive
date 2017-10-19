---
layout: page
title: "Q141113: How to Synchronize Netware Passwords with FPNW"
permalink: /kb/141/Q141113/
---

## Q141113: How to Synchronize Netware Passwords with FPNW

	Article: Q141113
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	You can synch the password on the Netware server with the password on the
	FPNW server by making sure that the password on the Netware server is the
	same as the password on the FPNW before you run Setpass.exe or Chgpass.exe
	from \Sysvol\Public on the FPNW server. If the passwords are not identical,
	the FPNW will not ask you to synch the password on the Netware server and
	as a result, the password on the Netware server is still the same.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
