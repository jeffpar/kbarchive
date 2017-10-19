---
layout: page
title: "Q167712: Fatal Exception Error in VREDIR with DCOM Program"
permalink: /kb/167/Q167712/
---

## Q167712: Fatal Exception Error in VREDIR with DCOM Program

	Article: Q167712
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbnetwork kbole osr1 win95kbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running a DCOM (Distributed Component Object Model) client program
	in Windows 95 in a mixed Novell NetWare and Microsoft Windows NT networking
	environment, a blue screen with the following error message may occur when you
	are connecting to a DCOM server program running on a Windows NT server or
	workstation:
	
	  Fatal exception 0E at 0028:<address> in VXD VREDIR (04) + 00005A8D. The
	  current application will be terminated.
	
	It is usually possible to continue running Windows normally after this error, but
	the DCOM program quits.
	
	CAUSE
	=====
	
	This error message has been reported to occur when the following conditions
	exist:
	
	- The Windows 95 computer is or has been running both the Microsoft Client for
	  NetWare Networks and the Client for Microsoft Networks.
	
	- The Windows NT computer is running Novell's NetWare Client32 for Windows NT.
	
	- The Windows 95 computer has a drive letter mapped to a share on the Windows
	  NT computer, then runs a DCOM client program that connects to a DCOM server
	  program running on the same Windows NT computer.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	This symptom has not been observed with Windows 95 OEM Service Release 2 or
	2.1.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbole osr1 win95 kbfixlist
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
