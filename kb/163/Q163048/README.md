---
layout: page
title: "Q163048: Doc Err: Readme.txt on WinNT 4.0 CD Points to Invalid Entries"
permalink: /kb/163/Q163048/
---

## Q163048: Doc Err: Readme.txt on WinNT 4.0 CD Points to Invalid Entries

	Article: Q163048
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Network Client for MS-DOS version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows NT Server 4.0 compact disc Readme.txt file points to directories
	that do not exist on the CD.
	
	MORE INFORMATION
	================
	
	The following is an excerpt from the Clients\Msclient\Netsetup\Readme.txt file
	on the Windows NT 4.0 compact disc:
	
	  27. These drivers are located in update directory.. (under wdl)
	  ------------------------------------------------------------------
	
	  PCNet Ethernet Adapter v 1.1       \clients\wdl\update\pcnet
	  Proteon 1346/47 v 1.0              \clients\wdl\update\protat
	  Intel EtherExpress Pro             \clients\wdl\update\EPRO
	  Novell/National/Eagle NE2000 plus  \clients\wdl\update\NE2000p
	  SMC Ethercard 8216 series          \clients\wdl\update\smc8000
	  Dec Etherworks 3                   \clients\wdl\update\ewrk3
	  3COM Token Link III                \clients\wdl\update\tlnk3
	  SMC Toekncard Plus (SMC8115T)      \clients\wdl\update\smc8100
	  Racore 16/4,                       \clients\wdl\update\racore
	  IBM Token Ring II                  \clients\wdl\update\ibmtok
	  Madge 16/4 Smard Ringnode          \clients\wdl\update\madge
	
	However, there is no Clients\Wdl directory on the Windows NT Server 4.0 compact
	disc.
	
	Additional query words: prodnt CD-ROM
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbZNotKeyword kbNetworkClientSearch kbNetworkClient300DOS
	Version           : WINNT:4.0
	
	=============================================================================
	
