---
layout: page
title: "Q130285: PC Adm: Resetting or Rebuilding Mailbags with MAILQ16.EXE"
permalink: /kb/130/Q130285/
---

## Q130285: PC Adm: Resetting or Rebuilding Mailbags with MAILQ16.EXE

{% raw %}

	Article: Q130285
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1, 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the MAILQ16.EXE utility that ships in the Microsoft Mail
	for PC Networks Resource Kit.
	
	MAILQ16.EXE is a Microsoft Windows-based program that allows a Microsoft Mail
	Administrator to reset or rebuild any Microsoft Mail Mailbag (set of .KEY and
	.MBG files).
	
	MORE INFORMATION
	================
	
	MAILQ16.EXE allows a Microsoft Mail Administrator to reset or rebuild any of the
	following types of mailbags:
	
	- A Mailbag belonging to any local user on the postoffice.
	
	- A Mailbag belonging to any external postoffice defined.
	
	- A Mailbag belonging to any gateway defined on the postoffice.
	
	- System Mailbag (SYSTEM.KEY and SYSTEM.MBG).
	
	- INQUEUE.
	
	- INQUEUE3.
	
	When you reset a mailbag, it involves clearing out the .KEY file and resetting
	all bytes to zero, and resetting the .MBG file to zero bytes in size. All mail
	present in the mailbag will be lost.
	
	When you rebuild a mailbag, it involves allowing the Administrator to view the
	headers present in the mailbag. The Administrator can select which headers
	should be restored. The program then creates a new mailbag and copies the
	selected headers into the new mailbag. In case a header selected does not have
	corresponding .MAI file, the program has the ability (if the option is set) to
	generate a stub message in place of the missing .MAI file.
	
	
	For further information on the program, please refer to the Help file
	accompanying the program that explains the different options available in the
	program.
	
	Additional query words: 2.10 3.00 3.20 reset rebuild mailbag reskit
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN210
	Version           : WINDOWS:2.1,3.0,3.2
	
	=============================================================================
	

{% endraw %}
