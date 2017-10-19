---
layout: page
title: "Q161631: WD97: How to Reset Word 97 Most Recently Used (MRU) Lists"
permalink: /kb/161/Q161631/
---

## Q161631: WD97: How to Reset Word 97 Most Recently Used (MRU) Lists

	Article: Q161631
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	There are a number of Word dialog boxes that contain Most Recently Used (MRU)
	lists. The purpose of this article is to describe how to reset these lists. You
	can gain access to the following MRU lists from the following Word dialog
	boxes:
	
	  Add Template             Insert Subdocument
	
	  Attach Template          Modify Location
	
	  Browse                   Open
	
	  Change Source            Open Data Source
	
	  Insert File              Save As
	
	  Insert Picture           Save As HTML
	
	  Select File to Compare With Current Document
	
	To reset the Most Recently Used file list that appears at the bottom of the File
	menu, see the "File Menu MRU" topic in the "More Information" section of this
	article.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	The information contained in the following MRU lists cannot be reset by using
	menu selections. The entries must be reset by modifying the Windows Registry.
	
	Add Template Dialog Box
	-----------------------
	
	To locate this dialog box, click Templates and Add-ins on the Tools menu. This
	dialog box contains two MRU lists: File Name and Text Or Property.
	
	To reset the File Name MRU list, delete the following registry key:
	
	  My Computer\HKEY_CURRENT_USER\Software\Microsoft\Office\8.0\Common Open
	  Find\Microsoft Word\Settings\Add Template\File Name MRU
	
	To reset the Text Or Property MRU list, delete the following registry key:
	
	  My Computer\HKEY_CURRENT_USER\Software\Microsoft\Office\8.0\Common Open
	  Find\Microsoft Word\Settings\Add Template\Any Text MRU
	
	Attach Template Dialog Box
	--------------------------
	
	To locate this dialog box, click Templates and Add-ins on the Tools menu. This
	dialog box contains two MRU lists: File Name and Text Or Property.
	
	To reset the File Name MRU list, delete the following registry key:
	
	  My Computer\HKEY_CURRENT_USER\Software\Microsoft\Office\8.0\Common Open
	  Find\Microsoft Word\Settings\Attach Template\File Name MRU
	
	To reset the Text Or Property MRU list, delete the following registry key:
	
	  My Computer\HKEY_CURRENT_USER\Software\Microsoft\Office\8.0\Common Open
	  Find\Microsoft Word\Settings\Attach Template\Any Text MRU
	
	Browse Dialog Box
	-----------------
	
	To locate this dialog box, click Object on the Insert menu, click the Create From
	File tab, and then click Browse. This dialog box contains two MRU lists: File
	Name and Text Or Property.
	
	To reset the File Name MRU list, delete the following registry key:
	
	  My Computer\HKEY_CURRENT_USER\Software\Microsoft\Office\8.0\Common Open
	  Find\Microsoft Word\Settings\Browse\File Name MRU
	
	To reset the Text Or Property MRU list, delete the following registry key:
	
	  My Computer\HKEY_CURRENT_USER\Software\Microsoft\Office\8.0\Common Open
	  Find\Microsoft Word\Settings\Browse\Any Text MRU
	
	Change Source Dialog Box
	------------------------
	
	NOTE: This dialog box is available when your document contains a linked object.
	
	To locate this dialog box, click Links on the Edit menu, and then click Change
	Source. This dialog box contains two MRU lists: File Name and Text Or Property.
	
	To reset the File Name MRU list, delete the following registry key:
	
	  My Computer\HKEY_CURRENT_USER\Software\Microsoft\Office\8.0\Common Open
	  Find\Microsoft Word\Settings\Change Source\File Name MRU
	
	To reset the Text Or Property MRU list, delete the following registry key:
	
	  My Computer\HKEY_CURRENT_USER\Software\Microsoft\Office\8.0\Common Open
	  Find\Microsoft Word\Settings\Change Source\Any Text MRU
	
	Insert File Dialog Box
	----------------------
	
	To locate this dialog box, click File on the Insert menu. This dialog box
	contains two MRU lists: File Name and Text Or Property.
	
	To reset the File Name MRU list, delete the following registry key:
	
	  My Computer\HKEY_CURRENT_USER\Software\Microsoft\Office\8.0\Common Open
	  Find\Microsoft Word\Settings\Insert File\File Name MRU
	
	To reset the Text Or Property MRU list, delete the following registry key:
	
	  My Computer\HKEY_CURRENT_USER\Software\Microsoft\Office\8.0\Common Open
	  Find\Microsoft Word\Settings\Insert File\Any Text MRU
	
	Insert Picture Dialog Box
	-------------------------
	
	To locate this dialog box, point to Picture on the Insert menu, and then click
	From File. This dialog box contains two MRU lists: File Name and Text Or
	Property.
	
	To reset the File Name MRU list, delete the following registry key:
	
	  My Computer\HKEY_CURRENT_USER\Software\Microsoft\Office\8.0\Common Open
	  Find\Microsoft Word\Settings\Insert Picture\File Name MRU
	
	To reset the Text Or Property MRU list, delete the following registry key:
	
	  My Computer\HKEY_CURRENT_USER\Software\Microsoft\Office\8.0\Common Open
	  Find\Microsoft Word\Settings\Insert Picture\Any Text MRU
	
	Insert Subdocument Dialog Box
	-----------------------------
	
	To locate this dialog box, click Master Document on the View menu, and then click
	the Insert Subdocument button on the Master Document toolbar. This dialog box
	contains two MRU lists: File Name and Text Or Property.
	
	To reset the File Name MRU list, delete the following registry key:
	
	  My Computer\HKEY_CURRENT_USER\Software\Microsoft\Office\8.0\Common Open
	  Find\Microsoft Word\Settings\Insert Subdocument\File Name MRU
	
	To reset the Text Or Property MRU list, delete the following registry key:
	
	  My Computer\HKEY_CURRENT_USER\Software\Microsoft\Office\8.0\Common Open
	  Find\Microsoft Word\Settings\Insert Subdocument\Any Text MRU
	
	Modify Location Dialog Box
	--------------------------
	
	To locate this dialog box, click Options on the Tools menu, click the File
	Locations tab, and then click Modify. This dialog box contains one MRU lists:
	Folder Name.
	
	To reset the Folder Name MRU list, delete the following registry key:
	
	  My Computer\HKEY_CURRENT_USER\Software\Microsoft\Office\8.0\Common Open
	  Find\Microsoft Word\Settings\Modify Location\File Name MRU
	
	Open Dialog Box
	---------------
	
	To locate this dialog box, click Open on the File menu. This dialog box contains
	two MRU lists: File Name and Text Or Property.
	
	To reset the File Name MRU list, delete the following registry key:
	
	  My Computer\HKEY_CURRENT_USER\Software\Microsoft\Office\8.0\Common Open
	  Find\Microsoft Word\Settings\Open\File Name MRU
	
	To reset the Text Or Property MRU list, delete the following registry key:
	
	  My Computer\HKEY_CURRENT_USER\Software\Microsoft\Office\8.0\Common Open
	  Find\Microsoft Word\Settings\Open\Any Text MRU
	
	Open Data Source Dialog Box
	---------------------------
	
	To locate this dialog box, click Database on the Insert menu, and then click Get
	Data. You can also access this dialog box from the Mail Merge Helper. This
	dialog box contains two MRU lists: File Name and Text Or Property.
	
	To reset the File Name MRU list, delete the following registry key:
	
	  My Computer\HKEY_CURRENT_USER\Software\Microsoft\Office\8.0\Common Open
	  Find\Microsoft Word\Settings\Open Data Source\File Name MRU
	
	To reset the Text Or Property MRU list, delete the following registry key:
	
	  My Computer\HKEY_CURRENT_USER\Software\Microsoft\Office\8.0\Common Open
	  Find\Microsoft Word\Settings\Open Data Source\Any Text MRU
	
	Save As Dialog Box
	------------------
	
	To locate this dialog box, click Save As on the File menu. This dialog box
	contains one MRU lists: File Name.
	
	To reset the File Name MRU list, delete the following registry key:
	
	  My Computer\HKEY_CURRENT_USER\Software\Microsoft\Office\8.0\Common Open
	  Find\Microsoft Word\Settings\Save As\File Name MRU
	
	Save As HTML Dialog Box
	-----------------------
	
	To locate this dialog box, click Save As HTML on the File menu. This dialog box
	contains one MRU lists: File Name.
	
	To reset the File Name MRU list, delete the following registry key:
	
	  My Computer\HKEY_CURRENT_USER\Software\Microsoft\Office\8.0\Common Open
	  Find\Microsoft Word\Settings\Save As HTML\File Name MRU
	
	Select File to Compare With Current Document Dialog Box
	-------------------------------------------------------
	
	To locate this dialog box, point to Track Changes on the Tools menu, and then
	click Compare Documents. This dialog box contains two MRU lists: File Name and
	Text Or Property.
	
	To reset the File Name MRU list, delete the following registry key:
	
	  My Computer\HKEY_CURRENT_USER\Software\Microsoft\Office\8.0\Common Open
	  Find\Microsoft Word\Settings\Select File to Compare With Current
	  Document\File Name MRU
	
	To reset the Text Or Property MRU list, delete the following registry key:
	
	  My Computer\HKEY_CURRENT_USER\Software\Microsoft\Office\8.0\Common Open
	  Find\Microsoft Word\Settings\Select File to Compare With Current Document\Any
	  Text MRU
	
	File Menu MRU
	-------------
	
	To reset the File menu MRU list:
	
	1. On the Tools menu, click Options.
	
	2. Click the General tab.
	
	3. Click to clear the Recently Used File List check box, and then click OK.
	
	4. On the Tools menu, click Options.
	
	5. Click the General tab.
	
	6. Click to select the Recently Used File List check box, and then click OK.
	
	The File menu MRU list information is stored in the Data key in the registry:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Office\8.0\Word\Data
	
	If you rename or delete this registry key, the File menu MRU list will be reset.
	However, the Data key contains other types of configuration information that is
	lost if the key is deleted or renamed.
	
	Additional query words: 8.0 word8 word97
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:
	
	=============================================================================
	
