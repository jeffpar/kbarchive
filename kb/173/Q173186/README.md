---
layout: page
title: "Q173186: XCLN: Installing the Server Space Client Extension Tool"
permalink: kb/173/Q173186/
---

## Q173186: XCLN: Installing the Server Space Client Extension Tool

	Article: Q173186
	Product(s): Microsoft Exchange
	Version(s): Win95:4.0,5.0; :8.0,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 05-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Client for Windows 95, versions 4.0, 5.0 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03, on platform(s):
	   - Microsoft Windows 95 
	   - Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	IMPORTANT: This article contains information about editing the registry. Before
	you edit the registry, make sure you understand how to restore it if a problem
	occurs. For information about how to do this, view the "Restoring the Registry"
	Help topic in Regedit.exe or the "Restoring a Registry Key" Help topic in
	Regedt32.exe.
	
	The Microsoft Exchange Resource Kit includes an extension called the Server Space
	Client Extension Tool. The Microsoft Exchange Server Tools Help file contains
	incorrect instructions for installing this extension for a Microsoft Exchange
	client running on the Windows 95 platform. The instructions also imply that a
	16-bit version of the extension is available, which is incorrect. This extension
	is only available for 32-bit clients running on Windows 95 or Windows NT
	platforms.
	
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
	
	Use the following steps to correctly install the Server Space Client Extension
	Tool for Windows 95 clients:
	
	Installation for Windows 95 Clients
	-----------------------------------
	
	1. From the Exchange\Win95\Client\Srvspace directory on the Microsoft BackOffice
	  Resource Kit: Part Two CD, copy Spcext32.dll to the Exchange directory on
	  your computer.
	
	2. Start the Registry Editor (Regedit.exe) and select the following registry
	  key:
	
	    HKEY_LOCAL_MACHINE\Software\Microsoft\Exchange\Client\Extensions
	
	3. On the Edit menu, select New, and then select String Value.
	
	4. Enter the following string for the Value name:
	
	  " Server Space " (without the quotation marks)
	
	5. On the Edit menu, select Modify and enter the following string into the Value
	  data field:
	
	  " 4.0;<drive>:\<path>\spcext32.dll;1;01010000000000 " (without
	  the quotation marks)
	
	  ...where <drive> and <path> are the drive letter and directory to
	  which Spcext32.dll was copied. As an example, assume that the file is located
	  in the C:\Exchange directory. This entry would appear as follows:
	
	     4.0;c:\exchange\spcext32.dll;1;01010000000000
	
	6. Close the Registry Editor.
	
	7. Restart the Microsoft Exchange or Microsoft Outlook client.
	
	Using the Server Space Client Extension Tool
	--------------------------------------------
	
	To use the extension, select the Server Space option from the Tools menu. A
	Mailbox Server Space dialog box will be displayed with the following text:
	
	  Mailbox - <user name> 20,540KB
	  Personal Folders N/A
	  Public Folders N/A
	
	The values for Personal Folders and Public Folders will always be displayed as
	N/A because the extension does not calculate totals for these folders.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3
	Version           : Win95:4.0,5.0; :8.0,8.01,8.02,8.03
	Issue type        : kbhowto
	
	=============================================================================
	
