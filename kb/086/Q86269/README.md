---
layout: page
title: "Q86269: PRB: IBM Proprinter Draft Mode Unavailable Under Windows 3.1"
permalink: /kb/086/Q86269/
---

## Q86269: PRB: IBM Proprinter Draft Mode Unavailable Under Windows 3.1

{% raw %}

	Article: Q86269
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 04-JUL-1999
	
	3.10
	WINDOWS
	kbprg kbprb
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the IBM Proprinter printer drivers included with Microsoft Windows version
	3.1, the Printer Setup dialog box does not provide a draft mode option. Under
	Windows 3.0, the Proprinter printer driver provides a choice between Near Letter
	Quality (NLQ) and draft mode.
	
	CAUSE
	=====
	
	The Proprinter prints in draft mode by selecting a specific draft mode font.
	Under Windows 3.1, the Proprinter driver was rewritten using the Universal
	Printer Driver. The revised driver is consistent with the printer's method of
	selecting fonts.
	
	RESOLUTION
	==========
	
	To print in draft mode under Windows 3.1, format the text of your document using
	the Fastfont printer font. This font provides draft quality output and prints
	more rapidly than NLQ fonts. Text formatted in other fonts prints in near letter
	quality.
	
	Under Windows 3.0, the Proprinter driver selects the draft font when the driver
	is configured for draft mode.
	
	MORE INFORMATION
	================
	
	When the Proprinter driver is installed under Windows 3.1, use the following
	five-step procedure to print a Windows Write document in draft mode:
	
	1. Start Windows Write and open the document.
	
	2. Select the entire document.
	
	3. Choose Fonts from the Character menu to bring up the Font dialog box.
	
	4. Select the Fastfont font (each printer font has a printer symbol to the left
	  of its name).
	
	5. Print the document.
	
	To make draft mode available when a Proprinter driver is installed, an
	application must enumerate the fonts provided by the system. Because Fastfont is
	a printer font, the enumeration must include printer fonts. An application, such
	as Notepad, that does not provide a choice of fonts limits the functionality
	available to its users.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
