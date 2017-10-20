---
layout: page
title: "Q90337: Where Windows for Workgroups Setup Places Network Files"
permalink: /kb/090/Q90337/
---

## Q90337: Where Windows for Workgroups Setup Places Network Files

{% raw %}

	Article: Q90337
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In some instances, Windows for Workgroups version 3.1 Setup may install certain
	network files to the root directory of a startup drive. This article explains
	why.
	
	MORE INFORMATION
	================
	
	In Windows for Workgroups (Windows 3.1 running on a network), the personal
	WINDOWS directory contains all files with .INI, .GRP, and .PIF extensions, as
	well as REG.DAT, WIN.COM, WINVER.EXE, and any MS-DOS device drivers. The
	personal WINDOWS directory may also contain the MS-DOS network device drivers
	and the NET.EXE, MSIPX.COM, and NETX.COM files. (These files may also be copied
	to the root directory of a startup drive.) The shared WINDOWS directory contains
	all other Windows files.
	
	The NETWORK.INF file uses the keywords "windir," "sysdir," "netdir," and "devdir"
	to classify the different Windows files. These files are placed in the WINDOWS
	directory, SYSTEM directory or root directory of the startup drive, depending on
	the type of installation you perform.
	
	Real-mode network device drivers are classified as devdir files. These include
	PROTMAN.DOS, PROTOCOL.INI, and WORKGRP.SYS. The device drivers in this directory
	must be correctly referenced in the CONFIG.SYS file.
	
	Real-mode network utilities and terminate-and-stay-resident (TSR) programs are
	classified as netdir files. These include NET.EXE, MSIPX.COM, NETX.COM, and
	ROUTE.COM. These utilities and TSRs must be correctly referenced in the
	AUTOEXEC.BAT file.
	
	The following table illustrates how Setup determines where to place the files
	classified as Netdir and Devdir.
	
	Location of Windows Installation          Netdir      Devdir
	-------------------------------------------------------------
	
	Windows installed on a fixed drive        WINDOWS     WINDOWS
	Windows installed on a compressed drive   WINDOWS     Root
	Windows installed on a removable drive    Root        Root
	(for example, SCSI)
	Shared network installation of Windows    Root        Root
	(using the SETUP /N command)
	
	KBCategory: kbnetwork kbsetup
	KBSubcategory: wfw wfwg
	
	Additional query words: 3.10 syquest stacker stack electronics double disk super stor superstor setup /n /a net netsetup bernouli external outside auxiliary wfwg bernoulli
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
