---
layout: page
title: "Q130542: PCMCIA Modem Fails When Set to Windows NT Default"
permalink: /kb/130/Q130542/
---

## Q130542: PCMCIA Modem Fails When Set to Windows NT Default

{% raw %}

	Article: Q130542
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install or upgrade to Windows NT 3.51 or NT 4.0, some PCMCIA modems or
	fax-modems may not function properly with the Windows NT default base I/O port
	address and interrupt request (IRQ) line settings.
	
	CAUSE
	=====
	
	Default serial port settings are not updated properly from the information that
	is compiled with NTDETECT during the boot sequence. PCMCIA modems act as serial
	devices, thus they are not configured properly and may not function properly
	when used by an application such as Terminal.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Run Control Panel, choose Ports.
	
	2. Select the communication port (COMx) that the PCMCIA modem or fax-modem is
	  connected to and choose Settings.
	
	3. In the Settings For COMx dialog box (where x is the communication port
	  number), choose Advanced.
	
	4. For the Base I/O Port Address, select the appropriate address for the COM
	  port. For example, select 02F8 for COM2.
	
	5. For the IRQ, select the appropriate IRQ for the COM port. For example, select
	  3 for COM2.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51 And 4.0.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodnt pcmcia modem com serial ntrmt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	
	=============================================================================
	

{% endraw %}
