---
layout: page
title: "Q191152: You Receive Error Messages When You Click Dial Properties"
permalink: /kb/191/Q191152/
---

## Q191152: You Receive Error Messages When You Click Dial Properties

{% raw %}

	Article: Q191152
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbnetwork kbtool dun win95 kbDialUp
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you double-click a Dial-Up Networking connection, and then click Dial
	Properties, you may receive either of the following error messages:
	
	  Internal error. Quit and restart the program.
	
	  Rundll32 - This program has performed an illegal operation and will be shut
	  down.
	
	  Not enough memory.
	
	If you then click Details, you may receive any of the following error messages:
	
	  Rundll32 caused a general protection fault in module KRNL386.exe at
	  0003:<memory address>.
	
	  Rundll32 caused a general protection fault in module Kernel32.dll at
	  0137:<memory address>.
	
	  Rundll32 caused a general protection fault in module Tapi.dll at
	  0014:<memory address>.
	
	CAUSE
	=====
	
	The issue can occur if the Tapiaddr.dll file is missing or damaged.
	
	RESOLUTION
	==========
	
	First Two Error Messages Listed Above
	-------------------------------------
	
	To resolve this issue, replace the Tapiaddr.dll file, and then remove and
	reinstall Dial-Up Networking. To do so, use the following steps:
	
	1. Rename the Tapiaddr.dll file to Tapiaddr.old, and then extract the
	  Tapiaddr.dll file from your original Windows 95 media to the Windows\System
	  folder. For information about how to rename a file, click Start, click Help,
	  click the Index tab, type "renaming" (without quotation marks), and then
	  double-click the Renaming Files topic. For information about how to extract
	  files, see the following article in the Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	  NOTE: The Tapiaddr.dll file is in the Win95_11.cab cabinet file on the Windows
	  95 CD-ROM, or on disk 11.
	
	2. Remove Dial-Up Networking, and then reinstall it. For information about how
	  to do so, see the following article in the Microsoft Knowledge Base:
	
	  Q181599 How to Remove and Reinstall Dial-Up Networking and TCP/IP
	
	"Not Enough Memory" Error Message
	---------------------------------
	
	1. Click Start, point to Find, and then click Files Or Folders.
	
	2. In the Named box, type "telephon.ini" (without the quotation marks), and then
	  click Find Now.
	
	3. Right-click any found Telephon.ini file, and then click Delete. Repeat this
	  step until all Telephon.ini files are deleted.
	
	4. Close the Find window.
	
	5. Click Start, and then click Run.
	
	6. In the Open box, type "tapiini.exe" (without the quotation marks), and then
	  click OK.
	
	======================================================================
	Keywords          : kbenv kberrmsg kbnetwork kbtool dun win95 kbDialUp 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
