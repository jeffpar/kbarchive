---
layout: page
title: "Q214515: How to Determine which Virtual Server References [Port /LM/W3SVC"
permalink: kb/214/Q214515/
---

## Q214515: How to Determine which Virtual Server References [Port /LM/W3SVC

	Article: Q214515
	Product(s): Internet Information Server
	Version(s): WINDOWS:; winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft FrontPage 98 for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to determine the server instance [Port /LM/W3SVC/#:]
	in the Frontpg.ini file that refers to a particular virtual server by its IP
	address and/or Web site name.
	
	MORE INFORMATION
	================
	
	In the Frontpg.ini file (located by default in C:\Winnt), you will see [Port
	/LM/W3SVC/#:] (where # is a number referring to the server instance).
	
	This is added each time you install the FrontPage Server Extensions to a new
	virtual server on your Web server. The number at the end will increase with each
	new virtual server or multihosted site. If you uninstall the extensions from a
	virtual server or a multihosted site, you will see the [Port /LM/W3SVC/#:]
	removed.
	
	If you install another virtual server or multihosted site, it will not use the
	number of the last deleted site. It will increase from whatever the last number
	of the virtual server or multihosted Web site that was created. The only way
	that this number will stay the same is if the virtual server or multihosted site
	that you deleted was the last one that you created.
	
	To determine the IP address and/or the name of the virtual server in the
	Frontpg.ini file that uses [Port /LM/W3SVC/#:], perform the following steps:
	
	1. Click Start, click Run, and then type the following to open the MSDOS dialog
	  box.
	
	2. At the command prompt type cd c:\winnt\system32\inetserv\adminsamples and
	  press the Enter key. This will put you inside the Adminsamples dir (the drive
	  letter may differ than the above example).
	
	3. You will see the following path: c:\winnt\system32\inetserv\adminsamples
	
	4. At the end of the path, type the following (without the quotation marks):
	  "adsutil.vbs get w3svc/#/serverbindings" (where # is the number in the
	  Frontpg.ini file that you are trying to determine the IP address and/or the
	  Web site name of the virtual server [Port /LM/W3SVC/#:]).
	
	5. Press the Enter key to execute the Visual Basic script and return you with
	  the following:
	
	  serverbindings : <List> "000.000.000.000:80:" or
	  : <List> "000.000.000.000:80:" "80: website name"
	
	To determine the name of the multihosted Web site in the Frontpg.ini file that
	uses [Port /LM/W3SVC/#:], perform the following steps:
	
	1. Click Start, point to Programs, point to Windows NT 4.0 Option Pack, point to
	  Microsoft Internet Information Server, and then click Internet Service
	  Manager. This will open the Microsoft Management Console (MMC).
	
	2. Look at each multihosted Web site to determine the number that has been
	  assigned during its creation.
	
	3. To do this, right-click the Web site and click Properties.
	
	4. You will see multiple tabs across the top of the dialog box. Click the Web
	  Site tab (it should open by default).
	
	5. At the bottom of the page, click the check box to enable logging (if it is
	  not already checked).
	
	6. Click the Properties box to open an extended logging dialog box.
	
	7. Click the General Properties tab (it should open by default).
	
	8. At the bottom of the dialog box, you will see the w3svc\#\exyymmdd.log log
	  file name (where # represents the number [Port /LM/W3SVC/#:] in the
	  Frontpg.ini file).
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbFrontPageSearch kbiis400 _IKkbZNotKeyword4 kbFrontPage98Search kbZNotKeyword3
	Version           : WINDOWS:; winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
