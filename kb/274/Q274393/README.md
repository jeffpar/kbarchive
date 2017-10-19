---
layout: page
title: "Q274393: XFOR: Event 10023 &quot;Invalid Container Specified in Control File&quot;"
permalink: /kb/274/Q274393/
---

## Q274393: XFOR: Event 10023 &quot;Invalid Container Specified in Control File&quot;

	Article: Q274393
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to run Lotus Notes migration from a command line, the following
	message may be reported in the event log:
	
	  Event ID: 10023
	  Source: MSExchangeMig
	  Type: Error
	  Description: Invalid Container 'value_for_keyword_container' specified in the
	  control file. You must specify a container which exists.
	
	RESOLUTION
	==========
	
	To resolve this issue, you can do either of the following methods:
	
	- Remove the keyword "Container" from the control file. Migrated users are then
	  created in the default recipient container.
	
	  -or-
	
	- Use the following format for the "Container" keyword:
	
	  Container,Recipients/cn=NotesPeople
	
	  where "NotesPeople" is a sub-container of the recipient container. The
	  directory name must also be used.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q198957 XFOR: Command Line Parameters for the Latest Migration Wizard
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
