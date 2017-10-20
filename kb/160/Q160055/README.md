---
layout: page
title: "Q160055: Warning Event ID 4010 Generated on Windows NT LPD Server"
permalink: /kb/160/Q160055/
---

## Q160055: Warning Event ID 4010 Generated on Windows NT LPD Server

{% raw %}

	Article: Q160055
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a client computer uses line printer remote (LPR) to send a print job to a
	Windows NT computer running the TCP/IP Printing Service, the print job is not
	accepted by the server. An Event 4010 from the Line Printer Daemon Service
	(LPDSVC) will be generated in the Event Log. The description reads as follows:
	
	  Request from X.X.X.X could not be satisfied: possibly due to network problems
	
	where X.X.X.X is the TCP/IP address of the client computer.
	
	CAUSE
	=====
	
	This problem occurs if the printer being used physically resides on a Windows
	for Workgroups or Windows 95 computer. If the printer configuration on the
	Windows NT computer was setup by choosing Connect To from the Printer menu and
	manually specifying the name of the server and printer, then the
	\\server\printer port name created will cause this error. If this same port is
	later used when performing a Printer-Create, the error will still occur. The
	port must be created via the Local Port option of adding a new port.
	
	
	RESOLUTION
	==========
	
	1. Delete the current printer.
	
	2. Remove the port that was created. Under Windows NT 3.51, this can be done
	  from the Properties-Details dialog box of another local printer on the
	  Windows NT computer (highlight the port in the Print To Additional Ports list
	  and choose Delete Port). On Windows NT 4.0, this can be done from the Ports
	  tab of the Properties dialog box for another local printer (select the port
	  and choose Delete Port).
	
	3. Close Printer folder or Print Manager then stop the Spooler service.
	
	4. Restart the Spooler service and restart Print Manager or open the Printers
	  folder.
	
	5. On a Windows NT 3.51 computer, set up the printer again by choosing
	  Printer-Create. For the Print To list box, choose Other, then choose Local
	  Port, then specify the \\server\printer for the requested port name. Continue
	  with printer setup. To create the printer under Windows NT 4.0, use the Add
	  Printer wizard and choose My Computer. At the next window, choose Add Port,
	  then choose Local Port. Now specify the \\server\printer for the requested
	  port name. Continue with printer setup.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.51 and
	4.0. This problem was corrected in the latest Microsoft Windows NT 4.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: lanman port prodnt
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	
	=============================================================================
	

{% endraw %}
