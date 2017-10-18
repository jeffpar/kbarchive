---
layout: page
title: "Q134456: Err Msg: ScanDisk Cannot Check This Drive Now Because the..."
permalink: kb/134/Q134456/
---

## Q134456: Err Msg: ScanDisk Cannot Check This Drive Now Because the...

	Article: Q134456
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kberrmsg kbtool win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to run ScanDisk in Windows 95, you may receive the following error
	message:
	
	  ScanDisk cannot check this drive now because the disk is not properly
	  formatted, or a program such as a disk utility has locked it. Format the disk
	  or wait for the utility to finish, and then restart ScanDisk.
	
	CAUSE
	=====
	
	This problem can occur if you are running Bgmail.exe. Bgmail.exe prevents
	Windows 95 tools from locking the hard disk properly. Note that Bgmail.exe is
	loaded from either the Winstart.bat file or the Autoexec.bat file.
	
	RESOLUTION
	==========
	
	To run ScanDisk, use either of the following methods:
	
	- Edit the Winstart.bat file or the Autoexec.bat file and place the word "rem"
	  (without quotation marks) at the beginning of the Bgmail.exe line to
	  temporarily disable it. Save and close the file and then restart Windows 95
	  and run ScanDisk.
	
	- Run ScanDisk in MS-DOS mode. To do so, follow these steps:
	
	  1. Click Start, and then click Shut Down.
	
	  2. Click "Restart the computer in MS-DOS mode," and then click Yes.
	
	  3. At the command prompt, type the following line and then press ENTER:
	
	  " scandisk " (without the quotation marks)
	
	  4. When ScanDisk is finished, type the following line and then press ENTER:
	
	  " exit " (without the quotation marks)
	
	MORE INFORMATION
	================
	
	This error can occur with any program that performs an INT 21 hook.
	
	
	Bgmail.exe is a tool that is installed on AT&T computers to provide access to
	AT&T's proprietary mail services.
	
	The problem described in this article can also occur if you are loading the
	following line in the Winstart.bat file:
	
	  c:\windows\updat_cd.com c:\cd.sav
	
	The resolution methods listed above should also work with the Cd.sav file.
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: Corel
	
	======================================================================
	Keywords          : kberrmsg kbtool win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
