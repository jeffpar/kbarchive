---
layout: page
title: "Q261172: PRB: fnevObjectDeleted Returns Short Term Entry ID from Exchange"
permalink: /kb/261/Q261172/
---

## Q261172: PRB: fnevObjectDeleted Returns Short Term Entry ID from Exchange

	Article: Q261172
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbEDK kbExchange kbMAPI kbMsg kbGrpDSMsg kbDSupport
	Last Modified: 09-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Exchange 2000 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An Extended Messaging Application Programming Interface (MAPI) program
	implements the IMAPIAdviseSink interface to be notified on changes in a folder
	on an Exchange Server. When an fnevObjectDeleted notification event is received,
	the entry ID contained in the accompanying OBJECT_NOTIFICATION structure is a
	short term entry ID instead of a long term entry ID.
	
	CAUSE
	=====
	
	All entry IDs that are returned by the Exchange providers in notifications are
	short term, because short term entry IDs are quicker to compute than long term
	entry IDs.
	
	RESOLUTION
	==========
	
	This is only a problem if you are storing the long term entry IDs of items in
	another database and need information from the delete event to determine which
	item to remove. Because the item has already been deleted, it cannot be opened
	to obtain the long term entry ID. At this point, there is no way, other than
	rescanning the folder, to identify the deleted item.
	
	If the notification is table-based instead of folder-based, a TABLE_NOTIFICATION
	structure is returned. This structure contains enough information to identify
	which row of the table was deleted. For most client applications, this is
	sufficient to maintain a list of items that are currently in a container.
	
	In general, however, MAPI notification is not a recommended method of
	synchronizing databases with Exchange. Notifications are not guaranteed by
	Exchange and may be dropped under high loads.
	
	REFERENCES
	==========
	
	For more information on the Exchange notification queue, see "The Queue of
	Notifications" at the following Microsoft Developer Network (MSDN) Web site:
	
	  http://msdn.microsoft.com/library/default.asp?URL=/library/psdk/exchserv/infostor_0jcj.htm
	  (http://msdn.microsoft.com/library/default.asp?URL=/library/psdk/exchserv/infostor_0jcj.htm)
	
	Exchange 2000 supports Store Event Sinks, which can be used to track saves and
	deletes to any folder in an Exchange 2000 store. For more information, see "Web
	Storage System Events" at the following MSDN Web site:
	
	  http://msdn.microsoft.com/library/default.asp?URL=/library/psdk/exchsv2k/_exch2k_ole_db_server_events_overview.htm
	  (http://msdn.microsoft.com/library/default.asp?URL=/library/psdk/exchsv2k/_exch2k_ole_db_server_events_overview.htm)
	
	For a sample that uses folder notification to keep track of the contents of a
	folder, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q230770 SAMPLE: FrmVwr.exe Extended MAPI Form Viewer
	
	Additional query words:
	
	======================================================================
	Keywords          : kbEDK kbExchange kbMAPI kbMsg kbGrpDSMsg kbDSupport 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange2000Search kbExchange2000Serv
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
