---
layout: page
title: "Q166526: WinNT Explorer Clears Archive Attribute after Perms Change"
permalink: kb/166/Q166526/
---

## Q166526: WinNT Explorer Clears Archive Attribute after Perms Change

	Article: Q166526
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbui
	Last Modified: 25-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While you change permissions on files or directories located on an NTFS
	partition, the file system sets the archive bit active and updates the time
	stamp for the file.
	
	Explorer will erroneously clear the archive bit while exiting the properties box
	by selecting OK all the way out after changing permissions. If the archive bit
	is cleared, the file or directory will not be backed-up during incremental
	backups.
	
	
	CAUSE
	=====
	
	This is caused by the order that the property pages are applied. When you change
	something through the permissions dialog box, it changes the file immediately,
	turning on the archive bit at that moment to the file or directory. When you
	press OK on that dialog box, the first page (General) sees that it wants the
	file to be non-archived, so it turns off the archive bit. Then the permissions
	page saves, which does nothing because it has already done its work.
	
	RESOLUTION
	==========
	
	After you change permissions on a file or directory, do NOT click OK, but
	instead go back to the General tab prior to leaving the properties dialog box.
	When you use this procedure, the file or directory will retain an accurate
	setting.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: archive bit reset
	
	======================================================================
	Keywords          : kbui 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbbug
	
	=============================================================================
	
