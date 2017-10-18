---
layout: page
title: "Q259429: XCLN: Error Message When You Open a Recurring Appointment"
permalink: kb/259/Q259429/
---

## Q259429: XCLN: Error Message When You Open a Recurring Appointment

	Article: Q259429
	Product(s): Microsoft Exchange
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to view or delete a recurring appointment in Day/Week/Month view,
	you may receive the following error message:
	
	  Can't Open this item. The object could not be found.
	
	CAUSE
	=====
	
	The form may be damaged.
	
	RESOLUTION
	==========
	
	To resolve this problem, install the SwitchForms utility, install the
	configuration files, and then run the SwitchForms utility.
	
	Install the SwitchForms Utility
	-------------------------------
	
	To install the SwitchForms utility, follow the instructions on the following
	Microsoft Web site:
	
	  http://office.microsoft.com/downloads/9798/switchfm.aspx
	
	The SwitchForms files are decompressed and installed in the Program
	Files\Ork97\Outlook\Switchfm folder on your computer. Setup also creates a
	SwitchForms utility menu item.
	
	Install the Configuration Files
	-------------------------------
	
	The SwitchForms utility requires the form configuration files from the Microsoft
	Exchange Client; the Microsoft Exchange Client Setup program installs the files
	automatically.
	
	The SwitchForms utility also requires the Microsoft Outlook 98 form configuration
	files that are not installed with the Typical Setup option in Microsoft Office
	or Outlook. To install the Outlook form configuration files:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Add/Remove Programs.
	
	2. Click Microsoft Outlook 98, and then click Add/Remove.
	
	3. Click Add New Components, and then click either Install From CD or Install
	  From Web.
	
	4. Click Development Tools, and then follow the instructions in the Install
	  Wizard.
	
	Run the SwitchForms Utility
	---------------------------
	
	1. Quit Outlook or the Microsoft Exchange Client.
	
	2. Click Start, point to Programs, and then click SwitchForms to run the
	  Regforms.exe program file.
	
	3. In the Install Forms For box, click either Microsoft Exchange Client or
	  Microsoft Outlook.
	
	4. In the "Search for form configuration files" box, type the path to the form
	  configuration files. You do not need to specify a full path because the
	  SwitchForms utility searches the folder you specify and all of its
	  subfolders. By default, The Microsoft Exchange Client form configuration
	  files are installed in the C:\Windows\Forms\Configs folder. Outlook form
	  configuration files are installed in the C:\Program Files\Microsoft
	  Office\Office\Forms folder.
	
	5. Click OK to configure your computer for the appropriate forms.
	
	If you have Outlook or Microsoft Exchange Client files running on your computer,
	you may receive error messages when you run the SwitchForms utility. To correct
	this problem, restart your computer, and then run the SwitchForms utility
	again.
	
	If you receive the following error message when you run the SwitchForms utility,
	install Electronic Forms Designer Runtime:
	
	  Forms could not be found.
	
	To install Electronic Forms Designer Runtime:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs, click Microsoft Office 2000, and then click
	  Add/Remove.
	
	3. Click Add Or Remove Features, and then click the plus sign (+) next to
	  Microsoft Outlook for Windows.
	
	4. Click the icon next to Electronic Forms Designer Runtime, click "Run from My
	  Computer", and then click Update Now.
	
	For additional information about installing Electronic Forms Designer Runtime,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q223488 OL2000: Error Message "The form you selected could not be displayed."
	
	After you run the SwitchForms utility you receive a confirmation message. If you
	do not receive the confirmation message, restart your computer and run the
	SwitchForms utility again.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
