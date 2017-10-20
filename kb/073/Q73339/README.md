---
layout: page
title: "Q73339: Printer Echo Command in Terminal"
permalink: /kb/073/Q73339/
---

## Q73339: Printer Echo Command in Terminal

{% raw %}

	Article: Q73339
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Printer Echo command in Terminal, it does not echo the commands
	to the printer immediately.
	
	CAUSE
	=====
	
	If Printer Echo is active, all the information displayed on the screen is sent
	to Print Manager to be printed. The spooled data is printed when the print queue
	link with Print Manager is closed. This occurs when you close Terminal, or when
	you choose Printer Echo from the Settings menu to deactivate Printer Echo. This
	is the same process that all Windows 3.1 applications use to print. The printout
	consists of every line and command that is issued within the Terminal session.
	
	RESOLUTION
	==========
	
	At any time during a Terminal session, you can force the contents that are being
	echoed to the printer to start printing by choosing Printer Echo from the
	Settings menu again, thereby closing the print job. If you want to restart
	capturing data again during the session, choose Printer Echo again from the
	Settings menu.
	
	If Print Manager is disabled, the information and commands displayed are not
	spooled; they are immediately sent to the printer.
	
	NOTE: The buffer is not specifically related to printing. Its function is to
	retain a specific number of lines for you to review. The buffer size can be
	modified by changing the settings in the dialog box that appears when you choose
	Terminal Preferences from the Settings menu. The minimum number of lines for the
	buffer is 25; the maximum number of lines is 400.
	
	Additional query words: 3.0 3.00 3.0a 3.00a 3.1 3.10 wincomm 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
