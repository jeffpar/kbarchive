---
layout: page
title: "Q90928: MSIPX and NETX Command Line Switches with WFWG"
permalink: kb/090/Q90928/
---

## Q90928: MSIPX and NETX Command Line Switches with WFWG

	Article: Q90928
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-SEP-1999
	
	3.10 3.11
	
	WINDOWS
	
	kbnetwork kbdisplay kb3rdparty
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article is a description of the command line switches available with MSIPX
	and NETX, which are included with Windows for Workgroups for Novell
	connectivity.
	
	NOTE: This information applies to Windows for Workgroups version 3.11, ONLY if
	you have upgraded from version 3.1. MSIPX is not included with version 3.11.
	
	MORE INFORMATION
	================
	
	MSIPX command line switches:
	
	  /i Displays version information
	  /d Displays hardware options
	  /o <num> Load using hardware option<num>
	  /c=[path]<filename> Use an alternate configuration file
	  /? Display help screen
	
	Each of these switches can be activated in one of three ways:
	
	  msipx i <A0> msipx -i <A0> msipx /i
	
	NETX command line switches:
	
	  /? Display shell usage switches
	  /I Display shell version and type
	  /U Unload the NetWare shell from memory
	  /F Forcibly unload the NetWare shell, in spite of TSRs
	  loaded after the shell (CAUTION: The /F option could
	  hang your workstation)
	  /PS=<server> Specify a preferred server
	  /C=[path]<filename.ext> Name of your NetWare shell configuration file
	  (NOTE: For use with MS-DOS version 3.0 through MS-DOS version 5.0)
	
	Windows for Workgroups includes MSIPX.COM and MSIPX.SYS to provide Novell
	connectivity. MSIPX.COM is Novell's IPX.COM bound to a "shim," which looks like
	a net card to IPX but provides an NDIS (network driver interface specification)
	interface to PROTMAN.DOS (protocol manager). MSIPX.SYS is the stub that binds
	the MSIPX transport protocol to the network adapter MAC (media access control)
	driver. Windows for Workgroups also ships with NETX.COM, the Novell NetWare
	command line shell and redirector. It has not changed from the NETX.COM shipped
	with Windows 3.1.
	
	For more information on NDIS, query in the Microsoft Knowledge Base on the
	words:
	
	  MAC and NDIS
	
	Additional query words: 3.10 3.1 Novell 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
