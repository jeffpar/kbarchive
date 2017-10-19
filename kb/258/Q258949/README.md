---
layout: page
title: "Q258949: MMS Compass Compatibility with WinSock 2.0"
permalink: /kb/258/Q258949/
---

## Q258949: MMS Compass Compatibility with WinSock 2.0

	Article: Q258949
	Product(s): Microsoft Windows NT
	Version(s): 2.1,2.2
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 29-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services versions 2.1, 2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Zoomit Compass and Microsoft Metadirectory Services (MMS) Compass are not
	compatible with WinSock 2.0 on a Microsoft Windows 95 computer. Compass accepts
	the logon credentials and the server selection which makes it appear to function
	correctly. However, after an attempt to connect with the server, Compass closes
	without warning.
	
	CAUSE
	=====
	
	Compass is only compatible with Microsoft Windows 98 or later and Microsoft
	Windows NT 4.0 or later.
	
	RESOLUTION
	==========
	
	If you remove WinSock 2.0 and reinstall WinSock 1.1, Compass functions
	correctly.
	
	MORE INFORMATION
	================
	
	To Determine If WinSock 2.0 Is Installed
	----------------------------------------
	
	For additional information about how to determine if WinSock 2.0 is installed on
	your computer, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q177719 How to Identify WinSock 2.0 Run-Time Components for Windows 95
	
	To Reinstall WinSock 1.1
	------------------------
	
	When Ws2setup.exe runs the first time, it copies Ws2bakup.bat and the WinSock 1.1
	files to %windir%\ws2bakup. So, to return to your original WinSock 1.1
	configuration, open and run the Ws2bakup.bat file, which is located in the
	following location:
	
	  C:\\WS2BAKUP\ws2bakup.bat
	
	Caution: When you run Ws2bakup.bat on Windows 95, sharing violations can occur
	because some system files cannot be restored while a newer version is running.
	If sharing violations do occur, you need to run Ws2bakup.bat again, this time in
	MS-DOS mode.
	
	To Run Ws2bakup.bat in MS-DOS Mode
	----------------------------------
	
	1. Click Start, and then click Shut Down.
	
	2. Click "Restart the computer in MS-DOS mode", and then click OK.
	
	3. After the restart, type "C:\\WS2BAKUP\WS2BAKUP" (without the quotation marks)
	  at the command prompt, and then press ENTER.
	
	  Errors messages appear for the programs that cannot run outside of Windows,
	  but you should not be concerned because these programs already executed
	  properly if you first ran Ws2bakup.bat from inside Windows 95.
	
	4. When this process is finished, restart the computer, and WinSock 1.1 will be
	  installed.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbMMSSearch kbMMS210 kbMMS220
	Version           : :2.1,2.2
	Issue type        : kbprb
	
	=============================================================================
	
