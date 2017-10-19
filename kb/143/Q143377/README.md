---
layout: page
title: "Q143377: XADM: Cannot Open Custom Recipient in Administrator"
permalink: /kb/143/Q143377/
---

## Q143377: XADM: Cannot Open Custom Recipient in Administrator

	Article: Q143377
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to open a Custom Recipient that has been loaded into Microsoft
	Exchange by directory synchronization (dirsync) from either Microsoft Mail 3.x
	or Microsoft Mail for Appletalk Networks and it has non teletex characters ($,
	~, ^, $, or #) in the Common Name portion of the Distinguished Name, the
	following error might be displayed:
	
	  The object cannot be found in the directory. This may be because replication
	  has not completed.
	  Microsoft Exchange Directory
	  ID No. c1010aae
	
	CAUSE
	=====
	
	Some dirsynced addresses contain non teletex characters in a field that the
	Microsoft Exchange Directory Synchronization Agent (DXA) uses for the alias
	field. This field is also used for the Common Name portion of the Distinguished
	Name in the Microsoft Exchange Directory. The Microsoft Exchange Administrator
	program uses character mapping (ANSI) to handle the characters, but the DXA
	converts these characters differently. The end result is that the Microsoft
	Exchange Administrator program cannot open these entries.
	
	RESOLUTION
	==========
	
	The DXA has been changed to use the same method of character conversion as the
	Microsoft Exchange Administrator program.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server 4.0 U.S.
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : :4.0
	
	=============================================================================
	
