---
layout: page
title: "Q172600: Error 234 in Showmbrs.exe"
permalink: /kb/172/Q172600/
---

## Q172600: Error 234 in Showmbrs.exe

	Article: Q172600
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows NT Server 4.0 Resource Kit ISBN 1-57231-344-7 
	- MSPRESS Microsoft Windows NT Workstation 4.0 Resource Kit ISBN 1-57231-343-9 
	- MSPRESS Microsoft Windows NT Server 4.0 Resource Kit, Supplement One ISBN 1-57231-559-8 
	- MSPRESS Microsoft Windows NT Server 4.0 Resource Kit, Supplement Two ISBN 1-57231-626-8 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to view a group with more than six IDs using Showmbrs.exe, you
	will receive the following error:
	
	  Error [234] on NetGroupGetUsers
	
	RESOLUTION
	==========
	
	Microsoft Press has created a replacement for Showmbrs.exe that fixes this
	problem. The self-extracting archive file Shombrs.exe contains the executable
	and documentation for Showmbrs.exe.
	
	Shombrs.exe is available for download from the following Microsoft FTP site:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/reskit/nt40/i386/
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Showmbrs.exe was not included on the Microsoft Windows NT Server 4.0 Resource
	Kit, though it was included on the Microsoft Windows NT Workstation 4.0 Resource
	Kit and on the subsequent Supplement releases.
	
	To install the updated copy of Showmbrs.exe, follow these steps:
	
	1. Download Shombrs.exe into your Resource Kit folder. By default, this folder
	  is C:\NTRESKIT\.
	
	  If your software is not capable of downloading the file into a particular
	  folder, download the file and copy or move it to your Resource Kit folder.
	
	2. Double-click Shombrs.exe to extract the necessary files.
	
	3. If you are asked to confirm the replacement of files, press Y to confirm the
	  file replacement.
	
	4. Delete Shombrs.exe.
	
	If you encounter difficulties with these files, please send e-mail to Microsoft
	Press at:
	
	  RKINPUT@MICROSOFT.COM
	
	Additional query words: mspress ms_press press ntrk ntreskit 1-57231-344-7 1-57231-343-9 1-57231-559-8 1-57231-626-8
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch kbZNotKeyword6 kbZNotKeyword2 kbZNotKeyword3
	Version           : :
	Issue type        : kbbug
	
	=============================================================================
	
