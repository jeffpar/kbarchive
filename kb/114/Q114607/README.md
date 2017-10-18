---
layout: page
title: "Q114607: Using the Setup Toolkit's GetLocalHardDrivesList Function"
permalink: kb/114/Q114607/
---

## Q114607: Using the Setup Toolkit's GetLocalHardDrivesList Function

	Article: Q114607
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The subroutine GetLocalHardDrivesList() takes one parameter, szSymbol$. This
	parameter is used to specify a symbol name that will receive the hard drive
	list. The parameter is not a destination string for the return value. The
	correct way to use the function is to specify a symbol name, such as "drives",
	and then use GetSymbolValue() or GetListItem() with GetListLength() to obtain
	the local drive letters.
	
	MORE INFORMATION
	================
	
	The following is a .MST script that demonstrates how to use this function:
	
	  '$include 'setupapi.inc'
	  '$include 'msdetect.inc'
	
	INIT:
	
	   GetLocalHardDrivesList "drives"
	
	      '' Obtain and display list of local hard drives.
	      Drives$=GetSymbolValue ("drives")
	      pause Drives$
	
	      '' Cycle through list and display them one at a time.
	      for i%=1 to GetListLength ("drives")
	          pause GetListItem ("drives", i)
	      next
	
	QUIT:
	
	      end
	
	Additional query words: 3.10 no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
