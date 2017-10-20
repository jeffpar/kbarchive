---
layout: page
title: "Q179147: Access Denied Starting Program"
permalink: /kb/179/Q179147/
---

## Q179147: Access Denied Starting Program

{% raw %}

	Article: Q179147
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start a program from the desktop, the Start menu, a
	shortcut, or from a file association, you may receive one of the following error
	messages:
	
	  Access to the specified device, path or file is denied.
	
	-or-
	
	  Access to the driver, specified path, or file is denied.
	
	NOTE: This problem only affects programs whose executable files are located in
	folders within the Program Files folder.
	
	CAUSE
	=====
	
	These error messages can occur if any of the following conditions exists:
	
	- You have a Program folder on the same drive as the Program Files folder.
	
	- You are trying to run a program that does not write quoted path strings
	  containing long file names into the registry. The execution of a process is
	  handled by the Win32 CreateProcess() API. CreateProcess() is unable to
	  distinguish between spaces in long file names, and spaces delimiting
	  arguments to the function. If a quoted string is passed to the API,
	  CreateProcess() is able to make this distinction and starts the program as
	  expected.
	
	- In Windows Explorer, the view option is set to hide DLLs. This is the default
	  setting and should be changed to "Show all Files" if you receive this error
	  message when running a 16-bit program.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, use the appropriate method below:
	
	Program Does Not Quote Long File Name Paths in the Registry
	-----------------------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	
	A Program Folder Exists on the Same Drive as the Program Files Folder
	---------------------------------------------------------------------
	
	Rename the Program folder to a name other than Program. To do so, right- click
	the Program folder in Windows NT Explorer, click Rename, type a new name for the
	folder, and then press ENTER.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	MORE INFORMATION
	================
	
	This behavior has been known to occur with the Inbox and Internet Explorer icon,
	and with shortcuts pointing to Microsoft Access databases. In addition, if you
	have a file on the root folder named C:\Program, the above problems may occur.
	
	For additional information about additional symptoms that may occur, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q165763 Windows NT Does Not Recognize a Space in a Registry Value
	
	  Q165763 Windows NT Does Not Recognize a Space in a Registry Value
	
	  Q149533 OLE Problems When Running 16-bit Applications on Windows NT
	
	  Q170669 Creating C:\Program Folder Causes Add/Remove Program to Fail
	
	  Q175653 Err Msg: At Least One Service or Driver Failed...
	
	Additional query words: ole shell open command run context menu office 4.00
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
