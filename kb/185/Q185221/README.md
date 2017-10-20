---
layout: page
title: "Q185221: XFOR: How To Specify The Font Type Used For SMTP Inbound Mails"
permalink: /kb/185/Q185221/
---

## Q185221: XFOR: How To Specify The Font Type Used For SMTP Inbound Mails

{% raw %}

	Article: Q185221
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	The Internet Mail Service in Microsoft Exchange Server 5.0 allows SMTP inbound
	mail to be converted to fixed width font (Courier New, by default) if the "Use
	fixed-width font" option is checked on the Internet Mail tab of the IMC
	Properties dialogue. However, you can use Registry Editor to specify any
	particular font type that you would like to use.
	
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
	
	By specifying the font under the following registry key, you can control the font
	displayed in the standard Exchange Client Mail Editor when you read SMTP inbound
	mail. Every Language is assigned a code page folder, for example the code page
	ID for English is 1252.
	
	For example, to change the font from Courier New to Times New Roman, use the
	following steps:
	
	1. Run Regedt32.exe and go to the following registry key:
	
	  \\HKEY_CLASSES_ROOT\MIME\Database\Codepage\1252
	
	2. Highlight the value: FixedWidthFont
	
	3. Click the Edit menu, and select String Menu Item.
	
	4. In the String Editor dialog box, change Courier New to Times New Roman.
	
	5. Click OK and close the Registry Editor.
	
	Additional query words: howto
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
