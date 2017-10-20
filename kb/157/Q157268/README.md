---
layout: page
title: "Q157268: Msbatch.inf Parameters: Install MS Exchange; Don't Run Wizard"
permalink: /kb/157/Q157268/
---

## Q157268: Msbatch.inf Parameters: Install MS Exchange; Don't Run Wizard

{% raw %}

	Article: Q157268
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to install the Microsoft Exchange client included
	with Windows 95, but not run the Inbox wizard, using the Msbatch.inf file for
	batch installations of Windows 95.
	
	MORE INFORMATION
	================
	
	Microsoft does not encourage or support changes to .inf files; therefore,
	Microsoft Technical Support does not support the procedure in this article.
	Although we have tested the following procedure and it appears to function as
	described, make a backup copy of your .inf file before you proceed.
	
	In the Msbatch.inf file, modify the [Install] section to include the following
	line:
	
	  delreg=no.inbox.wizard
	
	Modify the [Optional Components] section to match the following line:
	
	  "Microsoft Exchange"=1
	
	Also, add the following section and key:
	
	  [no.inbox.wizard]
	  HKLM,Software\Microsoft\Windows\CurrentVersion\RunOnce\ 
	  Setup,"Microsoft Exchange",,"C:\Progra~1\Micros~1\mlset32.exe -b"
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
