---
layout: page
title: "Q196846: XFOR: Migration Wizard Fails when Migrating from GroupWise 4.1a"
permalink: /kb/196/Q196846/
---

## Q196846: XFOR: Migration Wizard Fails when Migrating from GroupWise 4.1a

	Article: Q196846
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the migration of a Novell GroupWise 4.1a client, the Migration Wizard
	fails while copying the users' mail. No errors or warnings are logged in the
	event viewer. The timer on the Migration Wizard keeps counting. Migration can be
	canceled but not resumed.
	
	CAUSE
	=====
	
	The Windows NT Server computer performing the migration must have the Novell
	GroupWise client installed, and the Novell GroupWise client must be available in
	the path. The GroupWise client uses a viewer to display the contents of an
	e-mail attachment without retrieving it into an application.
	
	The viewer can display text, graphics, codes, and faxes. The viewer requires a
	"patch" or an update to the viewer file in order to view some attachments. For
	example, to view Office 97 documents, the latest patch for the GroupWise client
	must be installed.
	
	Because the Migration Wizard uses the GroupWise client to migrate user messages
	and attachments, the Migration Wizard may fail when it attempts to copy an
	attachment which the GroupWise client cannot view.
	
	WORKAROUND
	==========
	
	To avoid this problem, apply the latest GroupWise client viewer patch on the
	Windows NT Server computer that is running the migration. The patch may be found
	at http://support.novell.com.
	
	Additional query words: gwise
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
