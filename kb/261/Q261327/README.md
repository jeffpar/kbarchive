---
layout: page
title: "Q261327: How to Add an Additional Parser to Network Monitor"
permalink: /kb/261/Q261327/
---

## Q261327: How to Add an Additional Parser to Network Monitor

{% raw %}

	Article: Q261327
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:2000; winnt:4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Network Monitor (Netmon.exe) is a packet-analyzing utility which is used
	primarily to troubleshoot network communication problems. Network Monitor comes
	with parsers which parse some of the most common protocols. However, as new
	standards and implementations evolve, there will be certain protocols for which
	Netmon does not contain parsers.
	
	MORE INFORMATION
	================
	
	Parsers for these protocols can be written by individuals, or, some of these
	parsers are written by other companies and can be found on the Internet. In
	addition, some of the additional parsers are included in the Microsoft Resource
	kits.
	
	The latest parsers usually include an autoinstall feature. Thus, all that is
	required is for the end user to place a copy of the parser .dll into the Parser
	subdirectory located under the Netmon installation directory. The location of
	this directory depends on the folder chosen during installation.
	
	When installing an older parser that does not include the autoinstall feature,
	you need to modify a few files. These include the Parser.ini in the Netmon
	directory, and the Tcpip.ini file, located under the Parser directory. The
	necessary modifications for these files should be provided in the form of a
	Readme.txt file or a similar file included with the parser.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search
	Version           : WINDOWS:2000; winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
