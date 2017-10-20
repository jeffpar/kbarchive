---
layout: page
title: "Q165680: INFO: Visual C++ 5.0 Readme, Setup Issues"
permalink: /kb/165/Q165680/
---

## Q165680: INFO: Visual C++ 5.0 Readme, Setup Issues

{% raw %}

	Article: Q165680
	Product(s): Microsoft C Compiler
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 23-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Setup Issues
	------------
	
	- Do Not Install Visual C++ 5.0 Over an Installation of Visual C++ 4.x
	
	- Protected-Mode CD-ROM Driver Required Under Windows 95 for Visual C++
	  Installation
	
	- Use Knowledge Base Articles to Solve Setup and Operating Problems
	
	- Applications Built with OLEAUT32.LIB Require AXDIST.EXE and/or NT SP5
	
	- DAO Setup Requires OLEAUT32.dll 2.20.4054 or Later
	
	- Viewing "ANSI Character Code Chart" in InfoView Requires an English System
	
	- Accessing Online Help Brings Up MSN Dialog Box
	
	- Special Instructions for Installing Visual C++ 5.0 on Far East Operating
	  Systems
	
	- ODBC Setup.exe is Not in REDIST Directory
	
	MORE INFORMATION
	================
	
	Do Not Install Visual C++ 5.0 Over an Installation of Visual C++ 4.x
	--------------------------------------------------------------------
	
	Installing Visual C++ 5.0 on top of Visual C++ 4.x will render the 4.x tools
	unusable. Install Visual C++ 5.0 into a directory separate from your Visual C++
	4.x installation. Visual C++ 5.0 can co-exist with a 4.x installation, as long
	as both versions reside in different directories.
	
	Protected-Mode CD-ROM Driver Required Under Windows 95 for Visual C++
	
	Installation
	------------
	
	To install Visual C++ 5.0 under Windows 95, you must be running a protected- mode
	CD-ROM driver. You can verify this by checking the Device Manager. If you are
	currently using a real-mode CD-ROM driver, contact your CD-ROM drive
	manufacturer for an updated driver for Windows 95 before installing Visual C++
	5.0.
	
	Use Knowledge Base Articles to Solve Setup and Operating Problems
	-----------------------------------------------------------------
	
	You can use the Knowledge Base articles in the MSDN documentation to resolve
	known installation and operating problems. Select the Search command from the
	Help menu and search for error message or related keywords to find a problem
	description and resolution.
	
	Knowledge Base articles, which are written by Microsoft Technical Support
	Professionals, are available by connecting to:
	
	  http://msdn.microsoft.com/support/
	
	Applications Built with OLEAUT32.LIB Require AXDIST.EXE and/or NT SP5
	---------------------------------------------------------------------
	
	Visual C++ 5.0 ships with the latest OLEAUT32.LIB from the ActiveX SDK which
	exposes entry points into the OLEAUT32.DLL which are not present in the
	OLEAUT32.DLL that ships with the original NT and Windows 95 operating systems.
	If you build an OLE-enabled application or component with Visual C++ 5.0, and
	link with OLEAUT32.DLL, you will need to install the newer OLEAUT32.DLL via the
	AXDist.exe applet located in the DevStudio\VC\Redist\AXRedist directory on the
	Visual C++ 5.0 CD-Rom.
	
	If you are targeting Windows NT 3.51, you will need to ensure that NT Service
	Pack 5 is installed on the target machine.
	
	NOTE: The Vcread.htm file incorrectly refers to SP5a for Windows NT 3.51. It
	should state SP5 as the preceding topic does. SP5 for Windows NT 3.51 is located
	on CD two of the Microsoft Visual C++ Enterprise CD set, or in the
	\Winnt351.qfe\SP5a directory on CD four of the Microsoft Visual Studio 97
	Enterprise CD set.
	
	DAO Setup Requires OLEAUT32.dll 2.20.4054 or Later
	--------------------------------------------------
	
	The redistributable DAO Setup program that ships with Visual C++ will not run
	successfully unless OLEAUT32.dll build 2.20.4045 or later is installed and
	registered on the target computer. The newer version of OLEAUT32.dll must be
	copied to the target machine's SYSTEM directory, and registered with
	REGSVR32.exe. An up-to-date version of OLEAUT32.dll can be found on the first
	disc of Visual C++, in the DevStudioVC\Redist directory.
	
	Viewing "ANSI Character Code Chart" in InfoView Requires an English System
	--------------------------------------------------------------------------
	
	The character codes displayed in the "ANSI Character Code Chart" topic will only
	display correctly if viewed on English systems using an "ANSI- compatible"
	codepage.
	
	Accessing Online Help Brings Up MSN Dialog Box
	----------------------------------------------
	
	When accessing online help you may get a dialog box asking about your dial- up
	connection for your online service provider. This occurs because Internet
	Explorer, which has an option to automatically connect to the online service, is
	used to display the online documentation. The best way around this is to choose
	Cancel when asked to connect. You can disable automatic dialup. To turn off the
	automatic dialup:
	
	1. Right-click Internet Explorer to get the Context menu. Click Properties.
	
	2. In the Properties dialog box, click the Connection tab.
	
	3. In the Dialing group, uncheck the "Connect to the Internet as needed". This
	  will turn off the Auto dialup.
	
	4. Click Apply and OK to close the dialog box.
	
	Special Instructions for Installing Visual C++ 5.0 on Far East
	
	Operating Systems
	-----------------
	
	The Visual C++ installation does not copy over the localized versions of
	RICHED32.DLL, GAPI32.DLL, and HLP95EN.DLL on machines running a DBCS enabled
	Operating System. These 3 files are required by some of the ActiveX Controls
	installed by Visual C++.
	
	If you install this version of Visual C++ on a Far East Operating System, be sure
	to copy these 3 files from the directory on the Visual C++ CD indicated below
	into your System directory:
	
	  Chinese (PRC)     DevStudio\VC\Redist\Ocx\chs
	
	  Chinese (Taiwan)  DevStudio\VC\Redist\Ocx\cht
	
	  Japanese          DevStudio\VC\Redist\Ocx\jpn
	
	  Korean            DevStudio\VC\Redist\Ocx\kor
	
	ODBC Setup.exe is Not in REDIST Directory
	-----------------------------------------
	
	In ODBC 3.0 several of the ODBC Installer functions have been removed, and others
	have been redesigned. Therefore this Setup program would not work with ODBC
	3.0.
	
	The Installer API has been changed to make it more platform independent. For
	example, functions in the Installer API (such as SQLInstallODBC) that duplicated
	the work of the Windows SDK Setup program have been removed. In general, it is
	now the responsibility of the Setup program to copy files during installation.
	
	For more information about creating setup programs that install ODBC 3.0
	components and drivers, please refer to Part 3 in the ODBC 3.0 Programmers
	Reference. To access the ODBC 3.0 Programmers' Reference, open ODBC.hlp which
	can be found in DevStudio\SharedIDE\Help.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : :5.0
	
	=============================================================================
	

{% endraw %}
