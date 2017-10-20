---
layout: page
title: "Q120415: Net SatisFAXtion Version 2.5 and Windows for Workgroups 3.11"
permalink: /kb/120/Q120415/
---

## Q120415: Net SatisFAXtion Version 2.5 and Windows for Workgroups 3.11

{% raw %}

	Article: Q120415
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	According to Intel Corporation, if you are running the NET SatisFAXtion software
	version 2.5 with Windows for Workgroups version 3.11, you must remove the
	IPX/SPX Compatible Transport for proper operation of the FAXNODE software. The
	Windows CAS manager in NET SatisFAXtion is designed to work with Novell NetWare
	and does not support use on a Windows for Workgroups network. The FAXNODE
	software is designed to operate with a Novell file called NWIPXSPX.DLL, which
	conflicts with the Windows for Workgroups 32-bit version of the IPX/SPX
	compatible transport.
	
	MORE INFORMATION
	================
	
	NOTE: The configuration below should not be used if you need to run the Windows
	for Workgroups network in conjunction with Novell NetWare or if you need to
	communicate with other Windows for Workgroups or Windows NT machines across a
	router. (NetBEUI is not a routable protocol where IPX/SPX is a routable
	protocol.)
	
	To work around this problem, Intel suggests removing IPX/SPX Compatible Transport
	with NetBIOS in Network Setup. To do this, use the following steps:
	
	1. In Program Manager, open the Networks group and double-click the Network
	  Setup icon.
	
	2. Choose the Drivers button and select IPX/SPX Compatible Transport with
	  NetBIOS.
	
	3. Choose the Remove button. Choose Yes when you are prompted for confirmation
	  of this action.
	
	4. Choose Close and then OK. Windows for Workgroups generates a message
	  indicating that it has modified your .INI files and you should restart
	  Windows to make the changes take effect.
	
	5. Choose Restart Windows.
	
	For more information about this issue and using other versions of NET
	SatisFAXtion software with Windows for Workgroups, call the Intel FaxBack
	service at either (503) 629-7576 or (800) 525-3019 and request fax #6120.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.11 communicating applications specification
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
