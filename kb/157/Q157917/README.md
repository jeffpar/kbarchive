---
layout: page
title: "Q157917: SMS: PCM Windows 95 Setup Error: Corrupt CAB File"
permalink: kb/157/Q157917/
---

## Q157917: SMS: PCM Windows 95 Setup Error: Corrupt CAB File

	Article: Q157917
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:95; winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After you distribute a Windows 95 upgrade package, the following dialog box
	appears when setup is 15 percent through the copy list:
	
	  Setup has detected a corrupt setup (CAB) file.
	  Setup cannot continue.
	  Click OK to continue.
	
	After the message, an error reading disk 2 is reported.
	
	WORKAROUND
	==========
	
	If you must use a custom INF, make a backup copy of the Systems Management
	Server Win95.inf, and save your INF file as Win95.inf. Make sure the
	installation works completely without Systems Management Server before
	disturbing the Windows 95 install package.
	
	Systems Management Server expects to find the Win95.inf file in the <Systems
	Management Server root>\Logon.srv\Mstest directory. If the INF file is not in
	this location, setup will not be able to find and use it.
	
	MORE INFORMATION
	================
	
	The Systems Management Server 1.1 FAQ and the Systems Management Server 1.2
	documentation discuss in greater detail when to use Win95.inf, Win95min.inf or
	Msbatch.inf. Depending on whether you created the package source by running
	NETSETUP or by simply copying the CAB files, you must use the Win95.inf file as
	a parameter to the setup process. A NETSETUP install does not allow you to
	provide INF files with alternative names, and will produce the error described
	above if a custom INF file name is supplied. The default Windows 95
	configuration file is Msbatch.inf.
	
	Additional query words: prodsms win95 w95 command manager cabinet
	
	======================================================================
	Keywords          : kbinterop kbnetwork kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : WINDOWS:95; winnt:1.0,1.1,1.2
	
	=============================================================================
	
