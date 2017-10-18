---
layout: page
title: "Q155035: STOP 0x00000036 On Shutdown Running RAS Server with a Digiboard"
permalink: kb/155/Q155035/
---

## Q155035: STOP 0x00000036 On Shutdown Running RAS Server with a Digiboard

	Article: Q155035
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run the Remote Access Services (RAS) Server service on a computer with
	a Digiboard installed, Windows NT Server stops responding during shutdown. A
	blue screen appears and the following stop error message appears:
	
	  STOP 0x00000036 (0xfcc89940, 0x00000000, 0x00000000, 0x00000000)
	  DEVICE_REFERENCE_COUNT_NOT_ZERO.
	
	NOTE: The first parameter will fall within the address range of the Digifep5.sys
	driver.
	
	CAUSE
	=====
	
	The device driver has attempted to delete one of its device objects from the
	system, but the reference count for that object was non-zero, meaning that there
	are still outstanding references to the device. This indicates that there is a
	problem in the calling driver, in this case Digifep5.sys.
	
	RESOLUTION
	==========
	
	Disable the RAS Server or install one of the latest Digiboard drivers from the
	Digiboard FTP site (Digiboard released new drivers on July 31, 1996):
	
	  ftp://ftp.digibd.com/drivers/winnt/821m.exe.
	
	NOTE: This self-extracting executable file contains drivers for all platforms
	except MIPS; those files are stored in the Drivers/MIPS sub- directory.
	
	MORE INFORMATION
	================
	
	Digiboard is manufactured by Digi International, Inc., a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	Additional query words: prodnt 0x36
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : :3.51,4.0
	
	=============================================================================
	
