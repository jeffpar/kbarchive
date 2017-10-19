---
layout: page
title: "Q120122: Network DDE Applications Fail with TCP/IP-32"
permalink: /kb/120/Q120122/
---

## Q120122: Network DDE Applications Fail with TCP/IP-32

	Article: Q120122
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft TCP/IP-32 for Windows for Workgroups, version 3.11 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Network DDE Windows-based applications (like File Manager) fail to operate
	successfully between Windows for Workgroups workstations configured with
	TCP/IP-32 when they are in different sub-nets connected by routers. The
	following error message appears:
	
	  The computer name specified in the network path cannot be located
	
	You can observe workstations with a protocol analyzer. Unsuccessful Name Query
	requests broadcasted to the local sub-net are transmitted by workstations to
	resolve the name of the workstation in question: "computername <1F>".
	
	The NET USE command functions correctly.
	
	CAUSE
	=====
	
	The NetBIOS naming table on the workstation does not include the name required
	by Network DDE for computer names specified in the LMHOSTS file. This problem
	only occurs under TCP/IP-32 if you use the #PRE keyword.
	
	When a name entry is parsed from the LMHOSTS file, three entries are added to the
	workstation's NetBIOS naming table. These are added to provide the computer
	name, messenger, and server functionality:
	
	  computername   00h
	  computername   20h
	  computername   03h
	
	RESOLUTION
	==========
	
	TCP/IP-16 Real Mode
	-------------------
	
	Use the ADDNAME2 keyword available from the LAN Manager resource kit. The
	following syntax adds an additional entry which can then be saved to the LMHOSTS
	file:
	
	  addname2 "computername   " /p0x1f
	
	The entire length of the name must be 16 characters including the hidden
	character (1f) in the 16th place. You must pad the computer name with spaces so
	that it equals 15 characters in length.
	
	TCP/IP-32 for Windows for Workgroups 3.11
	-----------------------------------------
	
	TCP/IP-32 can add the required NetBIOS name (if you are using the #PRE keyword)
	by having the two following lines in the LMHOSTS file of each remote computer:
	
	  ipaddr computername #PRE
	  ipaddr "COMPUTERNAME   \0x1F" #PRE
	
	NOTE: The computer name in quotation marks on the second entry must equal 16
	characters in length, and it must be in uppercase. The #PRE keyword is optional
	for the second entry above. #PRE speeds up resolution of the Network DDE name
	which helps to provide a successful connection accross routers providing a
	dialup or delayed remote link.
	
	Additional query words: wfw wfwg prodtcp32 1.0 NetDDE Chat LMhosts kbbug1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbWFW311 kbTCPIP311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
