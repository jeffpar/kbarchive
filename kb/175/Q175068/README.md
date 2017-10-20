---
layout: page
title: "Q175068: Zero Administration Kit Server Setup Does not Finish"
permalink: /kb/175/Q175068/
---

## Q175068: Zero Administration Kit Server Setup Does not Finish

{% raw %}

	Article: Q175068
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:; WINNT:4.0
	Operating System(s): 
	Keyword(s): kbsetup kbtool
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Zero Administration Kit for Windows NT Workstation 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install a Zero Administration Kit (ZAK) Server, you receive the
	following prompt:
	
	  Enter the location of Windows NT 4.0
	
	After you specify the appropriate location, Setup may not finish, and you may not
	receive an error message.
	
	CAUSE
	=====
	
	This issue can occur when the location you specify is a shared network folder
	instead of the Windows NT 4.0 CD-ROM.
	
	RESOLUTION
	==========
	
	To resolve this issue, copy the Cdrom_w.40 file from the root folder of the
	Windows NT Workstation CD-ROM to the shared network folder that contains the
	Windows NT 4.0 installation files.
	
	For information about how to copy a file, click Start, click Help, click the
	Index tab, type "copying" (without quotation marks), double- click the "copying
	files" topic, and then double-click the "To copy a file or folder" topic.
	
	======================================================================
	Keywords          : kbsetup kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbZAWNTW400
	Version           : WINDOWS:; WINNT:4.0
	Hardware          : x86
	
	=============================================================================
	

{% endraw %}
