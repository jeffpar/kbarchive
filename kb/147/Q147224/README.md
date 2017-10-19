---
layout: page
title: "Q147224: Shared Icon Does Not Appear After Sharing a Folder with a LFN"
permalink: /kb/147/Q147224/
---

## Q147224: Shared Icon Does Not Appear After Sharing a Folder with a LFN

	Article: Q147224
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kbui
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you share a folder with a long filename on a FAT partition, Windows NT
	Explorer may not display the shared icon. Also, you cannot administer the shared
	folder from Windows NT Explorer, but the share can be seen from network clients.
	
	CAUSE
	=====
	
	This problem occurs when the path for the shared folder is stored in the
	registry as a short filename (for example, C:\Progra~1). The path is stored this
	way if the RunOnce registry option executed a file in the same folder during the
	most recent reboot. The path specified for the RunOnce registry option is also
	stored as a short filename (SFN). Explorer.exe does display the shared icon if a
	SFN is used in the path to the shared folder.
	
	RESOLUTION
	==========
	
	Perform the following steps to resolve this problem:
	
	1. Type the following at a command prompt to delete the share:
	
	  "net share <sharename> /d" (without the quotation marks)
	
	  where <sharename> is the path to the shared folder.
	
	  NOTE: For assistance with the NET SHARE command, please type the following at
	  a command prompt:
	
	  "net share /?" (without the quotation marks)
	
	2. Shut down and restart your computer.
	
	3. Use Windows NT Explorer to share the folder.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	MORE INFORMATION
	================
	
	The RunOnce registry parameter is used to run an application one time when you
	logon on the subsequent reboot. Primarily, setup programs use RunOnce to perform
	tasks on subsequent reboots. RunOnce is documented in the Windows NT Resource
	Kit.
	
	
	Additional query words: 4.00 overlay
	
	======================================================================
	Keywords          : kbenv kbui 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbbug
	
	=============================================================================
	
