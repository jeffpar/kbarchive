---
layout: page
title: "Q238947: FILE: Msadoce2.exe Installs ADO for Windows CE SDK"
permalink: kb/238/Q238947/
---

## Q238947: FILE: Msadoce2.exe Installs ADO for Windows CE SDK

	Article: Q238947
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbfile kbATM kbToolkit kbVBp500 kbVBp600 kbOSWinCEsearch kbGrpDSVB
	Last Modified: 16-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Msadoce2.exe is a stand alone executable that contains a software development
	kit (SDK), which allows programmers using the Windows CE Toolkit for Visual
	Basic to programmatically manipulate databases existing on Windows CE devices.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Msadoce2.exe
	  (http://download.microsoft.com/download/Wincetoolkitvc60/adoce/2/Win98me/En-us/Msadoce2.exe)
	
	Release Date: September 22, 2000
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	ADOCE runs on Microsoft Windows CE version 2.0 and provides a complete
	implementation of the Recordset and Field objects. (See ActiveX Data Objects
	[ADO] Help on the menu under the Start -> Program Files -> Microsoft ADOCE
	2.0 SDK for the ADO and SQL documentation.)
	
	You can write applications using the Windows CE Toolkit for Visual Basic 6.0. See
	the examples (also on the preceding menu) for more information.
	
	The SDK provides the following features:
	
	- ADOCE - a COM Microsoft ActiveX control) control that provides advanced
	  database programmability for programmers developing for Windows CE-based
	  devices using Visual Basic.
	
	- ADOCE and SQL documentation and sample code for Visual Basic.
	
	- A desktop menu group "Microsoft ADOCE".
	
	Setup Notes
	
	Before running the setup program, re-create your partnership (allowing ActiveSync
	to install the MDB filter tools). To do this, delete your H/PC device icon from
	within the H/PC explorer window. When your H/PC reconnects to the host PC, you
	are prompted if you want to re-create the partnership. If you do not do this,
	you get the following error message:
	
	  Microsoft Table Service not installed.
	
	Now, run the setup program, adocesdk.exe.
	
	Setup attempts to download HPC files onto your device. If your device is not
	connected at the time, then the CE application manager downloads them the next
	time you connect.
	
	System Requirements
	-------------------
	
	Total download size = 990K (expanded size = approximately 990K)
	
	Desktop System Minimum Requirements
	-----------------------------------
	
	- Microsoft Windows NT version 4.0 Service Pack 3 or Windows 2000
	- Microsoft Windows CE Services 2.x
	- PC with 486/66 MHz or higher processor
	- 24 MB of RAM
	- Disk space as indicated above
	- Microsoft Mouse or equivalent pointing device
	- VGA or higher-resolution monitor (Super VGA recommended)
	
	Desktop System Maximum Requirements
	-----------------------------------
	
	- Windows CE Toolkit for Visual Basic 6.0
	
	- Windows CE Platform SDK, Handheld PC Edition (this includes a Handheld PC
	  emulator).
	
	Note that emulation only works on Microsoft Windows NT 4.0 or Windows 2000
	systems if you have the Platform SDK installed.
	You can only use the programming samples provided if you have the appropriate
	toolkits (described previously) installed on your PC.
	
	If the Platform SDK is not on your computer, then no emulator files are
	installed.
	
	Handheld PC Device Requirements
	-------------------------------
	
	- Microsoft Windows CE version 2.x
	
	- SH3, MIPS 39xx, or MIPS 41xx processor
	- Handheld PC with 8 MB of RAM recommended
	
	Additional query words: vbce wce wince
	
	======================================================================
	Keywords          : kbfile kbATM kbToolkit kbVBp500 kbVBp600 kbOSWinCEsearch kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbWinCETKVBSearch kbWinCESearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
