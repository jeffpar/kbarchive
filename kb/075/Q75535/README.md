---
layout: page
title: "Q75535: PRB: Network Drive Type Reported Incorrectly"
permalink: /kb/075/Q75535/
---

## Q75535: PRB: Network Drive Type Reported Incorrectly

{% raw %}

	Article: Q75535
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In versions 3.0 and 3.1 of the Microsoft Windows graphical environment, the
	Windows File Manager and the GetDriveType() API reports that some network drives
	are local fixed drives.
	
	CAUSE
	=====
	
	In some releases of PC-DOS version 4.00 and MS-DOS version 4.01, Interrupt 21h
	Function 4409h does not reliably return drive type information.
	
	RESOLUTION
	==========
	
	The redirection entry list must store the local drive name in uppercase letters.
	
	MORE INFORMATION
	================
	
	To work around the Interrupt 21h Function 4409h problem, Windows 3.0 or 3.1
	recognizes that it is running on PC-DOS 4.00 or MS-DOS 4.01 and uses Interrupt
	21h Function 5F02h (Get Redir List Entry) to determine if a drive is remote or
	local. Windows compares the drive index (A = 0, B = 1, ..., Z = 25) to the drive
	index returned by the function. Windows also assumes that the drive letter is
	uppercase.
	
	If lpszLocal points to the "local" name returned by Get Redir List Entry, Windows
	uses the following algorithm:
	
	       if ((lpszLocal[0] - 0x41) == wListIndex)
	      {
	          /** drive is remote **/ 
	      }
	
	      else
	      {
	          /** drive is fixed **/ 
	      }
	
	Therefore, if the redirection entry list does not store the local name in
	uppercase letters, and Windows 3.0 or 3.1 is running under PC-DOS 4.00 or MS-DOS
	4.01, then the network drive will be reported as being "FIXED."
	
	Additional query words: 3.00 3.10 VXDTSR
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK300 kbWinDDK310
	Version           : :3.0,3.1
	
	=============================================================================
	

{% endraw %}
