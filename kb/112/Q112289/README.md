---
layout: page
title: "Q112289: PC DOS: Notice 20 Error When Printing May Be Due to SHARE.EXE"
permalink: /kb/112/Q112289/
---

## Q112289: PC DOS: Notice 20 Error When Printing May Be Due to SHARE.EXE

{% raw %}

	Article: Q112289
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 2.1x 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Notice 20 error may occur while printing from version 2.1x of Microsoft Mail
	for PC Networks, MS-DOS workstation.
	
	CAUSE
	=====
	
	This is often caused by running MS-DOS SHARE.EXE with Novell NetWare.
	
	RESOLUTION
	==========
	
	Load SHARE.EXE after loading IPX.COM and NETx.COM. Some network administrators
	choose to load these files from a batch file that is called either by the user
	or from a batch file within the AUTOEXEC.BAT file. If this is true, be sure
	SHARE.EXE is loaded after the network batch file.
	
	MORE INFORMATION
	================
	
	The need for MS-DOS SHARE.EXE to be loaded after IPX.COM and NETx.COM has been
	fixed with version 3.0 of Microsoft Mail for PC Networks, MS-DOS workstation.
	Prior to Microsoft Mail version 3.0, the MS-DOS SHARE utility must be loaded
	after the network drivers.
	
	Additional query words: 2.10 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN21xSearch
	Version           : WINDOWS:2.1x
	
	=============================================================================
	

{% endraw %}
