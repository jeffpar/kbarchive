---
layout: page
title: "Q135818: How to List Available Drives from Visual FoxPro"
permalink: /kb/135/Q135818/
---

## Q135818: How to List Available Drives from Visual FoxPro

	Article: Q135818
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows by example how to determine which drive letters and types are
	available on your computer. The sample code in this article can be used to list
	the available drives and their types.
	
	MORE INFORMATION
	================
	
	The sample code in this article uses two API functions; DRIVETYPE() and
	WNetGetConnection():
	
	- DRIVETYPE(): The syntax for DRIVETYPE is:
	
	  x = DRIVETYPE(<expC>)
	
	  Here <expC> is the drive letter for which you want to know the drive
	  type. DRIVETYPE() returns a numeric value representing the drive type of the
	  drive . Possible return values are:
	
	  0 - Drive does not exist
	  1 - Drive has no root directory
	  2 - Floppy Disk
	  3 - Hard Disk
	  4 - Removable or Network drive
	  5 - CD-ROM
	  6 - RAM Disk
	
	  The DRIVETYPE function is included in FOXTOOLS.FLL. For more information on
	  this function, please see FOXTOOLS.HLP in the VFP directory.
	
	- WNetGetConnection(): When passed a valid network drive letter, the
	  WNetGetConnection() function returns the name of the network resource. The
	  syntax for WNetGetConnection() is:
	
	  x = WNetGetConnection(lpszLocalName, lpszRemoteName, lpcchBuffer)
	
	  Here lpszLocalName points to a buffer containing the local drive letter,
	  lpszRemoteName points to a buffer that will receive the network resource name
	  and lpcchBuffer points to a variable that contains the size, in characters,
	  of the buffer pointed to by lpszRemoteName. WNetGetConnection is NOT part of
	  FOXTOOLS.FLL, consequently before using this function you must declare it.
	  For more information on this function see WIN32API.HLP.
	
	Code Sample
	-----------
	
	The following code sample echos to the desktop drive letters A through Z, and
	displays the drive type of each. To run this example, open a new program (.prg)
	file, enter the following code, and run it:
	
	  ** BEGIN CODE SAMPLE
	  SET LIBRARY TO \VFP\FOXTOOLS.FLL & Register the FOXTOOLS Library
	  DECLARE INTEGER WNetGetConnection IN win32api ;
	       STRING lpszLocalName,;
	       STRING lpszRemoteName,;
	       INTEGER @ lpchBuffer && Declare the external WNetGetConnection ;
	       API function
	  slpRemoteName = SPACE(254) && Initialize variables
	  slen = LEN(slpRemoteName) && Initialize variables
	  FOR I = 1 to 26 && Loop through drive letters A thru Z
	       DRIVE = CHR(I + 64)
	       DTYPE = DRIVETYPE(drive) && Determine drive type
	       DO CASE
	            CASE DTYPE = 0 && Non existent drives
	                ? "Drive " + DRIVE + ": does not exist"
	            CASE DTYPE = 1 && No root directory
	                ? "Drive " + DRIVE + ": has no root directory"
	            CASE DTYPE = 2 && Floppy drives
	                 ? "Drive " + DRIVE + ": is a floppy drive"
	            CASE DTYPE = 3 && Hard drives
	                 ? "Drive " + DRIVE + ": is a local hard drive"
	            CASE dtype = 4 && Removable or network drives
	                 iSuccess = WNetGetConnection(drive + ;
	                 ":",@slpRemoteName,@slen)
	                 IF iSuccess = 0
	                      ? "Drive " + Drive + ": is a network" + ;
	                      " drive connected to " + LEFT(slpRemoteName,;
	                      ATC(chr(0),slpRemoteName) - 1)
	                 ENDIF
	            CASE DTYPE = 5 && CD-ROM drives
	                 ? "Drive " + DRIVE + ": is a CD ROM drive"
	            CASE DTYPE = 6 && RAM drives
	                 ? "Drive " + DRIVE + ": is a RAM drive"
	       ENDCASE
	  ENDFOR
	  ** END CODE SAMPLE
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	
	=============================================================================
	
