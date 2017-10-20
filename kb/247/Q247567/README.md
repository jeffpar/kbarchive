---
layout: page
title: "Q247567: Service Pack 4 Switches Passed to Archive Do Not Work"
permalink: /kb/247/Q247567/
---

## Q247567: Service Pack 4 Switches Passed to Archive Do Not Work

{% raw %}

	Article: Q247567
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you want to install Windows NT Service Pack 4 in an unattended mode by use
	of the -u and -q switches, the installation may stop when the license agreement
	appears, possibly requiring operator input for the service pack installation to
	proceed. The -u and -q switches can be applied to the archive for Service Pack 4
	(Sp4i386.exe) or to the Service Pack 4 update program (Update.exe) produced by
	expanding the archived service pack. The archive and the update program are able
	to interpret and accept the available switches.
	
	CAUSE
	=====
	
	The issue can occur when switches are used with the archive and the .exe file
	extension is included. For example, if you run sp4i386.exe -u or -q, the license
	agreement is presented and the installation stops.
	
	RESOLUTION
	==========
	
	To resolve this issue, when you applying Service Pack 4 by archive while using
	switches, do not use the .exe extension. Instead, use the following syntax,
	"sp4i386 -u" (without the quotation marks) or "sp4i386 -q" (without the
	quotation marks).
	
	MORE INFORMATION
	================
	
	The following are installation switches that can be used with the Sp4i386.exe
	archive or the Update.exe tool. The following syntax help is available by typing
	update "/?" (without the quotation marks), but only after the Update.exe tool.
	Note that /? does not work when passed to the Service Pack 4 Archive:
	
	UPDATE [-u] [-f] [-n] [-o] [-z] [-q]
	
	- -u unattended mode
	
	- -f forces other programs to close at shutdown
	
	- -n do not back up files for uninstallation
	
	- -o overwrite OEM files without prompting
	
	- -z do not reboot when installation is complete
	
	- -q quiet mode, no user interaction
	
	See the Readme.txt file included in the Service Pack 4 archive or on the Service
	Pack 4 CD-ROM for more information.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
