---
layout: page
title: "Q85563: Windows, Novell NetWare, Incorrect Form Number when Printing"
permalink: /kb/085/Q85563/
---

## Q85563: Windows, Novell NetWare, Incorrect Form Number when Printing

{% raw %}

	Article: Q85563
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information applies to Microsoft Windows operating system version
	3.1 and Novell NetWare.
	
	When you configure your printer in Control Panel, there is an option to select a
	Form Name. These forms are numbered. If you have defined the forms starting with
	any number other than zero, you will be prompted for the incorrect form number
	by the server to which the printer is connected if a form change is needed.
	
	For example, if you had defined Form 1 and named it Greenbar and Form 0 had not
	been defined, the server will prompt you for Form 0 instead of Form 1 if a form
	change is needed.
	
	WORKAROUND
	==========
	
	To work around this problem, define your forms starting with zero.
	
	MORE INFORMATION
	================
	
	Novell NetWare provides its users with a Forms printing option. This option
	allows the network administrator to create several types of print forms. When a
	print job is sent to a printer, NetWare checks to make sure the form selected
	matches the last form used. If it does not match, NetWare alerts the designated
	print console operator that the paper in that printer needs to be changed.
	
	To Select a Form While in Windows
	---------------------------------
	
	1. Run Control Panel.
	
	2. Choose the Printer icon.
	
	3. Choose Connect.
	
	4. Choose Network.
	
	5. Choose Options.
	
	6. Select a Form from the Form Name list.
	
	The following two examples demonstrate the correct behavior:
	
	Example One
	-----------
	
	1. Use the Capture command as follows from the MS-DOS prompt, before starting
	  Windows:
	
	  CAPTURE /Q=<printqname> /FORM=1 /NOBANNER
	
	2. Restart Windows and send a print job to the server. You will be prompted as
	  follows:
	
	  Mount Form 1 in printer 0. Then use PRINTER 0 MOUNT FORM 1.
	
	3. The following command will acknowledge the paper change:
	
	  PRINTER 0 MOUNT FORM 1.
	
	Example Two
	-----------
	
	1. Use the Capture command as follows from the MS-DOS prompt before starting
	  Windows:
	
	  CAPTURE /Q=<printqname> /FORM=LETTERHEAD /NOBANNER
	
	2. You will be prompted as follows:
	
	  Mount form 2(LETTERHEAD) in printer 0. Then use PRINTER 0 MOUNT FORM 2.
	
	3. The following command will acknowledge the paper change:
	
	  PRINTER 0 MOUNT FORM 2
	
	Microsoft has confirmed this to be a problem in Windows version 3.1. We are
	researching this problem and will post new information here as it becomes
	available.
	
	Additional query words: 3.10 3.1 3.11 Netware 2.15
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
