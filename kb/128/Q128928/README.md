---
layout: page
title: "Q128928: Unable to Browse PDC with 3COM 3C770 FDDI NIC Using TCP/IP"
permalink: /kb/128/Q128928/
---

## Q128928: Unable to Browse PDC with 3COM 3C770 FDDI NIC Using TCP/IP

	Article: Q128928
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you browse for a Windows NT primary domain controller (PDC) on a FDDI wide
	area network (WAN) with a 3COM 3C770 network interface card (NIC) from a Windows
	NT client computer using TCP/IP, the PDC does not appear in the browse list.
	
	CAUSE
	=====
	
	The master browser (usually the PDC) does not include its computer name when the
	browse list is passed to the backup browsers.
	
	
	RESOLUTION
	==========
	
	To correct this problem, upgrade to Windows NT version 3.51 and install the 3Com
	3C770 network adapter driver (version 2.05e) located in the following directory
	of the Windows NT compact disc:
	
	  \DRVLIB\NETCARD\X86\3C770
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in Windows NT version 3.51.
	
	Additional query words: prodnt flnk nbt 3c77x
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
