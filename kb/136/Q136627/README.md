---
layout: page
title: "Q136627: Layered Drivers Never See WINSOCK IRPs for the TCP/IP Device"
permalink: /kb/136/Q136627/
---

## Q136627: Layered Drivers Never See WINSOCK IRPs for the TCP/IP Device

	Article: Q136627
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbnetwork kbAPI kbSDKPlatform kbWinsock kbGrpDSNet
	Last Modified: 02-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOM
	-------
	
	Filter drivers or layered drivers never receive WINSOCK IRPs destined for
	the TCP/IP device.
	
	CAUSE
	=====
	
	AFD.SYS builds IRPs using the DEVICE_OBJECT from the FILE_OBJECT, rather than
	that returned by IoGetDeviceObjectPointer().
	
	MORE INFORMATION
	----------------
	
	If a device driver is designed to layer itself over another driver, it may do
	this by calling IoGetDeviceObjectPointer(). This returns a pointer to a
	DEVICE_OBJECT structure which should be used when building I/O Request Packets
	(IRPs).
	
	If another device has called IoAttachDevice() before IoGetDeviceObjectPointer()
	is called, then a DEVICE_OBJECT structure is returned for the intermediate
	driver, and not the intended target. Thus the top level driver does not need to
	know of the presence of the vertical driver.
	
	TDI operation requires that ZwCreateFile() is used to open handles on a TDI
	Transport to create Connection and Address objects. This returns a handle for
	the open object, which can be passed to ObReferenceObjectByHandle() to obtain a
	pointer to a FILE_OBJECT structure.
	
	The FILE_OBJECT structure contains a pointer to a DEVICE_OBJECT within it. If
	this DEVICE_OBJECT is used when building IRPs, the IRP is not passed to the
	filter driver, instead it is passed straight to the TDI Transport.
	
	RESOLUTION
	==========
	
	To correct this problem, install the latest U.S. Service Pack for Windows NT
	version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.51. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt file object
	
	======================================================================
	Keywords          : kbnetwork kbAPI kbSDKPlatform kbWinsock kbGrpDSNet 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
