---
layout: page
title: "Q184976: PRB: Windows 95 OSR 2.5 Starts IE 4.x During Installation"
permalink: /kb/184/Q184976/
---

## Q184976: PRB: Windows 95 OSR 2.5 Starts IE 4.x During Installation

	Article: Q184976
	Product(s): Miscellaneous Software Development Kits
	Version(s): 4.0a,4.0b
	Operating System(s): 
	Keyword(s): kbOPK kbSBK
	Last Modified: 25-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Windows 95 OEM Preinstall Kit (OPK), versions 4.0a, 4.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Delivery Service Partner (DSP) versions of Windows 95 OSR 2.5 starts the
	Internet Explorer 4.01 setup at the end of the end-user setup. When the computer
	starts for the first time in end-user mode, the Windows 95 Setup screen appears
	with the following message:
	
	  Windows 95 setup needs more information to finish customizing your computer.
	  To continue click next.
	
	The Cancel button is unavailable. When you click Next, the Internet Explorer 4.0
	Active Setup screen appears and then the Internet Explorer 4.x Setup Wizard
	starts.
	
	RESOLUTION
	==========
	
	This workaround prevents Internet Explorer 4.x from installing during the
	end-user mode from Windows 95 OSR 2.5. This works only during non- restorative
	audit mode of the pre-installation process.
	
	1. Start Notepad, and type the following:
	
	        REM renaming file welcome.exe************************
	        ren c:\windows\welcome.exe welcome.old
	        ren c:\windows\options\cabs\welcome.exe welcome.old
	        REM extract a new copy of welcome.exe****************
	        extract /y c:\windows\options\cabs\Win95_03.Cab /a welcome.exe
	        REM delete OLD files*********************************
	        del c:\windows\welcome.old
	        del c:\windows\options\cabs\welcome.old
	
	2. Save this as "C:\Windows\Remove.bat".
	
	3. Execute Remove.bat during non-restorative audit mode.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	This process does not require the OSR 2.5 CD to work. You re-extract the
	Welcome.exe file from the Windows 95 files on the Hard Drive. This does not
	remove Internet Explorer 3.x. Instead, it prevents Internet Explorer 4.x from
	installing at the End-User site. To remove Internet Explorer 3.x, you must
	delete the Internet Explorer 3.x icon from the Desktop during non- restorative
	audit mode. You can find more information on removing Internet Explorer 3.x from
	Windows 95 OSR 2.x on the Microsoft OEM System Builder Web site at:
	
	  http://www.microsoft.com/oem
	
	Additional query words: Win95 OSR2.5 IE4.0 SBK Preinstall OPK
	
	======================================================================
	Keywords          : kbOPK kbSBK 
	Technology        : kbAudDeveloper kbWin95search kbOPKSearch kbWin95OPK400
	Version           : :4.0a,4.0b
	Issue type        : kbprb
	
	=============================================================================
	
