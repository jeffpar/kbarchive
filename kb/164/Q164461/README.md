---
layout: page
title: "Q164461: Service Pack Removal Restores Compressed Files"
permalink: /kb/164/Q164461/
---

## Q164461: Service Pack Removal Restores Compressed Files

{% raw %}

	Article: Q164461
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP2
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP2 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Several Windows NT system files are compressed on an NTFS volume after removing
	Windows NT 4.0 Service Pack 2, and many of the files cannot be uncompressed.
	
	CAUSE
	=====
	
	On an NTFS partition, the uninstall directory created by Windows NT 4.0 Service
	Pack 2 is compressed, to save disk space. If you use Update.exe to remove the
	service pack, the original Windows NT files are restored with the compressed bit
	still set, regardless of the original state of these files before removing the
	service pack.
	
	Several of these files are in use by the system, and cannot be uncompressed while
	the operating system is running.
	
	RESOLUTION
	==========
	
	If you want the system files modified by Windows NT 4.0 Service Pack 2 to be
	uncompressed, you can manually decompress many of them by removing the
	Compressed attribute in the Windows NT Explorer properties dialog box.
	
	To uncompress the files that are currently in use by the system, you must either
	perform the uncompression from a parallel installation of Windows NT, or
	uncompress the %SystemRoot%\$NtServicePackUninstall$ hidden directory before
	removing Windows NT 4.0 Service Pack 2.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0 Service
	Pack 2. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt changed SP2 sp unable can't uninstall uninstalled deinstall deinstalled de- un- install installed uninstallation deinstallation expand expanded decompress
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp2 kbWinNTSsearch kbWinNTS400sp2 kbWinNTS400search kbWinNTS400
	Version           : :4.0,4.0 SP2
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
