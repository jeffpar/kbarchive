---
layout: page
title: "Q122647: Stop 0xA When Upgrading to Windows NT 3.5 with HP 2724xx NICs"
permalink: /kb/122/Q122647/
---

## Q122647: Stop 0xA When Upgrading to Windows NT 3.5 with HP 2724xx NICs

	Article: Q122647
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kb3rdparty
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade a from Windows NT Advanced Server 3.1 to Windows NT Server
	3.5, the following STOP message may appear after you enter the logon password:
	
	  STOP 0x0000000A
	
	This problem occurs when the computer you are upgrading is using a Hewlett-
	Packard (HP) 27246A MC LAN Adapter/16 TP or an HP 27247B PC LAN Adapter/16 TP.
	
	
	CAUSE
	=====
	
	This problem is caused by an older HP adapter driver that is not compatible with
	Windows NT version 3.5. The driver is not upgraded by default.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	1. Turn off the computer and remove the HP 27246A or HP 27247B network adapter
	  card.
	
	2. Start Windows NT version 3.5 and log on as Administrator.
	
	3. Run Control Panel and choose Network.
	
	4. Remove the currently installed HP network adapter driver.
	
	5. Choose the Add Adapter button and select the HP 27246A MC LAN Adapter/16 TP
	  for MCA-bus computers or HP27247B PC LAN Adapter/16 TP for ISA-bus computers.
	
	6. Choose the Continue button.
	
	7. When you are prompted for the path, specify the following directory on the
	  Windows NT Server or Workstation version 3.5 CD:
	
	  \DRVLIB\NETCARD\X86\HPMCA (for Intel-based systems and HP 27246A MC LAN
	  Adapter/16 TP)
	
	  -or-
	
	  \DRVLIB\NETCARD\X86\HPISA (for Intel-based systems and HP 27247B PC LAN
	  Adapter/16 TP)
	
	8. Shut down your computer, and then restart it.
	
	The HP 27246A and 27247B network adapters are manufactured by Hewlett- Packard, a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding this product's performance or reliability.
	
	Additional query words: prodnt trap 0x0A
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
