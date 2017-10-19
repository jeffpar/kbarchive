---
layout: page
title: "Q126856: PC Win: Windows Client Loses Access to MMF on LMX Server"
permalink: /kb/126/Q126856/
---

## Q126856: PC Win: Windows Client Loses Access to MMF on LMX Server

	Article: Q126856
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running Microsoft Mail for Windows on a workstation that connects to a
	postoffice on a Microsoft LAN Manager for UNIX Server, the Windows Mail client
	may randomly lose its connection to the mail message file (MMF). This will
	result in the Network Disconnect icon appearing in the Status bar.
	
	CAUSE
	=====
	
	The LAN Manager for UNIX Servers have a default setting that limits how large of
	a file each workstation can access. By default, this is 20 megabytes. If the MMF
	grows to be greater than 20 MB in size, the user will not be able to send or
	receive new mail.
	
	
	RESOLUTION
	==========
	
	Delete old mail from the MMF to free up some space, or modify the setting at the
	server that limits the size of any file that the workstation can access.
	
	Additional query words: 3.00 3.00b 3.20 3.20a broken connection limit
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b kbMail320a
	Version           : WINDOWS:3.0,3.0b,3.2,3.2a
	
	=============================================================================
	
