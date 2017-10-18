---
layout: page
title: "Q252876: How to View HTTP Data Frames Using Network Monitor"
permalink: kb/252/Q252876/
---

## Q252876: How to View HTTP Data Frames Using Network Monitor

	Article: Q252876
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbDSupport kbiis500
	Last Modified: 23-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides detailed steps on using the Network Monitor included with
	Windows 2000 Server to view HTTP data frames.
	
	MORE INFORMATION
	================
	
	Install the Network Monitor
	---------------------------
	
	1. In Control Panel, double-click Add/Remove Programs, and then click Add/Remove
	  Windows Components.
	
	2. In the Windows Components wizard, select "Management and Monitoring Tools",
	  and then click Details.
	
	3. In the Management and Monitoring Tools window, select Network Monitor Tools.
	  Click OK, click Next, and then click Finish.
	
	Set Network Monitor and Set Capture Filter
	------------------------------------------
	
	1. On the Start menu, click Programs, then click Administrative Tools, and then
	  click Network Monitor.
	
	2. On the Network Monitor Capture menu, click Filter.
	
	3. In the Capture Filter dialog box, select "SAP/ETYPE = Any SAP or Any ETYPE"
	  and then click Edit.
	
	4. Click Disable All to remove all entries from the Enabled Protocols list.
	
	5. Select all of the IP protocols listed under Disabled Protocols, and click
	  Enable to move them back up to the Enabled Protocols list, and then click OK.
	
	6. Back in the Capture Filter dialog box, double-click "(Address Pairs)".
	
	7. Under "Station 1", select the local computer name, under Direction select the
	  two-way arrows ("<-->"), and then under "Station "2, select "*ANY".
	
	8. Click OK twice to close the Capture Filter dialog box.
	
	Capture the HTTP Data
	---------------------
	
	1. From the Capture menu, click Start.
	
	2. Browse to the Web site you want to collect HTTP data from.
	
	3. After the Web site has loaded in the browser, switch back to Network Monitor
	  and click Stop from the Capture menu.
	
	Filter the HTTP Data Frames
	---------------------------
	
	1. From the Capture menu, click Display Captured Data, which displays the
	  Capture window.
	
	2. In the Capture window, from the Display menu, click Filter.
	
	3. Double-click "Protocol == Any", disable all protocols, and then reenable the
	  "HTTP" protocol.
	
	4. Click OK twice to return to the Capture window.
	
	Note that only the data frames containing HTTP data are now displayed.
	
	View an HTTP Data Frame
	-----------------------
	
	1. Double-click an HTTP frame that you want to view, which causes the Detail
	  (middle) and Hex (bottom) panes for that frame to be displayed.
	
	2. In the Detail pane, double-click the HTTP: frame to view the data in it.
	
	3. Continue to drill-down, double-clicking any data under the HTTP frame that
	  you want to view.
	
	NOTE: Network Monitor is configured by default to parse only HTTP traffic on the
	default HTTP port of TCP 80. To configure NetMon to parse additional ports
	(which can be beneficial when troubleshooting issues with proxy clients, or web
	sites on non-standard ports, use the steps below:
	
	1. In a text editor such as Notepad, open the TCP.ini file located in the
	  Parsers folder under the Network Monitor installation point.
	
	2. In TCP.ini, locate the TCP_HandoffSet section.
	
	3. Below the '80 = HTTP' line, add the following (assumes the new port number is
	  TCP 5150):
	
	  "5150 = HTTP" (without the quotation marks)
	
	4. Save the edited TCP.ini file.
	
	5. Reopen the .cap file, the HTTP frames on both TCP 80 and TCP 5150 should now
	  be parsed and displayed.
	
	The default Network Monitor installation point depends on which version of NetMon
	being used. By default, Network Monitor Lite, the version that ships with
	Windows NT 4.0 Server and Windows 2000 Server, is located in the folder below:
	
	  %windir%\system32\netmon
	
	The SMS and PSS versions of Network Monitor prompt for the installation folder
	during setup.
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	Additional query words: iis 5 netmon howto kbhowto primer tutorial overview explanation http headers akz
	
	======================================================================
	Keywords          : kbOSWin2000 kbDSupport kbiis500 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbinfo
	
	=============================================================================
	
