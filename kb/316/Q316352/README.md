---
layout: page
title: "Q316352: HOW TO: Configure a Separator Page in Windows NT 4.0"
permalink: /kb/316/Q316352/
---

## Q316352: HOW TO: Configure a Separator Page in Windows NT 4.0

{% raw %}

	Article: Q316352
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbAudITPro kbHOWTOmaster
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Requirements
	- How to Configure a Separator Page
	- Troubleshooting
	
	- REFERENCES
	
	SUMMARY
	=======
	
	This step-by-step article describes how to configure a separator page (also
	known as a banner page) for a printer that is connected to a Windows NT
	4.0-based computer. After you configure a separator page for a printer, a
	separator page that lists the name of the user who printed the document is
	printed at the beginning of each print job.
	
	Requirements
	------------
	
	- A computer that meets the requirements that are listed on the appropriate
	  Hardware Compatibility List on which Windows NT Server 4.0 or Windows NT
	  Workstation 4.0 is installed. In addition, at least one printer must be
	  installed on the computer.
	
	How to Configure a Separator Page
	---------------------------------
	
	You configure a separator page for each printer. If you want to assign a
	separator page for all of the printers on a computer, you must repeat the steps
	in this section for each printer. To configure a separator page:
	
	1. Click Start, point to Settings, and then click Printers.
	
	2. Right-click the printer for which you want to configure a separator page, and
	  then click Properties.
	
	3. In the "<Printer_name> Properties" dialog box, click Separator Page.
	
	4. In the Separator Page dialog box, click Browse. In the next Separator Page
	  dialog box, double-click the separator page file that you want to assign to
	  this printer. Note that Windows NT 4.0 includes three separator page files:
	
	   - Pcl.sep: This file switches a dual-language printing device to PCL
	     printing, and prints a separator page at the beginning of each print job.
	
	   - Pscript.sep: This file switches a dual-language printing device to
	     PostScript printing, but does not print a separator page at the beginning
	     of each print job.
	
	   - Sysprint.sep: This file switches a dual-language printing device to
	     PostScript printing, and prints a separator page at the beginning of each
	     print job.
	
	5. In the Separator Page dialog box, click OK.
	
	6. In the "<Printer_name> Properties" dialog box, click OK.
	
	Troubleshooting
	---------------
	
	Two pages of Garbled Text Are Printed Instead of a Separator Page:
	
	This problem typically occurs if you assign the Sysprint.sep separator page file
	to a non-PostScript printer. To resolve this issue, change the separator page
	file to the Pcl.sep file.
	
	REFERENCES
	==========
	
	For more information about managing printers on a Windows NT 4.0-based computer,
	see Module 7 of Microsoft Official Curriculum, Course number 803, Administering
	Microsoft Windows NT 4.0
	(http://www.microsoft.com/TRAINCERT/SYLLABI/803BFINAL.ASP).
	
	For additional information about installing printers, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q316348 HOW TO: Add a Printer to a Windows NT 4.0-Based Computer
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAudITPro kbHOWTOmaster 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
