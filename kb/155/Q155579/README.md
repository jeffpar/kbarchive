---
layout: page
title: "Q155579: Shell Does Not Start After Logon"
permalink: kb/155/Q155579/
---

## Q155579: Shell Does Not Start After Logon

	Article: Q155579
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After a clean installation of Windows NT, you may be able to log on, but the
	shell may not start.
	
	NOTE: Typically it will be a user, not the administrator, who sees this behavior.
	
	CAUSE
	=====
	
	Security was inherited from the root, which does not allow a user access to
	%systemroot% because security has not been set on %systemroot%.
	
	RESOLUTION
	==========
	
	Using File Manager's or Windows NT Explorer's security dialogue box, set
	security on the %systemroot% directory such that "Everyone" has RX permissions,
	and clear the "Replace Permissions on Existing Files" check box. Also, clear the
	"Replace permissions on Subdirectories" check box.
	
	Alternately, "Everyone" can be replaced with the users you want to be able to log
	on.
	
	If the shell does not start for any account, you must use one of the following
	methods:
	
	- Reformat the drive and reinstall.
	
	- Boot from another installation of Windows NT that does not exhibit this
	  behavior and change the security on the volume as indicated for %systemroot%.
	
	- Install onto another volume that does not have such security.
	
	It will not be possible to perform a clean (fresh or non-upgrading) install again
	on the volume and avoid this problem unless security on the volume is changed as
	well.
	
	MORE INFORMATION
	================
	
	This problem does not occur after an upgrade from a previous version or if the
	volume installed upon is formatted during the install process.
	
	Typically, this problem is seen when the permissions on the volume on which the
	system was installed grant access to Administrators and System, but "Everyone"
	has been removed.
	
	Additional query words: prodnt winnt
	
	======================================================================
	Keywords          : kbenv kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
