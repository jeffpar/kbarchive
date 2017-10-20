---
layout: page
title: "Q132058: PC Win: GP-Fault in DEMILAYR.DLL Caused by Corrupt XTN File"
permalink: /kb/132/Q132058/
---

## Q132058: PC Win: GP-Fault in DEMILAYR.DLL Caused by Corrupt XTN File

{% raw %}

	Article: Q132058
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If all mail users get a general protection fault (GP fault) in DEMILYR.DLL
	simultaneously, it could be a corrupt XTN file.
	
	CAUSE
	=====
	
	If users can send mail using the Microsoft Mail for PC Networks, MS-DOS
	workstation without errors, and if ADMIN.EXE works correctly, but ALL Mail for
	Windows users get a GP fault in the DEMILAYR.DLL, then it could be a corrupt XTN
	file.
	
	WORKAROUND
	==========
	
	The XTN files can be divided evenly by 698 and still be corrupt. Try replacing
	the XTN files from backup.
	
	Additional query words: 3.20 gpf
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
