---
layout: page
title: "Q90371: NetBIOS Applications and Windows for Workgroups"
permalink: /kb/090/Q90371/
---

## Q90371: NetBIOS Applications and Windows for Workgroups

{% raw %}

	Article: Q90371
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows for Workgroups fully supports NetBIOS-based applications (such as Lotus
	Notes). NetBIOS functionality within Windows for Workgroups is provided by the
	NDIS NetBEUI protocol or transport.
	
	
	Novell NetWare offers NetBIOS support by using a terminate-and-stay- resident
	(TSR) program called NETBIOS.EXE. To enable NetBIOS support under Novell
	NetWare, NETBIOS.EXE must be loaded.
	
	NOTE: NETBIOS.EXE is not provided with Windows for Workgroups. If you have an
	earlier installation of NetWare on your machine, you should be able to use the
	NETBIOS.EXE TSR program available from that installation.
	
	MORE INFORMATION
	================
	
	Using the Novell NETBIOS.EXE TSR program with Windows for Workgroups requires
	some manual modifications to your AUTOEXEC.BAT and SYSTEM.INI files. The
	following steps enable NETBIOS.EXE to support NetBIOS across the MSIPX
	transport.
	
	NOTE: Make sure that NETBEUI is at LANA0. If you have IPX (Novell) at LANA0, MSD
	cannot recognize NETBIOS. Moving NETBEUI to LANA0 and IPX to LANA1 and using NET
	START NETBEUI enables MSD to recognize NETBIOS.
	
	1. Install the NetWare support in Windows for Workgroups. You can do this in the
	  Network area in Control Panel.
	
	2. Edit your AUTOEXEC.BAT file and add "C:\NETWARE\NETBIOS.EXE" (without the
	  quotation marks) so that it is loaded after all the following network
	  commands:
	
	     net start               <-- WFWG command to initialize network
	     msipx.com               <-- WFWG NetWare IPX transport
	     netx.com /ps=lanlord    <-- WFWG NetWare shell
	     login lanlord/jane      <-- WFWG NetWare login to NetWare server
	
	  Make sure that the NETBIOS.EXE TSR program is loaded before you start Windows.
	
	3. Edit your SYSTEM.INI file in your WINDOWS directory. In the [386Enh] section,
	  add the line "V86MODELANAS=0" (without the quotation marks). Under the
	  [NETWORK] section add the line "EXCLUDE=0" (without the quotation marks).
	
	4. Restart your machine.
	
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.10 3.11 old previous 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
