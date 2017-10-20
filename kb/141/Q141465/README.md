---
layout: page
title: "Q141465: How to Install Symbols for Dr. Watson Error Debugging"
permalink: /kb/141/Q141465/
---

## Q141465: How to Install Symbols for Dr. Watson Error Debugging

{% raw %}

	Article: Q141465
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When the following Dr. Watson application error occurs, make sure that the
	Windows NT symbols are loaded for debug operation.
	
	Dr. Watson Application Error:
	
	  An application error has occurred and an application error log is being
	  generated.
	
	  DRWTSN32.exe
	  Exception: access violation <Hex value>, Address: <Hex address>
	
	MORE INFORMATION
	================
	
	If the debug information in the Dr. Watson log displays "no symbols," then the
	symbol tree from the Windows NT compact disc has not been loaded to the
	%SystemRoot% directory. In this case, the interpretation of the Dr. Watson log
	is going to be difficult.
	
	If you want to interpret the Dr. Watson log, load the Windows NT symbols to your
	%SystemRoot% directory. To load the symbol tree:
	
	Windows NT 4.0
	--------------
	
	1. Run Expndsym.cmd from the \Support\Debug directory at a command prompt by
	  typing the following command:
	
	  "Expndsym F: C:\Winnt" (without the quotation marks)
	
	  where F is the CD-ROM drive and \WINNT is the %SystemRoot% folder where
	  Windows NT is installed.
	
	  This will create a C:\%SystemRoot%\SYMBOLS directory structure and place the
	  *.DBG files in the appropriate sub-directory (Dll, Exe, etc.)
	
	2. Symbols must also be installed for any Service Packs and hotfixes. Follow the
	  appropriate step below for the Service Pack currently installed on the
	  system.
	
	  Service Pack on CD-ROM:
	
	  Use Explorer or a command prompt to copy the Symbols directory and its
	  contents from the CD-ROM \Support\Debug\<platform> directory, where
	  <platform> is one of the following: I386, Alpha, MIPS, PPC, to the
	  %SystemRoot% directory. For example, to copy the symbols for the Intel
	  platform, type the following command:
	
	  "Xcopy E:\Support\Debug\I386\Symbols\*.* C:\Winnt\Symbols /S" (without the
	  quotation marks)
	
	  Service Pack from Internet:
	
	  If you downloaded the Service Pack from the FTP or WWW site, you will also
	  need to download the symbol files and follow the appropriate step below for
	  the Service Pack currently installed on your system:
	
	  SP1 or SP2: Type the following command at a command prompt:
	
	  "Sym_400i.exe -d C:\Winnt\Symbols" (without the quotation marks)
	
	  SP3: Type the following at a command prompt and enter the path to the Symbols
	  directory (i.e., C:\Winnt\Symbols) when prompted.
	
	  "Nt4sym3i.exe" (without the quotation marks)
	
	  SP4: Double-click the downloaded file (Sp4symi.exe). When you are prompted for
	  a path, type the path for the system root folder (usually C:\Winnt). This
	  updates the already created Symbols folder (created during the install ation
	  of the base product symbols). It also creates a Joyport folder in the system
	  root folder.
	
	  SP5: Service Pack 5 symbols can be downloaded from
	
	  http://www.microsoft.com/ntserver/nts/downloads/recommended/sp5/debug/default.asp
	
	  SP6a: Service Pack 6a symbols can be downloaded from
	
	  http://www.microsoft.com/ntserver/nts/downloads/recommended/SP6/debug/default.asp
	
	Windows NT 3.51
	---------------
	
	1. Locate the \Support\Debug\<platform>\symbols directory on the Windows
	  NT compact disc. The <platform> is one of the following: i386, ALPHA,
	  MIPS or PPC.
	
	2. Copy the Symbols directory and its contents to the %SystemRoot% directory.
	
	3. If you have a Service Pack installed, copy the contents of the Service Pack
	  Symbols directory to the %SystemRoot%\Symbols directory.
	
	Windows NT 4.0, Enterprise Edition
	----------------------------------
	
	Follow the same steps as for Windows NT 4.0, with the exception that the
	Expndsym.cmd file is located on the second CD-ROM set in the Support\NTS\Debug
	folder.
	
	Windows 2000
	------------
	
	Install the Windows 2000 symbols from the Windows 2000 Customer Support and
	Diagnostics Tools CD-ROM:
	
	1. Click "Install Symbols" from the menu on the right.
	
	2. In the "Install Symbols" section, click the appropriate type of symbols to
	  install. Typically, this is the "Retail Symbols" selection.
	
	3. Click "Install Retail Symbols". The File Download window appears.
	
	4. Click "Run this program from the current location", and then click OK.
	
	5. Click Yes if you receive a prompt in the form of a Security Warning dialog
	  box.
	
	6. Click Yes in the License dialog box.
	
	7. Click OK in the "Microsoft Windows 2000 Symbols" dialog box. Ensure that the
	  path is the correct path to your installation. The default is
	  C:\Winnt\Symbols.
	
	8. Click Yes to create the folder. You see the File Copy Progress dialog box.
	
	9. Click OK in the "Installation is complete" dialog box.
	
	NOTE: Symbolsx.exe is the installation program for the Windows 2000 symbols. It
	is located in the D:\Symbols\I386\Retail folder for retail symbols or the
	D:\Symbols\I386\Debug folder for the debug version of Windows 2000.
	
	Additional query words: debugref nosymbols symbol install update
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbNTTermServ400 kbNTTermServSearch kbWinNTS351search
	Version           : :3.51,4.0
	
	=============================================================================
	

{% endraw %}
