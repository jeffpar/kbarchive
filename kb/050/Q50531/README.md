---
layout: page
title: "Q50531: Mac DOS:Err Msg: &quot;You Need to Load AppleTalk&quot; w/ AppleShare PC"
permalink: /kb/050/Q50531/
---

## Q50531: Mac DOS:Err Msg: &quot;You Need to Load AppleTalk&quot; w/ AppleShare PC

{% raw %}

	Article: Q50531
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 1.37,2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, MS-DOS workstation, versions 1.37, 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To use Microsoft Mail (PC Client) with AppleShare PC version 2.0, you must first
	load the COMPAT.COM utility (provided with AppleShare PC 2.0) into memory.
	
	AppleShare PC 2.0 uses a new protocol set that allows AppleTalk devices to
	communicate with each other (AppleTalk Phase 2). PC Client Mail is designed to
	work with AppleTalk Phase 1 protocol. COMPAT.COM must translate the older
	protocol so that it is compatible with AppleTalk Phase 2 protocol.
	
	If you attempt to run PC Client Mail without installing COMPAT.COM, Mail cannot
	locate the AppleTalk driver, and the following message is displayed:
	
	  You need to load the AppleTalk device driver software before starting Mail
	
	MORE INFORMATION
	================
	
	COMPAT.COM tells PC Client Mail that the AppleTalk driver is loaded at software
	interrupt address 60. If the MAIL.INI file contains the line INT=xx, where xx is
	not equal to 60, Mail will not locate the AppleTalk driver at the correct
	software address, and you will still receive the message "You need to load the
	AppleTalk device driver software before starting Mail."
	
	Additional query words: 1.37 2.00 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailATN137DOS kbMailATN200DOS kbMailATN300DOS
	Version           : :1.37,2.0,3.0
	
	=============================================================================
	

{% endraw %}
