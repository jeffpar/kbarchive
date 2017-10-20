---
layout: page
title: "Q157660: XCON: Troubleshooting w/out MTA Object in Administrator Program"
permalink: /kb/157/Q157660/
---

## Q157660: XCON: Troubleshooting w/out MTA Object in Administrator Program

{% raw %}

	Article: Q157660
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can still set Diagnostic Logging on the MSExchangeMTA and check Message
	Transfer Agent (MTA) queues even when no MTA object is exposed in the Microsoft
	Exchange Server Administrator program.
	
	The MTA will not be exposed if the version of Microsoft Exchange Server is not
	the Enterprise Edition and neither the Connectors disk nor the X.400 Connector
	disk has been installed.
	
	MORE INFORMATION
	================
	
	If you are trying to troubleshoot a Microsoft Mail Connector or Internet Mail
	Connector (IMC) issue and no Message Transfer Agent object exists, you can still
	set logging levels and view queue information as follows:
	
	Diagnostic Logging
	------------------
	
	Diagnostic Logging for the MSExchangeMTA can normally be set in one of three
	ways. The most common is via the Diagnostic Logging property page of the Message
	Transfer Agent object.
	
	Even when this is not available, logging can be set on the Diagnostic Logging
	property page of the <ServerName> container. There are two ways to set
	Diagnostic Logging:
	
	- On the Diagnostic Logging property page, select MSExchangeMTA in the Services
	  pane.
	
	- MSExchangeMTA Diagnostic Logging can also be set by modifying the values in
	  the following registry key:
	
	  WARNING: Using Registry Editor incorrectly can cause serious problems that may
	  require you to reinstall Windows NT. Microsoft cannot guarantee that problems
	  resulting from the incorrect use of Registry Editor can be solved. Use
	  Registry Editor at your own risk.
	
	  1. Start Registry Editor (Regedt32.exe).
	
	  2. Under the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	   SYSTEM\CurrentControlSet\Services\MSExchangeMTA\Diagnostics
	
	  3. Modify the value. A value of 0 corresponds with None, 1 with Minimum, 3
	     with Medium and 5 with Maximum.
	
	  4. Quit Registry Editor.
	
	Viewing Queues
	--------------
	
	To view queues without an MTA object, use the Windows NT Performance Monitor as
	follows:
	
	1. At a new chart in Performance Monitor, on the Edit menu, click Add to Chart.
	
	2. Select the MSExchangeMTA Connections Object.
	
	3. Select the Queue Length Counter to highlight it.
	
	4. Use the Shift and Page Down keys (or any other method) to select everything
	  in the Instance box.
	
	5. Click the Add button.
	
	6. Select the MSExchangeMTA Object.
	
	7. Select the Work Queue Length Counter.
	
	8. Click the Add button.
	
	9. Click the Done button.
	
	10. On the Options menu, click Select.
	
	11. Change the Gallery from Graph to Histogram.
	
	12. Change the Vertical Maximum from 100 if this is to high or low for your
	  expected queue lengths.
	
	Additional query words: XFOR
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	

{% endraw %}
