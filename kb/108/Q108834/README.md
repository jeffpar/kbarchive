---
layout: page
title: "Q108834: PC MAPI: Adding an Automatic Message (Message of the Day)"
permalink: /kb/108/Q108834/
---

## Q108834: PC MAPI: Adding an Automatic Message (Message of the Day)

	Article: Q108834
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Messaging Application Program Interface (MAPI) from versions 3.0 and 3.2 of
	Microsoft Mail for PC Networks, you can add a custom command or message (Message
	of the Day). The Mail administrator can use this, for example, to manually or
	automatically send messages to all or some of the mail users.
	
	You can invoke an automatic message by choosing it from a menu, having it run
	when Mail starts up or closes, or having it run when mail is received.
	
	MORE INFORMATION
	================
	
	Automatic messages are built with Microsoft Visual Basic for Windows, Microsoft
	C, or any other compatible language. Documentation on this is available in the
	"Technical Reference" manual, primarily in chapters 1 and 2. The manual also
	describes how to implement the automatic or custom message as a menu selection,
	or as something activated by a Mail event (such as when Mail starts or ends, or
	when new mail arrives).
	
	The Mail administrator can also have the executable run continuously and check
	the time of day and day of year of a triggering event. When the time criteria
	(which can be kept in an INI file) are met, the application displays the
	designated Message of the Day or Custom Message. This saves the Mail
	administrator from having to intervene in the operation.
	
	Custom commands appear as built-in Mail features after they are added to a
	Microsoft Mail menu by adding data to the MSMAIL.INI file. They can be installed
	on an individual computer for use by a single Mail user or on a network file
	server to be shared by many Mail users.
	
	Custom commands can be used to send a piece of mail around to the desired
	recipients; automatic Mail executables can display a text file located on the
	file server pointed to by a filename in the "command line" section of the
	SHARED.INI. In this case, use the <ExtsDir> variable to specify the
	location of the message if it is stored in the same location as the custom
	command, and modify each user's MSMAIL.INI file to look for the SHARED.INI.
	
	You can also use the Electronic Forms Designer to create automatic messages.
	Since the Electronic Forms Designer uses Visual Basic as its design interface,
	forms you create with it can include the code needed to process message
	delivery. A custom form created using the E-Forms designer provides a custom
	interface for a "Message of the Day" feature. For more information on the
	Electronic Forms Designer, contact Microsoft Inside Sales at (800) 227-4679.
	
	Additionally, the MAPI.DLL update, MAPIUPD.EXE, contains Simple MAPI files for
	both Microsoft C and Visual Basic. You can download MAPIUPD.EXE, a
	self-extracting file, on the following services:
	
	- Microsoft's World Wide Web Site on the Internet
	
	  On the www.microsoft.com home page, click the Support icon.
	  Click Knowledge Base, and select the product.
	  Enter kbfile MAPIUPD.EXE, and click GO!
	  Open the article, and click the button to download the file.
	
	- Internet (anonymous FTP)
	
	  ftp ftp.microsoft.com
	  Change to the Softlib/Mslfiles folder.
	  Get MAPIUPD.EXE
	
	- The Microsoft Network
	
	  On the Edit menu, click Go To, and then click Other Location.
	  Type "mssupport" (without the quotation marks).
	  Double-click the MS Software Library icon.
	  Find the appropriate product area.
	  Locate and Download MAPIUPD.EXE.
	
	
	For additional information about downloading, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	Additional query words: 3.00 3.00b 3.20 standard automated
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
