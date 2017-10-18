---
layout: page
title: "Q232968: How to Automate Terminal Server Client Configuration"
permalink: kb/232/Q232968/
---

## Q232968: How to Automate Terminal Server Client Configuration

	Article: Q232968
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork kbtool
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you log on to a computer, the Terminal Server Client Configuration window
	may be displayed even though you have already configured it to use a terminal
	server connection.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	To resolve this issue, follow these steps:
	
	1. On the client computer, configure the terminal server connection.
	
	2. In the registry, note the name of the key under the following registry key:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Terminal Server Client
	
	  NOTE: Each terminal server connection creates a registry key.
	
	3. Close Registry Editor.
	
	4. Click Start, point to Find, and then click Files Or Folders.
	
	5. In the Named box, type "mstsc.exe" (without the quotation marks), and then
	  click Find Now. Note the folder where the Mstsc.exe file is located.
	
	6. Close the Find window.
	
	7. Click Start, point to Programs, and then click Windows NT Explorer.
	
	8. Browse to the following folder
	
	  <WINNT>\Profiles\All Users\Start Menu Programs
	
	  where <WINNT> is the folder in which you installed Windows NT.
	
	9. Right-click a blank area in the right window pane, point to New, and then
	  click Shortcut.
	
	10. In the Command Line box, type the path and file name you noted in step 5, or
	  click Browse to browse to the Mstsc.exe file, and then click Open.
	
	11. At the end of the path and file name, type the following text
	
	  "<RegistryKeyName>"
	
	  where <RegistryKeyName> is the name of the registry key you noted in
	  step 2.
	
	12. Click Next, click Next, and then click Finish.
	
	NOTE: If you need to configure multiple workstations, you can copy the registry
	keys mentioned, using a .reg file or a Regini script. The Regini.exe tool is
	available with the Windows NT 4.0 Resource Kit.
	
	REFERENCES
	==========
	
	For additional information about automating the logon process, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q158447 How to Run a Program Only Once After Unattended Setup of WINNT
	
	  Q167364 Automating AUTOADMINLOGON Locally When Joining a Domain
	
	Additional query words: wts automate
	
	======================================================================
	Keywords          : kbenv kbnetwork kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
