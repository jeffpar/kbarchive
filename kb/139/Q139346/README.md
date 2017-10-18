---
layout: page
title: "Q139346: Country Codes Missing from HyperTerminal or Other Program"
permalink: kb/139/Q139346/
---

## Q139346: Country Codes Missing from HyperTerminal or Other Program

	Article: Q139346
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): dun win95 kbDialUp
	Last Modified: 14-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a new HyperTerminal or Dial-Up Networking connectoid, the
	Country Code list may be empty. This problem may also occur with third-party
	communications programs or with the list of country codes that appears when you
	click Dialing Properties in Modem properties, or when you click Settings in the
	sign-in screen for The Microsoft Network.
	
	CAUSE
	=====
	
	This problem can occur if one of the Windows 95 Telephony Application
	Programming Interface (TAPI) files, or one of the files for the program you are
	using, has been damaged.
	
	RESOLUTION
	==========
	
	To resolve this problem, follow these steps:
	
	1. Rename the following files in the Windows\System folder:
	
	   - Tapi.dll
	
	   - Tapi32.dll
	
	   - Tapiaddr.dll
	
	   - Tapiexe.exe
	
	2. Extract the Tapi.dll, Tapi32.dll, Tapiaddr.dll, and Tapiexe.exe files from
	  the Win95_11.cab cabinet file on the Windows 95 CD-ROM or on disk 11 to the
	  Windows\System folder.
	
	  For information about the Extract tool, type "extract" (without the quotation
	  marks) at a command prompt, or see the following article in the Microsoft
	  Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	3. Delete the Telephon.ini file in the Windows folder.
	
	4. Click the Start button, and then click Run.
	
	5. In the Open box, type "tapiini.exe" (without the quotation marks), and then
	  click OK.
	
	If the problem occurs in only one program, and the steps above do not solve the
	problem, you may need to reinstall the program in which the problem is
	occurring. If the problem occurs only in HyperTerminal, you may be able to
	resolve the problem by following these steps:
	
	1. Rename the Hypertrm.exe file in the Program Files\Accessories\ HyperTerminal
	  folder.
	
	2. Extract a new copy of the Hypertrm.exe file from your original Windows 95
	  disks or CD-ROM to the Program Files\Accessories\ HyperTerminal folder.
	
	======================================================================
	Keywords          : dun win95 kbDialUp 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
