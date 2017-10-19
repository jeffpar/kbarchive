---
layout: page
title: "Q183493: Batch File Calling CD Command May Not Run on HPFS"
permalink: /kb/183/Q183493/
---

## Q183493: Batch File Calling CD Command May Not Run on HPFS

	Article: Q183493
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1
	Operating System(s): 
	Keyword(s): kbenv kbtool win95 win98
	Last Modified: 02-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 98 
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Windows 95-based computer runs a batch file at a command prompt that
	calls the CHDIR or CD (change directory) command on a connected share on a drive
	using the HPFS file system, the batch file may not run any command in the file
	after the change directory command.
	
	CAUSE
	=====
	
	In Windows 95, a check occurs during the execution of the batch file to
	determine the type of file system in use. When the HPFS file system is returned
	(as an unsupported file system), Windows 95 attempts to read the file again
	using the new path defined by the change directory command. Because the new path
	does not contain the original batch file, the error message "Batch file missing"
	is generated.
	
	RESOLUTION
	==========
	
	To resolve this problem, download the following file from the Microsoft Download
	Center. Click the file name below to download the file:
	
	  Vredrupd.exe
	  (http://download.microsoft.com/download/win95upg/vredir/1/W95/EN-US/vredrupd.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	This fix for Windows 95 and OEM Service Release 2.x should have the following
	file attributes (or later):
	
	File name     Version    Date      Time     Size   
	---------------------------------------------------------   
	Vredir.vxd    4.00.1118  1/16/98   2:32pm  156,773 bytes
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95, Microsoft
	Windows 95 OEM Service Release 2 (OSR2), and Microsoft Windows98. There is
	currently no resolution for this issue in Windows 98.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool win95 win98 
	Technology        : kbWin95search kbWin98search kbOPKSearch kbZNotKeyword3 kbWin98 kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	Issue type        : kbprb
	
	=============================================================================
	
