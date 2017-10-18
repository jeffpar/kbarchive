---
layout: page
title: "Q249904: XADM: Deleting Damaged IMS Object in Raw Mode"
permalink: kb/249/Q249904/
---

## Q249904: XADM: Deleting Damaged IMS Object in Raw Mode

	Article: Q249904
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to delete the Internet Mail Service (IMS) object in
	raw mode when the usual methods of deletion, such as using Setup to remove the
	object or selecting the object in the Exchange Server Administrator program and
	pressing DELETE, do not work.
	
	MORE INFORMATION
	================
	
	WARNING: Using the raw mode of the Exchange Server Administrator program (admin
	-r) incorrectly can cause serious problems that may require you to reinstall
	Microsoft Windows NT Server and/or Microsoft Exchange Server. Microsoft cannot
	guarantee that problems resulting from the incorrect use of raw mode can be
	solved. Use raw mode at your own risk.
	
	1. Open Exchange Administrator in raw mode:
	
	  a. At the Microsoft Windows NT command prompt, change to the drive and folder
	     where Exchange Administrator resides:
	
	  X:\exchsrvr\bin
	
	  b. Type the following at the command line:
	
	  admin -r
	
	2. Select the IMS object, select the Edit menu, and then select Delete Raw
	  Object.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
