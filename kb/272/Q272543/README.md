---
layout: page
title: "Q272543: Network Segment Object in Performance Monitor Has Limitations"
permalink: /kb/272/Q272543/
---

## Q272543: Network Segment Object in Performance Monitor Has Limitations

{% raw %}

	Article: Q272543
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses some limitations of the Network Segment object in the
	Performance Monitor utility.
	
	MORE INFORMATION
	================
	
	Unlike other objects, the Network Segment object does not start the collection
	of counter values at system startup. You have to start the collection and
	restrict its context to a process. The effects of the preceding behavior are
	summarized in the following list:
	
	- If you call the network segment counters in a program, the collection must be
	  started by calling the 1110 object, waiting for a short period of time, and
	  then calling "1110" or "Global" to obtain network statistics.
	
	- The raw values of the network segment counters are collected by the Bhmon.dll
	  tool (the Microsoft Windows NT version of Network Monitor) or the NmPerf.dll
	  tool (the Microsoft Systems Management Server, SMS, version of Network
	  Monitor).
	
	  Both tools (providers) do not have a provision to accumulate data between
	  runs. There is no preserved context and no service runs to accumulate data on
	  a ongoing basis; unlike the network interface provider, which always runs and
	  merely takes numbers from the Browser.dll tool.
	
	  In a process, the counters are accumulative, but as the process is stopped,
	  the counter values are lost. A program that runs in a different process can
	  start the cycle if it first starts the collection process, and then reads a
	  new set of counter values.
	
	  The preceding behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
