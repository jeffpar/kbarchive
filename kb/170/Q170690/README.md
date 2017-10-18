---
layout: page
title: "Q170690: Wire Fault When Configuring Compaq NetFlex-3 NIC"
permalink: kb/170/Q170690/
---

## Q170690: Wire Fault When Configuring Compaq NetFlex-3 NIC

	Article: Q170690
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While running a Compaq ProLiant using the NetFlex-3 network adapter, all network
	connectivity is intermittently lost.
	
	-or-
	
	When checking the properties of the NetFlex-3 adapter, a "Wire Fault" error is
	received.
	
	CAUSE
	=====
	
	These errors may occur if you are using a NetFlex-3 card with the 100 UTP module
	attached, and the following is true:
	
	The module is set at 100 megabits per second and the first device encountered,
	such as a hub, can only handle 10 megabits per second, or if the module is
	defective and not properly autodetecting the inability of that first device to
	handle the 100 megabits per second speed.
	
	-or-
	
	It may be a Token Ring module being used on Ethernet, or the other way around.
	However, this could only apply if the computer were brand new, or just had
	service work such as replacing the motherboard. If the computer had been
	operating properly, the cause would probably be the above choice.
	
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Obtain the updated driver for the NetFlex-3 PCI card in Softpack SP3206 from
	  Compaq
	
	- Remove the module, which is located on the motherboard, plugged into the top
	  of the NetFlex-3. Restart the computer. This will allow the computer to
	  revert to its default setting of 10 megabits per second. After the computer
	  restarts, network connectivity should be restored.
	
	MORE INFORMATION
	================
	
	This problem may occur if the computer uses the NetFlex-3 card with a 100 UTP
	module attached on an Ethernet network. By default, this module is set to
	autodetect between 10 megabits per second and 100 megabits per second. With the
	autodetect setting, the module is supposed to attempt to send at 100 megabits
	per second, and, if the first device encountered (for example, a hub) cannot
	handle that speed, it will then revert to sending at 10 megabits per second.
	
	Pinging the adapter may be successful, and Compaq diagnostic utilities may still
	show a successful connection with the hub.
	
	Reinstalling the NetFlex-3 will show light activity at the hub, but still no
	network connectivity. If the computer is then restarted, all hub light activity
	will cease.
	
	The "Wire Frame" error is a Token Ring error, even though this may be an Ethernet
	card. If the network wire is plugged into another computer, it works fine.
	
	The 100 UTP module is set to autodetect by default on an Ethernet network. To set
	this to either 100 megabits per second or 10 megabits per second only, you must
	configure through CMOS.
	
	For a Token Ring module, the settings must be configured in CMOS for the 4/16
	speeds.
	
	For additional information about intermittent losses of connectivity with
	Netflex-3, please see the following article in the Microsoft Knowledge Base:
	
	  Q170950 Intermittent Loss of Connectivity While Using Compaq NetFlex-3
	
	Additional query words: netflex3 netflx3
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	
	=============================================================================
	
