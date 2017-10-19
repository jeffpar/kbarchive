---
layout: page
title: "Q246054: INFO: DCOMCNFG, APPID&#92;.exe Mapping and Implications"
permalink: /kb/246/Q246054/
---

## Q246054: INFO: DCOMCNFG, APPID&#92;.exe Mapping and Implications

	Article: Q246054
	Product(s): Microsoft Programming Utilities
	Version(s): 1.0,4.0
	Operating System(s): 
	Keyword(s): kbDCOM kbOSWinNT400 kbOSWin2000 kbOSWin95 kbOSWin98 kbGrpDSCom kbDSupport
	Last Modified: 12-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM, version 1.0, used with:
	   - the operating system: Microsoft Windows 2000 
	   - the operating system: Microsoft Windows NT 4.0 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains entries that are made for AppID\.exe mapping under the
	HKEY_CLASSES_ROOT key in the registry by using the DCOMCNFG utility, and the
	implications of it.
	
	MORE INFORMATION
	================
	
	Component Object Model (COM) applications are identified by a Globally Unique
	Identifier (GUID) that is called AppID and represent a server process for one or
	more classes. The remote activation, security, and other application-specific
	settings are stored in the local registry under the following key:
	
	  HKEY_CLASSES_ROOT\AppID
	
	All AppID settings can be manipulated by using the DCOMCNFG utility
	(Dcomcnfg.exe). The DCOMCNFG utility provides users with an easy-to-use
	interface for controlling these application-specific settings.
	
	However, a few issues must be noted when you use DCOMCNFG to make entries under
	the AppID key in the registry:
	
	- AppID\.exe Mapping:
	
	   - DCOMCNFG adds AppID\.exe mapping under HKEY_CLASSES_ROOT in the registry
	     only if none of the following keys is present:
	
	      - HKCR\CLSID\<Guid> (AppID key, named value)
	      - HKCR\APPID\<Guid>
	      - HKCR\APPID\Exename.exe
	
	     In this case, DCOMCNFG automatically synthesizes an AppID by using the
	     first CLSID it encounters in that server (as done for legacy servers that
	     were implemented before Windows NT 4.0), and adds it in the registry.
	
	   - If any of these AppID keys is present, DCOMCNFG does not add the
	     HKCR\APPID\Exename.exe key and or its value if it is not already present.
	
	     This AppID-to-.exe mapping is used by COM to get some of the
	     application-specific settings. If this mapping missing, such settings as
	     Custom Access Permission, static endpoint, Authentication level, and so on
	     are not used by COM, because COM has no way to map the .exe file name to
	     the AppID.
	
	- Setting Custom Access Permission:
	
	  When you set Custom Access permission by using DCOMCNFG, DCOMCNFG does not
	  make the entry under AppID\{GUID} in the registry unless you click Edit, and
	  then click OK. To do this:
	
	  a. Start DCOMCNFG, and then select your application properties.
	
	  b. Click the Security tab.
	
	  c. Click Custom Access permissions, click Edit, and then click OK. The Custom
	     access permissions are registered.
	
	- Long File Names for Applications:
	
	  DCOM uses the GetModuleFileName function to map the .exe file name to AppID
	  for access permissions.
	
	  GetModuleFileName returns long or short file names, based on what was passed
	  to the CreateProcess function. Therefore, if your localServer32 value (under
	  HKEY_CLASSES_ROOT\CLSID\{guid}\LocalServer32) has a long file name, this
	  AppID\.exe mapping needs to be a long file name, or vice versa, for a short
	  file name.
	
	REFERENCES
	==========
	
	For additional information about a DCOMCNFG bug in Windows NT 4.0 Service Pack 4
	(SP4), click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q216051 DCOMCNFG Windows NT 4.0 SP4 Does Not Write .exe Name under HKCR\APPID
	
	Additional query words: dcom appid exemapping appid/exe
	
	======================================================================
	Keywords          : kbDCOM kbOSWinNT400 kbOSWin2000 kbOSWin95 kbOSWin98 kbGrpDSCom kbDSupport 
	Technology        : kbAudDeveloper kbCOM kbCOMPlusSearch
	Version           : :1.0,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
