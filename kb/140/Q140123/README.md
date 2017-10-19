---
layout: page
title: "Q140123: Using ISDN Terminal Adapters in Windows 95"
permalink: /kb/140/Q140123/
---

## Q140123: Using ISDN Terminal Adapters in Windows 95

	Article: Q140123
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to set up and use ISDN (Integrated Services Digital
	Network) terminal adapters in Windows 95.
	
	Currently, Windows 95 supports only the following ISDN adapters:
	
	- Motorola BitSURFR (needs version 1E EPROM)
	
	- Motorola TA210 (needs version 1E EPROM)
	
	- Motorola TA110-120
	
	Microsoft supports the detection of these adapters, but does not support setting
	them up. In order to properly set up an ISDN adapter, you need to obtain
	information from the adapter's manufacturer and your ISDN provider.
	
	MORE INFORMATION
	================
	
	Detection and Setup of ISDN Terminal Adapters
	---------------------------------------------
	
	1. Install the adapter using the Windows 95 Modem .inf file. Automatic detection
	  of the adapter or Plug and Play detection typically provides this using
	  native .inf files. Use the Modems tool in Control Panel, or if the adapter is
	  a Plug and Play device, shut down and restart the computer. A new ISDN
	  adapter should include a disk with a Windows 95 .inf file that should be
	  installed following the manufacturer's instructions.
	
	2. Configure the adapter using an ISDN setup tool. Adjust values and settings to
	  prepare the adapter for ISDN use. Typically, the adapter's S registers are
	  adjusted during this step. (S registers are memory storage locations within
	  the adapter that are used to store information about the adapter's operating
	  parameters.)
	
	  These values are typically provided by the local phone company when ISDN
	  service is provided. Other values for the adapter are derived from
	  documentation accompanying the adapter.
	
	  Some ISDN adapter vendors provide MS-DOS-based or Windows-based ISDN adapter
	  configuration tools. These tools should run with Windows 95 and should be
	  used to configure the adapter.
	
	Setting S Registers
	-------------------
	
	Setting Specific Profile ID (SPID) and other ISDN values typically involves
	adjusting S registers. You can use HyperTerminal for this purpose. Follow these
	steps:
	
	1. Install the adapter.
	
	2. Check the Modems tool in Control Panel. The ISDN adapter should be listed.
	
	3. Start HyperTerminal. You may need to configure HyperTerminal with a telephone
	  number.
	
	4. On the File menu, click Properties.
	
	5. In the Connect Using box, click Direct To Com<X>, where <X> is
	  the number of the port the ISDN adapter is using. Click OK.
	
	6. Use Hayes-style AT commands to set the adapter's S registers. For example, to
	  set register 10 to a value of 30, type the following line:
	
	  " ats10=30 " (without the quotation marks)
	
	7. When you finish setting up the adapter, select the ISDN adapter, rather than
	  Direct To Com<X>, in the Connect Using box.
	
	Dual Capability Adapters
	------------------------
	
	A few ISDN adapters have both analog line capability and ISDN features.
	Typically, you can use AT commands with these adapters in either analog or ISDN
	mode. The functionality of these adapters is dependent on the .inf file included
	by the adapter's manufacturer. The .inf file may allow you to select either the
	adapter's analog or its ISDN capabilities, or it may support a default ISDN
	configuration only.
	
	Dual-Channel ISDN
	-----------------
	
	Many ISDN adapters and local phone companies provide ISDN service that provides
	two channels at the same time (a data channel and a voice channel). Both
	channels can be operational during the same connection. Note that the voice
	channel on some ISDN devices can also be converted to a data channel, boosting
	data transfer capability. Manufacturer's documents and local phone company
	instructions should be consulted to use this dual-channel feature.
	
	
	Dial-Up Networking 1.3 Upgrade
	------------------------------
	
	Microsoft has released the Dial-Up Networking 1.3 Upgrade. This release includes
	the support necessary for making remote access connections over an ISDN line.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191494 Dial-Up Networking 1.3 Upgrade Available
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
