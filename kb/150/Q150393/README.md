---
layout: page
title: "Q150393: XCLN: How To Have New Mail Delivered to a Local PST"
permalink: /kb/150/Q150393/
---

## Q150393: XCLN: How To Have New Mail Delivered to a Local PST

{% raw %}

	Article: Q150393
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 25-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Under certain conditions it might be necessary to have mail delivered to the
	locally stored personal folder (PST) rather than keep it in the Microsoft
	Exchange Server based Folder. This can only be accomplished by a Microsoft
	Exchange Client for Windows.
	
	MORE INFORMATION
	================
	
	To have mail delivered to the local PST, perform the following steps:
	
	1. Create a local PST either from Control Panel:
	
	  Double click Mail and Fax.
	  Click Add.
	  Double-click Personal folders.
	  Select the path and filename of the PST.
	  Click OK.
	
	  or from inside the Microsoft Exchange client for Windows:
	
	  Click Tools.
	  Click Services.
	  Click Add.
	  Double-click Personal Folders.
	  Select the path and filename of the PST.
	  Click OK.
	
	2. From inside the Microsoft Exchange client for Windows:
	
	  Open the Tools menu, select Options, and click the Delivery tab. In Deliver
	  new mail to the following location: list box, select the Personal Folder that
	  you just created.
	
	This Personal Folder will have 4 new folders and the messages in the Microsoft
	Exchange Server based folder will be moved here.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange400Win95
	Version           : WINDOWS:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
