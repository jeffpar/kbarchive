---
layout: page
title: "Q178029: WD97: Forcing Word to Save a Document with the .wpd Extension"
permalink: /kb/178/Q178029/
---

## Q178029: WD97: Forcing Word to Save a Document with the .wpd Extension

	Article: Q178029
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	When you save a document in Word as a WordPerfect file, by default, Word assigns
	the "doc" file extension to the saved file. It is possible to change the default
	file extension Word assigns to saved WordPerfect files.
	
	Starting with WordPerfect 6.x, the default file extension when saving files from
	WordPerfect is "wpd." To make it easier to convert your file back to
	WordPerfect, you may want to change the default file extension Word uses when
	you save a document in WordPerfect format.
	
	This article details how to customize Word so files saved in WordPerfect format
	are saved with the .wpd extension (or another other desired extension) by
	default.
	
	NOTE: The WordPerfect 6.x converter provided in Word is an import only converter.
	You cannot save from Word as a WordPerfect 6.x (or later) file. You must use the
	WordPerfect 5.x converter to save a Word document as a WordPerfect file.
	
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
	
	When the WordPerfect converters are installed, the default file extension of
	"doc" is set in the Windows Registry as the save extension for WordPerfect
	documents. However, you can change the default save extension by modifying the
	Windows Registry.
	
	To change the default file extensions for saving WordPerfect documents, follow
	these steps:
	
	1. Quit Word and all other Windows applications.
	
	2. On the Start menu, click Run.
	
	3. In the Open box, type "RegEdit" (without the quotation marks) and then click
	  OK.
	
	4. In the Registry Editor, open the following Export registry key:
	
	     HKEY_LOCAL_MACHINE\Software\Microsoft\Shared Tools\Text
	     Converters\Export
	
	  -or-
	
	  You may find the Export key at the following location in the registry:
	
	     HKEY_CURRENT_USER\Software\Microsoft\Office\8.0\Word\Text
	     Converters\Export
	
	  Word provides the following WordPerfect registry keys in the Export folder for
	  saving (exporting) WordPerfect documents.
	
	     Key Name          WordPerfect Conversion Name
	     ------------------------------------------------------
	
	     WrdPrfctDat       WordPerfect 5.1 or 5.2 Secondary File
	
	     WrdPrfctDat50     WordPerfect 5.0 Secondary File
	
	     WrdPrfctDOS50     WordPerfect 5.0
	
	     WrdPrfctDOS51     WordPerfect 5.1 for DOS
	
	     WrdPrfctWin       WordPerfect 5.x for Windows
	
	5. Click to select the desired key name you want to change the default file name
	  extension for.
	
	  For example, if you save your documents as WordPerfect 5.x for Windows, and
	  you want those files to be saved with the .wpd extension, click to select the
	  WrdPrfctWin key.
	
	6. In the desired key, click to select Extensions.
	
	7. On the Edit menu, click Modify.
	
	8. In the Value Data box, delete the current extension and then type WPD (or any
	  other file name extension that you want to save your WordPerfect files with),
	  and then click OK.
	
	9. On the Registry menu, click Exit.
	
	After you restart Word and save your document as WordPerfect, your document will
	be saved with the default extension you specified.
	
	NOTE: When you save your document, if you type a file name with an extension (for
	example, Filename.doc), Word will not assign the default file extension you
	specified, but rather Word will save the file with the extension you typed when
	you saved the file.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q157085 WD97: Limitations of Converting WordPerfect 5.x Documents
	
	  Q162987 WD97: Supported Non-Word File Formats
	
	WordPerfect is manufactured by Corel Corporation, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	For information about how to contact Corel Corporation, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	
	Additional query words: wp wpft wp5 wp51 wp5x convert conversion conv
	
	======================================================================
	Keywords          : word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:
	Issue type        : kbhowto
	
	=============================================================================
	
