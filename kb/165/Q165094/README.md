---
layout: page
title: "Q165094: PRB: Unattended Installation of RAS May Fail"
permalink: /kb/165/Q165094/
---

## Q165094: PRB: Unattended Installation of RAS May Fail

	Article: Q165094
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup kbOPK kbSBK
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install the RAS client through Unattend.txt, it may result in
	the following error message when connecting to a site:
	
	  Rasman.exe - DLL Initialization failed.
	  Initialization of the dynamic link library C:\winnt\system32\rasser.dll
	  failed. The process is terminating abnormally.
	
	Followed by:
	
	  Error Connecting to <Connectoid Name>
	  Error 665: The port is not configured for remote access.
	
	CAUSE
	=====
	
	This is because the Serial.ini file is not created during an unattended
	installation. The Serial.ini file is not part of the Windows NT 4.0 installation
	set, but is created by the Remote Access Setup wizard.
	
	RESOLUTION
	==========
	
	To correct the problem after the unattended installation has completed, simply
	create a blank Serial.ini file in the %SystemRoot%\System32\RAS directory.
	Another workaround is to launch the Remote Access Setup wizard by clicking
	Properties for the Remote Access Service on the Service tab in the Control Panel
	Network tool.
	
	You can correct the problem during an unattended installation by using either of
	the following methods:
	
	Method One
	----------
	
	This workaround assumes that you are installing from a server and not from the
	actual compact disc.
	
	1. Create a Serial.ini in the I386 directory. Make sure the file contains at
	  least some type of data.
	
	2. Edit the Txtsetup.sif file in the I386 directory. Add the following entry to
	  the [SourceDisksFiles] section:
	
	        serial.ini   = 1,,,,,,,7,0,0
	
	3. Edit the Dosnet.inf file, and add the following entry to the [Files]
	  section:
	
	        d1,serial.ini
	
	4. Run your unattended setup.
	
	Method Two
	----------
	
	An alternate method would be to create a batch file that runs during the
	unattended installation that copies the Serial.ini file to the
	%SystemRoot%\System32\RAS directory.
	
	If it is an unattended, then instead of modifying txtsetup.sif, use the following
	procedure:
	
	1. In the $oem$\$ directory, create the following directory: system32\ras
	
	2. Place the serial.ini file there.
	
	3. Make sure that OEMPreinstall=yes.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbOPK kbSBK 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
