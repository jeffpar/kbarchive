---
layout: page
title: "Q230646: XFOR: Attachments Corrupted by Incorrect Mapping in Cmsxmap.tbl"
permalink: /kb/230/Q230646/
---

## Q230646: XFOR: Attachments Corrupted by Incorrect Mapping in Cmsxmap.tbl

{% raw %}

	Article: Q230646
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On an IBM OV/VM computer, if you use the Sendfile command to send a PC Binary
	type attachment in the Netdata format to Microsoft Exchange Server, the
	attachment may become corrupted.
	
	CAUSE
	=====
	
	This behavior can occur because Microsoft Exchange Connector for IBM OV/VM
	(PROFS) cannot convert an attachment if loose definition occurs in the mapping
	table file Cmsxmap.tbl.
	
	
	WORKAROUND
	==========
	
	To work around this behavior, modify the mapping table file Cmsxmap.tbl in the
	Exchsrvr\Connect\Exchconn\Tables folder, so that it identifies the binary files
	from the host. The following is an updated Cmsxmap.tbl file:
	
	  LISTING EBCDIC
	  EXEC EBCDIC
	  SCRIPT EBCDIC
	  $SCRIPT EBCDIC
	  OFSMCNTL EBCDIC
	  DIRECTRY EBCDIC
	  BIN BINARY
	  COM BINARY
	  DOC BINARY
	  EXE BINARY
	  PPT BINARY
	  XLS BINARY
	  XLW BINARY
	  ZIP BINARY
	  VSD BINARY
	  MDB BINARY
	  * EBCDIC
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
