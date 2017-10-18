---
layout: page
title: "Q158852: XCLN: Client Cannot Read Project 4.0 Files Sent Through Exchange"
permalink: kb/158/Q158852/
---

## Q158852: XCLN: Client Cannot Read Project 4.0 Files Sent Through Exchange

	Article: Q158852
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 30-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Macintosh client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send Project 4.0 Macintosh files using Microsoft Exchange Server, the
	file creator and type are reset to null, making the file unreadable.
	
	When you try to open the Project 4.0 attachment, the following error message
	appears:
	
	  The document <document name> could not be opened, because the
	  application program that created it could not be found. Could not find a
	  translation extension with appropriate translators.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Use a file server (such as Windows NT File Services for Macintosh) to share
	  the file and create a Macintosh-accessible volume.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange Macintosh
	client version 4.0. This problem was corrected in Microsoft Exchange Server 4.0
	U.S. Service Pack 4. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: enclosure
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbExchangeClientSearch kbExchange500Mac kbExchange400Mac
	Version           : :4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
