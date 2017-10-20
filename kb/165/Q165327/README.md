---
layout: page
title: "Q165327: XCLN: Replacing a Damaged Offline Folder (OST)"
permalink: /kb/165/Q165327/
---

## Q165327: XCLN: Replacing a Damaged Offline Folder (OST)

{% raw %}

	Article: Q165327
	Product(s): Microsoft Exchange
	Version(s): 1.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To create a new Offline Folder file (OST) to replace a damaged or corrupted one,
	follow these steps:
	
	1. Exit and log out of the Microsoft Exchange client.
	
	2. Rename any *.ost files to an "xxx" extension.
	
	3. Restart the Microsoft Exchange client online. Your profile settings will need
	  to be changed it defaults to start offline.
	
	4. Upon starting the Microsoft Exchange client, the following prompt will be
	  displayed:
	
	  The file "c:\<exchangedir>\xxx.ost could not be found.
	
	  Click OK to continue.
	
	5. The Offline Folder File Settings dialog box will be displayed. Click OK or
	  change the path and/or OST filename.
	
	6. Select YES at the following prompt:
	
	  The file c:\<exchangedir>\xxx.ost could not be found. Would you like to
	  create it?
	
	7. From the Microsoft Exchange client Tools menu, select Sync All Folders. The
	  new OST is now synchronized with the server and the Microsoft Exchange client
	  may be started offline.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange400Win95
	Version           : 1.00
	
	=============================================================================
	

{% endraw %}
