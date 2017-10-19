---
layout: page
title: "Q124183: ADT2: Setup Wizard Templates Are Lost Installing Service Pack"
permalink: /kb/124/Q124183/
---

## Q124183: ADT2: Setup Wizard Templates Are Lost Installing Service Pack

	Article: Q124183
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 05-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Developer's Toolkit, version 2.0 
	-------------------------------------------------------------------------------
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	SYMPTOMS
	========
	
	When you install the new Setup Wizard included with the Microsoft Access version
	2.0 Service Pack, the templates you had already defined in the Setup Wizard are
	lost.
	
	CAUSE
	=====
	
	The new version of the Setup Wizard overwrites the older one when you unpack it
	with the Decomp utility included with the Service Pack. When the older version
	of the Setup Wizard is overwritten, the existing templates contained in it are
	overwritten as well.
	
	RESOLUTION
	==========
	
	To work around this behavior, you can import the templates in the older Setup
	Wizard into the new version. To do so, follow these steps.
	
	NOTE: You must follow these steps before installing the new Setup Wizard. If you
	have already installed the new Setup Wizard (and overwritten the older Setup
	Wizard) these steps will not work.
	
	1. Rename the older Setup Wizard file from SETUPWIZ.MDB to SETUPWIZ.BAK.
	
	2. Install the new Setup Wizard following the instructions in the Service Pack.
	
	3. Start Microsoft Access. While pressing the SHIFT key, open the SETUPWIZ.MDB
	  file. (Pressing the SHIFT key while opening a database prevents the
	  database's Autoexec macro from running.)
	
	4. From the File menu, choose Import. In the Data Source box, select Microsoft
	  Access, and then choose the OK button.
	
	5. In the File Name box, select SETUPWIZ.BAK, and then choose OK.
	
	6. In the Import Objects dialog box, select the zws_SetupTemplates table and
	  then choose the Import button.
	
	7. Repeat step 6 for the zws_TemplateFiles table.
	
	8. After the tables are imported, choose the Close button.
	
	9. Delete the zws_SetupTemplates and zws_TemplateFiles tables. These are the
	  empty tables from the new Setup Wizard.
	
	10. Rename the zws_SetupTemplates1 table to zws_SetupTemplates. Rename the
	  zws_TemplateFiles1 table to zws_TemplateFiles.
	
	11. Quit Microsoft Access and delete the SETUPWIZ.BAK file.
	
	REFERENCES
	==========
	
	For more information about the Microsoft Access version 2.0 Service Pack, please
	see the following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q122927
	  TITLE : WX1124: Microsoft Access Version 2.0 Service Pack
	
	Additional query words: jet25 jet 2.5
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbAudDeveloper kbAccessSearch kbAccessDevTK200 kbZNotKeyword3
	Version           : WINDOWS:2.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
