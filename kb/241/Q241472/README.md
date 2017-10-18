---
layout: page
title: "Q241472: XADM: How to Add a Hidden Recipient to a Distribution List"
permalink: kb/241/Q241472/
---

## Q241472: XADM: How to Add a Hidden Recipient to a Distribution List

	Article: Q241472
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 16-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to add a hidden recipient to a distribution list (DL)
	using the Microsoft Exchange Server Administrator program.
	
	MORE INFORMATION
	================
	
	To add a hidden recipient to a DL using the Exchange Server Administrator
	program you must start the Exchange Server Administrator program in raw mode.
	
	WARNING: Using the raw mode of the Exchange Server Administrator program (admin
	/r) incorrectly can cause serious problems that may require you to reinstall
	Microsoft Windows NT Server and/or Microsoft Exchange Server. Microsoft cannot
	guarantee that problems resulting from the incorrect use of raw mode can be
	solved. Use raw mode at your own risk.
	
	1. Start the Exchange Server Administrator program on any server in the site in
	  raw mode by typing the following at a command prompt:
	
	  "c:\exchsrvr\bin\admin /r" (without the quotation marks)
	
	2. Click the hidden recipient object, and on the File menu, click Raw Properties
	  (or press SHIFT+ENTER) to get the raw properties of the recipient.
	
	3. Scroll through the Object Attributes list to find the Obj-Dist-Name
	  attribute. Click to select the whole line of the edit value, and then press
	  CTRL+C to copy that information to the clipboard. Click OK.
	
	4. View the raw properties of the DL (press SHIFT+ENTER) that you want to add
	  the hidden recipient to. Click to select the Members attribute. On the Edit
	  Value line, paste (press CTRL+V) the information from the clipboard. Click
	  Add, and then click Apply. The hidden recipient is now added to the DL. Do
	  this for each hidden recipient you want to add to a DL.
	
	5. Click OK to quit the raw properties of the DL.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
