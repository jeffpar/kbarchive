---
layout: page
title: "Q86865: Print Manager DOS Timeout: System Call Level Incorrect"
permalink: kb/086/Q86865/
---

## Q86865: Print Manager DOS Timeout: System Call Level Incorrect

	Article: Q86865
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2002
	
	SYMPTOMS
	========
	
	  The following information applies to Microsoft LAN Manager running under OS/2
	  version 1.30.1.
	
	  When choosing DOS Timeout from the Print Manager's Setup menu, the error
	  message "The system call level is not correct" may appear.
	
	CAUSE
	=====
	
	  If you are using Hewlett-Packard's (HP) OS/2 Network Printer Interface
	  software in conjunction with Microsoft OS/2 for LAN Manager (shipped with
	  Microsoft LAN Manager version 2.1), this error message is the result of a DLL
	  (dynamic-link library) conflict.
	
	RESOLUTION
	==========
	
	  Assuming a default installation of HP's software, the reference to the
	  PMSPL.DLL and SPL1B.DLL files must be removed. This can be accomplished in
	  one of the following two ways:
	
	- Change the location of any DLL necessary for the HP software to function, and
	  remove any reference to the PMSPL.DLL and SPL1B.DLL files, which come with
	  the HP product.
	
	  a. Remove the C:\HPNETPRN reference in LIBPATH.
	
	  b. Copy the language-specific DLL (HPNPENG.DLL for English) to a directory
	     that is in the LIBPATH (for example, C:\OS2\DLL).
	
	  c. Reboot the server.
	
	  -or-
	
	- Remove or rename the PMSPL.DLL and SPL1B.DLL files that exist in the
	  C:\HPNETPRN directory. Because these files are in use by Print Manager, it
	  will be necessary to boot from a floppy disk:
	
	  a. Boot the server from HPFS Recover Disk 1 (or Disk 2).
	
	  b. Rename or remove the PMSPL.DLL and SPL1B.DLL files that appear in the
	     C:\HPNETPRN directory.
	
	  c. Reboot the server.
	
	Additional query words: OS2NPI Network Printer Interface DOS Timeout DLL PMSPL SPL1B
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
