---
layout: page
title: "Q136047: PC Adm: Err Msg: Notice 1 Device Not Available"
permalink: /kb/136/Q136047/
---

## Q136047: PC Adm: Err Msg: Notice 1 Device Not Available

{% raw %}

	Article: Q136047
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to execute the Mail Administration program (ADMIN.EXE), you may get
	the following error message:
	
	  Notice 1 Device not available.
	
	  Press the ESC key.
	
	  Notice 37 Disk directory full or error opening file.
	
	CAUSE
	=====
	
	The ADMIN.NME file is locked open.
	
	RESOLUTION
	==========
	
	To verify if the file is locked open, try to rename the ADMIN.NME file to
	ADMIN.OLD. If the file cannot be renamed, it is locked open.
	
	You can also try to copy the ADMINSHD.NME file to the ADMIN.NME file. If
	ADMIN.NME is locked open, you will get the following error:
	
	  Sharing violation
	
	To resolve the problem, at the server release the lock on the ADMIN.NME file.
	
	
	Additional query words: 3.00 3.20 3.20a
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN300
	Version           : WINDOWS:3.0,3.2,3.2a
	
	=============================================================================
	

{% endraw %}
