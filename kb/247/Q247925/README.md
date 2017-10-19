---
layout: page
title: "Q247925: InstallShield Hangs When You Try to Install 32-Bit Programs"
permalink: /kb/247/Q247925/
---

## Q247925: InstallShield Hangs When You Try to Install 32-Bit Programs

	Article: Q247925
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install 32-bit programs using InstallShield (Setup.exe),
	InstallShield may stop responding (hang).
	
	CAUSE
	=====
	
	This behavior can occur when the Microsoft Windows NT 4.0 virtual DOS machine
	(VDM) files are corrupted.
	
	RESOLUTION
	==========
	
	To resolve this behavior, rename the following files by using the .old file name
	extension at a command prompt, expand the original files from your Windows NT
	4.0 CD-ROM, and then reapply the latest Windows NT 4.0 service pack:
	
	+--------------------------------------------------------+
	| Autoexec.nt  |                                         | 
	+--------------------------------------------------------+
	| Config.nt    |                                         | 
	+--------------------------------------------------------+
	| Vdmredir.dll | (MS-DOS redirector driver)              | 
	+--------------------------------------------------------+
	| Krnl386.exe  | (16-bit kernel)                         | 
	+--------------------------------------------------------+
	| User.exe     | (16-bit subsystem file)                 | 
	+--------------------------------------------------------+
	| Gdi.exe      | (16-bit and 32-bit handles video calls) | 
	+--------------------------------------------------------+
	| Wowexec.exe  | (Win16-bit subsystem)                   | 
	+--------------------------------------------------------+
	| Ntvdm.exe    | (MS-DOS subsystem)                      | 
	+--------------------------------------------------------+
	| Ntio.sys     | (I/O driver)                            | 
	+--------------------------------------------------------+
	| Ntdos.sys    | (MS-DOS driver)                         | 
	+--------------------------------------------------------+
	| Redir.exe    | (network redirector)                    | 
	+--------------------------------------------------------+
	
	Additional query words: ntvdm sbs
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
