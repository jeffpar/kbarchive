---
layout: page
title: "Q163211: XCLN: Setup: WNetEnumCachedPasswords Could Not Be Located"
permalink: /kb/163/Q163211/
---

## Q163211: XCLN: Setup: WNetEnumCachedPasswords Could Not Be Located

	Article: Q163211
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0; :8.0,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): kbsetup kbusage
	Last Modified: 21-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, version 4.0 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to install the Microsoft Exchange Client for Windows NT you may
	receive one of the following error messages:
	
	  Title: OleMainThreadWndName: acmsetup.EXE - Entry Point Not Found
	
	  The procedure entry point WnetEnumCachedPasswords could not be located
	  in the dynamic link library MPR.dll <OK>
	
	  -or-
	
	  The procedure entry point wNetCachePassword could not be located in
	  the dynamic link library MPR.DLL.
	
	NOTE: This occurs regardless of what parameters are used with Setup.exe (for
	example, SETUP /Y gives the same result).
	
	CAUSE
	=====
	
	Because the Windows 95 version of Mapi32.dll or Mapisp32.exe is in the
	Winnt\System32 folder, the error may occur if the Windows 95 client is installed
	under Windows NT.
	
	NOTE: To prevent this problem, the client Setup will generally send the warning,
	"This Setup program is not intended to be used with your version of Windows."
	
	
	RESOLUTION
	==========
	
	To resolve this problem, do one of the following:
	
	- Rename either Mapi32.dll or Mapisp32.exe in the Winnt\System32 directory and
	  run the Microsoft Exchange Client Setup program.
	
	
	  -or-
	
	- Upgrade to the Microsoft Exchange Service Pack 3 client. The Service Pack 3
	  upgrade will overwrite the Windows 95 Mapi32.dll and Mapisp32.exe files and
	  correct this problem.
	
	  -or-
	
	- Copy Mapi32.dll and Mapisp32.exe from a working Windows NT system to the
	  local Winnt\System32 directory.
	
	
	MORE INFORMATION
	================
	
	Another indication that the incorrect Mapi32.dll file is on the system is if
	after Microsoft Exchange Setup is run, the option to reinstall does not appear.
	The Microsoft Exchange Client Setup program reacts as if the Microsoft Exchange
	client was never installed.
	
	Shipping Versions of Mapi32.dll:
	
	Windows 95
	Mapi32.dll  709KB Dated 7/14/96  (from Exchange Service Pack 2)
	
	Windows NT
	Mapi32.dll  638KB Dated 3/11/96  (from Exchange RTM)
	Mapi32.dll  717KB Dated 10/27/96 (from Exchange Service Pack 2 or Service
	                                Pack 3)
	
	Additional query words: outlook cached passwords entry point
	
	======================================================================
	Keywords          : kbsetup kbusage 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3
	Version           : WINDOWS:4.0; :8.0,8.01,8.02,8.03
	Issue type        : kbprb
	
	=============================================================================
	
