---
layout: page
title: "Q259403: Vcredist Installs Latest Run-Time Components for Visual C++"
permalink: /kb/259/Q259403/
---

## Q259403: Vcredist Installs Latest Run-Time Components for Visual C++

{% raw %}

	Article: Q259403
	Product(s): Microsoft C Compiler
	Version(s): 4.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbVS600bug kbDSupport kbGrpDSMFCATL
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0, used with:
	   - the operating system: Microsoft Windows NT 4.0 
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0, used with:
	   - the operating system: Microsoft Windows NT 4.0 
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0, used with:
	   - the operating system: Microsoft Windows NT 4.0 
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Vcredist.exe is a self-extracting executable file that installs the latest
	version of the Microsoft Visual C++ run-time files and operating system
	components that are required by most projects created with Visual C++ 6.0. These
	files include fixes that are included with Visual Studio 6.0 Service Pack 4
	(SP4).
	
	Beginning with Visual Studio 6.0 Service Pack 5, Vcredist.exe is included with
	the service pack. The Vcredist.exe pointed to by this article will continue to
	be the Visual Studio 6.0 Service Pack 4 version. To obtain the latest version of
	Vcredist.exe, you will need to get a copy of the latest service pack. For
	details, see the following Microsoft Developer Network (MSDN) Web site:
	
	  http://msdn.microsoft.com/vstudio/sp (http://msdn.microsoft.com/vstudio/sp)
	
	MORE INFORMATION
	================
	
	To obtain the Vcredist.exe update, download and run the following application,
	which installs Vcredist.exe to the directory that you specify.
	
	The following file is available for download from the Microsoft Download Center:
	
	  VC6RedistSetup_enu.exe
	  (http://download.microsoft.com/download/vc60pro/Update/1/W9XNT4/EN-US/VC6RedistSetup_enu.exe)
	
	
	  VC6RedistSetup_deu.exe
	  (http://download.microsoft.com/download/vc60pro/Update/2/W9XNT4/EN-US/VC6RedistSetup_deu.exe)
	
	  VC6RedistSetup_jpn.exe
	  (http://download.microsoft.com/download/vc60pro/update/3/w9xnt4/en-us/VC6RedistSetup_jpn.exe)
	
	Release Date: November 16, 2000
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	For more information about how to download files from the Microsoft Download
	Center, please visit the Download Center at the following Web address:
	
	  http://www.microsoft.com/downloads/search.asp
	  (http://www.microsoft.com/downloads/search.asp)
	
	VC6RedistSetup.exe will present you with an End User License Agreement. When you
	accept the agreement, a single file, Vcredist.exe, is extracted.
	
	Vcredist.exe installs the following core files, which are included with Visual
	Studio 6.0 SP4. These files are base dependencies for most components and
	applications created with Visual C++ 6.0:
	
	+-----------------------------------------------------------------------------------+
	| File name                                | Version        | Size                  | 
	+-----------------------------------------------------------------------------------+
	| Asycfilt.dll                             | 2.40.4275.1    | 144KB (147,728 bytes) | 
	+-----------------------------------------------------------------------------------+
	| Atl.dll (Windows 95 and Windows 98)      | 3.0.8449.0     | 72KB (73,785 bytes)   | 
	+-----------------------------------------------------------------------------------+
	| Atl.dll (Windows NT)                     | 3.0.8449.0     | 57.5KB (58,938 bytes) | 
	+-----------------------------------------------------------------------------------+
	| Comcat.dll                               | 4.71.1460.1    | 21.7KB (22,288 bytes) | 
	+-----------------------------------------------------------------------------------+
	| Comctl32.dll (Windows 95 and Windows 98) | 5.80.2614.3600 | 564KB (577,808 bytes) | 
	+-----------------------------------------------------------------------------------+
	| Comctl32.dll (Windows NT)                | 5.80.2614.3600 | 544KB (557,328 bytes) | 
	+-----------------------------------------------------------------------------------+
	| Mfc42.dll                                | 6.0.8665.0     | 972KB (995,383 bytes) | 
	+-----------------------------------------------------------------------------------+
	| Mfc42u.dll (Windows NT only)             | 6.0.8665.0     | 972KB (995,384 bytes) | 
	+-----------------------------------------------------------------------------------+
	| Msvcirt.dll                              | 6.0.8168.0     | 76KB (77,878 bytes)   | 
	+-----------------------------------------------------------------------------------+
	| Msvcp60.dll                              | 6.0.8168.0     | 392KB (401,462 bytes) | 
	+-----------------------------------------------------------------------------------+
	| Msvcrt.dll                               | 6.0.8797.0     | 272KB (278,581 bytes) | 
	+-----------------------------------------------------------------------------------+
	| Oleaut32.dll                             | 2.40.4275.1    | 584KB (598,288 bytes) | 
	+-----------------------------------------------------------------------------------+
	| Olepro32.dll                             | 5.0.4275.1     | 160KB (164,112 bytes) | 
	+-----------------------------------------------------------------------------------+
	| Stdole2.tlb                              | 2.40.4275.1    | 17.5KB (17,920 bytes) | 
	+-----------------------------------------------------------------------------------+
	
	In addition, the following files are also installed by Vcredist.exe. These are
	supporting files for the Vcredist.exe Setup program:
	
	+----------------------------------------------------+
	| File name    | Version     | Size                  | 
	+----------------------------------------------------+
	| Advpack.dll  | 4.71.1015.0 | 73.2KB (74,960 bytes) | 
	+----------------------------------------------------+
	| W95inf16.dll | 4.71.704.0  | 2.21KB (2,272 bytes)  | 
	+----------------------------------------------------+
	| W95inf32.dll | 4.71.16.0   | 4.50KB (4,608 bytes)  | 
	+----------------------------------------------------+
	
	Vcredist.exe supports the following command-line switches:
	
	  no switches = non-quiet mode, displays progress bar and reboot prompt
	  /q = semi-quiet mode, displays reboot message, and no progress bar
	  /q /r:n = no reboot message or progress bar
	
	Vcredist.exe is not a full-featured installation package. As such, it is not a
	recommended redistribution method for the preceding files. This package does not
	communicate error messages back to the program or user that is starting
	Vcredist.exe. Therefore, Microsoft highly recommends that programs starting
	Vcredist.exe first check for available disk space (approximately 10 MB),
	read-only system files, administrator privileges, and a valid TEMP directory.
	The absence of any of these prerequisites can cause this package to incorrectly
	install some of the files onto the target system.
	
	This package makes use of the 50comupd.exe utility to install the Comctl32.dll
	file. For additional information, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q186176 INFO: Redistribution of Comctl32.dll
	
	Because of this, the Vcredist.exe package cannot always determine if it is
	necessary to restart your computer (reboot), and it defaults to prompt for a
	reboot. If you are spawning this package with the quiet-mode switches /q /r:n,
	it is necessary for your Setup program to subsequently prompt the user for a
	reboot to ensure that the files are properly installed.
	
	In addition, this package does not install any database components or localized
	satellite dynamic-link libraries (DLLs). For information about how to install
	database components such as ODBC, ADO, or DAO, please refer to the following
	Redistributing Microsoft Visual C++ 6.0 Applications article on the Microsoft
	Developer Network (MSDN) Web site:
	
	  http://www.msdn.microsoft.com/library/techart/redistribvc6.htm
	
	For additional information about installing localized resource DLL's for MFC,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q208983 HOWTO: Using MFC LOC DLLs
	
	NOTE: This package does not install these components on computers that are
	running Microsoft Windows 2000 or Microsoft Windows Millennium (Me) systems. On
	computers that are running Windows 2000 and Windows Millennium, these components
	can only be updated through operating system updates and service packs for these
	operating systems.
	
	Vcredist.exe can be freely redistributed with your application. You should also
	provide a copy of this Knowledge Base article.
	
	Additional query words: redistribution deployment installation mfc42 oleaut32 msvcrt spawning VC6RedistSetup_enu VC6RedistSetup_deu VC6RedistSetup_jpn Vcredist
	
	======================================================================
	Keywords          : kbfile kbVS600bug kbDSupport kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch
	Version           : :4.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
