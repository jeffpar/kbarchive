---
layout: page
title: "Q158719: How to Use Inetsvcs.adm File with System Policy Editor"
permalink: /kb/158/Q158719/
---

## Q158719: How to Use Inetsvcs.adm File with System Policy Editor

{% raw %}

	Article: Q158719
	Product(s): Internet Information Server
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): mspwsw95
	Last Modified: 17-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Personal Web Server version 1.0 for Windows 95 
	-------------------------------------------------------------------------------
	
	This article contains information about using Windows 95 with a
	configuration that has not been tested and is not supported by Microsoft.
	If the steps described in this article do not function properly, use a
	supported configuration.
	
	SUMMARY
	=======
	
	This article describes how to merge the Personal Web Server for Windows 95
	policy file (Inetsvcs.adm) with the Admin.adm policy file included with Personal
	Web Server to create a policy file that incorporates all policies from both
	files.
	
	MORE INFORMATION
	================
	
	Personal Web Server includes a file named Inetsvcs.adm containing policies
	specific to Personal Web Server. This file is used with System Policy Editor as
	a template to create policy files.
	
	Changing the Template in System Policy Editor
	---------------------------------------------
	
	You can change the template in System Policy Editor by clicking Template on the
	Options menu, and then selecting the Inetsvcs.adm file.
	
	Windows 95 includes a file named Admin.adm that is used for most policies. It is
	located in the Windows\Inf folder.
	
	Creating a Policy File That Includes Both Templates
	---------------------------------------------------
	
	To create a policy file that incorporates both templates, follow these steps:
	
	1. Use any text editor (such as Notepad) to open the Admin.adm file in the
	  Windows\Inf folder.
	
	  For information about using Notepad to write and edit text files, click Start,
	  click Help, click the Index tab, type "editors" (without the quotation
	  marks), and then double-click the "Notepad" topic.
	
	2. Run a second instance of the text editor and open the Inetsvcs.adm file in
	  the Program Files\Websvr\System folder.
	
	3. Copy the text in the Inetsvcs.adm file beginning with
	
	    CATEGORY !!InternetServices
	
	  and ending with:
	
	    END CATEGORY ; Microsoft Windows95 Internet Services
	
	4. Paste the text into the Admin.adm file before the following section:
	
	    CATEGORY !!AccessControl
	
	  NOTE: When you copy the text in the Inetsvcs.adm file, make sure to include
	  the CATEGORY and END CATEGORY lines in the text you are copying.
	
	5. Copy the text in the Inetsvcs.adm file in the [Strings] section. Paste the
	  text into the bottom of the [Strings] section in the Admin.adm file.
	
	6. Save the Admin.adm file as a file named PWSAdmin.adm.
	
	7. In System Policy Editor, click Template on the Options menu, and select the
	  PWSAdmin.adm file. Note that you must close any open policy file before
	  changing the template.
	
	NOTE: System Policy Editor is not included in the floppy disk version of Windows
	95. You can download Policy.exe, a self-extracting executable file containing
	Poledit.exe, from online services. Please see the following article in the
	Microsoft Knowledge Base for information about downloading Policy.exe:
	
	  Q135315 CD-ROM Extras for Microsoft Windows 95 Upgrade
	
	
	
	Additional query words: 95
	
	======================================================================
	Keywords          : mspwsw95 
	Technology        : kbPersWebServSearch kbZNotKeyword3 kbPersWebServ100Win95
	Version           : :1.0
	
	=============================================================================
	

{% endraw %}
