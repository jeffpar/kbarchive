---
layout: page
title: "Q319335: Err Msg: Server Service Was Unable to Map Error Code 1722"
permalink: /kb/319/Q319335/
---

## Q319335: Err Msg: Server Service Was Unable to Map Error Code 1722

{% raw %}

	Article: Q319335
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg ocsso
	Last Modified: 18-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following event may be repeatedly displayed in the System log of the Event
	Viewer on your Windows NT Server 4.0-based computer:
	
	  Event ID: 2510
	  Source: SRV
	  Type: Error
	  Description: The server service was unable to map error code 1722.
	
	In this scenario, client computers on the network can view shared printers, but
	they are unable to connect or print to them.
	
	CAUSE
	=====
	
	This behavior can occur if the Windows Spooler service is stopped.
	
	RESOLUTION
	==========
	
	To resolve this issue, use one of the following methods as appropriate to your
	situation.
	
	Method 1: Start the Spooler Service
	-----------------------------------
	
	If you have shared printers on the network, or if you do not want the Spooler
	service disabled, restart the Spooler service. To do this, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Services.
	
	3. In the Service list, click Spooler, and then click Startup.
	
	4. Under Startup Type, select Automatic (if it is not already selected), and
	  then click OK.
	
	5. Click Start.
	
	6. Click Close, and then restart the computer.
	
	Method 2: Remove Printer Shares
	-------------------------------
	
	If you do not want to leave the Spooler service running, remove all printer
	shares, and then disable the Spooler service. To do this, follow these steps:
	
	1. Start the Spooler service. To do this, follow these steps:
	
	  a. Click Start, point to Settings, and then click Control Panel.
	
	  b. Double-click Services.
	
	  c. In the Service list, click Spooler, and then click Startup.
	
	  d. Click Close.
	
	2. Click Start, point to Settings, and then click Printers.
	
	3. Right-click the printer that you want, and then click Sharing on the shortcut
	  menu that appears.
	
	4. Click Not Shared, and then click OK.
	
	5. Follow steps 3 and 4 to disable sharing on each shared printer that is listed
	  in the Printers folder.
	
	6. When you are finished removing the printer shares, disable the Spooler
	  service. To do this, follow these steps:
	
	  a. Click Start, point to Settings, and then click Control Panel.
	
	  b. Double-click Services.
	
	  c. In the Service list, click Spooler, and then click Startup.
	
	  d. Under Startup Type, click Disabled, and then click OK.
	
	  e. Click Stop, and then click Yes in the confirmation-message dialog box that
	     appears.
	
	  f. Click Close.
	
	7. Restart the computer.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q199915 Spoolss.exe Generates Dr.Watson Log
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg ocsso 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
