---
layout: page
title: "Q173527: Automating PPTP Connection Via ISP Connection"
permalink: /kb/173/Q173527/
---

## Q173527: Automating PPTP Connection Via ISP Connection

{% raw %}

	Article: Q173527
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbhowto kbinfo kbArtTypeINF
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT version 4.0 introduced a new feature called Point-to-Point Tunneling
	Protocol (PPTP). After you have connected to the Internet, you can make a PPTP
	connection to your corporate network and access corporate resources. This
	article discusses how to use one simple batch file to automate the process of
	connecting to your Internet service provider (ISP) and then connecting to your
	corporate PPTP server.
	
	MORE INFORMATION
	================
	
	To connect to your ISP and then connect to your corporate PPTP server without
	needing to launch two phone book entries, create a batch file using the
	following steps:
	
	NOTE: These steps assume that you have already created two phone book entries,
	one for your ISP and one for your PPTP Server.
	
	1. Using a text editor such as Notepad.exe or Edit.com, type the following
	  lines, substituting your personal information for the items in brackets:
	
	  rasdial.exe <ISP Phonebook Entry> <username1> <password1>
	  rasdial.exe <PPTP Phonebook Entry> <username2> <password2>
	  /DOMAIN:<domain>
	
	  NOTE: The /DOMAIN option should be on the same line as the second Rasdial
	  command and is only required if your PPTP server requires Microsoft
	  encryption.
	
	2. Save the file with a name like Pptp.bat, then exit the text editor.
	
	3. To connect to your PPTP server, run the batch file Pptp.bat.
	
	NOTE: The command "Rasdial /?" will display the correct syntax to use with this
	command.
	
	WARNING: The passwords in such a batch file are in plain text and can be seen by
	anyone viewing the file.
	
	Additional query words: Dial-Up Networking
	======================================================================
	Keywords          : kbhowto kbinfo kbArtTypeINF 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
