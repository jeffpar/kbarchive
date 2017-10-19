---
layout: page
title: "Q189832: Dial-Up Networking Generates Dr Watson When Called Via Shortcut"
permalink: /kb/189/Q189832/
---

## Q189832: Dial-Up Networking Generates Dr Watson When Called Via Shortcut

	Article: Q189832
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the following registry key
	
	HKLM\System\CurrentControlSet\Services\RasMan\Parameter
	\DisableSavePassword
	
	is set to 1, and a phonebook entry from Dial-Up Networking is called by using a
	shortcut on the desktop, the RASPHONE application will stop with an access
	violation. The same situation could also happen if Rasphone.exe is started with
	command line parameters or if Microsoft Outlook is configured to use remote
	mail.
	
	For additional information on DisableSavePassword, please see the following
	article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q172430
	  TITLE : Disabling Save Password Option in Dial-Up Networking
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/windows/servicepacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	WORKAROUND
	==========
	
	You can work around this problem by not using shortcuts for phonebook entries or
	by disabling DisableSavePassword in the registry.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was first corrected in Windows NT 4.0 Service Pack 5.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
