---
layout: page
title: "Q82722: Dual Network (LAN Manager/Novell) Support"
permalink: /kb/082/Q82722/
---

## Q82722: Dual Network (LAN Manager/Novell) Support

{% raw %}

	Article: Q82722
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To obtain the enhanced functionality of the dual network support of LAN Manager
	2.1 (dual support for LAN Manager 2.1 and NetWare) under Microsoft Windows
	operating system version 3.1, you must make some modifications to your Windows
	installation.
	
	The following details the settings that must appear in the SYSTEM.INI file, and
	the specifics on the proper method to install dual network support with Windows
	3.1.
	
	Windows 3.1 does not officially support any dual network driver.
	
	MORE INFORMATION
	================
	
	A proper installation of the dual network driver will make the following entries
	in your SYSTEM.INI:
	
	     [boot]
	     network.drv=dualnet.drv
	
	     [boot description]
	     network.drv=LAN Manager/Netware Dual Network
	
	     [386Enh]
	     network=*vnetbios,vdualnet.386,vipx.386,vnetware.386,vlanman.386
	
	     [Netware]
	     RestoreDrives=False
	     NWShareHandles=True
	
	Upgrading to 3.1 with Dual Network Support
	------------------------------------------
	
	If LAN Manager 2.1 has previously been installed for NetWare connectivity with
	Windows 3.0, and the system is being upgraded to Windows 3.1, the Setup program
	will not make any changes to the network drivers. You will need to manually
	upgrade your NetWare Windows components. These components are:
	
	  NETWARE.DRV
	  VNETWARE.386
	  VIPX.386
	  NETWARE.HLP
	  NWPOPUP.EXE (optional)
	  NWPOPUP.HLP (optional)
	
	Additionally, you will need to upgrade your MS-DOS NetWare components. These
	components are:
	
	  NETX.COM
	  IPX.COM.
	
	You will need to use the Novell WSGEN or SHGEN programs to create an IPX.COM from
	the IPX.OBJ supplied with Windows 3.1.
	
	Installing Dual Network Support with 3.1
	----------------------------------------
	
	If you already have Windows 3.1 installed and want to install LAN Manager 2.1
	with NetWare connectivity (or add the NetWare connectivity to your existing LAN
	Manager installation), use the LAN Manager Setup program. This will copy the
	proper files and make the correct entries in your SYSTEM.INI file. Make sure
	that the WSGEN or SHGEN disk you use to generate a new IPX.COM and copy NETX.COM
	contains the updated files (IPX.OBJ and NETX.COM) supplied with Windows 3.1.
	
	Installing 3.1 on a Dual Network System
	---------------------------------------
	
	If you already are running LAN Manager 2.1 with NetWare connectivity and want to
	install Windows 3.1, Windows will detect that you are running LAN Manager 2.1
	and install for that network only. After you have completed installing Windows
	with support for LAN Manager 2.1, you will need to run the NetWare connectivity
	Setup again from your LAN Manager installation to upgrade your NetWare
	components and make the necessary modifications to your SYSTEM.INI file (see
	section above for more information).
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
