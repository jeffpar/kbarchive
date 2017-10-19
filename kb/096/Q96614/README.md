---
layout: page
title: "Q96614: MSIPX Stops when Switching from 802.3 to ETHERNET2"
permalink: /kb/096/Q96614/
---

## Q96614: MSIPX Stops when Switching from 802.3 to ETHERNET2

	Article: Q96614
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	This article describes switching from 802.3 to an ETHERNET2-type network stops
	operation of MSIPX stack.
	
	SYMPTOMS
	========
	
	MSIPX stack does not work.
	
	CAUSE
	=====
	
	By default, NetWare is set to use 802.3. If you change to ETHERNET2, you need to
	change settings elsewhere in the network.
	
	RESOLUTION
	==========
	
	Make one of the following changes:
	
	  Change Network Adapter Protocol in Control Panel
	------------------------------------------------
	
	1. From Control Panel, select the Network icon.
	
	2. Select Adapter, select Setup, then choose the Protocol button.
	
	3. Select IPX protocol to make the Settings button active.
	
	4. Choose Settings, then select the option that changes 802.3 to Std ETHERNET.
	
	For Windows for Workgroups
	--------------------------
	
	There is a switch in the NetWare dialog box,
	
	(CONTROL_PANEL\NETWORK\ADAPTERS\SETUP\PROTOCOLS\NOVELL_IPX\SETTINGS\AD
	     PTER_MEDIA_TYPE)
	
	that lets you choose Novell/ETHERNET or ETHERNET_II (DIX). The Novell/ETHERNET
	setting is equivalent to 802.3. Change it to ETHERNET_II (DIX).
	
	  For LAN Manager
	---------------
	
	Use the Novell ECONFIG utility to switch to ETHERNET II (DIX).
	
	On the client:
	
	- If the driver is ODI, under the Link Driver section of NET.CFG you must
	  define the allowable frame formats (ETHERNET_II and ETHERNET_802.3) as well
	  as which IPX is to be used. (For example: Protocol IPX 8137 ETHERNET_II.)
	
	- If the driver is not ODI, use the ECONFIG utility (for example: ECONFIG
	  IPX.COM SHELL:E).
	
	Novell's ODI drivers are designed to default to 802.2 for the drivers below:
	
	When using these drivers, you must use either the 802.2 frame type on your server
	or change the frame type for the workstation in your NET.CFG (or SHELL.CFG)
	file.
	
	     EXOS      COM     20850 05-12-92  11:24a
	     NE1000    COM     19455 09-08-92   3:10p
	     NE1500T   COM     28758 05-14-92   1:42p
	     NE2       COM     19839 10-27-92   2:38p
	     NE2_32    COM     19551 10-27-92   2:39p
	     NE2000    COM     19715 09-08-92   3:10p
	     NE2100    COM     28756 05-14-92   1:42p
	     NE3200    COM     26248 10-08-92   9:56a
	
	If you want to continue to use the 802.3 frame type, place the following two
	lines in the NET.CFG (or SHELL.CFG) file:
	
	  " Link Driver <drivername>
	  Frame Ethernet_802.3" (without the quotation marks)
	
	If you want to use the NE2000.COM driver, replace <drivername> with NE2000.
	Be sure to indent the second line and to place a carriage return after the
	second line.
	
	  On a 3.11 Server
	----------------
	
	1. In the AUTOEXEC.NCF, load the frame type for the board, and give it a name
	  such as LOAD 3C503 FRAME=ETHERNET_II NAME=ETHER.
	
	2. Bind IPX to ETHER net=<net number> on a 2.x server.
	
	3. Run ECONFIG.
	
	Additional query words: wfw wfwg 2.00 2.10 2.20
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
