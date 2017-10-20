---
layout: page
title: "Q192168: XADM: Exchange Server Binaries Cannot Be Moved"
permalink: /kb/192/Q192168/
---

## Q192168: XADM: Exchange Server Binaries Cannot Be Moved

{% raw %}

	Article: Q192168
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Exchange Server core files and databases are installed to a
	specified or selected directory during setup which by default is similar to the
	C:\Exchsrvr directory.
	
	At the end of the Microsoft Exchange Server setup, you are presented with the
	option to run the Exchange Server Performance Optimizer, which can be used to
	modify the location of the Exchange Server databases and log directories
	including:
	
	  Private information store (default location <drive>:\Exchsrvr\Mdbdata)
	  Public information store (default location <drive>:\Exchsrvr\Mdbdata)
	  Information store logs (default location <drive>:\Exchsrvr\Mdbdata)
	  Directory service (default location <drive>:\Exchsrvr\Dsadata)
	  Directory service logs (default location <drive>:\Exchsrvr\Dsadata)
	  Message transfer agent (default location <drive>:\Exchsrvr\Mtadata)
	
	Exchange Server directories that cannot be moved include:
	
	  Add-ins
	  Address
	  Bin
	  Ccmcdata
	  Connect
	  Insdata
	  Kmsdata
	  Res
	  Webtemp
	
	Depending on the version of Exchange Server installed, some of the above
	directories may or may not be included in the <drive>:\Exchsrvr directory
	structure.
	
	MORE INFORMATION
	================
	
	For information about moving the Tracking.log directory, please see the
	following Knowledge Base article:
	
	  Q169770 XADM: How To Move Tracking Logs and Directory
	
	The Dxadata directory can only be moved in Exchange Server 5.5. For information
	about this process, please see the following Knowledge Base article:
	
	  Q185504 XFOR: Dxadata Folder Cannot Be Moved to a Different Location.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
