---
layout: page
title: "Q141065: PC Win: MMF Displays No Messages After Integrity Check"
permalink: /kb/141/Q141065/
---

## Q141065: PC Win: MMF Displays No Messages After Integrity Check

{% raw %}

	Article: Q141065
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you do an integrity check on your Mail Message File (MMF), your folders and
	messages may disappear.
	
	CAUSE
	=====
	
	This may happen if the pointers stored in the MMF are corrupt.
	
	RESOLUTION
	==========
	
	1. Create a new MMF with a different name.
	
	2. From the File menu, choose Import.
	  From this option, the folders and messages will be viewable for import into
	  the new MMF.
	
	3. Select the folders and messages you want to import to your new MMF.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q132744 Description of Mail Integrity Check MAILINT.EXE
	
	  Q112265 Using F5 or SHIFT Key to Start Mail Utilities
	
	  Q96501 Incorrect Unread Message Count
	
	  Q112210 Check MMF Utility Repeatedly Asks to Check MMF
	
	Additional query words: 3.20 3.50 mail integrity check mmf corrupt import
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail350 kbMail320
	Version           : WINDOWS:3.2,3.5
	
	=============================================================================
	

{% endraw %}
