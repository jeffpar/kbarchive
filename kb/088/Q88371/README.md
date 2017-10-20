---
layout: page
title: "Q88371: PC Win: Change Default Printer in Windows Not Changed in Mail"
permalink: /kb/088/Q88371/
---

## Q88371: PC Win: Change Default Printer in Windows Not Changed in Mail

{% raw %}

	Article: Q88371
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Changing the default printer driver for version 3.1 of Microsoft Windows does
	not change the printer driver for version 3.0, 3.0b, or 3.2 of Microsoft Mail
	for Windows. To update Mail, choose Print from the File menu, select the Setup
	button, then choose the OK button.
	
	CAUSE
	=====
	
	Changing or replacing the default printer using Windows Control Panel or Print
	Manager updates entries in the WIN.INI file. Mail stores its default printer
	designation as "Printer=" in the [Microsoft Mail] section of the MSMAIL.INI
	file. Mail assumes that the default printer remains the same unless you specify
	otherwise through the Windows client. To reset the Windows client, Mail must
	read the WIN.INI file and find out which printer is now the default.
	
	WORKAROUND
	==========
	
	To reset the default printer in the Windows client, you can:
	
	- Choose Print from the File menu and select the Setup button, then choose the
	  OK button.
	
	-or-
	
	- Choose Print from the File menu and select the Setup button, then select the
	  new default printer and choose OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Mail for Windows
	versions 3.0, 3.0b, and 3.2. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	

{% endraw %}
