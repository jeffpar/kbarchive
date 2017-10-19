---
layout: page
title: "Q84950: File Manager Cannot Connect to Share with Long Name"
permalink: /kb/084/Q84950/
---

## Q84950: File Manager Cannot Connect to Share with Long Name

	Article: Q84950
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows File Manager cannot connect from a LAN Manager 2.0 or 2.1
	MS-DOS workstation to a network share name that is greater than the standard
	MS-DOS limit of eight characters followed by a period (.) and a three letter
	extension. For example, you can connect to:
	
	  \\SERVER\SHARNAME.EXT
	
	You cannot connect to:
	
	  \\SERVER\SHARNAMEX.EXT
	
	Both of the above shares will be viewable through File Manager's Browse ability.
	When attempting to connect to a share with a long name, the following error
	messages are displayed:
	
	  LAN Manager 2.0:<A0><A0>Invalid Network Name
	
	  LAN Manager 2.1:<A0><A0>This Network Name Cannot be Found
	
	The network server name does not have this limitation. For example, you can
	connect to:
	
	  \\SERVERNAME\SHARNAME.EXT
	
	MORE INFORMATION
	================
	
	From a LAN Manager 2.0 enhanced MS-DOS workstation, if you have two shares, one
	named \\SERVER\SHARENAME (invalid) and the other named \\SERVER\SHARENAM
	(valid), and you use File Manager's Browse function and attempt to connect to
	\\SERVER\SHARENAME (invalid), then you will be connected to \\SERVER\SHARENAM
	(valid).
	
	Additional query words: 3.10 3.11 err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
