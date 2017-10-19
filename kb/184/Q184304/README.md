---
layout: page
title: "Q184304: XWEB: Outlook Web Access Error Message: Unable to Render View"
permalink: /kb/184/Q184304/
---

## Q184304: XWEB: Outlook Web Access Error Message: Unable to Render View

	Article: Q184304
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc5 exc55
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Active Server Components, version 5.0 
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you try to access your mailbox using the Outlook Web Access client, the
	following error messages may be displayed:
	
	  Unable to Render View
	
	  -or-
	
	  Unable to Render This View
	
	CAUSE
	=====
	
	Incorrect security permissions are set on the following registry keys:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\currentcontrolset\services\MsExchangeweb
	
	  - and -
	
	  HKEY_LOCAL_MACHINE\SYSTEM\currentcontrolset\services\W3SVC
	
	RESOLUTION
	==========
	
	Other settings that should be checked are the permissions on the following
	directories on the Microsoft Outlook Web Access server:
	
	  \Exchsrvr\Res directory
	
	  \Exchsrvr\bin directory
	
	In both of the above cases, the Everyone group should have Full Control.
	
	If correcting the above permissions does not correct the "Unable to Render View"
	problem, follow these steps to reregister the cdo.dll and cdohtml.dll files.
	
	1. Stop the IIS Admin service, which stops the following services (if they are
	  running):
	
	   - World Wide Web Publishing Service
	
	   - Microsoft SMTP Service
	
	   - Microsoft NNTP Service
	
	   - FTP Publishing Service
	
	2. Reregister Cdo.dll and Cdohtml.dll by typing the following syntax at a
	  command prompt:
	
	  "regsvr32 c:\winnt\system32\cdo.dll" (without the quotation marks)
	
	  - and then -
	
	  "regsvr32 c:\exchsrvr\bin\cdohtml.dll" (without the quotation marks)
	
	NOTE: The paths for the Cdo.dll and Cdohtml.dll files assume that these
	directories are on drive C; if this is not the correct drive for your system,
	change the drive letter of the path to point to the correct drive location of
	the files.
	
	If reregistering these libraries does not correct the problem, re-apply the most
	recent Microsoft Exchange Server service pack.
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To set the correct permissions for the above listed registry keys, do the
	following:
	
	1. Start the Registry Editor (Regedt32.exe).
	
	2. Select the keys in the "Cause" section of this article, one at a time.
	
	3. On the Security menu, click Permissions.
	
	4. Click Add, and click Everyone.
	
	5. Click Full to change the permission to full, and then click OK.
	
	6. Click to select the Replace Permission on Existing Subkeys check box, and
	  then click OK.
	
	7. Stop the Exchange Server services, and restart the computer.
	
	Additional query words: 424object 438object
	
	======================================================================
	Keywords          : kbusage exc5 exc55 
	Technology        : kbOutlookSearch kbZNotKeyword6 kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2 kbOWASearch kbOWA550 kbExchangeActiveServComp500
	Version           : :5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
