---
layout: page
title: "Q258838: Dial-Up Networking Automatic Redial May Stop After 15 Attempts"
permalink: /kb/258/Q258838/
---

## Q258838: Dial-Up Networking Automatic Redial May Stop After 15 Attempts

{% raw %}

	Article: Q258838
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:95; winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbhw dun kbHardware kbDialUp
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have a dial-up connection configured to automatically redial your
	Internet service provider (ISP), you may receive the following error message
	after the fifteenth automatic redial attempt:
	
	  Could not detect modem. It may be in use, turned off, or not installed
	  properly
	
	CAUSE
	=====
	
	Newer modems that are based on the Rockwell chip set, and U.S. Robotics/3Com
	modems may have "blacklisting" enabled (this may be country-specific, depending
	on the manufacturer of the modem). After 15 attempts the modem, in accordance
	with ITU standards, "blacklists" the phone number. When this occurs, you cannot
	redial the number until an internal modem time-out has expired or you reboot the
	computer.
	
	RESOLUTION
	==========
	
	Modify the modem initialization string to include one of the following commands.
	Please refer to the documentation for your modem for details.
	
	+------------------------------+
	| Command | Modem type         | 
	+------------------------------+
	| %TCB    | Rockwell based     | 
	+------------------------------+
	| S40=2   | U.S. Robotics/3Com | 
	+------------------------------+
	| S40=7   | U.S. Robotics/3Com | 
	+------------------------------+
	
	This command prevents the modem from "blacklisting" a number and allow repeated
	redials up to 99 times.
	
	STATUS
	======
	
	This behavior is a limitation of the modem configuration files supplied with
	your modem. Contact your modem manufacturer for updated files. To support
	delayed and "blacklisted" responses, the modem's unique ID .inf file should
	contain the necessary registry keys.
	
	MORE INFORMATION
	================
	
	Most modern modems keep a table of the most recently dialed numbers in memory
	with a count against each number dialed. Commonly, after a number has been
	dialed 15 times, the modem refuses to dial the number again until a certain time
	period has elapsed, thus "blacklisting" or delaying the number.
	
	
	Additional query words: delayed
	
	======================================================================
	Keywords          : kb3rdparty kbhw dun kbHardware kbDialUp 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : WINDOWS:95; winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
