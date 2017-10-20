---
layout: page
title: "Q170867: INFO: Unattended Install of IIS 2.0"
permalink: /kb/170/Q170867/
---

## Q170867: INFO: Unattended Install of IIS 2.0

{% raw %}

	Article: Q170867
	Product(s): Internet Information Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsetup kbOPK kbSBK
	Last Modified: 19-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Internet Information Server (IIS) can be installed automatically in unattended
	setup mode as part of a Windows NT 4.0 unattended install or as a standalone
	unattended install.
	
	MORE INFORMATION
	================
	
	For an unattended install of IIS without using Windows NT unattended install
	(standalone).
	
	1. Create a blank UNATTEND.TXT file that will be referenced by the install. The
	  Setup program must access this file during setup, so place it on a drive that
	  will be accessible.
	
	2. Add the following sections (in this order) to the blank file and save it.
	  Edit the file as needed to meet your configuration requirements. See the
	  white paper referenced below for detailed information on these settings.
	
	        ;Begin File
	
	        [Network]
	        InstallInternetServer = IISSettings
	
	        ;*Note, InstallInternetServer is referring to the section name of the
	        ;unattend.txt file that contains the installation options you define.
	        ;The section name can be changed.
	
	        ;The next section contains the IIS installation options
	
	        [IISSettings]
	        ; the following settings default to 1, a value of 0 makes the setting
	        FALSE.
	        InstallINETSTP=0 | 1
	        InstallADMIN=0 | 1
	        InstallWWW=0 | 1
	        InstallW3SAMP=0 | 1
	        InstallHTMLA=0 | 1
	        InstallFTP=0 | 1
	        InstallGOPHER= 0 | 1
	        InstallODBC=0 | 1
	
	        ; default to %WinDir%\system32\inetsrv
	        InstallDir=
	
	        ; default to %SystemDrive%\INetPub\wwwroot
	        WWWRoot=
	        ; default to %SystemDrive%\INetPub\gophroot
	        GopherRoot=
	        ; default to %SystemDrive%\INetPub\ftproot
	        FTPRoot=
	
	        ; default to IUSR_MachineName
	        GuestAccountName=IUSR_Account
	        ; default to a random-generated value
	        GuestAccountPassword=aaabbbccc
	
	        ;End of file
	   
	
	3. Use the Inetstp.EXE program to execute IIS setup. This file can be found in
	  the i386\Inetsrv directory on the Windows NT 4.0 CD. The following parameters
	  are required to execute the unattended install:
	
	  INETSTP.EXE /N /B <full path of unattend.txt> /Z <IISSectionName>
	
	NOTE: in the example above, the IISSectionName is "IISSettings." If this
	parameter or any of the others is omitted, the unattended install will fail.
	
	For an unattended installation of Windows NT 4.0 and IIS 2.0:
	
	Please see "Microsoft Windows NT Workstation Deployment Guide" white paper for
	more information on automating the NT Server, NT Workstation and IIS setup
	process. This paper can be found at:
	
	  http://www.microsoft.com/ntworkstation
	
	NOTE: You can set up Windows NT unattended without installing any part of IIS:
	
	- Add the following to the network section of the Windows NT Unattend.txt
	  file:
	
	        [Network]
	        DoNotInstallInternetServer = ""
	
	Additional query words: Install
	
	======================================================================
	Keywords          : kbsetup kbOPK kbSBK 
	Technology        : kbiisSearch kbiis200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
