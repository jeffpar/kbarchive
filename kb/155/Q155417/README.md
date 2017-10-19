---
layout: page
title: "Q155417: XADM: LoadSim, Microsoft Exchange Server Load Simulation Tool"
permalink: /kb/155/Q155417/
---

## Q155417: XADM: LoadSim, Microsoft Exchange Server Load Simulation Tool

	Article: Q155417
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbtool kbusage exc4
	Last Modified: 21-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes what the Microsoft Exchange Server Load Simulation Tool,
	LoadSim.exe, was designed to do and what its software and hardware requirements
	are. For more information, please see the documentation on the Microsoft
	Exchange Server CD, Support\LoadSim\LoadSim.doc, the Microsoft Exchange
	Performance: Concurrent Users Per Server white paper available on the Microsoft
	TechNet CD.
	
	For information on how to get the LoadSim version for Exchange Server 5.5, please
	refer to the following Microsoft Knowledge Base article:
	
	  Q196404 XADM: Load Simulator Missing in Exchange Server 5.5
	
	MORE INFORMATION
	================
	
	
	As a performance tool, LoadSim is primarily used to help answer the question: How
	many users per server does a Microsoft Exchange Server Support? This tool can be
	used to generate a graph of perceived client response time as a function of the
	number of active users.
	
	LoadSim was designed to provide a realistic load on a Microsoft Exchange Server
	computer by simulating the behavior of multiple Microsoft Exchange clients.
	LoadSim takes advantage of the multithreading, multiprocessing, and shared
	memory features in Windows NT to create and manage up to several hundred
	simulated users on a single client computer. However, if you want to run a large
	test (several hundred users or more), you need multiple LoadSim client
	computers.
	
	Tests
	-----
	
	You can use LoadSim to specify and run three kinds of tests:
	
	- User Initialization, creates folders and messages in user mailboxes.
	
	- Public Folder Initialization, sets up the Public Folder hierarchy.
	
	- Load Simulation, simulates multiple users performing a wide variety of client
	  actions including, reading mail, sending mail, Schedule+ actions, and use of
	  Public Folders. This test can be set to simulate low, medium, and heavy
	  client usage.
	
	The first two tests are really just setup steps for the Load Simulation test.
	
	You can specify many different test configuration options in LoadSim to simulate
	the type of activity you expect to see in production and you can save each
	configuration to a separate .SIM file. This allows you to run a particular
	configuration multiple times and to use LoadSim in automated mode from the
	command-line.
	
	Software Requirements
	---------------------
	
	LoadSim should be run on Windows NT 3.51 or later. For demonstration purposes,
	you can run LoadSim on Windows 95. However, if you are going to run large tests,
	gather performance timing results, or perform directory import, you need to use
	Windows NT. In addition, you must have a Microsoft Exchange client installed on
	the computer running LoadSim.
	
	Hardware Requirements
	---------------------
	
	If you use LoadSim for performance analysis, you need to make sure that your
	client hardware doesn't adversely affect performance results. The response times
	reported by LoadSim for user actions should be based primarily on server load,
	not client hardware bottlenecks. To gather accurate performance timing data,
	your client computer should have at least 32 MB of physical RAM. The number of
	simulated clients that can be reasonably supported on one physical computer vary
	with the nature of users chosen. If, for example, you use the Medium default
	user setting, a 32 MB client computer should support 100 simulated users with
	little or no degradation in client response time.
	
	There are several limiting factors that affect the capability of a particular
	computer to support a particular type and number of LoadSim users, the effects
	of these factors vary depending on your topology, your hardware, and your user
	definitions. Some important considerations are:
	
	- Network bandwidth. One of the differences between 100 real users and 100
	  LoadSim users is that you can run all 100 LoadSim users on one computer. You
	  should make sure the network hardware on your client computers can handle the
	  number of users per computer that you want to simulate.
	
	- Memory and pagefile size. Each LoadSim process, and, to a lesser degree, each
	  thread in each LoadSim process uses some amount of system memory on its
	  client computer, both in physical RAM and virtual memory. You can use the
	  Windows NT Performance Monitor to make sure that your LoadSim users aren't
	  using too much system memory or causing excessive pagefile activity on your
	  client computers.
	
	- Disk I/O capacity. Some LoadSim user actions require disk access on the
	  client computer. You should verify that your LoadSim users aren't exceeding
	  the capacity of the I/O subsystem on each client computer.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbusage exc4 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
