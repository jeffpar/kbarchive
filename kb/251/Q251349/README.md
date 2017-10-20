---
layout: page
title: "Q251349: 3270 Applet Stops Responding at Blank Screen on Terminal Server"
permalink: /kb/251/Q251349/
---

## Q251349: 3270 Applet Stops Responding at Blank Screen on Terminal Server

{% raw %}

	Article: Q251349
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the SNA Server client is installed on a Terminal Server computer, the 3270
	Applet may stop responding at a blank screen when it tries to connect to the
	host. There are no errors logged in the event log on the SNA Server or on the
	client.
	
	RESOLUTION
	==========
	
	To resolve this problem, run the appropriate Terminal Server compatibility
	script for the type of SNA client you have installed (for example Windows 95,
	Windows 98, or Windows NT). To do this, perform the following steps:
	
	1. Stop SnaBase on the Terminal Server computer, and then open a command prompt.
	
	2. Change to install mode by running the following command:
	
	  change user /install
	
	3. Run the compatibility script for the type of SNA client that is installed.
	
	  For SNA 4.0SP3
	
	  The following SNA client scripts for Windows NT 4.0 Terminal Server are
	  located on the SNA Server 4.0 SP3 compact disc in the Trmsrv\Nt40 folder:
	
	  Snantcli.cmd
	  Sna9xcli.cmd (only needs to be run if the Terminal Server file system is NTFS)
	
	  The following Windows 2000 SNA client script is available on the SNA Server
	  4.0 SP3 CD in the Trmsrv\W2k folder:
	
	  Snantcli.cmd
	
	  For SNA Server 4.0 SP2
	
	  For SNA Server 4.0 SP2, the compatibility scripts are located in the Trmsrv
	  folder. The following SNA client scripts are available:
	
	  SNA4sp2c.cmd (Windows NT client)
	  SNA4sp29.cmd (Windows 95/Windows 98 client. You do not need to run this if the
	  Terminal Server file system is FAT.)
	
	  For SNA Server 3.0 SP3 and later
	
	  For SNA Server 3.0, the compatibility scripts are located in the
	  Wtsrv\Application Compatibility Scripts folder. The following SNA client
	  compatibility script is available:
	
	  Mssna30.cmd (SNA Server or Client version 3.0)
	
	4. Change back to execute mode by running the following command:
	
	  change user /execute
	
	Note: The Terminal Server compatibility scripts for SNA Server were not included
	with versions prior to the ones listed above.
	
	MORE INFORMATION
	================
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	
	=============================================================================
	

{% endraw %}
