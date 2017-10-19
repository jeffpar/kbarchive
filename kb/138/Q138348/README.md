---
layout: page
title: "Q138348: SMS: How to Manually Copy SMS Logon Script Files"
permalink: /kb/138/Q138348/
---

## Q138348: SMS: How to Manually Copy SMS Logon Script Files

	Article: Q138348
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork smsgeneral kbArtTypeINF
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists the files and directories required in the Netlogon share for
	clients to successfully execute the Systems Management Server logon script,
	Smsls.bat or Smsls.cmd (for OS/2 clients only).
	
	NOTE: This directory structure has changed slightly from the original structure
	under Systems Management Server 1.0.
	
	MORE INFORMATION
	================
	
	For Systems Management Server 1.1 and 1.2, the new layout is shown below. Note
	that the Scripts directory is shared on the network as
	\\<Servername>\Netlogon.
	
	Files Required in the \Scripts Directory
	----------------------------------------
	
	+-------------------------------------------------+
	| File name    | Copied from                      | 
	+-------------------------------------------------+
	| Smsls.bat    | \Site.srv\Maincfg.box            | 
	+-------------------------------------------------+
	| Smsls.cmd    | \Site.srv\Maincfg.box            | 
	+-------------------------------------------------+
	| Smsls.ini    | \Site.srv\Maincfg.box            | 
	+-------------------------------------------------+
	| Netspeed.com | \Site.srv\Maincfg.box\Client.src | 
	+-------------------------------------------------+
	| Netspeed.dat | \Site.srv\Maincfg.box\Client.src | 
	+-------------------------------------------------+
	| Dosver.com   | \Site.srv\Maincfg.box\Client.src | 
	+-------------------------------------------------+
	| Clrlevel.com | \Site.srv\Maincfg.box\Client.src | 
	+-------------------------------------------------+
	
	NOTE: The following are also required for Systems Management Server 1.2 Service
	Pack 4 only:
	
	+-------------------------------------------------+
	| Checkver.exe | \Site.srv\Maincfg.box\Client.src | 
	+-------------------------------------------------+
	| Check20.exe  | \Site.srv\Maincfg.box\Client.src | 
	+-------------------------------------------------+
	
	Files Required in the \Scripts\<Platform>.bin Directory
	-------------------------------------------------------
	
	Note that there should be one such directory for each client platform supported,
	for example: X86.bin, Alpha.bin, or Mips.bin.
	
	+----------------------------------------------------------------+
	| File name    | Copid from                                      | 
	+----------------------------------------------------------------+
	| Setls32.exe  | \Site.srv\Maincfg.box\Client.src\<Platform>.bin | 
	+----------------------------------------------------------------+
	| Nlsmsg32.exe | \Site.srv\Maincfg.box\Client.src\<Platform>.bin | 
	+----------------------------------------------------------------+
	| Nlsres.ini   | \Site.srv\Maincfg.box\Client.src\<Platform>.bin | 
	+----------------------------------------------------------------+
	| Setls16.exe  | \Site.srv\Maincfg.box\Client.src\X86.bin (only) | 
	+----------------------------------------------------------------+
	| Nlsmsg16.exe | \Site.srv\Maincfg.box\Client.src\X86.bin (only) | 
	+----------------------------------------------------------------+
	| Setlsos2.exe | \Site.srv\Maincfg.box\Client.src\X86.bin (only) | 
	+----------------------------------------------------------------+
	| Nlsmsgo2.exe | \Site.srv\Maincfg.box\Client.src\X86.bin (only) | 
	+----------------------------------------------------------------+
	
	Files Required in the \Scripts\<Platform>.bin\00000409 Directory
	----------------------------------------------------------------
	
	Note that there should be one such directory for each client language supported;
	for example, 409 is US English.
	
	+-----------------------------------------------------------------------+
	| File name  | Copied from                                              | 
	+-----------------------------------------------------------------------+
	| Nls_ls.dll | \Site.srv\Maincfg.box\Client.src\<Platform>.bin\00000409 | 
	+-----------------------------------------------------------------------+
	
	If the Systems Management Server logon script, Smsls.bat or Smsls.cmd, is going
	to be called from a client's existing logon script file, it is recommended that
	the following syntax be used within the existing file:
	
	     CALL %0\..\SMSLS
	
	Additional query words: prodsms login log on in manual copy copying script scripts
	
	======================================================================
	Keywords          : kbnetwork smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	
