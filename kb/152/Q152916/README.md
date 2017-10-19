---
layout: page
title: "Q152916: XCLN: MAC Client Can't Open Attachments from Migrated MAC PO"
permalink: /kb/152/Q152916/
---

## Q152916: XCLN: MAC Client Can't Open Attachments from Migrated MAC PO

	Article: Q152916
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 29-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Macintosh client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you use the Macintosh Source Extractor to migrate a Microsoft Mail for
	Appletalk Networks Postoffice to a Microsoft Exchange Server version 4.0, you
	might not be able to double-click to open attachments on mail messages in the
	Macintosh mail client. You will receive the following error message for text
	attachments:
	
	  Can't get the time stamp of <your computer>:System Folder:Exchange
	  Temporary Items:<attachment name>. Microsoft Exchange will assume it is
	  dirty.
	
	After you click OK, you will receive the following error message:
	
	  The application associated with this attachment could not be started.
	  <attachment name> (System Error = -43)".
	
	When you close the message containing the attachment, you will receive the
	following error message:
	
	  The temporary file has disappeared. Changes could not be saved.
	
	There is no error message for executable attachments. When double- clicked, they
	create a new message and attach themselves to it. If you double-click this new
	icon, you will get another message with the attachment but it will have a 1, an
	@ symbol, and an umlauted A appended to its name. If you double-click each new
	icon, this behavior will continue.
	
	CAUSE
	=====
	
	The properties of the message show that PR_ATTACH_ENCODING is not set to
	OID_MAC_BINARY by the source extractor.
	
	WORKAROUND
	==========
	
	To work around this problem, save the attachment and then run Stuffit to decode
	it.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange clients,
	version 4.0, listed at the beginning of this article. This problem was corrected
	in Microsoft Exchange Server 4.0 U.S. Service Pack 4. For information on
	obtaining the service pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: XADM
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbExchangeClientSearch kbExchange400Mac
	Version           : WINDOWS:4.0
	
	=============================================================================
	
