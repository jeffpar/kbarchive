---
layout: page
title: "Q100730: Creating a Custom Separator Page for PCL5 Printers"
permalink: /kb/100/Q100730/
---

## Q100730: Creating a Custom Separator Page for PCL5 Printers

{% raw %}

	Article: Q100730
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print to a shared network printer from Windows for Workgroups, the
	printer may not eject the final page of a print job.
	
	WORKAROUND
	==========
	
	To work around this problem, you can create a custom separator file that
	contains control codes to force the printer to eject the last page.
	
	NOTE: The custom separator file must be specified in Print Manager on the machine
	that is acting as the print server. This file affects only print jobs that are
	printing from other workstations, not jobs from the workstation server itself.
	
	MORE INFORMATION
	================
	
	The custom separator file must be in either Clipboard file format or Windows
	Metafile format. The easiest method is to create a Clipboard file as follows:
	
	1. Open Microsoft Write.
	
	2. Turn your NUM Lock key ON, and use the numeric keypad (this procedure does
	  not work if you use the number keys at the top of your keyboard).
	
	3. On a clean page, press ALT+027 followed by an uppercase letter E. This should
	  give you the escape character and an uppercase letter E. The escape character
	  is displayed as a rectangle on the screen. Do not place a space between the
	  escape character and the letter E.
	
	  NOTE: The printer control codes typed in step 3 are specific to printers that
	  use the PCL5 printer language. Printer control codes for your particular
	  printer may vary. Please consult your printer documentation for details.
	
	4. Select the two characters you typed. From the Edit menu, choose Copy.
	
	5. Open the ClipBook Viewer and select the window titled Clipboard.
	
	6. From the File menu, choose Save As, and save the file as follows:
	
	  c:\windows\formfeed.clp
	
	7. Open Print Manager and choose Separator Pages from the Options menu.
	
	8. Select Custom Separator File, and specify your Clipboard file
	  (c:\windows\formfeed.clp), and then choose OK.
	
	Documents you print to your Windows for Workgroups shared printer will now issue
	a form feed prior to printing.
	
	This custom separator file can be printed on all printers shared on the Workgroup
	server.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
