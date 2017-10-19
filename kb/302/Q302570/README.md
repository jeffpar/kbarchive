---
layout: page
title: "Q302570: HOW TO: Configure Custom Error Messaging for Your Web Site"
permalink: /kb/302/Q302570/
---

## Q302570: HOW TO: Configure Custom Error Messaging for Your Web Site

	Article: Q302570
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbGraphxLink kbAudDeveloper kbAudITPro kbHOWTOmaster
	Last Modified: 15-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Requirements
	- Configure Custom Error Messages
	
	   - Adding Custom Error Messages by Mapping to a File
	- Adding Custom Error Messages by Mapping to a URL
	
	- Enable Detailed Custom Error Messages
	
	   - Configuring Detailed Error Messages
	
	SUMMARY
	=======
	
	This step-by-step guide describes how to configure Internet Information Services
	(IIS) to send custom error messages instead of the default Hypertext Transfer
	Protocol (HTTP) error messages.
	
	Requirements
	------------
	
	The following items describe the recommended hardware, software, network
	infrastructure, skills and knowledge, and service packs that you need:
	
	- Internet Information Services 5.0
	
	- Microsoft Internet Explorer 3.x, 4.x, 5.x
	
	Configure Custom Error Messages
	-------------------------------
	
	When a user attempts to connect to a Web site and an HTTP error occurs, a generic
	message is sent back to the client browser with a brief description of what
	happened during the attempt to establish a connection. You can configure IIS to
	send custom error messages instead of the default error messages by mapping to a
	file or by mapping to a URL.
	
	Adding Custom Error Messages by Mapping to a File:
	
	To add a custom error message by mapping to a file, follow these steps:
	
	1. Create a file that contains your custom error message and place it in a
	  folder.
	
	2. In the Internet Information Services snap-in, select the Web site, virtual
	  folder, folder, or file in which you want to customize HTTP error messages,
	  and click Properties.
	
	3. On the Custom Errors property sheet, select the HTTP error message that you
	  want to change and click Edit Properties.
	
	4. In the Message Type box, select File.
	
	5. Type the path and file name that points to your customized error message, or
	  use the Browse button to locate the file on your computer's hard disk. Click
	  OK.
	
	Adding Custom Error Messages by Mapping to a URL:
	
	To add a custom error message by mapping to a URL, follow these steps:
	
	1. Create a file that contains your custom error message and place it in a
	  virtual folder.
	
	2. In the Internet Information Services snap-in, select the Web site, virtual
	  directory, directory, or file in which you want to customize HTTP error
	  messages, and click Properties.
	
	3. On the Custom Errors property sheet, select the HTTP error message that you
	  want to change and click Edit Properties.
	
	4. In the Message Type box, select URL.
	
	5. Type the URL that points to your customized error message by entering the
	  path to the URL, beginning with the virtual folder name. Click OK.
	
	Enable Detailed Custom Error Messages
	-------------------------------------
	
	IIS features its own set of custom errors that provide more informative or
	"friendly" feedback than default HTTP 1.1 error messages. These detailed custom
	error messages are set by default in the Default Web Site in the IIS snap-in.
	
	Configuring Detailed Error Messages:
	
	1. In the Internet Information Services snap-in, select the Web site, virtual
	  directory, directory, or file in which you want to customize HTTP error
	  messages and click Properties.
	
	2. On the Custom Errors property sheet, select the default HTTP error message
	  that you want to change and click Edit Properties.
	
	3. In the Message Type box, select File.
	
	4. Click Browse and browse to <drive
	  letter>:\Winnt\Help\Iishelp\Common\File name.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbGraphxLink kbAudDeveloper kbAudITPro kbHOWTOmaster 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbhowto
	
	=============================================================================
	
