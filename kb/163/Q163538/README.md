---
layout: page
title: "Q163538: NTBackup Does Not Properly Eject Tapes on DLT Tape Devices"
permalink: kb/163/Q163538/
---

## Q163538: NTBackup Does Not Properly Eject Tapes on DLT Tape Devices

	Article: Q163538
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under Windows NT 4.0, from GUI or command-line mode of Ntbackup.exe, the eject
	command does not unload the tape on DLT style tape drives. The tape will rewind
	but doesn't unload. The unload process can be completed by pressing the Unload
	button on the DLT tape device.
	
	Under Windows NT 3.51 (GUI only), the tape rewinds and then you hear a click,
	which means the tape is unloaded, and then the handle can be lifted to remove
	the tape.
	
	RESOLUTION
	==========
	
	Use the Unload button to complete the operation preparing the tape for removal
	from the device. Also, Adaptec EZ-SCSI 4.0 supports the proper unloading of the
	tape.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0. This problem was
	corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack. For
	information on obtaining the service pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbbug
	
	=============================================================================
	
