---
layout: page
title: "Q143378: Rclient.exe Fails After 9 Connections"
permalink: /kb/143/Q143378/
---

## Q143378: Rclient.exe Fails After 9 Connections

{% raw %}

	Article: Q143378
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbtool
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have nine connections of Rclient.exe running on the same computer then
	attempt to add a tenth (or more), the tenth connection will appear to stop
	responding. The first nine connections keep on working normally. Killing or
	exiting from one of the nine working connections will free up resources that
	allow the tenth connection to start working normally.
	
	CAUSE
	=====
	
	Rclient.exe is the client of the Remote Console utility, which allows the user
	to remotely take control of a CMD console session and is included in the Windows
	NT 4.0 Resource Kit. Remote Console is composed of a service, the server, and a
	client. (For more information on Remote Console, please refer to the resource
	kit help files.)
	
	The Remote Console client, Rclient.exe, makes intensive use of completion I/O
	ports. By default, it uses three worker threads: one to send the data to the
	server and two to read the data from the server. As Remote Console works
	entirely asynchronously, the two read operations are in a pending state most of
	the time, and all the redirector resources are consumed.
	
	
	RESOLUTION
	==========
	
	Modify the number of redirector worker threads at the client side by editing the
	registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	Modify the following value under the registry key
	
	HKEY_LOCAL_MACHINE\SYSTEM\CCS\Services\LanmanWorkstation\Parameters
	(CCS is for CurrentControlSet):
	
	ValueName = MaxThreads REG_DWORD
	Default = 17
	Modify to = 49
	
	This will enable up to 49 simultaneous instances of Rclient on a single computer.
	Notice that going above the limit also requires modification of the server
	parameters on the server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT versions
	3.51 and 4.0. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork kbtool 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : :3.51,4.0
	
	=============================================================================
	

{% endraw %}
