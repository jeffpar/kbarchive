---
layout: page
title: "Q194920: XFOR: Missing Message Bodies after GroupWise Migration"
permalink: /kb/194/Q194920/
---

## Q194920: XFOR: Missing Message Bodies after GroupWise Migration

	Article: Q194920
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you migrate messages from Novell GroupWise to Microsoft Exchange Server,
	portions of some or all of the messages may appear to be lost, even though the
	event log does not indicate that a problem occurred during the migration. When
	you attempt to view the messages in Microsoft Outlook after the migration is
	finished, the message headers are present, but the message bodies are not. If
	you attempt to open the messages with the GroupWise client, the following error
	message is displayed:
	
	  C04F: "unexpected error has occurred. Exit & restart GW"
	
	CAUSE
	=====
	
	This problem occurs when the GroupWise database is damaged or when the message
	bodies are no longer located in the database. This prevents the Migration Wizard
	and the GroupWise client from accessing the message bodies.
	
	WORKAROUND
	==========
	
	After the GroupWise database becomes damaged or the message bodies are no longer
	located in the database, the messages cannot be recovered. However, you can use
	the Ofcheck.exe program to delete the message headers associated with the
	damaged or missing message bodies before you migrate the messages to Exchange
	Server. For information about how to do so, contact Novell.
	
	
	If you have already migrated the messages to Exchange Server, use the Outlook
	client to delete the messages.
	
	MORE INFORMATION
	================
	
	GroupWise is manufactured by Novell, a vendor independent of Microsoft; we make
	no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	
	=============================================================================
	
