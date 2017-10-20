---
layout: page
title: "Q224991: XFOR: DXA Does Not Start After Upgrading Windows NT to SP4"
permalink: /kb/224/Q224991/
---

## Q224991: XFOR: DXA Does Not Start After Upgrading Windows NT to SP4

{% raw %}

	Article: Q224991
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,4.0 SP4,4.0 SP5,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 20-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	- the operating system: Microsoft Windows NT, versions 4.0 SP4, 4.0 SP5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you upgrade a computer running Microsoft Windows NT version 4.0 Service
	Pack 3 that was running the Microsoft Exchange Directory Synchronization Service
	(DXA) to Service Pack 4, the following errors appear in the Windows NT
	Application Event Log, and the DXA does not start:
	
	  Event ID: 249
	  Source: MSExchangeDX
	  Description: Error -1201 occurred while trying to create a new database.
	
	  - and -
	
	  Event ID: 172
	  Source: ese97
	  Description: MSExchangeDX ((276)) The database engine is initiating index
	  cleanup of database 'd:\exchsrvr\DXADATA\XDIR.EDB' as a result of an NT
	  version upgrade from 4.0.1381 SP3 to 4.0.1381 SP4.
	
	  - and -
	
	  Event ID: 177
	  Source: ese97
	  Description: MSExchangeDX ((276)) Database 'd:\exchsrvr\DXADATA\XDIR.EDB': The
	  secondary index 'DisplayName_index' of table 'MapTable' is corrupt. Please
	  defragment the database to rebuild the index.
	
	CAUSE
	=====
	
	After you apply Windows NT version 4.0 Service Pack 4, you need to rebuild the
	indexes of the DXA database to start the DXA, because the UNICODE sort order is
	changed in Windows NT version 4.0 Service Pack 4. After you upgrade the Windows
	NT version, the DXA doesn't rebuild the indexes of the DXA database
	automatically when you start the DXA.
	
	RESOLUTION
	==========
	
	If you defragment the DXA database, indexes are rebuilt, and the DXA starts
	successfully.
	For additional information about how to defragment an Exchange Server database,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q192185 XADM: How to Defragment with the ESEUTIL Utility (Eseutil.exe)
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbOSWinSearch kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2 kbOSWinNTSearch kbOSWinNT400SP4 kbOSWinNT400SP5
	Version           : winnt:4.0,4.0 SP4,4.0 SP5,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
