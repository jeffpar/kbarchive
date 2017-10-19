---
layout: page
title: "Q231460: XFOR: Migration from Memo Fails with MIGMIGU0207E LINEFEED Field"
permalink: /kb/231/Q231460/
---

## Q231460: XFOR: Migration from Memo Fails with MIGMIGU0207E LINEFEED Field

	Article: Q231460
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 11-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	IMPORTANT: This article describes a tool available on the Microsoft Exchange
	Server 5.5 CD that is not supported by Microsoft Product Support Services (PSS).
	Refer to the Readme.txt in the Server\Migrate\Tools\Host directory on the CD for
	support options.
	
	Running the MIGMIGU JCL code on the mainframe may result in the following error
	message:
	
	  MIGMIGU0207E LINEFEED field missing from MIGPARM2.
	
	RESOLUTION
	==========
	
	You need to add a parameter to the DD statement for the MIGPARAM2 dataset that
	defines the LINEFEED character, as shown below:
	
	  //MIGPARM2 DD *
	
	  PRIMARY MEMOHDR.TXT
	
	  SECONDARY MEMODATA.TXT
	
	  GCID 850
	
	  LINEFEED \
	
	  /*
	
	Alternatives to "\" are 10, x"0A". If "\" does not work, use one of the
	alternatives.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
