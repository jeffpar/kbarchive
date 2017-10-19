---
layout: page
title: "Q92900: Mixing Tone and Pulse Dialing in Cardfile and Terminal"
permalink: /kb/092/Q92900/
---

## Q92900: Mixing Tone and Pulse Dialing in Cardfile and Terminal

	Article: Q92900
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is possible to mix the touch-tone and pulse-dialing capabilities of a Hayes
	or Hayes-compatible modem when you dial from Windows Cardfile or Windows
	Terminal. This capability allows the modem to mix dialing methods when dialing a
	series of numbers.
	
	MORE INFORMATION
	================
	
	Hayes and Hayes-compatible modems use the "AT" command set. "AT" is used to get
	the attention of the modem. The command for tone dialing is "ATDT" followed by a
	phone number. ("DT" indicates tone dial.) The command for pulse dialing is
	"ATDP" followed by the phone number. ("DP" indicates pulse dial.)
	
	Some phone systems are restricted to pulse dialing until an outside line or other
	phone service is reached by dialing a prefix, such as "9." Because tone dialing
	is faster than pulse dialing, you may want to dial the prefix in pulse and then
	switch to tone dialing for the actual phone number.
	
	Listed below are the steps to mix tone and pulse dialing with Cardfile and
	Terminal.
	
	Cardfile
	--------
	
	Cardfile allows you to call another party without actually connecting the two
	modems. To dial a number with Cardfile, use the following steps:
	
	1. From the Card menu, choose Autodial; or, press F5.
	
	2. In the Autodial dialog box, choose the Setup button, and select either the
	  Tone or Pulse option button to set the default dialing method. To pulse dial
	  a prefix and then tone dial the phone number, select the Pulse option as the
	  default.
	
	3. Select the Use Prefix check box.
	
	4. To dial a prefix in pulse, type the proper number in the Prefix box and add
	  the letter "T." ("T" instructs the modem to switch to tone dialing after it
	  pulse dials the prefix.)
	
	  Some phone systems may require a pause between dialing the prefix and dialing
	  the phone number. In such cases, add a comma to the prefix to allow a
	  two-second pause before the phone number is dialed.
	
	For example, you might use the following settings in the Autodial dialog box:
	
	  Number: 555-1212
	  Prefix:     9T,
	
	Note: A modem that is set for tone dialing can be switched to pulse dialing by
	inserting a "P" instead of a "T." In Cardfile, the "P" or "T" can also be
	inserted in the phone number, rather than the prefix.
	
	
	For more information about using automatic dialing with Cardfile, refer to pages
	446-447 of the "Microsoft Windows User's Guide" for version 3.1.
	
	Terminal
	--------
	
	Terminal can connect two modems together and enable two computers to exchange
	information. The settings to switch dialing modes in Terminal are similar to
	those in Cardfile. To modify the settings in Terminal, use the following steps:
	
	1. From the Settings menu, choose Modem Commands. The default prefix for tone
	  dialing is "ATDT." Change it to "ATDP" to make Terminal use pulse dialing.
	
	2. To make Terminal pulse dial the prefix "9," pause before tone dialing a phone
	  number, type the following in the Dial field of the Modem Commands dialog
	  box:
	
	  ATDP9,T
	
	  Change this setting to "ATDT9,P" to make Terminal first use tone dialing and
	  then switch to pulse dialing.
	
	Note: In Terminal, the "P" and "T" commands cannot be entered with the phone
	number because Terminal converts any letters in the phone number to numbers.
	These commands must be placed in the prefix.
	
	For more information about using Terminal, refer to Chapter 11 of the "Microsoft
	Windows User's Guide" for version 3.1.
	
	Additional query words: 3.00 3.00a 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
