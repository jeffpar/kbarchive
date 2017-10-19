---
layout: page
title: "Q249020: XFOR: Application Converter Install Stops Looking for Notes Path"
permalink: /kb/249/Q249020/
---

## Q249020: XFOR: Application Converter Install Stops Looking for Notes Path

	Article: Q249020
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install the Microsoft Exchange Application Converter for
	Lotus Notes (Mxsetup.exe), the following error message may be displayed:
	
	  The directory containing the Lotus Notes program files could not be
	  identified. For the Application Converter to function properly, the Notes
	  program directory should be added to your system's PATH.
	
	CAUSE
	=====
	
	The Lotus Notes client program folder is not in the system path.
	
	RESOLUTION
	==========
	
	Before you start to install the Microsoft Exchange Application Converter for
	Lotus Notes you must make sure that the Lotus Notes folder is listed in the
	system path.
	
	To add the Lotus Notes folder to the system path in Windows NT Server version
	4.0:
	
	1. Right-click My Computer, and then click Properties.
	
	2. Click the Environment tab, and in the System Variables list, scroll through
	  the list to find Path, and then click Path.
	
	3. At the end of the path, type the location of the Lotus Notes folder preceded
	  by a semicolon. For example, if the Lotus Notes installation is on drive C
	  and the Lotus Notes client is installed in the Notes folder, type the
	  following:
	
	  ;c:\notes
	
	To add the Lotus Notes folder to the system path in Windows 2000 Server:
	
	1. Right-click My Computer, and then click Properties.
	
	2. Click the Advanced tab, and then click Environment Variables.
	
	3. In the Environment Variables dialog box, in the System Variables list, click
	  Path, and then click Edit.
	
	4. At the end of the path in the Variable Value box, type the location of the
	  Lotus Notes folder preceded by a semicolon. For example, if the Lotus Notes
	  installation is on drive C and the Lotus Notes client is installed in the
	  Notes folder, type the following:
	
	  ;c:\notes
	
	Additional query words: app converter
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
