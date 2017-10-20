---
layout: page
title: "Q137753: Motorola Power 14.4 PCMCIA Modem May Not Dial Twice"
permalink: /kb/137/Q137753/
---

## Q137753: Motorola Power 14.4 PCMCIA Modem May Not Dial Twice

{% raw %}

	Article: Q137753
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): dun win95 kbDialUp
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using a Motorola Power 14.4 Cellular Modem with Windows 95, you may
	not be able to dial the second time you try to use the modem.
	
	CAUSE
	=====
	
	The initialization string used for this modem in Windows 95 enables a dial
	suffix. This dial suffix enables transmission of tones after the connection has
	been made without breaking the connection. One example of how this feature is
	used is in an electronic banking service. This behavior is also known as staged
	dialing.
	
	RESOLUTION
	==========
	
	Remove and reinsert the modem to dial again. You must repeat this process each
	time you want to dial again.
	
	To prevent this behavior from occurring, use the following method to disable
	staged dialing.
	
	NOTE: Microsoft does not encourage or support making changes to .inf files.
	Therefore, Microsoft Product Support Services (PSS) does not support the
	following procedure. Although we have tested this procedure and it appears to
	function as described, you should make a backup copy of the Mdmmoto.inf file in
	the Windows\Inf folder before you proceed.
	
	1. Use any text editor (such as Notepad) to open the Mdmmoto.inf file in the
	  Windows\Inf folder.
	
	  NOTE: The Inf folder is a hidden folder in the Windows folder. To view this
	  folder, start Windows Explorer, click Options on the View menu, click Show
	  All Files on the View tab, and then click OK.
	
	2. Add the following line to the end of the [Modem16.AddReg] section of the
	  file:
	
	  HKR, Settings, DialSuffix,, ""
	
	3. Save and then close the file.
	
	4. Remove the Motorola Power 14.4 modem using the Modems tool in Control Panel.
	
	5. Remove and reinsert the modem.
	
	MORE INFORMATION
	================
	
	The behavior described in this article occurs only with 32-bit communications
	programs such as HyperTerminal and Dial-Up Networking. When you use a 32-bit
	communications program, the modem works correctly the first time you dial after
	starting Windows 95 or inserting the modem, but does not respond on subsequent
	attempts to dial.
	
	======================================================================
	Keywords          : dun win95 kbDialUp 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
