---
layout: page
title: "Q146306: XADM: Exchange Server Backup &amp; Restore Procedures"
permalink: kb/146/Q146306/
---

## Q146306: XADM: Exchange Server Backup &amp; Restore Procedures

	Article: Q146306
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 13-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you install Microsoft Exchange Server, a new version of Microsoft Windows
	NT Backup is automatically installed. This new version of Backup is aware of the
	Microsoft Exchange Server organization and can display the sites and servers of
	one or more Microsoft Exchange Server organizations.
	
	MORE INFORMATION
	================
	
	Backup
	------
	
	Notes:
	
	- This section's references to Windows NT Backup show only the elements
	  pertaining to Microsoft Exchange Server. For more information on Windows NT
	  Backup, see your Windows NT Server documentation.
	
	- You do not have to stop the directory or the information store service to do
	  a backup. Also, you can back up and restore servers remotely.
	
	Starting the Backup Utility and Starting a Backup:
	
	1. In the Windows NT Program Manager, open the Administrative Tools program
	  group.
	
	2. Select Backup.
	
	3. If your Microsoft Exchange Server organization and server are not displayed,
	  choose Microsoft Exchange from the Operations menu. Type the name of any
	  Microsoft Exchange Server in the organization, and click the OK button.
	
	4. Select the sites you want to back up.
	
	  If the site or server is not visible in the Backup window, double-click the
	  organization and site containers to display the contents.
	
	5. In each site container, select the servers you want to back up.
	
	6. In each server container, select the directory or information store to
	  backup.
	
	7. Choose Backup.
	
	By using the Microsoft Exchange organization window, you can select the
	organization, site, or one or more Microsoft Exchange Servers to back up. You
	can also select the directory and information store individually for each
	server. The files used by the directory and information store are automatically
	backed up. You do not have to manually select the appropriate files and
	directories on each server.
	
	Restore
	-------
	
	Notes:
	
	- Information can be restored after it has been backed up.
	
	- Restoring Exchange Server data to a server without properly removing the
	  Exchange Server object from other sites can result in invalid users being
	  displayed in the other sites' user lists.
	
	Getting to the Restore Information dialog box:
	
	1. In the Windows NT Program Manager, open the Administrative Tools program
	  group.
	
	2. Double-click the Backup icon.
	
	3. Select the sets in the tapes window that you want to restore.
	
	4. Choose Restore.
	
	  Option              Description
	  ----------------------------------------------------------------------
	
	  Erase all           Erases all existing data pertaining to the set
	  existing data       being restored on the server. Use when the data
	                      is being restored to a different server or when
	                      you want to delete database information currently
	                      on the hard disk.
	
	  Private and         Available when restoring only the information
	  Public              store and allows you to restore both the private
	                      and public information store or either,
	                      independently.
	
	  Start Service       Starts the information store or directory services
	  After Restore       after the restore.
	
	  Destination         This is available when restoring only the
	  Server              information store. It is the server that the
	                      backup will be restored to.
	
	Additional query words: faq
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
