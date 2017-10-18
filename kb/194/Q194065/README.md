---
layout: page
title: "Q194065: How to Reset License Manager Throughout an Enterprise"
permalink: kb/194/Q194065/
---

## Q194065: How to Reset License Manager Throughout an Enterprise

	Article: Q194065
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article is an addendum to the following article in the Microsoft Knowledge
	Base:
	
	  Q153140 How to Reset License Manager Information
	
	Fully resetting License Manager information throughout an enterprise may very
	well require not only deleting the relevant files on the primary domain
	controller (PDC) or "Enterprise Server," but actually deleting the license
	service files on EVERY server that participates in the license replication.
	
	A batch file has been written that, combined with the NETDOM, NETSVC, and REG
	utilities from the Windows NT Server 4.0 Resource Kit, will automatically
	discover all servers engaging in license replication, and, through iteration,
	stop the License Logging Service (LLS), delete the associated LLS files, restart
	the service, and queue LLS replication to take place immediately. In an
	enterprise environment this will significantly reduce the amount of work
	involved in this task.
	
	MORE INFORMATION
	================
	
	Here is an overview of how this batch process works. All files are included
	below. The batch process is launched by running Restart.bat from the command
	prompt.
	
	Please note, this process requires the following utilities from the Windows NT
	Server 4.0 Resource Kit:
	
	- Netdom.exe
	
	- Netsvc.exe
	
	- Reg.exe
	
	The following are the sequence of events:
	
	1. The user runs RESTART "License Logging Service" from the command prompt.
	
	2. Restart.bat calls NETDOM and creates text files containing a list of all
	  PDCs, BDCs, and member servers in the domain.
	
	3. Iterating through this generated list, Restart.bat performs the following
	  steps:
	
	  a. Stops the LLS Service on all servers in the domain.
	
	  b. Deletes the three relevant LLS files, if detected (Cpl.cfg, Llsuser.lls,
	     and Llsmap.lls).
	
	  c. Restarts the LLS Service on all servers in the domain.
	
	  d. Schedules LLS for replication in the next five minutes on each server.
	
	4. After LLS replication has taken place, an additional batch file,
	  Llsrtime.bat, should be run to reset all servers to the default settings for
	  LLS replication, which is once every 24 hour period.
	
	TEXT OF BATCH FILES
	-------------------
	
	Restart.Bat:
	
	   echo off
	   cls
	   if (%1)==() goto NoParams
	   echo Creating list of domain controllers, please wait.
	   netdom bdc | find "Found PDC " > pdc.txt
	   netdom /noverbose bdc > netdom.txt
	   netdom /noverbose member > netmember.txt
	
	   rem Stop LLS on all Servers....
	   Echo Stopping License Logging Service on all servers.  Please wait.
	   for /F "tokens=3" %%a in (pdc.txt) do call stop.bat %%a %1
	   for /F "tokens=1" %%a in (netdom.txt) do call stop.bat %%a %1
	   for /F "tokens=1" %%a in (netmember.txt) do call stop.bat %%a %1
	   Echo Done stopping services.
	   Echo.
	
	   rem Delete LLS files on all servers
	   Echo Deleting LLS configuration files on all domain controllers. Please
	    wait.
	   for /F "tokens=3" %%a in (pdc.txt) do call dellls.bat %%a
	   for /F "tokens=1" %%a in (netdom.txt) do call dellls.bat %%a
	   for /F "tokens=1" %%a in (netmember.txt) do call dellls.bat %%a
	   Echo Done deleting LLS files.
	   Echo.
	
	   rem Start LLS on all servers
	   Echo Starting LLS Service on all servers.  Please wait.
	   for /F "tokens=3" %%a in (pdc.txt) do call start.bat %%a %1
	   for /F "tokens=1" %%a in (netdom.txt) do call start.bat %%a %1
	   for /F "tokens=1" %%a in (netmember.txt) do call start.bat %%a %1
	   Echo Done starting services.
	   Echo.
	
	   Echo Resetting replication time on all servers.  Please wait.
	   for /F "tokens=3" %%a in (pdc.txt) do call sett.bat %%a %1
	   for /F "tokens=1" %%a in (netdom.txt) do call sett.bat %%a %1
	   for /F "tokens=1" %%a in (netmember.txt) do call sett.bat %%a %1
	   Echo Done stopping services.
	   Echo.
	   goto bottom
	
	   echo ---------
	   echo - Done! -
	   echo ---------
	   goto bottom
	   :NoParams
	   echo usage: RESTART "Service Name"
	   echo.
	   echo. i.e.- RESTART "License Logging Service"
	   echo.
	   :bottom
	
	Restart2.Bat:
	
	   echo Stopping %2 on %1
	   netsvc %2 %1 /stop
	   netsvc %2 %1 /start
	
	Start.Bat:
	
	   echo Starting %2 on %1
	   netsvc %2 %1 /start
	
	Stop.Bat:
	
	   echo Stopping %2 on %1
	   netsvc %2 %1 /stop
	
	Dellls.Bat:
	
	   Echo Now deleting files on %1.
	
	   if exist %1\admin$\system32\cpl.cfg del
	       %1\admin$\system32\cpl.cfg
	   if exist %1\admin$\system32\lls\llsuser.lls del
	       %1\admin$\system32\lls\llsuser.lls
	   if exist %1\admin$\system32\lls\llsmap.lls del
	       %1\admin$\system32\lls\llsmap.lls
	
	(wrapped lines must be entered on one line)
	
	Sett.Bat:
	
	   echo Now setting LLS replication time on %1
	
	   reg update HKLM\SYSTEM\CurrentControlSet\ 
	       Services\LicenseService\Parameters\ReplicationTime=300 %1
	
	Llsrtime.Bat:
	
	   rem reset replication period for LLS
	   Echo Stopping LLS Service on all domain controllers.  Please wait.
	   for /F "tokens=3" %%a in (pdc.txt) do call setb.bat %%a %1
	   for /F "tokens=1" %%a in (netdom.txt) do call setb.bat %%a %1
	   for /F "tokens=1" %%a in (netmember.txt) do call setb.bat %%a %1
	   Echo Done stopping services.
	   Echo.
	
	Setb.Bat:
	
	   echo Now setting LLS replication time on %1
	
	   reg update HKLM\SYSTEM\CurrentControlSet\ 
	       Services\LicenseService\Parameters\ReplicationTime=86400 %1
	
	Additional query words: Q153140
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbinfo
	
	=============================================================================
	
