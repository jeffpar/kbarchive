---
layout: page
title: "Q172599: Rmtshare.exe Does Not Work with Numeric Usernames"
permalink: /kb/172/Q172599/
---

## Q172599: Rmtshare.exe Does Not Work with Numeric Usernames

{% raw %}

	Article: Q172599
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
	
	If you try to use Rmtshare.exe to assign permissions to a user whose username
	begins with a number, the operation will fail.
	
	RESOLUTION
	==========
	
	Microsoft has created a new version of Rmtshare.exe that can assign permissions
	to a user whose username begins with a number.
	
	The self-extracting archive file, Rmtshar.exe, distributed by Microsoft Press,
	contains the executable and documentation for the updated Rmtshare.exe.
	
	Rmtshar.exe is available for download from the following Microsoft FTP site:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/reskit/nt40/i386/
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	To install the new copy of Rmtshare.exe, follow these steps:
	
	1. Download Rmtshar.exe into your Resource Kit directory. By default, this
	  directory is: C:\NTRESKIT\
	
	  If your software is not capable of downloading the file into a particular
	  directory, download the file and copy or move it to your Resource Kit
	  directory.
	
	2. Double-click Rmtshar.exe to extract the necessary files.
	
	3. If you are asked to confirm the replacement of files, press Y to confirm the
	  file replacement.
	
	4. Delete Rmtshar.exe.
	
	If you encounter difficulties with these files, please send e-mail to Microsoft
	Press at:
	
	  RKINPUT@MICROSOFT.COM
	
	Additional query words: mspress ms_press press ntreskit ntrk 1-57231-344-7 1-57231-343-9 1-57231-559-8 1-57231-626-8
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch kbZNotKeyword6 kbZNotKeyword2 kbZNotKeyword3
	Version           : :
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
