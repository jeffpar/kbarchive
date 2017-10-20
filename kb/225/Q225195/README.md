---
layout: page
title: "Q225195: Stop TSLS Prior to Installing Programs w/ODBC Connections"
permalink: /kb/225/Q225195/
---

## Q225195: Stop TSLS Prior to Installing Programs w/ODBC Connections

{% raw %}

	Article: Q225195
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4,4.0 SP5,4.0 SP6
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Terminal Server Licensing Service (TSLS) holds Open Database Connectivity (ODBC)
	Dynamic Link Library (DLL) files open when TSLS is running. Programs that use
	the ODBC DLL files such as SQL Server are not able to update those files during
	the installation of the program. Therefore, the TSLS service should be stopped
	prior to installing programs that require these ODBC DLL files to be updated
	during installation.
	
	Programs installed when the TSLS is running may display error messages similar to
	the following when the DLL files are in use and the installation is not
	completed successfuly.
	
	  Setup
	  ODBC components on your system need to be updated but one or more files are in
	  use or are marked as read-only. Please close all applications and press
	  retry. Note, that a reboot may be required to free the files.
	  Retry
	  Cancel
	
	NOTE: The error message does not indicate which programs are "in use" and there
	were no specific programs running. The TSLS service is what is in use.
	
	Terminal Server Service Pack 4, 5, and 6 (SP4, SP5, and SP6) should also have
	TSLS stopped prior to installation of the service pack because the TSLS DLL
	files need to be updated.
	
	MORE INFORMATION
	================
	
	To stop the Terminal Server Licensing service prior to installation:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Services.
	
	2. Locate and then select the Terminal Server Licensing Service.
	
	3. Click Stop, click Yes if you are prompted with "Are you sure you want to stop
	  the Terminal Server Licensing Service?"
	
	4. Click Close, and then proceed with installing programs in installation mode.
	
	Programs should be installed in installation mode and then you must switch back
	to execute mode to run those programs. This is the appropriate method for
	installation of all programs such as SQL Server and also for SP4, SP5, and SP6
	installation.
	
	Restart TSLS for normal operation. This can accomplished by following the
	procedure listed above and clicking Start in step 3 or by restarting the
	Terminal Server computer, which may be required based on the program. Restarting
	the computer is definitely required when installing a service pack. This starts
	the ODBC DLL files and they will be used by the new program as well as TSLS.
	
	REFERENCES
	==========
	
	TSLS ODBC
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServ400sp5 kbNTTermServ400sp6 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP4,4.0 SP5,4.0 SP6
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
