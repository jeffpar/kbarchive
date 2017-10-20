---
layout: page
title: "Q166828: Upgrade Installation of Windows NT 4.0 Results In STOP Errors"
permalink: /kb/166/Q166828/
---

## Q166828: Upgrade Installation of Windows NT 4.0 Results In STOP Errors

{% raw %}

	Article: Q166828
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup
	Last Modified: 25-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows NT 4.0 as an upgrade over an existing installation of
	Windows NT 4.0 that had a service pack installed, one or more of the following
	errors may occur:
	
	  STOP: 0x0000001E (0xC0000005, 0xFF1BBD79, 0x00000000, 0x00000038)
	  KMODE_EXCEPTION_NOT_HANDLED Address ff1bbd79 has base at ff1ae000 - tcpip.sys.
	
	-or-
	
	  STOP 0x00000050 (0xFF10c004, 0x00000000, 0x00000000, 0x00000000)
	  PAGE_FAULT_IN_NONPAGED_AREA
	
	NOTE: The first argument may change but the STOP code (0x00000050) is the same.
	This may occur either as an in-place upgrade of Windows NT or as an upgrade of
	Windows NT Workstation to Windows NT Server.
	
	CAUSE
	=====
	
	Windows NT 4.0 was reinstalled as an upgrade over an installation of Windows NT
	4.0 that had Service Pack 2 or greater installed and Remote Access Service (RAS)
	was installed.
	
	RESOLUTION
	==========
	
	For more information on these specific errors and their resolutions, please
	reference the following Microsoft Knowledge Base articles:
	
	  ARTICLE-ID: Q162205
	  TITLE : "Stop 0x1E" Message Reinstalling Windows NT with SP3 and RAS
	
	  ARTICLE-ID: Q162837
	  TITLE : Replacing TCP/IP After SP2 Causes STOP 0x00000050
	
	If you are trying to restore the system to a bootable condition and remove
	Service Pack 2, use the following steps:
	
	1. If the partition is formatted as NTFS, install Windows NT to a different
	  directory so the files on the partition are accessable.
	
	2. If the partition is formatted as FAT, boot to MS-DOS.
	
	3. Change directories to the Service Pack 2 uninstall directory:
	
	  (%WinRoot%\$NtServicePackUninstall$)
	
	  -or-
	
	  ($NTSER~1 or similar name if under DOS)
	
	4. Copy all the *.sys files in the uninstall directory to the
	  %WinRoot%\System32\Drivers of the original Windows NT directory.
	
	5. Copy Win32k.sys from the uninstall directory to%WinRoot%\System32.
	
	6. Copy all other files to %WinRoot%\System32.
	
	7. The system should now be starting correctly. Other errors may be encountered
	  at this point, but the system should start.
	
	8. Start the Service Pack 2 update program but select to uninstall the service
	  pack. This should bring your system back to a PRE-SP2 configuration.
	
	9. If the service pack was not the source of your original problem, Microsoft
	  suggests you re-apply the service pack, but choose NOT to make an uninstall
	  directory in order to preserve your original Windows NT system files already
	  contained in the previous uninstall directory.
	
	STATUS
	======
	
	Installing Windows NT 4.0 as an upgrade over an installation of the same version
	is not recommended or supported. If files need to be replaced, boot to MS-DOS if
	using a partition formatted as FAT and replace the damaged files, or perform a
	new installation of Windows NT to a different directory so a partition formatted
	as NTFS can be accessed and then replace the affected files.
	
	An upgrade will attempt to replace files and modify the registry. This may result
	in mismatched files and/or corruption to the registry that may leave the system
	unbootable. The in-place upgrade does not replace all service pack files, thus
	creating an incompatible mix of service pack and non- service pack system
	files.
	
	
	MORE INFORMATION
	================
	
	This process will NOT work if Service Pack 2 was installed more than once and
	the uninstall option was selected without first uninstalling the service pack,
	thus overwriting the uninstall directory. Nor will this work if the uninstall
	option was not selected during install of the Service Pack. In this case, a
	parallel install of Windows NT will be needed so a tape backup of the original
	install can be restored.
	
	Additional query words: sp2 SP 0x1E 0x50 ntfaqset
	
	======================================================================
	Keywords          : kberrmsg kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
