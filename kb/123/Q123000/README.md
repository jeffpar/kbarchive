---
layout: page
title: "Q123000: PC Win: Cannot Control Typeface Printed from Mail"
permalink: /kb/123/Q123000/
---

## Q123000: PC Win: Cannot Control Typeface Printed from Mail

	Article: Q123000
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There is no way to control the exact typeface selected when you print from
	Microsoft Mail for Windows.
	
	MORE INFORMATION
	================
	
	When you view message text on your screen, you can switch between two fonts,
	known as Fixed Font and Normal Font. To change these fonts, you change the
	FixedFont and NormalFont settings in the [Microsoft Mail] section of the
	MSMAIL.INI file. For more information about the [Microsoft Mail] section of the
	MSMAIL.INI file, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q86100 PC Win: MSMAIL.INI Entries in [Microsoft Mail]
	
	When the message is printed, if Normal Font is the current view, Mail will print
	a typeface named "Helv," regardless of the Normal Font specified in the
	MSMAIL.INI file. If Fixed Font is the current view, a typeface named "MSMAIL3"
	will be printed, regardless of the Fixed Font specified in the MSMAIL.INI file.
	You can change the size of the printed text by changing the PrintFont setting in
	the [Microsoft Mail] section of the MSMAIL.INI file.
	
	Messages printed from two different workstations may produce printing that
	appears to have a different typeface because there is no Helv font installed in
	Windows version 3.1 or later.
	
	Since Helv does not exist, Windows tries to select a similar typeface. The final
	typeface selected may vary based on the following criteria:
	
	- The printer driver installed under Windows
	
	- Additional fonts installed under Windows
	
	- Third-party font manager products installed under Windows
	
	With Windows 3.1 and Mail 3.2 installed and no additional fonts or font manager
	products, messages printed with the Normal Font selected will vary based upon
	the printer driver. For example, assume that a Hewlett-Packard LaserJet III
	printer with PostScript is installed. If a message is printed using the LaserJet
	HPCL driver, Univers will be the typeface used. If the same message is printed
	using the PostScript driver, Helvetica will be used.
	
	If additional fonts are installed onto the system, Windows may find a closer
	match to Helv, based on information in the font itself. If this happens, output
	may appear different than Helvetica or Univers. If the characteristics of the
	selected font are not correct, the printed text may appear drastically
	different. The only way to prevent this type of problem is to remove the
	offending font from the system.
	
	If a third-party font manager is installed on the system, it may be able to
	bypass Windows' own process to select the print typeface. To determine if this
	is occurring, you need to temporarily deactivate or remove the font manager.
	
	NOTE: You can force a particular typeface to be selected for display by changing
	settings in the [Font Substitution] section of the WIN.INI file. However, this
	will not have any effect on the process of selecting a printer typeface.
	
	
	Additional query words: typeface 3rd party
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b kbMail320a
	Version           : WINDOWS:3.0,3.0b,3.2,3.2a
	
	=============================================================================
	
