---
layout: page
title: "Q174046: XCLN: Problems Using Print Button with Lexmark Optra E Printers"
permalink: /kb/174/Q174046/
---

## Q174046: XCLN: Problems Using Print Button with Lexmark Optra E Printers

{% raw %}

	Article: Q174046
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click the Print button on the toolbar of the Exchange client to print
	to a Lexmark Optra E printer that is connected to a local LPT port, the output
	may be garbled. This problem can also manifest itself when printing
	multiple-page documents; the second or following pages print as garbage. This
	can happen whether the message is open or not.
	
	CAUSE
	=====
	
	This problem is caused by the default settings in the properties of the Lexmark
	Printer.
	
	RESOLUTION
	==========
	
	On the File menu, click Print to print to the local port to successfully print
	the message.
	
	According to Lexmark Technical Support, the following changes need to be made to
	the settings of the Lexmark Printer:
	
	1. In Control Panel, double-click Printers.
	
	2. Right-click the printer, and then click Properties.
	
	3. Under Details, in Spooling Settings, select EMF.
	
	4. Under Font, clear the Screen Font Substitution check box.
	
	5. Under Graphics, in Mode, select GL2.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: icon
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
