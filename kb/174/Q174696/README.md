---
layout: page
title: "Q174696: XGEN: How to Send Files to Microsoft Product Support Services"
permalink: /kb/174/Q174696/
---

## Q174696: XGEN: How to Send Files to Microsoft Product Support Services

{% raw %}

	Article: Q174696
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to send files to Microsoft Product Support Services if
	a Microsoft Support Professional requests that you do so.
	
	MORE INFORMATION
	================
	
	To send files to Microsoft Product Support Services::
	
	NOTE: This method of sending files to Product Support Services is standard across
	products. However, the directory location for files is different for each
	product.
	
	1. At a command prompt, FTP to ftppss.microsoft.com.
	
	2. Log on as ANONYMOUS, and use your e-mail address as the password. For
	  example, if your e-mail address is JoeSmith@microsoft.com, use that as your
	  password.
	
	3. You are now logged on to the Microsoft FTP server.
	
	4. To change the directory, type the following command:
	
	  cd /incoming/mail
	
	NOTE: Depending on which group you are working with, the above "mail" directory
	can be replaced by any of the following:
	
	  /com+
	  /developer
	  /gls
	  /hiserver
	  /iis
	  /mail
	  /misc
	  /mom
	  /msmq
	  /premier
	  /sms
	  /sql
	  /webresponse
	  /windows
	  /windowsce
	  /xbox
	
	Also note that this list is subject to change.
	5. You are now in the correct directory to upload the file.
	
	6. The command to upload a file may vary based on the utility that you use.
	  Typically the command is similar to the following:
	
	  put <file name>
	
	  Before you perform the command, make sure that you are in binary mode. For
	  more information on how to set the FTP transfer mode to binary, see the
	  following example of a customer FTP session:
	
	  
	
	  C:\>ftp ftppss.microsoft.com.
	
	  Connected to ftppss.microsoft.com.
	
	  220 tkmsftftpf01 Microsoft FTP Service (Version 5.0).
	
	  User (ftppss.microsoft.com:(none)): anonymous
	
	  331 Anonymous access allowed, send identity (e-mail name) as password.
	
	  Password:
	
	  230-This is FTPPSS.MICROSOFT.COM.
	
	  230 Anonymous user logged in.
	
	  ftp> cd /incoming/mail 
	
	  250 CWD command successful.
	
	  ftp> binary
	
	  200 Type set to I. 
	
	  ftp> put mailfile.zip 
	
	  200 PORT command successful. 
	
	  150 Opening ASCII mode data connection for mailfile.zip. 
	
	  226 Transfer complete. 
	
	  3800 bytes sent in 1.01 seconds (3.80 Kbytes/sec) 
	
	  ftp> bye 
	
	  221  Thank-you for using Microsoft products!
	
	NOTE: Unless a Microsoft Support Professional advises you to follow a different
	procedure, place the files in a zipped format, and use the case number as the
	file name (for example, SRX970228699123.zip).
	
	The following are the various directories available under /incoming/:
	
	  /com+
	  /developer
	  /gls
	  /hiserver
	  /iis
	  /mail
	  /misc
	  /mom
	  /msmq
	  /premier
	  /sms
	  /sql
	  /webresponse
	  /windows
	  /windowsce
	  /xbox
	
	For example, if files need to be sent to support professionals on a Windows NT
	issue, the directory for Step 4 would be:
	
	  /incoming/windows
	
	
	Additional query words: FTP File howto upload
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
