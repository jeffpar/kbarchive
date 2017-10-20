---
layout: page
title: "Q324379: PRB: Error Message After You Select Backup Configuration Option"
permalink: /kb/324/Q324379/
---

## Q324379: PRB: Error Message After You Select Backup Configuration Option

{% raw %}

	Article: Q324379
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbhis2000
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you select the "Backup configuration" option in SNA Manager, you may
	receive the following error message:
	
	  Unable to write file.
	
	
	RESOLUTION
	==========
	
	To resolve the problem, export the contents of the Com.cfg file to a text file,
	create a new Com.cfg file, and then import the configuration information from
	the text file into the new Com.cfg file. To do this, follow these steps:
	
	1. Make a backup copy of the existing Com.cfg file by copying the file to
	  another location.
	
	2. Stop the SnaBase service on the primary Host Integration Server 2000
	  computer.
	
	3. Open a command prompt, and then change to the <SNA Root>\Config
	  directory on the primary Host Integration Server 2000 computer.
	
	4. Run the following command:
	
	  snacfg /print > c:\temp\comcfg.txt
	
	5. Copy the blank Com.cfg file from the Setup\Server\Config directory of the
	  Host Integration Server 2000 CD-ROM to the <SNA ROOT>\Config directory.
	  When prompted, select the option to replace the existing Com.cfg file.
	
	6. Remove the Read Only attribute from the blank Com.cfg file that you copied in
	  step 5.
	
	7. Run the following command at the command prompt to import the exported
	  configuration information into the new Com.cfg file:
	
	  snacfg @c:\temp\comcfg.txt
	
	8. Run the following command at the command prompt:
	
	  snacfg user /validate
	
	9. Start the SnaBase service on the primary Host Integration Server 2000
	  computer.
	
	For more information about the Snacfg.exe command-line utility, see the topic
	titled "The Command Line Interface," in the "Administrator's Reference" section
	of the Host Integration Server 2000 online documentation.
	
	WORKAROUND
	==========
	
	To work around this issue, manually back up the Com.cfg file by copying the file
	to another location. If scheduled backups are performed on the server running
	Host Integration Server 2000, you can back up the Com.cfg file as part of these
	scheduled backups.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbhis2000 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
