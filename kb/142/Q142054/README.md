---
layout: page
title: "Q142054: Print Job/Document Resets To Zero When It Reaches 255"
permalink: kb/142/Q142054/
---

## Q142054: Print Job/Document Resets To Zero When It Reaches 255

	Article: Q142054
	Product(s): Microsoft Windows NT
	Version(s): 3.51 4.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you are auditing the print jobs as they are processed through the Event
	viewer, the Print Job/Document number resets every time it reaches 255 in
	Windows NT 3.51. In previous versions, this number did not reset and continued
	to increase.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Server versions 3.51 and 4.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	In Windows NT 3.5, print job auditing is accomplished by viewing the document
	number in Event ID 10 in the Event Viewer. This system event also provides
	information about the user who printed the file, the size of the print job and
	the printer or port name. The Print Job/Document number does not reset unless
	you clear the event log or reboot the computer.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : 3.51 4.0
	
	=============================================================================
	
