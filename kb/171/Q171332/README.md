---
layout: page
title: "Q171332: Invalid LAA MAC Address Causes Network Driver Failure."
permalink: /kb/171/Q171332/
---

## Q171332: Invalid LAA MAC Address Causes Network Driver Failure.

	Article: Q171332
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If a user types invalid characters other than (0-9 A-F) or types more than 12
	characters for the media access control address by not using hyphens between
	bytes, Windows NT network driver interface specification (NDIS) cannot
	initialize the card and will result in event message(s):
	
	  Event ID: 7000
	  Source: Service Control Manager
	  Description: The IBM Token Ring Adapter (ISA/PCMCIA) driver service failed to
	  start due to the following error:
	
	  A Device attached to the system is not functioning.
	
	And in some instances, depending on the invalid characters typed, the following
	event log message may be displayed:
	
	  Event ID: 6004
	  Source: Eventlog
	  Description: A driver packet received from the I/O subsystem was invalid. The
	  data is the packet
	
	  DATA: ........................ibmtok IBMTOK 17
	
	CAUSE
	=====
	
	Some network adapter drivers allow an administrator to assign locally
	administered addresses (LAA) or universally administered addresses (UAA) for the
	installed adapter card. This allows administrators to manage media access
	control addresses and use it for inventory control and troubleshooting purposes.
	The media access control address consists of 6 bytes using HEX Numbers 0-9 and
	A-F, so a typical media access control address would look like this:
	
	  00-C0-4F-C9-F1-70
	
	Most token ring adapter drivers present a dialog box during installation to allow
	the user to type the LAA media access control address. The field presented to
	the user allows for 17 characters and assumes the user is going to use hyphens
	between bytes.
	
	NOTE: Some OEM Ethernet drivers may also support this feature.
	
	RESOLUTION
	==========
	
	To resolve this problem, clear the invalid entry by performing the following
	steps:
	
	1. Click the Start button, point to Settings, click Control Panel, and then
	  double-click the Network icon.
	
	2. Click the Adapters tab, select the installed adapter in question, and then
	  click Properties. When the dialog box appears, verify that the media access
	  control address displayed is valid or clear the entire entry and restart the
	  computer.
	
	The media access control address being used can be displayed from an MS-DOS
	command prompt by typing:
	
	  NET CONFIG WORKSTATION
	
	Workstation active on:   NetBT_IBMTOK1 (00C04FC9F170) <--- media access
	control address
	
	MORE INFORMATION
	================
	
	It is up to the driver's installation .inf file to parse user input and
	determine if the values entered are valid during network card installation. Some
	OEM drivers will prevent invalid entries while other OEM drivers accept any user
	input, that may cause problems during network card initialization.
	
	
	Additional query words: MAC
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	
