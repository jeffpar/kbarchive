---
layout: page
title: "Q138159: 16-Bit MS-DOS-Based Communications Program May Not Work"
permalink: /kb/138/Q138159/
---

## Q138159: 16-Bit MS-DOS-Based Communications Program May Not Work

{% raw %}

	Article: Q138159
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): dun win95 kbDialUp
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to use a 16-bit MS-DOS-based communications program in an MS-DOS
	session in Windows 95, the modem may not be initialized properly. When this
	occurs, you may receive an error message stating that the communications port is
	in use, not found, or unable to initialize.
	
	In some cases, no error message is displayed, but you cannot use the modem in the
	16-bit communications program.
	
	CAUSE
	=====
	
	This behavior can occur if Dial-Up Networking Server is monitoring the line, if
	your fax modem is set to receive faxes automatically, or if the modem is using
	the wrong IRQ or I/O address for the COM port.
	
	RESOLUTION
	==========
	
	To resolve this issue, add the following setting to the [386Enh] section of the
	System.ini file
	
	  COM<n>AutoAssign=2
	
	where <n> is the port your modem is assigned to. For example:
	
	  COM2AutoAssign=2
	
	If the "COM<n>AutoAssign=2" setting does not work, close all programs that
	are monitoring the communications port (such as Dial-Up Networking Server and
	Microsoft Fax), and then use one of the following methods:
	
	- Disable caller access to Dial-Up Networking Server. To do so, follow these
	  steps:
	
	  1. Click the Start button, point to Programs, point to Accessories, and then
	     click Dial-Up Networking.
	
	  2. Click Connections, and then click Dial-Up Server.
	
	  3. Click No Caller Access, and then click OK.
	
	- Disable the automatic receiving of faxes. To do so, follow these steps:
	
	  1. Use the right mouse button to click Inbox on the desktop, and then click
	     Properties on the menu that appears.
	
	  2. Click Microsoft Fax, and then click Properties.
	
	  3. Click Modem, click the modem you are using, and then click Properties.
	
	  4. Click Don't Answer, and then click OK until you return to the desktop.
	
	For additional information about using the "COM<n>AutoAssign=" setting,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q130402 Device Contention in Windows
	
	Also, verify that the modem is using the correct IRQ and I/O address settings for
	the COM port it is using.
	
	Additional query words: comxautoassign
	
	======================================================================
	Keywords          : dun win95 kbDialUp 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
