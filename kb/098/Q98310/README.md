---
layout: page
title: "Q98310: How to Use Intel 16/s Card with Windows for Workgroups"
permalink: kb/098/Q98310/
---

## Q98310: How to Use Intel 16/s Card with Windows for Workgroups

	Article: Q98310
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	The Intel TokenExpress ISA16/s card as a replacement for the Intel TokenExpress
	16/4 card. The card is software configurable; Intel provides a new NDIS driver
	for it.
	
	The ISA16/s is not available as an option with Windows for Workgroups 3.1, except
	through the workaround described below.
	
	MORE INFORMATION
	================
	
	1. In Windows for Workgroups, select the Olicom 16/4 Token_Ring Adapter.
	
	  Note: For a fresh installation of Windows for Workgroups, this card comes up
	  as a default.
	
	2. Copy the OLITOK.DOS driver file from the MSLANMAN.DOS\DRIVERS\OLITOK
	  directory on diskette #2 of the TokenExpress LAN Adapter to the Windows for
	  Workgroups default subdirectory.
	
	3. Remark out the parameters under MS$OLI164 section in the Windows for
	  Workgroups PROTOCOL.INI file.
	
	4. Copy the PROTOCOL.INI entries from the MSLANMAN.DOS\DRIVERS\OLITOK directory
	  on TokenExpress diskette #2 into the Windows for Workgroups PROTOCOL.INI
	  MS$OLI164 section.
	
	  The following is a modified MS$OLI164 section:
	
	  [MS$OLI164]
	drivername = OLITOK$
	maxtransmits = 4
	maxrequests = 1
	recbufsize = 2540
	recbufcount = 4
	adapter = 1
	
	5. Save the file and reboot.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
