---
layout: page
title: "Q60929: Windows 3.0 SYSTEM.INI Settings for MS Network Software"
permalink: /kb/060/Q60929/
---

## Q60929: Windows 3.0 SYSTEM.INI Settings for MS Network Software

{% raw %}

	Article: Q60929
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	Microsoft Windows version 3.0 provides integrated support for the following
	networks:
	
	  3Com 3+Open LAN Manager
	  3Com 3+Share
	  Banyon VINES 4.0
	  LAN Manager 1.x (or 100 percent compatible)
	  LAN Manager 2.0 Basic (or 100 percent compatible)
	  LAN Manager 2.0 Enhanced (or 100 percent compatible)
	  Microsoft Network (or 100 percent compatible)
	  Novell NetWare 2.1 or above, or Novell NetWare 386
	  IBM PC-LAN Program
	  Others, as supported by manufacturers' installation disks
	
	Windows 3.0 retains information regarding what network it is currently configured
	for in the SYSTEM.INI file, which should be located in the \WINDOWS directory.
	The information below attempts to give guidance regarding the settings in that
	file that directly affect network support and performance. Windows 3.0 provides
	different levels of support (different features) for different networks. The
	sample settings provided below are characteristic of an 80386 system with
	extended memory, capable of running in 386 enhanced mode.
	
	MORE INFORMATION
	================
	
	The sections and settings that describe the network configuration in SYSTEM.INI
	are:
	
	    [boot]
	       network.drv
	    [boot.description]
	       network.drv=
	    [386Enh]
	       network=
	
	If LAN Manager version 1.0 or 1.01 is installed, the settings are:
	
	    [boot]
	      network.drv=msnet.drv
	    [boot.description]
	      network.drv=LAN Manager 1.x (or 100 percent compatible)
	    [386Enh]
	      networks=*vnetbios, *dosnet, lanman10.386
	
	If LAN Manager version 2.0 Basic is installed, the settings are:
	
	     [boot]
	       network.drv=msnet.drv
	     [boot.description]
	       network.drv=LAN Manager 2.00 BASIC (or 100 percent compatible)
	     [386Enh]
	       network=*vnetbios, *dosnet
	
	If LAN Manager version 2.0 Enhanced is installed, the settings are:
	
	      [boot]
	        network.drv=lanman.drv
	      [boot.description]
	         network.drv=LAN Manager 2.00 Enhanced (or 100 percent compatible)
	      [386Enh]
	         network=*vnetbios,*dosnet
	
	If MS-NET is installed, the settings are:
	
	       [boot]
	         network.drv=msnet.drv
	       [boot.description]
	         network.drv=Microsoft Network (or 100 percent compatible)
	       [386Enh]
	         network=*vnetbios,*dosnet
	
	Although checking the settings may give you an indication of what might be wrong,
	simply running the Windows Setup utility is an easy way to ensure that the
	customer has actually installed the package for the correct network software. It
	takes less than a minute to load Setup and reconfigure, as the network options
	are available on the first screen, and it exits to DOS immediately upon the user
	confirming his or her choice.
	
	Additional query words: 1.00 2.00 3.00
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
