---
layout: page
title: "Q152783: INFO: Sample Twinax Configuration for SNA Server"
permalink: kb/152/Q152783/
---

## Q152783: INFO: Sample Twinax Configuration for SNA Server

	Article: Q152783
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,3.0,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbprogramming
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 3.0, 4.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SNA Server supports twinax connections to AS/400s. SNA Server bundles both the
	IBM and Andrew drivers.
	
	The maximum connections per adapter = 1. The maximum sessions per connection =
	512.
	
	MORE INFORMATION
	================
	
	Setup is the same on AS/400 for both IBM and Andrew adapters, and it is
	identical to the configuration for PC Support over twinax adapters.
	
	NOTE: The AS/400s can autoconfigure these settings, if permitted in AS/400 system
	settings. This is the least troublesome way to configure the connection. On the
	AS/400, you must configure an APPC "logical" controller and device in addition
	to the twinax-attached "physical" controller. The APPC resources are necessary
	to support APPC sessions over twinax (which is the only way SNA Server can
	communicate with the AS/400). The same APPC resources are used to support a
	connection to the AS/400 via 802.2 or SDLC from the same SNA server.
	
	The following examples represent an AS/400 display, as configured for a twinax
	adapter.
	
	NOTE: A "<<==" represents matching SNA Server parameters or other pertinent
	information.
	
	.......................
	Twinax Line description
	.......................
	
	  Display Line Description                           ANDREW1
	11/30/94  15:59:50
	
	Line description . . . . . . . . . : QTDL419600
	Option . . . . . . . . . . . . . . : *BASIC
	Category of line . . . . . . . . . : *TDLC
	
	Attached work station ctl  . . . . : CTL01
	Online at IPL  . . . . . . . . . . : *NO
	Text . . . . . . . . . . . . . . . : CREATED BY AUTO-CONFIGURATION
	
	............................
	physical controller hierarchy
	............................
	
	Work with Configuration Status                     ANDREW1
	                                               11/30/94  16:03:27
	
	Position to  . . . . .     Starting characters
	
	Type options, press Enter.
	  1=Vary on   2=Vary off   5=Work with job   8=Work with description
	9=Display mode status ...
	
	Opt  Description       Status        -----------Job--------------
	     CTL01             ACTIVE
	       DSP06           VARY ON PENDING
	       DSP04           VARY ON PENDING
	       DSP03           VARY ON PENDING
	       DSP01           VARY ON PENDING
	       DSP05           VARY ON PENDING
	       DSP02           VARY ON PENDING
	       DSP00           ACTIVE
	
	Bottom
	Parameters or command
	===>
	F3=Exit   F4=Prompt   F12=Cancel   F23=More options   F24=More keys
	
	..............................
	physical controller description
	..............................
	
	Display Controller Description                  ANDREW1
	11/30/94  15:51:19
	
	Controller description . . . . . . : CTL01
	Option . . . . . . . . . . . . . . : *BASIC
	Category of controller . . . . . . : *LWS
	
	Controller type  . . . . . . . . . : 2661
	Controller model . . . . . . . . . : 1
	Resource name  . . . . . . . . . . : CTL01
	TDLC line  . . . . . . . . . . . . : QTDL419600
	Online at IPL  . . . . . . . . . . : *YES
	Auto-configuration controller  . . : *YES
	Text . . . . . . . . . . . . . . . : CREATED BY AUTO-CONFIGURATION
	
	..........................
	physical device description
	..........................
	
	Display Device Description                  ANDREW1
	11/30/94  16:04:05
	
	Device description . . . . . . . . : DSP00
	Option . . . . . . . . . . . . . . : *BASIC
	Category of device . . . . . . . . : *DSP
	
	Device class . . . . . . . . . . . : *LCL
	Device type  . . . . . . . . . . . : 5150
	Device model . . . . . . . . . . . : 1
	Port number  . . . . . . . . . . . : 0
	Switch setting . . . . . . . . . . : 0 <== match Workstation Address in
	Link Service
	setup.
	
	Online at IPL  . . . . . . . . . . : *YES
	Attached controller  . . . . . . . : CTL01
	Keyboard language type . . . . . . : USB
	Print device . . . . . . . . . . . : *SYSVAL
	Output queue . . . . . . . . . . . : *DEV
	Printer file . . . . . . . . . . . : QSYSPRT
	  Library  . . . . . . . . . . . . : *LIBL
	Text . . . . . . . . . . . . . . . : CREATED BY AUTO-CONFIGURATION
	
	.........................
	APPC controller hierarchy
	.........................
	
	Work with Configuration Status                     ANDREW1
	11/30/94  15:56:53
	
	Position to  . . . . .                Starting characters
	
	Type options, press Enter.
	1=Vary on   2=Vary off   5=Work with job   8=Work with description
	9=Display mode status ...
	
	Opt  Description       Status      -------------Job--------
	     QTDL419600        ACTIVE
	       NTELLY          ACTIVE
	         DEMO7         ACTIVE
	           QPCSUPP     ACTIVE/TARGET   DEMO7  QUSER  008541
	
	..........................
	APPC controller definition
	..........................
	
	Display Controller Description                     ANDREW1
	11/30/94  15:58:26
	
	Controller description . . . . . . . :   NTELLY
	Option . . . . . . . . . . . . . . : *BASIC
	Category of controller . . . . . . : *APPC
	
	APPC controller
	
	Link type  . . . . . . . . . . . . : *TDLC
	Online at IPL  . . . . . . . . . . : *NO
	
	Attached nonswitched line  . . . . : QTDL419600 <<== Link to
	Twinax Line
	
	Character code . . . . . . . . . . : *EBCDIC
	
	Maximum frame size . . . . . . . . : 4105       <<== Mandatory default
	
	Remote network identifier  . . . . : *NETATR
	
	Remote control point   . . . . . . : DEMO7       <<== Match SNA Server's
	local control point name Server Properties and as well as the LU name of
	the Local APPC LU.
	
	Data link role . . . . . . . . . . : *SEC
	Station address  . . . . . . . . . : 00
	Text . . . . . . . . . . . . . . . :   CREATED BY AUTO-CONFIGURATION
	
	......................
	APPC device definition
	......................
	
	Display Device Description                  ANDREW1
	11/30/94  15:59:02
	
	Device description . . . . . . . . : DEMO7
	Option . . . . . . . . . . . . . . : *BASIC
	Category of device . . . . . . . . : *APPC
	
	Automatically created  . . . . . . : YES
	Remote location  . . . . . . . . . : DEMO7
	Online at IPL  . . . . . . . . . . : *NO
	Local location . . . . . . . . . . : ANDREW1
	Remote network identifier  . . . . : *NETATR
	Attached controller  . . . . . . . : NTELLY
	Message queue  . . . . . . . . . . : QSYSOPR
	Library  . . . . . . . . . . . . . : *LIBL
	Local location address . . . . . . : 00      <<== The local location
	address must be 00 to support parallel sessions.
	
	APPN-capable . . . . . . . . . . . : *YES
	Single session:
	  Single session capable  . . . . : *NO
	
	Text . . . . . . . . . . . . . . . : AUTOMATICALLY CREATED BY QLUS
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork kbprogramming 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11,3.0,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
