---
layout: page
title: "Q231876: How to Set IIS 4.0 FTP Files to All Lowercase"
permalink: kb/231/Q231876/
---

## Q231876: How to Set IIS 4.0 FTP Files to All Lowercase

	Article: Q231876
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The FTP Service running under IIS 4.0 treats case sensitivity on file names
	based on the case that was used when the files were transferred.
	
	Per RFC 959, FTP Commands are not case sensitive, yet there is no reference to
	file names. Commands such as LS and MDELE look at the case of the file name on
	the server when returning results, for example:
	
	  ftp> dir
	  200 PORT command successful.
	  150 Opening ASCII mode data connection for /bin/ls.
	  -rwxrwxrwx 1 owner group 309 May 6 17:38 make.wav
	  -rwxrwxrwx 1 owner group 5025 May 6 18:20 make1.wav
	  -rwxrwxrwx 1 owner group 309 May 4 15:17 MAKEFILE.WAV
	  226 Transfer complete.
	  212 bytes received in 0.03 seconds (6.63 Kbytes/sec)
	
	  ftp> ls *.wav
	  200 PORT command successful.
	  150 Opening ASCII mode data connection for file list.
	  make.wav
	  make1.wav
	  226 Transfer complete.
	  21 bytes received in 0.00 seconds (21000.00 Kbytes/sec)
	
	  ftp> ls *.WAV
	  200 PORT command successful.
	  150 Opening ASCII mode data connection for file list.
	  MAKEFILE.WAV
	  226 Transfer complete.
	  14 bytes received in 0.00 seconds (14000.00 Kbytes/sec)
	
	MORE INFORMATION
	================
	
	A registry key is now available that can be added to FTP to treat all file names
	on an IIS 4.0 FTP server as lowercase.
	
	When you add the following registry entry, all files will be treated as lowercase
	when you perform any FTP command:
	
	  HKLM/System/CurrentControlSet/Services/MSFTPSVC/Parameters/
	
	  LowercaseFiles: REG_DWORD:1
	  (Default is 0)
	
	Stopping and restarting the FTP service is required for the change take effect.
	
	After the registry is modified, the above commands will output changes as
	follows:
	
	  ftp> dir
	  200 PORT command successful.
	  150 Opening ASCII mode data connection for /bin/ls.
	  -rwxrwxrwx 1 owner group 309 May 6 17:38 make.wav
	  -rwxrwxrwx 1 owner group 5025 May 6 18:20 make1.wav
	  -rwxrwxrwx 1 owner group 309 May 4 15:17 makefile.wav
	  226 Transfer complete.
	  212 bytes received in 0.03 seconds (6.63 Kbytes/sec)
	
	  ftp> ls *.wav
	  200 PORT command successful.
	  150 Opening ASCII mode data connection for file list.
	  make.wav
	  make1.wav
	  makefile.wav
	  226 Transfer complete.
	  35 bytes received in 0.00 seconds (21000.00 Kbytes/sec)
	
	  ftp> ls *.WAV
	  200 PORT command successful.
	  150 Opening ASCII mode data connection for file list.
	  make.wav
	  make1.wav
	  makefile.wav
	  226 Transfer complete.
	  35 bytes received in 0.00 seconds (14000.00 Kbytes/sec)
	
	Note: This parameter is only available when Windows NT 4.0 SP4 is applied.
	Previous to this version, the lowercase parameter is not available.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	
	=============================================================================
	
