---
layout: page
title: "Q167621: WD97: Invalid Page Fault with Proofing Tools on Network"
permalink: /kb/167/Q167621/
---

## Q167621: WD97: Invalid Page Fault with Proofing Tools on Network

{% raw %}

	Article: Q167621
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbnetwork kbusage kbproof word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your proofing tools are located on a network drive and your network
	connection is lost during a Microsoft Word session, you may receive the
	following error message:
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	Clicking the Details button shows:
	
	  WINWORD caused an invalid page fault in module KERNEL32.DLL.
	
	CAUSE
	=====
	
	Microsoft Word for Windows is unable to access the proofing tools on the
	network.
	
	WORKAROUND
	==========
	
	Re-establish your network connection or install the proofing tools on a local
	hard disk drive.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	REFERENCES
	==========
	
	For more information about installing proofing tools, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q135022 OFF: Can't Run Spelling Checker After Removing Another Program
	
	  Q164220 OFF97: Windows Registry Entries Remain After Remove All
	
	  Q166953 WD97: Cannot Locate Msconv97.dll When Converting Files
	
	  Q164808 OFF: Setup Cannot Locate the Program Files Folder
	
	  Q162970 Installing Project 4.x Breaks Office 97 Spell Check
	
	Additional query words: crash spell spelling grammar ipf gpf general protection fault
	
	======================================================================
	Keywords          : kbnetwork kbusage kbproof word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	

{% endraw %}
