---
layout: page
title: "Q246331: SMS: CRC Checking and Installation of Client-Side Hotfixes"
permalink: /kb/246/Q246331/
---

## Q246331: SMS: CRC Checking and Installation of Client-Side Hotfixes

	Article: Q246331
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbClient kbsms200
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Systems Management Server (SMS) 2.0 verifies that Windows NT clients are running
	the correct versions of the client components. The SMS Client service does this
	by comparing the cyclical redundancy check (CRC) values of the client components
	on the client with the CRC values of the same programs in the site server's
	<Sms_root_folder>\Bin\<Platform> folder.
	
	The CRC values of the site server's copy of the client files are stored in the
	following registry key on the clients:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\SMS\Client\Configuration\Verification
	  Data
	
	The purpose of this security checking is to provide the client with added
	protection against "trojan horses." Because the SMS Client service (Clisvcl) in
	Windows NT runs in a higher security context than the user, anything started by
	it also runs with greater rights on the client.
	
	To determine which client programs are CRC checked, search the Install.map file
	for "client application." The current list is:
	
	   PROPERTY <Bin\i386\Ccim32.dll><Client Application><><2>
	   PROPERTY <Bin\i386\Clisvcl.exe><Client Application><><1>
	   PROPERTY <Bin\i386\Smscq_32.exe><Client Application><><2>
	   PROPERTY <Bin\i386\Cqmgr32.dll><Client Application><><2>
	   PROPERTY <Bin\i386\Chksnmp.exe><Client Application><><2>
	   PROPERTY <Bin\i386\Abnwcli.dll><Client Application><><4>
	   PROPERTY <Bin\i386\Falclin.dll><Client Application><><4>
	   PROPERTY <Bin\i386\Mslmclin.dll><Client Application><><4>
	   PROPERTY <Bin\i386\Bindclin.dll><Client Application><><4>
	   PROPERTY <Bin\i386\Ndsclin.dll><Client Application><><4>
	   PROPERTY <Bin\i386\Smsapm32.exe><Client Application><><2>
	   PROPERTY <Bin\i386\Odpsys32.exe><Client Application><><3>
	   PROPERTY <Bin\i386\Odpusr32.exe><Client Application><><1>
	   PROPERTY <Bin\i386\Sinv32.exe><Client Application><><2>
	   PROPERTY <Bin\i386\Rcclicfg.exe><Client Application><><2>
	   PROPERTY <Bin\i386\Rcclic16.exe><Client Application><><2>
	   PROPERTY <Bin\i386\Hinv32.exe><Client Application><><2>
	   PROPERTY <Bin\i386\Wuser.exe><Client Application><><2>
	   PROPERTY <Bin\alpha\Ccim32.dll><Client Application><><2>
	   PROPERTY <Bin\alpha\Clisvcl.exe><Client Application><><1>
	   PROPERTY <Bin\alpha\Smscq_32.exe><Client Application><><2>
	   PROPERTY <Bin\alpha\Cqmgr32.dll><Client Application><><2>
	   PROPERTY <Bin\alpha\Chksnmp.exe><Client Application><><2>
	   PROPERTY <Bin\alpha\Abnwcli.dll><Client Application><><4>
	   PROPERTY <Bin\alpha\Falclin.dll><Client Application><><4>
	   PROPERTY <Bin\alpha\Mslmclin.dll><Client Application><><4>
	   PROPERTY <Bin\alpha\Bindclin.dll><Client Application><><4>
	   PROPERTY <Bin\alpha\Ndsclin.dll><Client Application><><4>
	   PROPERTY <Bin\alpha\Smsapm32.exe><Client Application><><2>
	   PROPERTY <Bin\alpha\Odpsys32.exe><Client Application><><3>
	   PROPERTY <Bin\alpha\Odpusr32.exe><Client Application><><1>
	   PROPERTY <Bin\alpha\Sinv32.exe><Client Application><><2>
	   PROPERTY <Bin\alpha\Rcclicfg.exe><Client Application><><2>
	   PROPERTY <Bin\alpha\Hinv32.exe><Client Application><><2>
	
	Note that this version checking does not occur for Microsoft Windows 95-based or
	Microsoft Windows 98-based clients because there is no concept of Clisvc95
	running with higher security rights than the logged-on user.
	
	MORE INFORMATION
	================
	
	Manually Installing Client-Side Hotfixes
	----------------------------------------
	
	1. Stop the SMS_EXECUTIVE and SMS_SITE_COMPONENT_MANAGER services on the site
	  server.
	
	2. Copy the updated components to the appropriate
	  <Sms_root_folder>\Inboxes\Clicomp.src\<Component>\<Platform>
	  folders.
	
	3. Copy the updated Compver.ini files to the appropriate
	  <Sms_root_folder>\Inboxes\Clicomp.src\<component> folders.
	
	4. Copy the files for the CRC-checked programs (see the list above) to the
	  <Sms_root_folder>\Bin\<Platform> folder.
	
	5. Start the SMS_SITE_COMPONENT_MANAGER and SMS_EXECUTIVE services. This causes
	  the CIDM thread in SMS Executive to regenerate the CRC list (it is encrypted
	  within the Cli_inst.cfg and Clibase.cfg files).
	
	6. Wait for the following files to be updated on the SMS logon points:
	
	  SMSLOGON\Sites\<Site code>\Cli_inst.cfg
	  SMSLOGON\ALPHA.Bin\Clicore.exe (if Clicore.exe was upgraded)
	  SMSLOGON\x86.bin\Clicore.exe (if Clicore.exe was upgraded)
	
	7. Wait for the following files to be updated on the SMS client access points
	  (CAPs):
	
	  CAP_<sitecode>\Clidata.box\Cli_inst.cfg
	  CAP_<sitecode>\Clidata.box\Clibase.cfg
	
	8. Depending on whether Client Configuration Installation Manager (CCIM) is
	  running on the clients, use the appropriate method:
	
	   - CCIM is running: Use any of the SMS tools to trigger CCIM to get the
	     latest configuration (Setevnt, Cliutils, or the Update Configuration
	     button on the Sites tab in the Systems Management tool in Control Panel),
	     or wait for CCIM's 23-hour maintenance cycle.
	
	   - CCIM is not running: Run logon scripts or Smsman for the site that has the
	     new configuration. The secured program information from the site is
	     downloaded to the client's registry, and the SMS Client service picks it
	     up the next time it wakes up and is able to start CCIM.
	
	Mismatched Client Program Files
	-------------------------------
	
	If the calculated CRC value of a program that is installed on the client does not
	match the stored CRC value for the same program on the site server, you see the
	following types of error messages in the client component log files:
	
	Example 1: Clisvc.log:
	
	Client Configuration Installation Manager - (LAUNCH_CONTINUOUS_START)~  $$<C:\WINNT\MS\SMS\CORE\BIN\CLISVCL.EXE><Mon Nov 15 16:54:10.112 1999><thread=52 (0x34)>
	Client Configuration Installation Manager - Attempting to launch application ~  $$<C:\WINNT\MS\SMS\CORE\BIN\CLISVCL.EXE><Mon Nov 15 16:54:10.190 1999><thread=52 (0x34)>
	Verifying application [C:\WINNT\MS\SMS\core\Bin\ccim32.dll]~  $$<C:\WINNT\MS\SMS\CORE\BIN\CLISVCL.EXE><Mon Nov 15 16:54:10.190 1999><thread=52 (0x34)>
	#$#$#$#$#$ ERROR: The Client Service is not authorised to run this application! (5)~  $$<C:\WINNT\MS\SMS\CORE\BIN\CLISVCL.EXE><Mon Nov 15 16:54:10.253 1999><thread=52 (0x34)>
	*** Client Configuration Installation Manager - Error launching (#0x5)  $$<C:\WINNT\MS\SMS\CORE\BIN\CLISVCL.EXE><Mon Nov 15 16:54:10.253 1999><thread=52 (0x34)>
	!!!WARNING: Problem starting App (5). Doing App Verify.  $$<C:\WINNT\MS\SMS\CORE\BIN\CLISVCL.EXE><Mon Nov 15 16:54:10.253 1999><thread=52 (0x34)>
	
	Example 2: Clisvc.log:
	
	Verifying application [C:\WINNT\MS\SMS\clicomp\hinv\hinv32.exe]~  $$<C:\WINNT\MS\SMS\CORE\BIN\CLISVCL.EXE><Fri Oct 22 00:43:51.093 1999><thread=161 (0xA1)>
	#$#$#$#$#$ ERROR: The Client Service is not authorised to run this application! (5)~  $$<C:\WINNT\MS\SMS\CORE\BIN\CLISVCL.EXE><Fri Oct 22 00:43:51.125 1999><thread=161 (0xA1)>
	*** Hardware Inventory Agent - Error launching (#0x5)  $$<C:\WINNT\MS\SMS\CORE\BIN\CLISVCL.EXE><Fri Oct 22 00:43:51.125 1999><thread=161 (0xA1)>
	!!!WARNING: Problem starting App (5). Doing App Verify.  $$<C:\WINNT\MS\SMS\CORE\BIN\CLISVCL.EXE><Fri Oct 22 00:43:51.125 1999><thread=161 (0xA1)>
	**ERROR: AppVerify(Hardware Inventory Agent) returned 232~  $$<C:\WINNT\MS\SMS\CORE\BIN\CLISVCL.EXE><Fri Oct 22 00:43:51.140 1999><thread=161 (0xA1)>
	
	If you experience these error messages after installing a client-side hotfix,
	update the site server's copy of the program by using steps 1 and 4 through 8
	above.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbClient kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
