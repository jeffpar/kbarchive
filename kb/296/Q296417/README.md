---
layout: page
title: "Q296417: Mapisp32.dll Invalid Page Fault Err Msg in Schedule+ Profile"
permalink: kb/296/Q296417/
---

## Q296417: Mapisp32.dll Invalid Page Fault Err Msg in Schedule+ Profile

	Article: Q296417
	Product(s): Microsoft Schedule+ for Windows
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 18-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Schedule+ and you then open a profile or create a new profile for
	Microsoft Exchange Client (Inbox), the following error message may appear:
	
	  Mapisp32 caused an invalid page fault in module kernel32.dll
	
	CAUSE
	=====
	
	This behavior can occur if the Mapi32.dll file has become damaged, possibly
	because Windows Messaging might already have been reinstalled one or more times.
	
	RESOLUTION
	==========
	
	To resolve this behavior, rename the Mapi32.dll file, and then remove and
	reinstall Windows Messaging:
	
	1. In Windows Explorer, locate the Mapi32.dll file, and then rename it to
	  Mapi32.old.
	
	2. Locate the MSMail.inf file in the \Windows\Inf folder, and then copy the file
	  to your desktop.
	
	3. Click Start, point to Settings, and then click Control Panel.
	
	4. Double-click Add/Remove Programs, and then click the Windows Setup tab.
	
	5. Click Have Disk, and then click Browse.
	
	6. Browse through the folder list to locate the MSMail.inf file that you copied
	  to your desktop.
	
	7. Click OK, and then click OK again.
	
	MORE INFORMATION
	================
	
	For additional information about installing Windows Messaging, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q235713 How to Reinstall Microsoft Fax and Windows Messaging
	
	Additional query words: wms.exe, s+, schedplus, schedule plus, boot
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbZNotKeyword2 kbScheduleSearch kbSchedule700
	Version           : :7.0
	Issue type        : kbprb
	
	=============================================================================
	
