---
layout: page
title: "Q166487: XCLN: Err Msg: Internet Idioms Could Not Locate the Controls"
permalink: kb/166/Q166487/
---

## Q166487: XCLN: Err Msg: Internet Idioms Could Not Locate the Controls

	Article: Q166487
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0; Win95:5.0
	Operating System(s): 
	Keyword(s): kbusage win95
	Last Modified: 08-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Client for Windows 95, version 5.0 
	- Microsoft Exchange Windows NT client, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	IMPORTANT: This article contains information about editing the registry. Before
	you edit the registry, make sure you understand how to restore it if a problem
	occurs. For information on how to do this, view the "Restoring the Registry"
	online Help topic in Regedit.exe or the "Restoring a Registry Key" online Help
	topic in Regedt32.exe.
	
	When you attempt to compose or open a message in Microsoft Exchange Client or
	Outlook, the following error message may appear:
	
	  Internet Idioms
	
	  Internet Idioms could not locate the controls on the body of the standard note
	  form. If you are using Exchange or Windows Messaging, please update your copy
	  of Idioms to a more recent version. Note that Idioms does not support the
	  Outlook 97 client.
	
	Internet Idioms is included in the BackOffice Resource Kit 2.0.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	In Outlook
	----------
	
	1. On the Tools menu, click Options. On the General tab, click the Add-in
	  Manager button.
	
	2. In the list of installed add-ins, disable the Internet Idioms add-in.
	
	In Exchange Client
	------------------
	
	To resolve the problem, either disable the Internet Idioms for one session or
	permanently remove the Internet Idioms from Exchange Client.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	- When you open the first message, you may be prompted with the following:
	
	  You are starting a version of Exchange (or Windows Messaging) that postdates
	  the latest version officially tested with Internet Idioms. Do you wish to
	  load Internet Idioms?
	
	  If you click No, you will disable Internet Idioms for that session.
	
	- To permanently remove Internet Idioms from Exchange Client:
	
	1. Start Registry Editor (Regedt32.exe or Regedit.exe as appropriate for your
	  version of Windows NT).
	
	2. Remove the following key from the registry:
	
	     HKEY_LOCAL_ MACHINE\SOFTWARE\Microsoft\Exchange\Client
	     \Extensions\InternetIdioms
	
	3. Exit Registry Editor.
	
	More information on Internet Idioms for Microsoft Exchange Server can be found at
	the following URL:
	
	  http://www.angrygraycat.com/goetter/inetxidm.htm
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage win95 
	Technology        : kbExchangeSearch kbExchange500 kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3 kbExchange500NT
	Version           : WINDOWS:5.0; Win95:5.0
	Issue type        : kbprb
	
	=============================================================================
	
