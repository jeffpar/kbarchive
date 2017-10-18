---
layout: page
title: "Q124643: How to Simulate Client-Server Apps w/Apple Events &amp; FoxPro Mac"
permalink: kb/124/Q124643/
---

## Q124643: How to Simulate Client-Server Apps w/Apple Events &amp; FoxPro Mac

	Article: Q124643
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.6a,3.0b
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Macintosh, version 2.6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article gives a method you can use to simulate client-server applications
	by using Apple Events and FoxPro for Macintosh. With Visual FoxPro for
	Macintosh, you can also use this method to communicate to a Visual FoxPro
	Executable (.EXE.)
	
	MORE INFORMATION
	================
	
	FoxPro's ability to run AppleScripts permits developers to build a client-server
	application using FoxPro on both sides. Though FoxPro was not designed to act as
	a server, and therefore will not behave as a true client- server system would,
	it may be acceptable under certain circumstances such as with a small network
	that has few users logged in simultaneously.
	
	1. Users of the application will have to be able to link to programs running on
	  the computer that will run the server portion of the application. This can be
	  achieved in one of the following two ways:
	
	   - Users connecting to the Macintosh with FoxPro have to be listed in the
	     "Users & Groups" control panel and have File Sharing and Program
	     Linking enabled.
	
	  -or-
	
	   - Users can connect as "Guest". In this case, the <Guest> account in
	     the "Users & Groups" control panel has to have File Sharing and
	     Program Linking enabled.
	
	  NOTE: File Sharing and Program Linking have to be enabled in the Sharing Setup
	  control panel for guests or registered users to be able to connect,
	  regardless of the settings in the Users & Groups control panel. Also, the
	  FoxPro folder and any other appropriate folders must be marked as shared by
	  choosing the Sharing... command from the File menu.
	
	2. The server portion of the application will be Microsoft FoxPro and must run
	  on the server Macintosh. If it is not running, the following message is
	  displayed:
	
	  Microsoft FoxPro isn't running
	  or program linking isn't enabled.
	  <Stop>
	
	3. The client portion of the application will run on each workstation. It can
	  run from a shared network folder to save disk space. The client portion runs
	  scripts, created with Apple Script, that use this syntax:
	
	     tell application "Microsoft FoxPro" of machine "server" of zone "<zone>"
	        do script "<script commands>"
	     end tell
	
	  For example, use the following syntax to open a Browse window with the
	  customer table (.DBF file). Then perform a join SQL-Select query from
	  customer and invoices on the TEST server from the Zone1 zone:
	
	     tell application "Microsoft FoxPro" of machine "TEST" of zone "ZONE1"
	        open "customer.dbf"
	        do script "select * from customer, invoices where
	           customer.cno==invoices.cno into table results.dbf"
	     end tell
	
	  To create Apple Scripts, use Script Editor, which is located by default in the
	  "HD:Apple Extras:AppleScript" folder.
	
	  NOTE: Apple Script and Script Editor are manufactured by Apple, a vendor
	  independent of Microsoft; we make no warranty, implied or otherwise,
	  regarding these products' performance or reliability.
	
	  For more information on using AppleScript and Script Editor, see your
	  Macintosh documentation.
	
	4. The first time the connection is established, the application user is
	  prompted to log in to the server computer by a dialog similar to this:
	
	  Connect to the file server "<server>" as:
	
	  ( ) Guest
	  (o) Registered User
	
	  Name:
	  Password:
	
	       <Cancel>     <OK>
	
	  The user should make the appropriate selection based on the configuration
	  chosen in step 1.
	
	REFERENCES
	==========
	
	For more information on using AppleScript, query on the following words in the
	Microsoft Knowledge Base:
	
	  "FoxPro" (without the quotation marks) and "applescript" (without the
	  quotation marks) and "run" (without the quotation marks)
	
	Additional query words: vFoxMac FoxMac
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260aMac kbVFP300bMac
	Version           : MACINTOSH:2.6a,3.0b
	
	=============================================================================
	
