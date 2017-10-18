---
layout: page
title: "Q320200: MTA Does Not Start After You Apply Service Pack 4"
permalink: kb/320/Q320200/
---

## Q320200: MTA Does Not Start After You Apply Service Pack 4

	Article: Q320200
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install Exchange Server 5.5 Service Pack 4 (SP4), and then restart your
	computer, the Message Transfer Agent (MTA) does not start. If you use the
	Services utility in Control Panel to manually start the MTA, you may receive the
	following error message:
	
	  Internal Windows NT Error 2140
	
	The following events may also appear in the application event log:
	
	  Event ID: 9266 Source: MSExchangeMTA Description: A fatal system error
	  occurred while initializing the MTA. Reboot the computer. If that does not
	  work, contact Microsoft Product Support.
	
	  Event ID: 9406 Source: MSExchangeMTA Description: there is not enough
	  Performance Monitor Memory to display the MTA connections information. Stop
	  attached performance monitors and re-start the MTA.
	
	  Event ID: 9321 Source: MSExchangeMTA Description: An RPC communication error
	  has occurred.
	
	RESOLUTION
	==========
	
	To resolve this issue, remove TCP/IP from your computer, and then reinstall it.
	After you reinstall TCP/IP, reinstall the most recent Windows NT service pack.
	
	To remove TCP/IP from your computer and then reinstall it, follow these steps.
	
	Step 1 - Record Current TCP/IP Configuration
	--------------------------------------------
	
	To record the current TCP/IP configuration on your computer, follow these steps:
	
	a. Click Start, and then click Run.
	
	b. In the Run dialog box, type "cmd" (without the quotation marks), and then
	  click OK.
	
	c. In the Command window, type the following command:
	
	  ipconfig /all > c:\ipconfig.txt
	
	d. Close the Command window.
	
	Step 2 - Remove TCP/IP
	----------------------
	
	To remove TCP/IP from your computer, follow these steps:
	
	a. Click Start, point to Settings, and then click Control Panel.
	
	b. In Control Panel, double-click Network.
	
	c. In the Network dialog box, click Protocols.
	
	d. In the list of Network Protocols, click TCP/IP Protocol, click Remove, and
	  then click Yes in the warning dialog box that appears.
	
	e. Click Close, and then click Yes to restart your computer.
	
	f. Log on to your computer when it restarts.
	
	g. In the Service Control Manager dialog box that appears, click OK.
	
	Step 3 - Install and Configure TCP/IP
	-------------------------------------
	
	To install and configure TCP/IP on your computer, follow these steps.
	
	WARNING: Do not restart your computer at the end of this procedure. You will
	restart your computer after you reinstall the service pack.
	
	a. Click Start, point to Settings, and then click Control Panel.
	
	b. In Control Panel, double-click Network.
	
	c. In the Network dialog box, click Protocols.
	
	d. Click Add.
	
	e. In the Select Network Protocol dialog box, click TCP/IP Protocol, and then
	  click OK.
	
	f. In the TCP/IP Setup dialog box, click Yes if your server uses Dynamic Host
	  Configuration Protocol (DHCP). If it does not, click No.
	
	g. In the Windows NT Setup dialog box, type the path to the installation files
	  for Windows NT, and then click Continue.
	
	h. In the Network dialog box, double-click TCP/IP Protocol, which now appears
	  under Network Protocol.
	
	i. Click Start, and then click Run.
	
	j. In the Run dialog box, type "c:\ipconfig.txt" (without the quotation marks),
	  and then click OK.
	
	  Your TCP/IP configuration settings now appear in a Notepad window.
	
	k. In the Microsoft TCP/IP Properties dialog box, configure the settings so that
	  they match the settings in the Notepad window. After you configure the
	  settings, click OK, and then click OK again.
	
	l. In the Network Settings Change dialog box, click No, so that you do not
	  restart your computer now.
	
	Step 4 - Reinstall Windows NT Service Pack
	------------------------------------------
	
	Reinstall the most recent Windows NT service pack. Follow the on-screen
	instructions to install the service pack. After you reinstall the service pack,
	restart your computer.
	
	MORE INFORMATION
	================
	
	For additional information on Windows NT Service Packs, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange550 kbExchangeClientSearch kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
