---
layout: page
title: "Q140580: PRB: Invalid SORTWORK Setting Causes Error in Some Wizards"
permalink: /kb/140/Q140580/
---

## Q140580: PRB: Invalid SORTWORK Setting Causes Error in Some Wizards

{% raw %}

	Article: Q140580
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to run the Setup Wizard, you may receive this error:
	
	  An error occurred opening an embedded table
	
	Or when attempting to run the Table Wizard, you may receive this error:
	
	  Error #202 in Load2(0): Invalid path or file name
	
	The error appears in a dialog box titled "Microsoft Visual FoxPro Wizards" and
	containing an OK button.
	
	CAUSE
	=====
	
	The Visual FoxPro configuration file (Config.fpw) contains a command that sets
	the SORTWORK environment to a drive or directory that does not exist.
	
	RESOLUTION
	==========
	
	Correct or remove the command that sets the SORTWORK environment in the
	configuration file.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	You can set the location for temporary files by clicking Options on the Tools
	menu. Click the File Locations Tab, set the Temporary Files to point to the
	desired path, click Set as Default, and then click OK.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Add the line SORTWORK=C:\INVALIDPATH to the Config.fpw file, and save the
	  file.
	
	2. Restart Visual FoxPro.
	
	3. On the Tools menu, click Wizards, and then click Table or Setup Wizard.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
