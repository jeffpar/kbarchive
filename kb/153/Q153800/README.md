---
layout: page
title: "Q153800: Install Not Found Installing IIS on MSDN Level III CD"
permalink: kb/153/Q153800/
---

## Q153800: Install Not Found Installing IIS on MSDN Level III CD

	Article: Q153800
	Product(s): Internet Information Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 07-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Internet Information Server (IIS) from the MSDN Level III
	Backoffice compact disc 2 Setup program, you are prompted to enter Internet
	compact disc 4. The Setup program then displays the following message:
	
	  Backoffice 2.0 Installer cannot find the required files in the specified
	  path. In particular, the following file was not found:
	  f:\insertsrv\i386\install.exe.
	
	CAUSE
	=====
	
	The file Install.exe was not included on the Internet Server compact disc.
	
	RESOLUTION
	==========
	
	A replacement for Install.exe is posted on Microsoft's FTP server. These files
	are self-extracting.
	
	For each platform the URLs are:
	
	  Alpha
	  ftp://ftp.microsoft.com:/developr/msdn/newup/IIS_ALPH.EXE
	
	  i386
	  ftp://ftp.microsoft.com:/developr/msdn/newup/IIS_I386.EXE
	
	  MIPS
	  ftp://ftp.microsoft.com:/developr/msdn/newup/IIS_MIPS.EXE
	
	  Power PC
	  ftp://ftp.microsoft.com:/developr/msdn/newup/IIS_PPC.EXE
	
	If you run the Setup program on an I386 platform:
	
	1. Copy the i386 directory tree to a temporary directory on your hard drive:
	
	  xcopy /s d:\inetsrv\i386 c:\temp\i386
	  xcopy /s d:\inetsrv\docs c:\temp\docs
	  xcopy /s d:\inetsrv\help c:\temp\help
	
	2. Uncompress Install.exe file from the appropriate self extracting file and
	  place it in the C:\Temp\i386 directory.
	
	3. Copy the inetsrv file from the \Inetsrv directory compact disc to c:\temp
	  (one directory level up from where Install.exe was copied).
	
	  copy d:\inetsrv\inetsrv. c:\temp
	
	4. Run Install.exe from C:\Temp\i386.
	
	If you are installing Internet Server on a RISC platform computer, substitute the
	appropriate directory names for your platform.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbiisSearch kbiis100
	Version           : winnt:1.0
	
	=============================================================================
	
