---
layout: page
title: "Q259514: XCLN: Modifying the Attachment Security Warning in OL 2K SR-1"
permalink: kb/259/Q259514/
---

## Q259514: XCLN: Modifying the Attachment Security Warning in OL 2K SR-1

	Article: Q259514
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	Microsoft Outlook 2000 Service Release 1 (SR-1) provides an attachment security
	feature that is designed to increase the security protection for certain types
	of e-mail attachments. This feature provides explicit warning language when
	attachments are opened, and you are required to save the attachment to the file
	system before opening it. This can help you avoid accidentally releasing viruses
	that hide in certain file types.
	
	Note: In previous versions of Outlook, this functionality was provided in three
	separate patches: one for each version of Outlook.
	
	MORE INFORMATION
	================
	
	When you open attachments with file name extensions such as .exe, .bat, .com, or
	.cmd, you receive the following warning message:
	
	  Attachment Security Warning
	
	  WARNING!
	
	  The file may contain a virus that can be harmful to your computer. It is
	  important to be VERY certain that this file is safe before you open it. You
	  must save this file to disk before it can be opened.
	
	  Filename: "file name"
	  Type: "file type"
	
	  To save the attachment, click Save to Disk.
	
	Caution: The attachment warning runs for all attachments with executable file
	name extensions. It does not detect, or clean a virus from an infected
	attachment. If you save a file that has a virus, and then run it from the hard
	disk, your computer is still infected. Saving the file is simply an extra
	precaution to take when considering the safety of the attached file. You must
	still use an updated virus-scanning program to check the file for a possible
	virus.
	
	Microsoft Office files, such as .doc, .xls, or .ppt, are not affected by this
	patch, and behave just as they did before installing the patch. To control macro
	behavior for Office documents, set the security level in the individual Office
	program itself.
	
	To Modify the Behavior of the Attachment Security Warning:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To either add, or remove file types for the Attachment Security Warning, follow
	these steps:
	
	1. Click Start, click Run, type "regedit" (without the quotation marks), and
	  then click OK.
	
	2. Locate the following key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Office\9.0\Outlook\Security
	
	  If the Security key is not present, right-click the Outlook key, point to New
	  on the shortcut menu, and then click Key. Type "Security" (without the
	  quotation marks) as the name, and then press ENTER.
	
	3. Click to select the Security key, and on the Edit menu, point to New. Click
	  String Value, type "AddWarningFileTypes" (without the quotation marks), and
	  then press ENTER.
	
	4. Right click AddWarningFileTypes, and then click Modify. Enter the extensions
	  of those file types for which you want to receive a warning in the "Value
	  data" box. Note that the file extensions should be entered as semicolon- (;)
	  delimited strings without using any periods (.).
	
	5. Click the Security key, on the Edit menu, point to New, and then click String
	  Value. Type "RemoveWarningFileTypes" (without the quotation marks), and then
	  press ENTER.
	
	6. Right-click the RemoveWarningFileTypes value, and then click Modify on the
	  shortcut menu. Enter the extensions of those file types for which you do not
	  want to receive a warning. Note that the file extensions should be entered as
	  semicolon-delimited strings without using any periods.
	
	7. Quit Registry Editor.
	
	NOTE: You must have some string value added to the AddWarningFileTypes key in
	order for RemoveWarningFileTypes to work. If necessary create a fake extension
	for AddWarningFileTypes, such as <qqq>
	For additional information about this feature as used in previous versions of
	Outlook, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q235309 Outlook E-mail Attachment Security Update
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbZNotKeyword3
	Version           : :5.5
	Issue type        : kbhowto
	
	=============================================================================
	
