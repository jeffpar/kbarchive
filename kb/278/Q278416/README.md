---
layout: page
title: "Q278416: Err Msg: Could Not Start the WWW, FTP, SMTP, and NNTP Service"
permalink: /kb/278/Q278416/
---

## Q278416: Err Msg: Could Not Start the WWW, FTP, SMTP, and NNTP Service

	Article: Q278416
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install or upgrade to Windows 2000 Professional, Windows 2000 Server,
	or Windows 2000 Advanced Server, the following error message may occur when you
	attempt to start the Internet Information Services (IIS) Web services (WWW, FTP,
	SMTP, and NNTP):
	
	  Could not start the (WWW, FTP, SMTP, and NNTP)service on the Local Computer.
	  Error 1747 The Authentication service is unknown.
	
	When you attempt to start sites in the Microsoft Management Console (MMC) snap-in
	in IIS, the following error message appears:
	
	  The Service did not respond to the Start or Control Request in a timely
	  fashion.
	
	This occurs when no Network Interface Card (NIC) is installed.
	
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q243008 IIS Won't Start if Client for Microsoft Networks Is Uninstalled
	
	CAUSE
	=====
	
	By default, the Client for Microsoft Networks option is only installed when an
	NIC is installed on the Windows 2000 computer. When only a modem is installed,
	no adaptor, except for the corresponding PPP adaptor, is installed.
	
	For the IIS services to start and be enabled, the Client for Microsoft Networks
	option must be installed.
	
	RESOLUTION
	==========
	
	To resolve this problem, install the Client for Microsoft Networks and bind it
	to an NIC (not a modem). To do this, follow these steps:
	
	1. In Control Panel, double-click Add New Hardware.
	
	2. Click Next to start the wizard.
	
	3. Click Add/Troubleshoot a Device.
	
	4. Click Add a New Device (Default Selection).
	
	5. Click No, I want to select the hardware from the list.
	
	6. Click Network Adapters.
	
	7. In the Manufacturers field, choose Microsoft, and for Network Adapter, choose
	  Microsoft Loopback Adaptor.
	
	By default, Windows 2000 installs the adaptor with the default settings, which
	include the Client for Microsoft Networks and TCP\IP. If you don't require the
	Client for Microsoft Networks, it is best to disable it. To do so, follow these
	steps:
	
	1. Right-click My Network Places, and then click Properties.
	
	2. Right-click Local Area Connection and then click Properties.
	
	3. Click to clear the Client for Microsoft Networks check box.
	
	4. Click OK.
	
	The Client for Microsoft Networks option is now disabled. IIS 5.0 runs properly
	in this configuration.
	
	When you have completed these steps, attempt to start the Web services again and
	they will successfully start. You can start these services with the following
	command:
	
	  iisreset /start
	
	Additional query words: iis modem pc card install
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
