---
layout: page
title: "Q266743: PostScript Printer Does Not Print Duplex"
permalink: /kb/266/Q266743/
---

## Q266743: PostScript Printer Does Not Print Duplex

{% raw %}

	Article: Q266743
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using Windows NT 4.0, and you print a file on some PostScript
	printers, you may have to manually set the Duplex option in the user interface
	even though the PostScript Printer Description (PPD) file specifies the Duplex
	option.
	
	CAUSE
	=====
	
	This issue can occur because the default Devmode setting in the Windows NT
	PostScript driver is set to None for the Duplex option. The driver does not
	reference the Devmode setting in the PPD file until you change this option in
	the user interface.
	
	RESOLUTION
	==========
	
	Use either of the following methods to resolve this issue:
	
	- Use the user interface to update the printer settings:
	
	  1. Right-click the printer object, click Properties, and then click Device
	     Settings.
	
	  2. Change the duplex unit to Installed.
	
	- If you are using certain printers, use the Microsoft Windows 2000 PostScript
	  driver, which has been adapted for Windows NT 4.0 and honors the settings in
	  the PPD file. These drivers (Pscript4.dll and Ps4ui.dll) are included in
	  Windows NT 4.0 Service Pack 6 (SP6) and are located in the
	  Support\Printers\I386 folder. You can use this method if you are using any of
	  the following printer models:
	
	   - Canon LBP-1760 PS
	
	   - HP LaserJet 4000 Series PS
	
	   - HP LaserJet 5000 Series PS
	
	   - HP LaserJet 8000 Series PS
	
	   - HP LaserJet 8100 Series PS
	
	   - Kyocera FS-5800C (KPDL-2)
	
	   - Tektronix Phaser 560
	
	   - Tektronix Phaser 740
	
	   - Tektronix Phaser 840
	
	If you are not using any of the preceding printer models, you must write a
	private .inf file to install the printer.
	
	MORE INFORMATION
	================
	
	For more information about how to determine the version of your PPD file, refer
	to the following Adobe Web site:
	
	  http://www.adobe.com/support/techdocs/1ac3a.htm
	  (http://www.adobe.com/support/techdocs/1ac3a.htm)
	
	For an overview of PPD files for Windows and Macintosh computers, refer to the
	following Adobe Web site:
	
	  http://partners.adobe.com/asn/developer/technotes/postscript.html
	  (http://partners.adobe.com/asn/developer/technotes/postscript.html)
	
	For information about PPD files, refer to the "Update PPD Specification Version
	4.3" technical note that is located at the following Adobe Web site:
	
	  http://partners.adobe.com/asn/developer/PDFS/TN/5645.PPD_Update.pdf
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	Additional query words: ppd Pscript4 dll Ps4ui
	
	======================================================================
	Keywords          : kbenv kbprint 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
