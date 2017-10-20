---
layout: page
title: "Q172044: WD97: Wordmail Options Not on Exchange Compose Menu"
permalink: /kb/172/Q172044/
---

## Q172044: WD97: Wordmail Options Not on Exchange Compose Menu

{% raw %}

	Article: Q172044
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SYMPTOMS
	========
	
	WordMail Options will not be available on the Compose menu of Microsoft Exchange
	Client 4.0 or 5.0 if you install Microsoft Word 97 or Microsoft Office 97 using
	the Run From Network Server option.
	
	
	WORKAROUND
	==========
	
	Use one of the following workarounds to solve the problem.
	
	Method 1: Start Exchange from the Office Shortcut Bar
	-----------------------------------------------------
	
	If you start Microsoft Exchange from the Office Shortcut Bar, WordMail Options
	will be available on the Compose menu in Microsoft Exchange.
	
	If you start Microsoft Exchange from the desktop icon or by clicking the Start
	button on the Windows taskbar, pointing to Programs, and clicking Microsoft
	Exchange, WordMail Options will not be available on the Compose menu in
	Microsoft Exchange.
	
	To add Microsoft Exchange to the Office Shortcut Bar, follow these steps:
	
	1. Right-click the Office Logo icon on the top left of the Office Shortcut Bar
	  and click Customize on the shortcut menu.
	
	2. Click the Toolbars tab.
	
	3. Click to select Programs and then click OK.
	
	You will now have a second toolbar on the Office Shortcut Bar with a Microsoft
	Exchange icon.
	
	Method 2: Change the Stationery value from a UNC path to a drive letter
	-----------------------------------------------------------------------
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	For information about how to edit the registry, view the Changing Keys And Values
	online Help topic in Registry Editor (Regedit.exe). Note that you should make a
	backup copy of the registry files (System.dat and User.dat) before you edit the
	registry.
	
	To change the stationery value from a UNC path to a drive letter, follow these
	steps:
	
	1. On the Windows Start menu, click Run.
	
	2. In the Open box, type "regedit" (without the quotation marks), and then click
	  OK.
	
	3. Locate the following registry key:
	
	     HKEY_LOCAL_MACHINE\Software\Microsoft\Exchange\Client\Extensions
	
	4. In the right pane, with Stationery selected, on the Edit menu click Modify.
	
	5. In the Value Data box, type a drive letter to replace the UNC path. For
	  example, if the path says
	
	     4.0;\\server\share\Office97\Server\Office\station.dll;1
	
	  Change it to a drive letter, such as E:\. It would look like this:
	
	     4.0;E:\Office97\Server\Office\station.dll;1
	
	6. Exit the Registry Editor and map the drive to this location by following
	  these steps:
	
	  a. Right-click the network neighborhood icon on your desktop, and click Map
	     Network Drive.
	
	  b. Click the drive letter you chose in step 8.
	
	  c. Type the location indicated in step 8. In this example, type
	     "\\server\share" (without the quotation marks) and click OK.
	
	  NOTE: For this method to work, you must keep the same network drive letter
	  mapped to the location indicated in step 8. One way to accomplish this
	  automatically is to use a drive letter that would normally be unused (such as
	  "W") and click to select the Reconnect At Logon option in step C.
	
	When you exit and restart Microsoft Exchange, WordMail Options will be on the
	Compose menu.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Once you install Microsoft Word 97 or Microsoft Office 97, you will be able to
	use Microsoft Word as your e-mail editor. The ability to control the e- mail
	template you want to use and to turn WordMail on or off, is done by clicking the
	Compose menu in Microsoft Exchange, and clicking WordMail Options. If the menu
	option is unavailable, you will be unable to change these options.
	
	NOTE: This problem does not occur if you use Microsoft Outlook 97 as your e-mail
	client. Microsoft Outlook 97 shipped with Microsoft Word 97 and Microsoft Office
	97.
	
	This problem does not occur if you run any other type of setup. It only occurs
	when performing a Run From Network Server installation.
	
	REFERENCES
	==========
	
	For more information about WordMail, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q152766 WD: Error Message: "WordMail Initialization Has Failed"
	
	  Q140863 WD: How to Add Automatic Signatures to WordMail Messages
	
	  Q159476 WD97: How to Enable, Disable Microsoft Word as the E-Mail Editor
	
	  Q162037 WD: Message Missing from Insert Menu Using WordMail and Exchange
	
	  Q133197 WD: Unable to Type in Message Area in WordMail
	
	For more information about "WordMail," click the Office Assistant, type
	"WordMail," click Search, and then click one of the topics.
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: off97 word97 missing
	
	======================================================================
	Keywords          : word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
