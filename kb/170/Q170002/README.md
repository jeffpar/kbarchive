---
layout: page
title: "Q170002: XCLN: Exchange Client Cannot Send Attachments on Citrix WinFrame"
permalink: kb/170/Q170002/
---

## Q170002: XCLN: Exchange Client Cannot Send Attachments on Citrix WinFrame

	Article: Q170002
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running a Microsoft Exchange Client using the Citrix WinFrame interface,
	you cannot include attachments in messages that you send.
	
	RESOLUTION
	==========
	
	If the Exchange client using the WinFrame interface cannot send attachments,
	check the following:
	
	- Verify the client can send a mail message without an attachment.
	
	- Check the permissions on the Frmcache.dat file.
	
	  1. Start Windows Explorer. Select the NTFS partition in the left window of
	     Explorer.
	
	  2. From the Tools menu, select Find and click Files or Folders.
	
	  3. Type Frmcache.dat in the Named window and click Find Now.
	
	  4. In the file location window, right click on the Frmcache.dat file and
	     select Properties.
	
	  5. To verify permissions, make sure that Full Control is selected for the
	     group Everyone.
	
	- Reinstall the client on the Citrix computer. To reinstall the Exchange client
	  on Citrix computer:
	
	  1. From the MS-DOS prompt, type Change user / install. This sets the Citrix
	     session into the Install mode.
	
	  2. Install the Exchange client (do not start the client).
	
	  3. From the MS-DOS prompt, type Change user / Execute. This sets the Citrix
	     session back into the Execute / Run mode. The client should be fully
	     functional
	
	  4. Verify permissions on the Frmcache.dat file (see the previous paragraph).
	
	MORE INFORMATION
	================
	
	Citrix WinFrame will allow the Microsoft Exchange client to run on the WinFrame
	interface. However, this interface only passes video and keystrokes because all
	client processing is done at the Winframe server.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	
	
	  Q159563 XCLN: Citrix WinFrame FAQ
	
	Additional query words: winframe insert file
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT
	Version           : 4.0 5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
