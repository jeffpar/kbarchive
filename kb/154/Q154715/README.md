---
layout: page
title: "Q154715: PC Win: Import, Export Folder Command Missing In  File Menu"
permalink: /kb/154/Q154715/
---

## Q154715: PC Win: Import, Export Folder Command Missing In  File Menu

{% raw %}

	Article: Q154715
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When importing or exporting an MMF (Mail Message File) folder in the Mail
	client, the Export Folder and/or Import Folder options are missing from the File
	Menu.
	
	The File Menu will contain only the following options: Open, Move, Copy, Delete,
	Save As, Save Attachment, Message Finder, New Folder, Folder Properties, Print,
	Print Setup, Exit, and Exit and Sign Out.
	
	CAUSE
	=====
	
	The Import and/or Export Folder MAPI command is missing from the [Custom
	Command] section of the MsMail.INI.
	
	RESOLUTION
	==========
	
	The [Custom Command] section of the MsMail.INI should appear as follows to allow
	the import and export of MMF folders. Add the following:
	
	[Custom Commands]
	IMEX=3.0;File;;10
	EXF=3.0;File;&Export Folder...;11;IMPEXP.DLL;0;;Exports folders to a backup
	file;MSMAIL.HLP;2860
	IMF=3.0;File;&Import Folder...;12;IMPEXP.DLL;1;;Imports folders from a backup
	file;MSMAIL.HLP;2861
	
	
	Additional query words: 3.20 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail350 kbMail320
	Version           : WINDOWS:3.2,3.5
	
	=============================================================================
	

{% endraw %}
