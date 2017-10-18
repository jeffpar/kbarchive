---
layout: page
title: "Q242940: SAMPLE: MDLLWiz.exe: A Migration DLL AppWizard for Visual C++"
permalink: kb/242/Q242940/
---

## Q242940: SAMPLE: MDLLWiz.exe: A Migration DLL AppWizard for Visual C++

	Article: Q242940
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:; winnt:5.0,6.0
	Operating System(s): 
	Keyword(s): kbsample kbsetup kbmigrate kbOSWin2000 kbSDKPlatform kbMigWin9xtoWin2k kbFAQ kbDSupport
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MDLLWiz.exe is an archive that contains a Visual C++ 5.0/6.0 AppWizard, which
	can be used to quickly create a sample framework of a Windows 2000 Migration
	DLL.
	
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  DownloadDownload MDLLWiz.exe now
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	+----------------------------------+
	| FileName          | Size         | 
	+----------------------------------+
	| Migration DLL.awx | 79,360 bytes | 
	+----------------------------------+
	| Migration DLL.hlp | 6,769 bytes  | 
	+----------------------------------+
	
	Use the following steps to install the Migration DLL AppWizard:
	
	1. For Visual C++ 6.0, place the .awx and the .hlp file in the following folder
	  on your computer:
	
	  C:\Program Files\Microsoft Visual Studio\Common\MSDev98\Template
	
	2. For Visual C++ 5.0, place the .awx and the .hlp file in the following folder
	  on your computer:
	
	  C:\Program Files\DevStudio\SharedIDE\Template
	
	3. Open Visual C++ and create a new project. Migration DLL AppWizard should now
	  be listed as a project type.
	
	Note that the Migration DLL project that this wizard creates cannot be built
	without the latest Windows 2000 header and library files. Install the latest
	Platform SDK and its build environment to obtain these files. When prompted,
	agree to integrate the Platform SDK with Visual C++. The Platform SDK can be
	downloaded from the following Web site:
	
	  http://msdn.microsoft.com/developer/sdk/platform.asp
	
	REFERENCES
	==========
	
	For more information on Migration DLLs, see following in the MSDN Library
	(http://msdn.microsoft.com/library/):
	
	  Platform SDK; Management Services; Setup; Migration-Extension Interface
	
	Additional query words: MDLLWiz
	
	======================================================================
	Keywords          : kbsample kbsetup kbmigrate kbOSWin2000 kbSDKPlatform kbMigWin9xtoWin2k kbFAQ kbDSupport kbGrpDSTools kbMigrationDLLFAQ 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : WINDOWS:; winnt:5.0,6.0
	
	=============================================================================
	
