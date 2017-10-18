---
layout: page
title: "Q242154: Server Does Not Start with Stop c0000221 Error Message"
permalink: kb/242/Q242154/
---

## Q242154: Server Does Not Start with Stop c0000221 Error Message

	Article: Q242154
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your server may not start and the following error message may be displayed:
	
	  Stop c0000221 {bad image checksum} The image oleaut32.dll is possibly corrupt
	  the header checksum does not match the computed checksum.
	
	NOTE: The error message may also reference a file other than Oleaut32.dll.
	
	CAUSE
	=====
	
	This behavior can occur if you install a program that replaces the Oleaut32.dll
	file in the Winnt\System32 folder.
	
	RESOLUTION
	==========
	
	To resolve this issue, repair the damaged file:
	
	1. Perform a parallel installation of the appropriate version of Windows NT 4.0
	  into a new folder (for example, C:\Winntfix).
	
	2. Start into the parallel installation and apply the same service pack that
	  exists on the original installation.
	
	3. After you apply the service pack, restart the computer and delete all copies
	  of the Oleaut32.dll file in the original installation, leaving only the new
	  version of that file located in the %WinDir%\System32 folder on the parallel
	  installation of Windows NT.
	
	4. Copy the %WinDir%\System32\Oleaut32.dll file to the %WinDir%\System32 folder
	  on the original installation.
	
	5. Restart into the original Windows NT installation. After the original
	  installation is repaired, delete the parallel folder and remove any
	  references to it from the Boot.ini file.
	
	NOTE: Be sure the parallel installation matches the exact operating system
	version number and service pack level of the damaged installation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
