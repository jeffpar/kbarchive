---
layout: page
title: "Q259671: How to Change the Default Installation Paths for FTP and the Web"
permalink: /kb/259/Q259671/
---

## Q259671: How to Change the Default Installation Paths for FTP and the Web

	Article: Q259671
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbDSupport kbiis500
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Internet Information Services 5.0 default installation path is
	%systemdrive%\Inetpub\Wwwroot for the Web and %systemdrive%\Inetpub\Ftproot for
	FTP.
	
	At this time, you can only modify the default installation paths for FTP and Web
	roots either in an unattended setup mode as part of a Windows 2000 unattended
	installation or as an unattended component installation.
	
	MORE INFORMATION
	================
	
	To change the default installation paths for FTP and the Web during an
	unattended installation, you must:
	
	1. Create an Unattend.txt file and place it on a drive that will be accessible
	  to the Windows 2000 unattended installation program. The Unattended.txt file
	  will be accessed during setup.
	
	2. Include the following section in the unattended installation file:
	
	  [InternetServer] PathFTPRoot=path to FTPRoot PathWWWRoot=path to WwwRoot
	
	For example:
	
	  [InternetServer]
	  PathFTPRoot=D:\Inetpub\Ftproot
	  PathWWWRoot=D:\Inetpub\Wwwroot
	
	To change the default installation paths for FTP and the Web during an unattended
	component installation, you must follow this procedure:
	
	1. Create an unattended install file and name it Iis.txt. This file will be
	  accessed during the unattended component installation. The answer file can be
	  any Windows 2000 answer file. It must contain a "Components" and an
	  "InternetServer" section header. For example:
	
	  
	
	  [Components]
	  iis_common = on
	  iis_inetmgr = on
	  iis_www = on
	  iis_ftp = on
	  iis_htmla = on
	
	  [InternetServer]
	  PathFTPRoot=D:\Inetpub\Ftproot
	  PathWWWRoot=D:\Inetpub\Wwwroot
	
	2. Use the Sysocmgr.exe command to start the installation of the FTP or Internet
	  Information Services components. Assuming the answer file that you created in
	  step 1 was named Iis.txt, the command line to execute the installation would
	  be:
	
	  "sysocmgr /i:%windir%\inf\sysoc.inf /u:c:\iis.txt" (without the quotation
	  marks)
	
	Note that you could also use a batch file to execute the setup. The batch file
	must contain a command similar to the command above.
	
	
	REFERENCES
	==========
	
	For additional information on unattended setup, see "Microsoft Windows 2000
	Guide to Unattended Setup." This document can be found on the Windows 2000
	installation CD-ROM. To view it, extract the Unattend.doc file from the
	\Support\Tools\Deploy.cab file.
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q250609 INFO: Quick Guide to Preinstalling Windows 2000
	
	  Q222444 How to Add or Remove Windows 2000 Components with Sysocmgr.exe
	
	  Q281892 Windows 2000 Unattend.Doc File Provides Incorrect FrontPage Server
	  Extensions Parameter
	
	Additional query words: Install Unattended
	
	======================================================================
	Keywords          : kbOSWin2000 kbDSupport kbiis500 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbinfo
	
	=============================================================================
	
