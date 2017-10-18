---
layout: page
title: "Q96446: Error Message: The NETWARE.DLL File Cannot Be Located"
permalink: kb/096/Q96446/
---

## Q96446: Error Message: The NETWARE.DLL File Cannot Be Located

	Article: Q96446
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Windows or Windows for Workgroups from a Novell NetWare
	workstation, you receive the following error message:
	
	  The NETWARE.DLL file cannot be located
	
	NOTE: There is no file named NETWARE.DLL that is used with Microsoft Windows or
	Microsoft Windows for Workgroups; this error message is invalid.
	
	
	CAUSE
	=====
	
	The following are possible causes of and solutions to this error:
	
	- The versions of NETX.COM and IPX.COM are incompatible. (For example, IPX.COM
	  version 3.1 is incompatible with NETX.COM version 3.22. To correct this
	  problem, install NETX.COM version 3.26.)
	
	  For more information on correct versions of IPX.COM and NETX.COM, query on the
	  following words in the Microsoft Knowledge Base:
	
	  novell and driver and versions and windows and 3.1 and netx.com
	
	- The NETWARE.DRV file is corrupted. To correct this problem, remove and then
	  re-expand the NETWARE.DRV file.
	
	- If you issue a LAPLINK command from a workstation that is set up for a Novell
	  network to a workstation that is not, you may receive the above error. To
	  eliminate it, run Windows Setup on the computer that is set up for a network
	  and change the Network option to No Network.
	
	- If you are running the After Dark screen saver, manufactured by Berkeley
	  Systems, you may receive the above error. To correct this problem, disable
	  After Dark.
	
	- If you start FileMaker PRO for Windows, manufactured by Claris, while running
	  Windows version 3.1 on a Novell NetWare network, you may receive the above
	  error message. This problem is caused by using an incorrect installation of
	  FileMaker PRO.
	
	  According to Claris Technical Support, FileMaker PRO should be installed with
	  a "clean boot" and without any virus-detection software running.
	  Additionally, the Novell NetWare option must be selected if the workstation
	  is attached to a Novell NetWare network. After installation, the original
	  workstation configuration can be restored. For additional information,
	  contact Claris Technical Support.
	
	- If you are running Intel Storage Express, you may encounter this error. To
	  correct the problem, disable Storage Express.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.10 3.11 novell afterdark 3rdparty netware.drv file cannot be located err msg
	
	======================================================================
	Keywords          : win31 
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
