---
layout: page
title: "Q129985: Type 1 Font Converter Does Not Convert Some Fonts"
permalink: /kb/129/Q129985/
---

## Q129985: Type 1 Font Converter Does Not Convert Some Fonts

{% raw %}

	Article: Q129985
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This error message appears when you attempt to convert a complex Type 1 font to
	a TrueType equivalent using the Fonts applet in Control Panel:
	
	  Could not create "C:\<%systemroot%>\system\<name of .TTF file>"
	  file. Error reading input file "A:\<name of .PFB file>" or "A:\<name
	  of .PFM file>".
	
	However, the input files in question are not corrupt, and the font is a valid
	Type 1 font.
	
	
	WORKAROUND
	==========
	
	To work around this problem, install the font as a Type 1 font without
	converting it to TrueType. Note that this provides a printer font without a
	TrueType equivalent, so you will not have a matching screen font. Also, the font
	will only be available for printing on PostScript print devices.
	
	To install a Type 1 font without converting it to TrueType, follow these
	instructions:
	
	1. Start the Fonts component of Control Panel
	
	2. Choose the Add button
	
	3. Specify the Type 1 font you wish to install
	
	4. Choose the OK button
	
	  This may produce a copyright warning message. The warning only applies when
	  you convert Type 1 fonts to TrueType. If you follow these steps you will not
	  convert the font, and the warning will not apply.
	
	5. Clear the Convert Type 1 Font to TrueType check box. Make sure the Install
	  Type 1 Font Files for Use on a PostScript Printer option is selected.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in Windows NT version 3.51.
	
	
	Additional query words: prodnt Adobe Post Script Type1 Type-1
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	

{% endraw %}
