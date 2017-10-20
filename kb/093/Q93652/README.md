---
layout: page
title: "Q93652: WFWG Err Msg with DblSpace: PRO0003E: PROTOCOL.INI File Open"
permalink: /kb/093/Q93652/
---

## Q93652: WFWG Err Msg with DblSpace: PRO0003E: PROTOCOL.INI File Open

{% raw %}

	Article: Q93652
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22; WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SYMPTOMS
	========
	
	If Windows for Workgroups is installed on a DoubleSpace-compressed drive, you
	may receive one of the following error messages or the system may stop
	responding ("hang") when the network drivers are loading:
	
	- PRO0003E: PROTOCOL.INI file open failure
	
	- Unable to open Protocol Manager
	
	- Error 3653: The protocol manager could not be found
	
	CAUSE
	=====
	
	These errors occurs because Windows for Workgroups cannot find the path to the
	PROTOCOL.INI file in memory.
	
	WORKAROUND
	==========
	
	To work around this problem, make sure that the DEVICEHIGH command for
	DoubleSpace is located before the DEVICE command for PROTMAN.DOS in the
	CONFIG.SYS file. For example:
	
	     devicehigh=c:\dos\dblspace.sys /move
	     device=c:\windows\protman.dos /i:c:\windows
	
	Additional query words: 6.00 6.20 3.10 wfw wfwg dblspace
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22; WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
