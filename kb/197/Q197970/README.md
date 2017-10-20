---
layout: page
title: "Q197970: XADM: Attributes Missing When Recreating DS Objects with DS/IS"
permalink: /kb/197/Q197970/
---

## Q197970: XADM: Attributes Missing When Recreating DS Objects with DS/IS

{% raw %}

	Article: Q197970
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run the DS/IS Consistency Adjustment to re-populate the directory with
	mailboxes contained inside the Information Store database, not all of the
	default mailbox attributes are created.
	
	MORE INFORMATION
	================
	
	Running the DS/IS consistency adjuster may be necessary when performing a single
	mailbox recovery.
	
	The following default mailbox attributes are not created when you use DS/IS
	consistency adjustment:
	
	  Allow Rich Text
	  Deliv-Ext-Cont-Types
	  NT-Security-Descriptor
	  Primary Windows NT Account
	  Trust Level
	  Use IS Defaults
	
	In addition, the following non-default attribute is added:
	
	  Hide From AB
	
	These mailbox attributes will need to be updated as needed for each mailbox.
	
	NOTE: Microsoft strongly urges Exchange administrators to review the
	functionality of the DS/IS Consistency Adjuster before using it. The following
	article explains the process and effects of running the DS/IS consistency
	adjuster:
	
	  Q182979 XADM: Function and Effects of the DS/IS Consistency Adjustment
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
