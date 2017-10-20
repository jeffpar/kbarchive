---
layout: page
title: "Q146070: Eastern Europe System Locale Does Not Change Screen Fonts"
permalink: /kb/146/Q146070/
---

## Q146070: Eastern Europe System Locale Does Not Change Screen Fonts

{% raw %}

	Article: Q146070
	Product(s): Microsoft Windows NT
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.00 
	- Microsoft Windows NT Server version 4.00 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	On a computer running the German version of Windows NT, you want to switch to
	the Russian system default locale to set the Russian screen fonts used by
	Russian programs, for example, Russian Microsoft Office 95. After you restart
	your computer, the display of the screen font changes, but is not correct.
	Similar problems may happen if you change the display to large fonts in the
	display ("Anzeige") program.
	
	The problem occurs on all Eastern European locales including Polish, Estonian,
	Hungarian, Czech, Bulgarian, and so on. The Russian locale is used here as an
	example.
	
	CAUSE
	=====
	
	When the new fonts are installed, Control Panel adds the fonts with an English
	name but Windows NT still uses the fonts with the German name. The Font.inf file
	in the <nt>\Inf folder is not localized.
	
	RESOLUTION
	==========
	
	Obtain a fixed Font.inf file from Microsoft Support Services.
	
	
	To set all font attributes properly, follow these steps:
	
	1. Change your system default locale back to "Deutsch (Standard)."
	
	2. Change your font size to "Kleine Schriftarten" if needed.
	
	3. Restart the computer.
	
	4. Run the following script using the Regini utility from the Windows NT
	  Resource Kit. If you don't have this tool you can try to delete the entries
	  below manually or call Microsoft Support for assistance:
	
	  \Registry\Machine\Software\Microsoft\Windows NT\CurrentVersion\Fonts
	  Courier 10,12,15 (VGA res) = REG_SZ
	  MS Serif 8,10,12,14,18,24 (VGA res) = REG_SZ
	  MS Sans Serif 8,10,12,14,18,24 (VGA res) = REG_SZ
	  Small Fonts (VGA res) = REG_SZ
	  Courier 10,12,15 (8514a res) = REG_SZ
	  MS Serif 8,10,12,14,18,24 (8514a res) = REG_SZ
	  MS Sans Serif 8,10,12,14,18,24 (8514a res) = REG_SZ
	  Small Fonts (8514a res) = REG_SZ
	  Courier 10,12,15 (VGA res) = DELETE
	  MS Serif 8,10,12,14,18,24 (VGA res) = DELETE
	  MS Sans Serif 8,10,12,14,18,24 (VGA res) = DELETE
	  Small Fonts (VGA res) = DELETE
	  Courier 10,12,15 (8514a res) = DELETE
	  MS Serif 8,10,12,14,18,24 (8514a res) = DELETE
	  MS Sans Serif 8,10,12,14,18,24 (8514a res) = DELETE
	  Small Fonts (8514a res) = DELETE
	
	5. Copy the fixed Font.inf file to the <nt>\inf folder.
	
	6. Start Control Panel ("Systemsteuerung") and configure the locale and screen
	  font size as you prefer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt ttf truetype font true type
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTSsearch
	Version           : :4.00
	
	=============================================================================
	

{% endraw %}
