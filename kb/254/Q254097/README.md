---
layout: page
title: "Q254097: XCLN: Resetting Toolbox to Default Controls and Layout"
permalink: /kb/254/Q254097/
---

## Q254097: XCLN: Resetting Toolbox to Default Controls and Layout

	Article: Q254097
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000; :
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Outlook 98 
	- Microsoft Outlook 97 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you customize the Toolbox by using the Microsoft Visual Basic Editor in
	Outlook Forms Designer, you cannot reset the Toolbox to the default
	configuration.
	
	CAUSE
	=====
	
	After you customize the Toolbox, there is no built-in method to reset the
	Toolbox.
	
	RESOLUTION
	==========
	
	If you customized the Toolbox by adding pages or ActiveX controls or by deleting
	the standard controls, and you want to reset the Toolbox to its original
	configuration, perform the following steps:
	
	1. Quit Outlook.
	
	2. Click the Start button, point to Find, and then click Files Or Folders.
	
	3. Click the "Name and Location" tab, and then in the Named box, type
	  "Outlook.box" (without the quotation marks).
	
	4. In the "Look in" list, select the drive in which you installed Outlook.
	
	5. Click Find Now.
	
	6. In the search results window at the bottom of the Find dialog box, click
	  Outlook.box, and then rename the file (for example, to Outlook.bbb).
	
	When you restart Outlook and start Forms Designer, the Toolbox contains only the
	Controls page, and all of the default controls are displayed on the page.
	
	MORE INFORMATION
	================
	
	By default, the Controls page of the Toolbox in Forms Designer contains the
	following controls (selected objects):
	
	- Label
	- TextBox
	- ComboBox
	- ListBox
	- CheckBox
	- OptionButton
	- ToggleButton
	- Frame
	- CommandButton
	- TabStrip
	- MultiPage
	- ScrollBar
	- SpinButton
	- Image
	- RefEdit
	
	You can also export a page from the Toolbox as a .pag file. If you export a page
	from the Toolbox, you can import it back to the Toolbox after you reset the
	Toolbox to the default configuration.
	
	Exporting Toolbox Pages
	-----------------------
	
	To export a page from your Toolbox, perform the following steps:
	
	1. Right-click the tab for the page that you want to export.
	
	2. On the shortcut menu, click Export Page.
	
	3. In the Export Page dialog box, select a destination folder, and then in the
	  "File name" box, type a file name.
	
	4. Click Save.
	
	This method saves the file with a .pag extension in the specified folder.
	
	Importing Saved Toolbox Pages
	-----------------------------
	
	To import a page to the Toolbox, perform the following steps:
	
	1. Right-click any tab in the Toolbox, and then click Import Page on the
	  shortcut menu.
	
	2. In the Import Page dialog box, locate and select the .pag file that you want
	  to import.
	
	3. Click Open.
	
	The page is added to your Toolbox.
	
	Additional query words: 0L2000 OL98 OL97
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3
	Version           : WINDOWS:2000; :
	Issue type        : kbprb
	
	=============================================================================
	
