---
layout: page
title: "Q128796: Running After Dark: Unable to Access Serial and Parallel Ports"
permalink: /kb/128/Q128796/
---

## Q128796: Running After Dark: Unable to Access Serial and Parallel Ports

{% raw %}

	Article: Q128796
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When After Dark version 2.0 loads in Windows NT and you attempt to start an
	application that uses a device connected to a serial communication (COM) port,
	the following error message appears:
	
	  The selected COM port is either not supported or is being used by another
	  device.
	
	  Select another port.
	
	If you select another port, the same error message appears again.
	
	CAUSE
	=====
	
	This problem occurs when After Dark 2.0 SystemIQ Activity Monitor runs before
	you start the application using the COM ports.
	
	SystemIQ Activity Monitor monitors serial and parallel port activity as well as
	CPU load. As activity of the CPU or external devices increases, After Dark does
	not blank out the screen to provide maximum processing time to other tasks.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Run the After Dark Control program and choose Setup.
	
	2. Clear the SystemIQ Activity Monitor check box.
	
	3. Using a text editor, open the AD_PREFS.INI file. This file is located at the
	  Windows NT %SystemRoot% directory.
	
	4. In the [After Dark] section of AD_PREFS.INI, change "WatchComPorts=1,2,3,4"
	  to ";WatchComPorts=1,2,3,4" (without the quotation marks).
	
	  NOTE: If one specific COM port is used by the COM device continuously, such as
	  Terminal or Remote Access Service), remove only the port number. You do not
	  have to remark out (;) the entire line.
	
	5. If you experience problems with the parallel ports, change the
	  "WatchParallelPorts=1,2,3" entry in the [After Dark] section of AD_PREFS.INI
	  file to ";WatchParallelPorts=1,2,3" (without the quotation marks).
	
	  NOTE: If one specific parallel port is used by a parallel device continuously,
	  remove only the port number. You do not have to remark out (;) the entire
	  line. The problem with parallel ports does not cause the message above to
	  appear.
	
	The product discussed here is manufactured by Berkeley Systems, Inc., a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 3.10 ad prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	

{% endraw %}
