---
layout: page
title: "Q260068: XADM: Error 800ff330 Running Exchange Performance Optimizer"
permalink: /kb/260/Q260068/
---

## Q260068: XADM: Error 800ff330 Running Exchange Performance Optimizer

{% raw %}

	Article: Q260068
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 02-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An error message similar to the following may appear when you run the Exchange
	Server Performance Optimizer against a private-only server or public-only
	server:
	
	  The file D:\Exchsrvr\mdbdata\Priv.edb (or Pub.edb) could not be found. -
	  [800FF330]
	
	This error message may reference the full path to the Priv.edb or Pub.edb
	database. This error message appears while Performance Optimizer is running a
	disk analysis against the local drives.
	
	CAUSE
	=====
	
	This issue can occur because, when the disk analyzing portion of Performance
	Optimizer is running, Performance Optimizer always checks for the existence of
	the Priv.edb and Pub.edb databases, whether these files are being used or not.
	Performance Optimizer reads the Exchange Server registry keys to determine where
	these databases are supposed to be located. If the databases are not in the path
	that is specified in the registry, an error message is generated.
	
	A private-only Exchange Server computer does not use the Pub.edb database, and a
	public-only Exchange Server computer does not use the Priv.edb database. For
	this reason, the Pub.edb or Priv.edb may have been manually deleted to free disk
	space on a private-only server or public-only server. When you delete the
	Private Information Store object or Public Information Store object from the
	Exchange Admin program, the corresponding database is not removed from the drive
	by Exchange Server. The database is left on the drive but the database is not
	used.
	
	WORKAROUND
	==========
	
	To work around this issue, use one of the three following methods:
	
	Method 1
	--------
	
	Create a sample database file in the path specified in the registry. For example,
	you can create a file with Notepad. Once the text document is created, you can
	then rename the file to Priv.edb and place it in the appropriate path.
	Performance Optimizer does not check for a valid database, but rather, it simply
	checks for the existence of files named Priv.edb and Pub.edb. The easiest way to
	determine where the newly created file should be copied is to click the Database
	Paths tab in the properties of the appropriate server object in the Exchange
	Administrator program. The list of servers in the site is maintained in the
	Site\Configuration\Servers container of the Exchange Admin program.
	
	Method 2
	--------
	
	Run Performance Optimizer in verbose mode by running the Perfwiz -v command from
	the Exchsrvr\bin directory at a command prompt. When you run Performance
	Optimizer in verbose mode, you are given the option to "Analyze hard disks." If
	this option is unchecked, Performance Optimizer will not check for the existence
	of a Priv.edb or Pub.edb database file.
	
	Method 3
	--------
	
	If you are using Performance Optimizer solely to modify the database paths, do
	not use Performance Optimizer; move the database(s) by modifying the database
	paths in the Exchange Admin program. For additional information, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q234295 XADM: Changing Database Paths Using the Administrator Program
	  [exchange]
	
	MORE INFORMATION
	================
	
	A private-only server or public-only server is a server from which the private
	information store or public information store object has been deleted in the
	Exchange Admin program (for example, dedicated mailbox servers or dedicated
	public folder servers). A private-only server or public-only server can improve
	performance by allowing the Store.exe process to dedicate all processing time
	and allocated memory to one Information Store database rather than two databases
	(Priv.edb and Pub.edb).
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Component         : Admin
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
