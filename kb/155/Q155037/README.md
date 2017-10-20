---
layout: page
title: "Q155037: No Services Have Been Registered to Use Licensing"
permalink: /kb/155/Q155037/
---

## Q155037: No Services Have Been Registered to Use Licensing

{% raw %}

	Article: Q155037
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you double-click the Licensing icon in Control Panel produces the following
	error message:
	
	  No Services have been registered to use Licensing.
	
	NOTE: This does not apply to Windows NT 4.0.
	
	RESOLUTION
	==========
	
	The FilePrintkey in the Licensing portion of the Windows NT registry has been
	removed. Follow these steps to install the FilePrintkey back in the Registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be resolved.
	Use Registry Editor at your own risk.
	
	If you currently have another working Windows NT computer you can restore the
	Fileprint key from the working computer by performing the following steps:
	
	1. From the working Windows NT computer, start Registry Editor (Regedt32.exe)
	  and select the following subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\LicenseInfo
	
	2. With the LicenseInfo Key selected, click Save Key from the Registry menu to
	  save the LicenceInfo Key to a file (for example, A:\Licenseinfo.tmp).
	
	3. Then take the floppy disk to the problem Windows NT computer and start
	  Registry Editor (Regedt32.exe) and select the following subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\LicenseInfo
	
	4. With the LicenseInfo Key selected, click Restore from the Registry menu to
	  restore the working LicenceInfo Key (for example, A:\Licenseinfo.tmp).
	
	If there is not another Windows NT computer available, you can manually add the
	FilePrint key in the Registry by performing the following steps:
	
	1. Start Registry Editor (Regedt32.exe) and select the following subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\LicenseInfo
	
	2. From the Edit menu, click Add Key and create a new value of Data Type
	  REG_DWORD named FilePrint.
	
	3. Select FilePrint, click Add Value from the Edit menu, and add new values for
	  each of the following:
	
	  Name: ConcurrentLimit
	  Type: REG_DWORD
	  Data: 0xa
	
	  Name: DisplayName
	  Type: REG_SZ
	  Data: Windows NT Server
	
	  Name: FamilyDisplayName
	  Type: REG_SZ
	  Data: Windows NT Server
	
	  Name: FlipAllow
	  Type: REG_DWORD
	  Data: 0x1
	
	  Name: LocalKey
	  Type: REG_DWORD
	  Data: 0
	
	  Name: Mode
	  Type: REG_DWORD
	  Data: 0x1
	
	
	Additional query words: prodnt licensing services
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	

{% endraw %}
