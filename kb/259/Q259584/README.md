---
layout: page
title: "Q259584: XFOR: Notes Directory Synch Fails from Exchange to Notes"
permalink: /kb/259/Q259584/
---

## Q259584: XFOR: Notes Directory Synch Fails from Exchange to Notes

{% raw %}

	Article: Q259584
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to synchronize directories from Microsoft Exchange Server to a
	Lotus Notes server using Microsoft Exchange Connector for Lotus Notes, the
	following events may be logged in the application log:
	
	  Event ID: 41129
	  Source: MSExchangeNOTES
	  Type: Error
	  Category: Notes Directory
	  Description:
	  Insufficient access rights to the Notes database
	  <Notes_server>/<Notes_domain>!!names.nsf - Current Access level:
	  2, Access Level Required: 3
	
	  -and-
	
	  Event ID: 64092
	  Source: MSExchangeNOTES
	  Type: Error
	  Category: Notes Directory
	  Description:
	  Error {Not available} detected when Opening a Note
	
	NOTE: <Notes_server> is the name of the Lotus Notes server and
	<Notes_domain> is the name of the Lotus Notes domain.
	
	CAUSE
	=====
	
	This behavior can occur if the Exchange Connector for Lotus Notes (for example,
	Connector.ID) uses a Notes ID in which the access rights have been changed.
	
	RESOLUTION
	==========
	
	To resolve this issue, change the access rights in Exchange Notes Connector ID
	to Manager or higher.
	
	
	Additional query words: notes 4.61 4.64 4.66a mecc notescon
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
