---
layout: page
title: "Q238149: How to Add a Carriage Return to the Legal Notice Text"
permalink: /kb/238/Q238149/
---

## Q238149: How to Add a Carriage Return to the Legal Notice Text

{% raw %}

	Article: Q238149
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 03-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article describes how to add a carriage return to the Legal Notice text in
	Windows NT.
	
	MORE INFORMATION
	================
	
	You can configure Windows NT to display a Legal Notice message to users before
	they can log on to the system. At the end of the message, users must click OK
	before the logon dialog box is displayed.
	
	If the message contains more than one paragraph, you can add a carriage return so
	that the message is displayed as intended (even if the display resolution on the
	computer changes). For additional information about the Legal Notice banner in
	Windows NT, please click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q101063 Windows Logon Welcome, Displaying Warning Message
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To add a carriage return to the Legal Notice text of a logon dialog box, follow
	these steps:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following registry key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon
	
	3. Locate and double-click the LegalNoticeText value.
	
	4. Type the text that you want displayed in the Legal Notice message, and then
	  click OK.
	
	5. On the Edit menu, click Binary. This opens the text of the message in the
	  binary editor. Each letter of the message (including spaces) is represented
	  in hexadecimal, with four characters in the binary editor representing one
	  letter of text in the message.
	
	6. To insert a carriage return after a line of text, click the space just after
	  the last character in the message where you want to put the first carriage
	  return, type "0D00" (without the quotation marks), and then click OK.
	
	7. Remember that one letter of normal text is equal to four characters in the
	  binary editor. Count the number of characters before the next location where
	  you want to put a carriage return, and multiply this by four. Move over this
	  number of spaces in binary mode, and then type "0D00" (without the quotation
	  marks) again.
	
	8. Repeat this process for each carriage return that is needed. You can put two
	  carriage returns next to each other to simulate a new paragraph.
	
	NOTE: The Windows 2000 Registry Editor dialog box that is used for the Windows
	2000 Legal Notice text (LegalNoticeText) does not recognize the character 0x0D.
	Instead, you must insert both the carriage return (0x0D) and line feed (0x0A)
	characters in that order, for example, "0D000A00" (without the quotation marks).
	
	Additional query words: banner security
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
