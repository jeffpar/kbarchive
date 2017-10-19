---
layout: page
title: "Q140781: How Systems Management Server Detects a Windows Client"
permalink: /kb/140/Q140781/
---

## Q140781: How Systems Management Server Detects a Windows Client

	Article: Q140781
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup smssetup
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Because of the wide variety in client configurations, Systems Management Server
	must use several methods of detecting if Windows is installed on the client, and
	where that installation is located. An additional step of detecting the exact
	Windows version is also necessary.
	
	Once client setup has set the operating system(s) and network types, only these
	types are used by the inventory agent when reporting machine inventory. Related
	to this, the network type of the client is solely determined by the network type
	of the Systems Management Server logon server the client was installed from.
	
	MORE INFORMATION
	================
	
	The Systems Management Server Client Setup (CLI_DOS.EXE) uses the following
	steps:
	
	1. If SMS.INI already exists, the LocalWindowsPath and WindowsPath keys are
	  checked. SharedWindowsPath may also be examined, and if Windows is running, a
	  call to GetWindowsDirectory() is issued. Most existing installs are resolved
	  in this step.
	
	2. Use the WINDIR environment variable created by Windows. If it does not exist,
	  Windows is not running and another detection method must be used. If found,
	  much time is saved by not having to walk the search PATH any more.
	
	3. For a local install of Windows, Setup checks along the path for WIN.INI and
	  for shared Windows Setup checks for WIN.COM. Setup should succeed here in
	  most cases.
	
	  NOTE: Shared Windows is currently not supported by Systems Management Server,
	  but a reasonable effort has been made to contend with it.
	
	4. As a last measure, Setup assumes the path is truncated due to a DOS
	  environment problem, and Setup then takes the contents of the SMS_P
	  environment variable (set in the SMSLS and RUNSMS scripts) and adds this
	  string back into the PATH environment variable. Setup then goes back to step
	  3 and checks along the path.
	
	5. Once Setup locates the Windows directory, it ensures that SYSTEM.INI exists
	  in that location as a verification.
	
	6. Assuming Setup finds WIN.INI or WIN.COM, Setup attempts to obtain the exact
	  Windows type (Win16 vs. Windows for Workgroups) by trying to find WINVER.EXE
	  which is located in the Windows directory. If WINVER.EXE is found Setup runs
	  it and five bytes are read from offset 0x200 in the file.
	
	The version information is also language specific, and the following signatures
	are used to identify whether Windows or Windows for Workgroups is installed.
	Note that Setup uses the language specific data not to determine a language
	setting, but only to distinguish Windows from Windows for Workgroups.
	
	From the five bytes read from WINVER.EXE, bytes 3 and 4 contain the major and
	minor version data. Byte 1 contains the following used for Windows versus
	Windows for Workgroups detection:
	
	Windows 3.1 =  0x44         // Almost all languages
	              0x54         // Chinese
	              0x64         // Korean
	Workgroups 3.11 =  0x2B   // Almost all languages
	                  0x24   // Finnish
	                  0x2C   // French
	                  0x2D   // Hungarian
	                  0x32   // Spanish
	
	If you think there are problems detecting the Windows directory, ensure that
	WIN.COM, WIN.INI, and WINVER.EXE are all available along the path.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbsetup smssetup 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	
	=============================================================================
	
