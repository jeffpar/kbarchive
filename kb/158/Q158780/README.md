---
layout: page
title: "Q158780: Unable to Print to Local Port from WordPerfect for DOS"
permalink: /kb/158/Q158780/
---

## Q158780: Unable to Print to Local Port from WordPerfect for DOS

{% raw %}

	Article: Q158780
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kb3rdparty kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to print to a local port from WordPerfect 5.1 for DOS, the print
	job may not print until you exit the application. However, when you print to a
	network port, the print job is successful.
	
	CAUSE
	=====
	
	In WordPerfect, the Print to Hardware Port option is disabled.
	
	RESOLUTION
	==========
	
	Use the following steps to enable this option in WordPerfect:
	
	1. Press SHIFT+F7.
	
	2. Press S for Select Printer.
	
	3. With your current printer selected, press 3 for Edit.
	
	4. Press 7 for Print to Hardware Port.
	
	If this option is set to No, change it to Yes by pressing 1.
	
	MORE INFORMATION
	================
	
	The Print to Hardware Port option is used to help WordPerfect communicate with
	nonstandard printer ports. This option may not work with all printer ports. It
	may also be used to change the interrupt request level (IRQ) or base address of
	the printer port.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	REFERENCES
	==========
	
	WordPerfect 5.1 for DOS Online Help, in Advanced Printer Setup.
	
	Additional query words: prodnt wp wpdos
	======================================================================
	Keywords          : kb3rdparty kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	

{% endraw %}
