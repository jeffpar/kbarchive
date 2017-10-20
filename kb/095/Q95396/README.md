---
layout: page
title: "Q95396: WFWG Err Msg: Windows File Server... with SMC3000 Series"
permalink: /kb/095/Q95396/
---

## Q95396: WFWG Err Msg: Windows File Server... with SMC3000 Series

{% raw %}

	Article: Q95396
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the Standard Microsystems Corporation (SMC) 3008 and 3016 Ethernet
	network interface cards (NICs), the following error message may be displayed
	when you start Windows for Workgroups or launch applications from Windows for
	Workgroups:
	
	  Windows File Server
	
	  This application attempted to access a device that is being used by another
	  application. If you continue running this application it may cause your
	  system to lock up.
	
	If you choose not to continue at this point, the system may stop responding
	(hang). If you choose to continue, Windows for Workgroups may appear to function
	normally. If you quit and then restart Windows for Workgroups, the system may
	function and behave normally without generating the error.
	
	WORKAROUND
	==========
	
	To eliminate the error message, use a text editor (such as Microsoft Windows
	Notepad) to add one of the following lines to the [MS$SMC3K] section of the
	PROTOCOL.INI file in the Windows directory:
	
	  MICRO_CHANNEL=0 ; For ISA bus machines
	
	  -or-
	
	  MICRO_CHANNEL=1 ; For MCA bus machines
	
	NOTE: You may need to change the MICRO_CHANNEL= setting to the opposite value of
	the actual machine type (that is, for an MCA machine, choose ISA; for an ISA
	machine, choose MCA).
	
	MORE INFORMATION
	================
	
	The setting MICRO_CHANNEL=0 informs the Protocol Manager that the computer is an
	ISA bus machine and that all network card settings should be retrieved from the
	PROTOCOL.INI file. The setting MICRO_CHANNEL=1 informs the Protocol Manager that
	the computer is an MCA bus machine and that all network card settings should be
	read from the network card itself.
	
	
	The SMC 3000 Series network interface cards are manufactured by Standard
	Microsystems Corporation, a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding these products' performance or
	reliability.
	
	Additional query words: 3.10 3.11 err msg 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
