---
layout: page
title: "Q168450: XCLN: Changing the AutoSignature Default Location"
permalink: /kb/168/Q168450/
---

## Q168450: XCLN: Changing the AutoSignature Default Location

{% raw %}

	Article: Q168450
	Product(s): Microsoft Exchange
	Version(s): Windows:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, version 5.0 
	- Microsoft Exchange Windows NT client, version 5.0 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry  Key" Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	The Microsoft Exchange 5.0 client allows the default location of the
	AutoSignature (Autotext.sig) file to be specified with the addition of a
	registry key entry.
	
	NOTE: In the Microsoft Exchange 4.0 client the default location of the
	Autotext.sig file is not configurable. By default, the Autotext.sig file is
	placed in the Windows subdirectory.
	
	MORE INFORMATION
	================
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	To change the default location of the AutoSignature file, follow the steps:
	
	1. On the Start Menu, click Run.
	
	2. Type "Regedit" and press ENTER.
	
	3. Make a backup copy of the Registry.
	
	4. Go to the following subkey:
	
	  \HKEY_CURRENT_USER\Software\Microsoft\Exchange\Client\Options\ 
	
	
	  NOTE: If the above subkey is not available, then do the following to create
	  the key:
	
	  a. Exit the Registry Editor, and log on to the Microsoft Exchange Client
	     computer.
	
	  b. From the Tools menu, select Options.
	
	  c. Click the General tab and select the Prompt for Profile option under "When
	     Starting Microsoft Exchange."
	
	5. From the Registry Editor, select the Edit menu and click New/String Value.
	
	6. Type "autosignature" as the name of the string value.
	
	7. From the Edit menu, click Modify.
	
	8. Type the desired AutoSignature path in the Value data field.
	
	  Example: "c:\autosigs\autotext.sig" (including the filename itself)
	
	9. Copy the existing Autotext.sig file from the Windows directory and paste it
	  in the new location.
	
	  -or-
	
	  From the Microsoft Exchange client, go to the Tools menu and click
	  AutoSignature. Click New and create a new AutoSignature. The file will be
	  placed in the path specified in the registry.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange500NT kbExchange500Win95
	Version           : Windows:5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
