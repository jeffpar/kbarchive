---
layout: page
title: "Q259138: SMS: How to Specify the Maximum Log File Size on a Client"
permalink: /kb/259/Q259138/
---

## Q259138: SMS: How to Specify the Maximum Log File Size on a Client

{% raw %}

	Article: Q259138
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbenv kbsms200
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	For a Systems Management Server (SMS) 2.0 client, the default maximum client log
	file size is 100 KB. This article describes how to increase the log file size.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To increase the client log file size, use the steps in the appropriate section.
	
	Clients Running Microsoft Windows NT
	------------------------------------
	
	1. Use Registry Editor to locate the following registry key:
	
	  HKey_Local_Machine\Software\Microsoft\SMS\Client\Configuration\Client
	  Properties
	
	2. Add the following new value:
	
	  Value Name: Log File Size for Debugging
	  Data Type: REG_DWORD
	  Data: 400 (hexadecimal) for a 1-MB maximum log file size
	
	3. Quit Registry Editor.
	
	4. Stop and restart the SMS Client services.
	
	Clients Running Microsoft Windows95/Microsoft Windows 98
	--------------------------------------------------------
	
	1. Use Registry Editor to locate the following registry key:
	
	  HKey_Local_Machine\Software\Microsoft\SMS\Client\Configuration\Client
	  Properties
	
	2. Add the following new value:
	
	  Value Name: Log File Size for Debugging
	  Data Type: DWORD
	  Value: 400 (hexadecimal) for a 1-MB maximum log file size
	
	3. Quit Registry Editor.
	
	4. Restart the computer.
	
	Using a Registry File
	---------------------
	
	You can also create a registry (.reg) file to make the registry changes listed
	earlier in this article. To do so, use any text editor (such as Notepad) to
	create a text file with a .reg extension. Add the following text to the file:
	
	  REGEDIT4
	
	  ;;-----------------------------------------------------------
	  ;; Increases the default log size for SMS 2.0 clients to
	  ;; 1,024 KB
	  ;;-----------------------------------------------------------
	
	  [HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SMS\Client\Configuration\Client
	  Properties]
	  "Log File Size for Debugging"=dword:00000400
	
	NOTE: You must save the file with a .reg file name extension, not with the
	default .txt extension for a text file.
	
	Double-click the .reg file on any client computer on which you want to increase
	the maximum log file size.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
