---
layout: page
title: "Q195014: Outlook 98 May Install Incorrectly on Windows NT Terminal Server"
permalink: kb/195/Q195014/
---

## Q195014: Outlook 98 May Install Incorrectly on Windows NT Terminal Server

	Article: Q195014
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Microsoft Outlook 98 is installed on Windows Terminal Server, the Actions
	menu is blank. Also, no menu appears when you right-click messages. If Office 97
	is installed with Outlook 97, and then upgraded to Outlook 98, the Actions menu
	works as expected.
	
	CAUSE
	=====
	
	This problem occurs because Outlook 98 standalone setup ignores a registry
	entry. This is not a problem in the code.
	
	RESOLUTION
	==========
	
	Do the following to install Outlook 98 standalone:
	
	1. Create a local administrator user named Installer.
	
	2. Log on as Installer at the console.
	
	3. Open a command prompt and type "change user /install" (without the quotation
	  marks).
	
	4. Install Outlook 98.
	
	5. Open a command prompt and type "change user /execute" (without the quotation
	  marks).
	
	6. Allow the system to restart after the installation finishes.
	
	7. Log on as Installer and start a command prompt.
	
	8. Open a command prompt and type "change user /install" (without the quotation
	  marks).
	
	9. Run Outlook 98.
	
	10. Exit Outlook 98.
	
	11. Edit the Office97.cmd file in the %SystemRoot%\Application Compatibility
	  Scripts\Install folder. Modify line 24 as follows:
	
	  ..\ACRegL %Temp%\O97.Cmd O97INST
	  "HKLM\Software\Microsoft\Office\8.0\Common\InstallRoot" "OfficeBin"
	  "STRIPCHAR\1"
	
	12. Run the new Office97.cmd script.
	
	13. Log off.
	
	Outlook 98 should work normally for all users except for Installer.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server 4.0, Terminal
	Server Edition.
	
	Additional query words: 4.00 wts tse ol98
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
