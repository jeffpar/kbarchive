---
layout: page
title: "Q85971: PC Win: Network Connections and Linked Objects"
permalink: /kb/085/Q85971/
---

## Q85971: PC Win: Network Connections and Linked Objects

	Article: Q85971
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Version 3.0 of Microsoft Mail for Windows (being an Embedding client), supports
	Linking by the use of a Microsoft Windows version 3.1 product, Packager.
	Packager allows Mail for Windows to "Embed Packaged Links." When using Mail and
	creating Packaged Links, the user should be creating links to files that can be
	accessed by those receiving the mail (that is, the file should be located on a
	Server accessible by both sender and receiver).
	
	MORE INFORMATION
	================
	
	By using the following steps, a Packaged Link can be created:
	
	1. Open the Windows File Manager.
	
	2. Highlight the file to link.
	
	3. From the File menu, choose Copy and select Copy to Clipboard.
	
	4. Start Mail for Windows and open a new Compose Note.
	
	5. Select Paste Special from the Edit menu and choose Packaged Link. An icon
	  will appear within the Mail message indicating the file type. However, only a
	  Link to the file is embedded, not the actual file. The Link includes the
	  complete drive and path to the file (that is, M:\PUBLIC\EXPENSES.XLS).
	
	6. Send the Mail message.
	
	7. The receiving user can now open the Mail message containing the Packaged Link
	  and double-click the object to launch the server application.
	
	The receiving user(s) must be connected to the same server AND use the same drive
	path. If a user attempts to open a Packaged Link to a file that he is not
	properly connected to, he will receive one of the following error messages:
	
	- Linked document is unavailable
	
	-or-
	
	- Failed to carry out command
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
