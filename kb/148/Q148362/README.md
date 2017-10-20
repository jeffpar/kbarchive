---
layout: page
title: "Q148362: Connecting Two Windows NT Computers with EiconCards"
permalink: /kb/148/Q148362/
---

## Q148362: Connecting Two Windows NT Computers with EiconCards

{% raw %}

	Article: Q148362
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	You can configure two Windows NT computers with EiconCards back-to-back using a
	null modem cable. You can set up the two computers so that Windows NT Remote
	Access Services (RAS) can be used to make a connection over the null modem cable
	that connects the two EiconCards.
	
	MORE INFORMATION
	================
	
	1. Make sure both EiconCards support the null modem cable you will be using.
	  Cable requirements may be different for different models on EiconCards.
	
	2. One computer must be configured to use internal clocking and the other
	  computer must be configured to use external clocking. To configure the type
	  of clocking, run Eicon's WAN Services Configuration program and go to the
	  Sync Driver Configuration panel.
	
	3. Configure the internal clocking computer to use DCE addressing. Configure the
	  external clocking computer to use DTE addressing. To configure DTE/DCE
	  Addressing, go to the Sync Driver Configuration panel in the WAN Services
	  Configuration program.
	
	4. Make sure all X.25 and HDLC panel settings are the same on both computers.
	
	5. Verify the Eicon X.PAD driver is installed in the Network Control Panel
	  Applet (NCPA) on both computers. If X.PAD is not installed, install it.
	  Consult your Eicon documentation for installation instructions.
	
	6. Configure the X.PAD driver and a COM port on both computers. Leave all X.PAD
	  configuration settings for the ports at their default values.
	
	7. Configure RAS in NCPA on both computers. Add the port you configured in the
	  X.PAD driver. Select Eicon X.PAD as the device. Make sure the port on one
	  computer is set for dialout and the port on the other computer is set to
	  receive calls.
	
	8. Restart both computers when prompted.
	
	9. Create an entry in the RAS Phonebook application on one computer and
	  configure it to use the port you configured within the X.PAD driver.
	
	10. Dial the entry you have created, using an account that has been granted RAS
	  dial-in permission on the other computer.
	
	You should now have a connection between the two computers using RAS.
	
	
	Additional query words: prodnt 3.50 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	

{% endraw %}
