---
layout: page
title: "Q175980: BUG: Error Msg Applying Service Pack 3 in Unattended Mode"
permalink: /kb/175/Q175980/
---

## Q175980: BUG: Error Msg Applying Service Pack 3 in Unattended Mode

	Article: Q175980
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup kbOPK kbSBK
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are doing an unattended installation of Windows NT Service Pack 3 (SP3)
	by issuing a update -u command, the user may get a pop-up message that states
	the file being copied is older than the one currently on the hard drive. The
	error message is as follows:
	
	  Source D:\i386\filename.exe Target C:\winnt\system32\filename.exe
	
	  The target file exists and is newer than the source.
	
	  Overwrite the newer file?
	
	  No No to All Yes
	
	CAUSE
	=====
	
	This can occur when a .DLL file has been updated from an application such as
	Internet Explorer or possibly an updated network card driver from the hardware
	manufacturer. The latest driver is already on the system and SP3 is trying to
	prompt to overwrite the file.
	
	RESOLUTION
	==========
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	MORE INFORMATION
	================
	
	For additional information on Windows NT 4.0 deployment/unattended installation
	download the Windows NT 4.0 Deployment Guide from
	
	  http://www.microsoft.com/ntworkstation.
	
	NOTE: The deployment guide is valid for both Windows NT Workstation and Windows
	NT Server.
	
	Also, please refer to the following Microsoft Knowledge Base article for
	additional ways to install a service pack:
	
	Q168814 Installing WinNT 4.0 Service Packs During Unattended Install
	
	Additional query words: answerfile unattended ie40 Install
	
	======================================================================
	Keywords          : kbsetup kbOPK kbSBK 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
