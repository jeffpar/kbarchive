---
layout: page
title: "Q169861: MDG: Offline Symbol Caused by Corrupted Mailbag"
permalink: /kb/169/Q169861/
---

## Q169861: MDG: Offline Symbol Caused by Corrupted Mailbag

{% raw %}

	Article: Q169861
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The offline (or net disconnect) symbol may appear in the status bar of Microsoft
	Mail for Windows for one or more mailboxes. This results in being unable to send
	or receive messages. However, if you log on with the same mailbox from the
	MS-DOS mail program, there does not seem to be a problem.
	
	CAUSE
	=====
	
	This problem can be caused if:
	
	- The user's MMF file resides on a Novell file server and is in an ownerless
	  state.
	
	- The user's KEY and MBG files are corrupted or are not accessible.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	- Ensure that all files on a postoffice that resides on a Novell file server
	  have an owner.
	
	- Use the Mailq16.exe utility that ships in the Microsoft Mail for PC Networks
	  Resource Kit to reset or rebuild the KEY and MBG files for the user.
	
	MORE INFORMATION
	================
	
	For additional information on how to run Mailq16.exe, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q130285 PC Adm: Resetting or Rebuilding Mailbags with MAILQ16.EXE
	
	For additional information if you do not have Mailq16.exe, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q104279 PC DB: Creating or Resetting a .KEY and .MBG Pair
	
	Additional query words: icon
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail350 kbMail320
	Version           : WINDOWS:3.0,3.2,3.5
	
	=============================================================================
	

{% endraw %}
