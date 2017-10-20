---
layout: page
title: "Q260059: Extending a Volume Set Requires Chkdsk to Be Run"
permalink: /kb/260/Q260059/
---

## Q260059: Extending a Volume Set Requires Chkdsk to Be Run

{% raw %}

	Article: Q260059
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Disk Administrator tool to create a volume set from an existing
	NTFS partition or to extend an existing NTFS volume set, Windows NT 4.0 requires
	that the computer be rebooted so that Chkdsk (Autochk.exe) can be run.
	
	CAUSE
	=====
	
	This requirement is caused by the design of the volume-extension routine.
	Because Chkdsk contains code to correct NTFS volumes that are incorrectly sized,
	Disk Administrator does not perform all the work in adjusting the size of the
	NTFS volume. Instead, Disk Administrator modifies the partition table
	information and some key header information for the NTFS volume, and then starts
	Chkdsk so that Chkdsk can adjust internal NTFS tables that must be resized.
	
	This method of resizing volumes works well but results in otherwise unnecessary
	downtime for the computer, particularly if the volume that you are extending
	contains many files.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT 4.0 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time     Size    File name       Platform
	  -----------------------------------------------------
	  03/14/2000  06:36p   430,864   Autochk.exe   Intel
	  03/14/2000  07:00p   375,056   Kernel32.dll  Intel
	  03/14/2000  06:39p   368,464   Ntfs.sys      Intel
	  03/14/2000  06:36p   663,312   Autochk.exe   Alpha
	  03/14/2000  07:00p   589,584   Kernel32.dll  Alpha
	  03/14/2000  06:38p   561,808   Ntfs.sys      Alpha
	
	
	
	NOTE: In order to avoid a full scan during autochk, it is also necessary to edit
	the system registry as follows:
	
	Ensure that a value named "NtfsEnableVolumeExtension" exists under:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\FileSystem
	
	The value should be a REG_DWORD and its data should be 0x1 to avoid the full
	scan.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Resizing an NTFS volume involves less work for Chkdsk than validating that an
	NTFS volume is completely correct (or "clean"). A reboot is still required for
	the resizing process after you install the updated files from the hotfix that is
	described in this article; however, if the volume is not marked "dirty" for any
	reason, the volume extension takes place without requiring the full three-pass
	scan of the volume that Autochk.exe typically performs. This typically takes no
	more than a few seconds.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
