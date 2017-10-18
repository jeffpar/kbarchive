---
layout: page
title: "Q181421: XFOR: Access Violation in Lsdxants.exe with Long Fullname Field"
permalink: kb/181/Q181421/
---

## Q181421: XFOR: Access Violation in Lsdxants.exe with Long Fullname Field

	Article: Q181421
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	- LinkAge Message Exchange, version 3.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Linkage Directory Exchange Agent for Lotus Notes version 3.2 may access
	violate when encountering a Lotus Notes document Fullname attribute that is
	greater than 252 characters. The resulting crash will include
	LSDXANTS!LNDXAProcessOutbound in the stack frame.
	
	The Linkage event log will look similar to the following when this occurs:
	
	1998/01/30 12:12:44-                     DXM(01d2) 3 62501:Starting DX work
	item 16 for agent LINKAGE(DXANOTES): RequestDXAUpdates Full
	>> dxmpo(417)
	1998/01/30 12:12:45-                     DXM(01d2) 3 60277:Opening the MIF
	read queue dxm.in
	>> mif(362)
	1998/01/30 12:12:45-                     DXM(01d2) 3 60277:Opening the MIF
	write queue frouter.in
	>> mif(362)
	*****************some entries removed*********************************
	
	1998/01/30 12:12:46-                DXANOTES(01ad) 3 60315:Create a new
	outbound item for agent 0, sequence 2, partition 1
	>> mifpbld(238)
	1998/01/30 12:12:46-                DXANOTES(01ad) 3 60283:New message is
	being created for agent 0
	>> mifbuild(329)
	1998/01/30 12:12:46-                DXANOTES(01ad) 4 04107:Queue router.in
	has been opened (physical location is q\router.in)
	>> qm(1884)
	1998/01/30 12:12:46-                DXANOTES(01ad) 3 60326:Creating a new
	partition in the queue c:\linkage\q\archive >> mifbuild(591)
	1998/01/30 12:12:46-                DXANOTES(01ad) 3 60284:Writing header
	with sequence 2, part 1
	>> mifbuild(1006)
	1998/01/30 12:12:46-                DXANOTES(01ad) 3 60248:Searching
	directory c:\linkage\q\archive\ for MIF partition block files
	>> mifmpb(1648)
	1998/01/30 12:12:46-                DXANOTES(01ad) 4 64136:Looking for
	changes in CEMENT.NSF
	>> lndxapo(966)
	1998/01/30 12:12:48-                DXANOTES(01ad) 3 41121:Looking for
	changes since 01/01/1980 12:00:00AM
	>> lsnabapi(1930)
	1998/01/30 12:12:48-                DXANOTES(01ad) 3 41110:The number of
	possible notes to process is 4
	
	The process DX Agent for Lotus Notes (DXANOTES) will be set to "Generating
	Updates" in the current activity column in the Linkage Administrator Process
	Manager window.
	
	CAUSE
	=====
	
	The Directory Agent for Lotus Notes allocates a maximum buffer of 252 character
	for the Fullname field. It provides no error handling when a Fullname string
	greater than this is encountered. This causes the process to overflow the
	buffer, corrupt the stack, and eventually access violate.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Linkage Message Exchange version
	3.2.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	
	
	Additional query words: Lotus crash hang AV Dr. Watson LDE
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2 kbLinkAgeSearch kbLinkAge320
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
