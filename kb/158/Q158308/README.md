---
layout: page
title: "Q158308: XFOR: Err Msg: Initialization of Dynamic Link Library Failed"
permalink: /kb/158/Q158308/
---

## Q158308: XFOR: Err Msg: Initialization of Dynamic Link Library Failed

	Article: Q158308
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Starting more than seven combined instances of the PCMTA, MSMI, IMC, Schedule+
	Free & Busy Connector, MTA, or Directory Synchronization fails on a system
	running Windows NT 4.0 (or Windows NT 4.0 SP1) and Microsoft Exchange Server
	4.0. Seven instances is generally the limit for running these services
	concurrently; however, this may vary, depending on the order in which the
	services are started. The eighth instance generates an error and it fails to
	start. The error message is as follows:
	
	  Initialization of the dynamic link library D:\WINNT\system32\USER32.dll has
	  failed. The process is terminating abnormally.
	
	This is followed by a second error message:
	
	  Could not start the <%insert service name here%> on
	  <%computername%>.
	  Error 2186: The service is not responding to the control function.
	
	No event log errors are reported (with logging at maximum for Microsoft
	Exchange).
	
	CAUSE
	=====
	
	The system has run out of memory for creating a new desktop heap for the service
	being started.
	
	RESOLUTION
	==========
	
	To fix this problem, edit the registry and restart the computer.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows NT. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Under the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	    System\CurrentControlSet\Control\SessionManager\SubSystems\Windows
	
	  The default data for this value will look something like the following (all on
	  one line):
	
	  %SystemRoot%\system32\csrss.exe ObjectDirectory=\Windows
	  SharedSection=1024,3072 Windows=On SubSystemType=Windows
	  ServerDll=basesrv,1
	  ServerDll=winsrv:UserServerDllInitialization,3
	  ServerDll=winsrv:ConServerDllInitialization,2 ProfileControl=Off
	  MaxRequestThreads=16
	
	3. Make the following change to this value:
	
	  Scan along the line until you reach the part that defines the SharedSection
	  values and add ",512" after the second number. This value should now look
	  something like the following:
	
	     %SystemRoot%\system32\csrss.exe ObjectDirectory=\Windows
	     SharedSection=1024,3072,512 Windows=On SubSystemType=Windows
	     ServerDll=basesrv,1 ServerDll=winsrv:UserServerDllInitialization,3
	     ServerDll=winsrv:ConServerDllInitialization,2 ProfileControl=Off
	     MaxRequestThreads=16
	
	4. Quit Registry Editor and restart the computer.
	
	This change will limit the size of desktop heaps created by non-interactive
	services to 512K, which should be ample for most services.
	
	For a fuller definition of what the first two parameters of SharedSection mean,
	see Microsoft Knowledge Base article Q126962, referenced below.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q142676 Overcoming User32.dll Initialization Failures
	
	  Q126962 Increasing the Desktop Application Heap
	
	
	Additional query words: 4.00 PCMTA event id 7000
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
