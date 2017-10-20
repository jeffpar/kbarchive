---
layout: page
title: "Q113282: WFWG RAS: Optional Modifiers and Dialing Strings"
permalink: /kb/113/Q113282/
---

## Q113282: WFWG RAS: Optional Modifiers and Dialing Strings

{% raw %}

	Article: Q113282
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information explains the dialing modifiers used in the Microsoft
	Windows for Workgroups Remote Access Services (RAS) client.
	
	MORE INFORMATION
	================
	
	Touch-Tone Dialing and Pulse/Rotary Dialing
	-------------------------------------------
	
	By default, Windows for Workgroups RAS uses your current telephone system format
	for dialing (either touch-tone or pulse/rotary dialing). It may be necessary to
	use touch-tone only, pulse/rotary only, or both to get an outside line on some
	telephone systems.
	
	Use the following information to switch between dialing scripts when you enter
	numbers to dial:
	
	- The letter "T" switches from pulse/rotary to touch-tone dialing.
	
	  Example: If you are dialing from a telephone system that supports pulse/rotary
	  dialing and you need to enter a touch-tone format for a calling card, the
	  dial string is 555-5678T1234. Every digit after the "T" is in touch-tone
	  format.
	
	- The letter "P" switches from touch-tone to pulse/rotary dialing.
	
	  Example: If you are dialing from a telephone system that supports touch-tone
	  dialing but it is connected to the telephone company through pulse/rotary
	  dialing, the dial string is 123P555-5678. The "123" prefix tones may be used
	  to access specific in-house functions or access specific telephone lines.
	  Every digit after the "P" is in pulse/rotary format.
	
	- You can use the "T" and "P" switches together to switch between formats.
	
	  Example: 555-1234P123T456 (tone-pulse-tone)
	
	Telephone Number Modifiers for RAS
	----------------------------------
	
	The following telephone-number modifiers are used to help get an outside line on
	some telephone systems.
	
	- The comma (,) causes the dialing to pause briefly (two seconds for most
	  modems) before continuing.
	
	  Example: 9,555-1234. The "9" is used on some telephone systems to get an
	  outside line. The comma inserts a pause before dialing the telephone number.
	  You can use as many commas as needed to create a longer pause before the
	  telephone number is dialed.
	
	- The at sign (@) waits for extended silence before continuing. This symbol
	  causes the modem to listen to silence for five seconds. If a five-second
	  silence has not been detected within the period predefined in the BIOS S7
	  register of the modem (the default is 50 seconds), the modem disconnects. If
	  five seconds of silence are detected, the modem continues dialing the dial
	  string.
	
	  Example: 9@555-1212
	
	- The letter "W" waits for a dial tone before continuing (for modems operating
	  at 2400 bits per second [BPS] or greater). This dial modifier causes the
	  modem to wait for an additional dial tone before dialing the numbers that
	  follow the "W." The length of time the modem waits is up to the value in the
	  BIOS S7 register of the modem (the default is 50 seconds). The modem can be
	  instructed to dial through a private branch exchange (PBX) or a long-distance
	  calling service that requires delays during dialing.
	
	  Example: 9W555-1212. The "9" accesses the outside (public) telephone line.
	  The "W" causes the modem to wait 50 seconds for a secondary dial tone (unless
	  the default value in the BIOS S7 register of the modem has been changed).
	  Then the 555-1212 telephone number is dialed.
	
	Additional query words: 3.11 remote access service info tshoot phone number
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
