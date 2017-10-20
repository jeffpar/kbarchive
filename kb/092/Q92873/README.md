---
layout: page
title: "Q92873: Windows for Workgroups Hangs at Logo Screen"
permalink: /kb/092/Q92873/
---

## Q92873: Windows for Workgroups Hangs at Logo Screen

{% raw %}

	Article: Q92873
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your computer stops responding (hangs) when the Windows for Workgroups logo
	screen is displayed.
	
	CAUSE
	=====
	
	This problem can occur if either your network card or Windows for Workgroups
	installation is configured incorrectly. After you upgrade to Windows for
	Workgroups, the network card may not respond, which causes your system to hang.
	
	WORKAROUND
	==========
	
	To isolate and correct this problem, follow these steps:
	
	1. Turn the machine off completely and then restart the machine (cold boot).
	  This forces the network card to reinitialize and may correct the problem.
	
	2. If you are running Windows for Workgroups version 3.1, start Windows in
	  standard mode (at the MS-DOS command prompt, type "win /s" (without the
	  quotation marks). If you are running Windows for Workgroups 3.11, use "win
	  /d:t" (without the quotation marks). If this corrects the problem, you may
	  need to exclude the network card adapter memory range by adding the following
	  statement to the [386Enh] section of your SYSTEM.INI file
	
	      EMMEXCLUDE=xxxx-zzzzz
	
	  where xxxx-zzzz is the specific memory range for the network adapter. Use the
	  value A000-EFFF for troubleshooting purposes. You may also need to exclude
	  this memory range from your memory manager (for example, EMM386.EXE
	  X=A000-EFFF).
	
	3. The system may also hang if the network adapter is configured incorrectly.
	  The configuration settings include IRQ, Base I/O port, and Base Memory
	  Address.
	
	  To correct your settings under Windows for Workgroups 3.1, delete the
	  PROTOCOL.INI, PROTMAN.DOS, WORKGRP.SYS, and other Workgroup network driver
	  files. Then, from Control Panel, choose the Network icon, and indicate the
	  correct network adapter and configuration settings.
	
	  To correct your settings under Windows for Workgroups 3.11:
	
	  a. Start Windows for Workgroups by typing "win /n" (without the quotation
	     marks) and then press ENTER.
	
	  b. In the Network group, choose the Network Setup icon.
	
	  c. Configure Windows for Workgroups for No Network and exit Windows for
	     Workgroups.
	
	  d. Rename the PROTOCOL.INI file to PROTOCOL.PSS. For example, type "ren
	     c:\windows\protocol.ini c:\windows\protocol.pss" (without the quotation
	     marks) at the MS-DOS command prompt and then press ENTER.
	
	  e. Run Windows for Workgroups.
	
	  f. In the Network group, choose the Network Setup icon.
	
	  g. Configure Windows for Workgroups for the appropriate network card using
	     the correct settings.
	
	  h. Exit and restart Windows for Workgroups.
	
	  NOTE: Each time the PROTOCOL.INI file is updated, the old one is saved with a
	  sequentially numbered extension (that is, PROTOCOL.000, PROTOCOL.001,
	  PROTOCOL.002, and so forth). Using this naming convention, you may be able to
	  recover an earlier PROTOCOL.INI that was configured correctly.
	
	4. Windows may hang if you have installed the incorrect NDIS NIC network card
	  driver in your CONFIG.SYS file. To verify that the driver you selected
	  matches the network card you are using, choose the Network icon from Control
	  Panel. If the network card you are using is not listed during Setup, check
	  the manufacturer's suggested emulation.
	
	  The network card supplier may need to provide an NDIS-compatible driver. If
	  the card you are trying to install is not listed in Control Panel, contact
	  your network card manufacturer to obtain a specific NDIS driver that works
	  with Windows for Workgroups.
	
	  The order of the network drivers in the CONFIG.SYS file is also important. For
	  example, protocol manager (PROTMAN.DOS) must be loaded before any other
	  Windows for Workgroup network drivers. If PROTMAN.DOS is not loaded first,
	  you may receive various error messages referring to the protocol manager.
	
	  For troubleshooting purposes, remove the Windows for Workgroups network
	  drivers from the CONFIG.SYS and AUTOEXEC.BAT files. When you start Windows
	  for Workgroups, you should receive a message about no network functionality.
	  Accept the message and continue loading Windows for Workgroups.
	
	5. If you still experience the problem, check to make sure that the adapter is
	  seated properly in the expansion slot. Check for other hardware-related
	  problems such as incorrect cabling, improper installation of T-connectors and
	  terminators, and other connections within the workgroup.
	
	For more information, query on the following words in the Microsoft Knowledge
	Base:
	
	  protocol and manager and reported and binding and eliminate
	
	Additional query words: 3.10 3.11 protman halt tshoot
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
