---
layout: page
title: "Q107695: PRB: Updating Multiple Device= Lines in SYSTEM.INI"
permalink: kb/107/Q107695/
---

## Q107695: PRB: Updating Multiple Device= Lines in SYSTEM.INI

	Article: Q107695
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbSDKPlatform kbSysSettings
	Last Modified: 09-JUN-1999
	
	3.00 3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When there is more than one entry with the same name under a section in an .INI
	file, WritePrivateProfileString() and WriteProfileString() can update only the
	first specified entry in the section.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	For example, in the [386Enh] section of the SYSTEM.INI file, there are multiple
	"device=" lines. If you want to add a new device= line or update one of the
	device= lines other than the first device= entry, you cannot use
	WritePrivateProfileString(). For example, the following call
	
	     WritePrivateProfileString("386Enh", "device", "drvname.drv",
	     "SYSTEM.INI");
	
	will only replace the first device= statement with DRVNAME.DRV, instead of adding
	a new device= line. The reason is that the Windows .INI file application
	programming interfaces (APIs) in the Windows 3.1 SDK work only on unique entries
	in a given section of the .INI file.
	
	There are couple of options available to work around this situation:
	
	- Open, parse, modify, and save the .INI file in your application. Note, that
	  although Windows 3.1 supports direct file I/O to the INI files, Windows 3.0
	  does not. Moreover, Windows caches INI files, and therefore if you modify a
	  .INI file, the disk file is updated, however, the cache is not. To update the
	  cache, call WriteProfileString(NULL, NULL, NULL), which forces a flush of the
	  cache.
	
	  -or-
	
	- Win32 applications can use the APIs that support the multiple "entry=" lines
	  in a single section of a .INI file. For example, you could use the
	  WriteProfileSection() and WritePrivateProfileSection() functions in the Win32
	  API.
	
	  -or-
	
	- Use the VxD services that WIN386.EXE uses when it loads all the devices
	  listed in the device= lines of the [386Enh] section in SYSTEM.INI file. The
	  services that the VxDs provide are documented in the Windows Device Driver
	  Kit (DDK).
	
	Additional query words: 3.10 3.00
	
	======================================================================
	Keywords          : kb16bitonly kbSDKPlatform kbSysSettings 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbprb
	
	=============================================================================
	
