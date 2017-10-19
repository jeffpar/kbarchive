---
layout: page
title: "Q118977: Error Msg When You Attach Paradox File to MS Access 2.0"
permalink: /kb/118/Q118977/
---

## Q118977: Error Msg When You Attach Paradox File to MS Access 2.0

	Article: Q118977
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	In Microsoft Access version 2.0, when you try to attach or import a Paradox 3.x
	database file, you receive the following error message:
	
	  Couldn't find net path or user name.
	
	In the Microsoft Press book "Microsoft Access 2 for Windows Step by Step" (page
	95, step 3) you are instructed to attach the Paradox 3.5 table "Shipping.db" to
	Microsoft Access. You may receive the above error message when you attempt to
	attach the Paradox table.
	
	CAUSE
	=====
	
	When you attach a Paradox file to Microsoft Access for the first time, Microsoft
	Access creates the [Paradox ISAM] section of the Msacc20.ini. You receive the
	above error message if Microsoft Access fails to locate an appropriate user name
	in the ParadoxUserName setting in the [Paradox ISAM] section of the Msacc20.ini.
	
	RESOLUTION
	==========
	
	To resolve the problem, modify the Msacc20.ini as follows:
	
	1. Quit Microsoft Access 2.0 (if it is currently running).
	
	2. In Program Manager, open Notepad.
	
	3. On the file menu, click Open and enter the following path:
	
	  " C:\Windows\Msacc20.ini" (without the quotation marks)
	
	4. Click OK to open Msacc20.ini.
	
	5. Scroll to the [Paradox ISAM] section of this file.
	
	  NOTE: Do not mistake this section for either the [Paradox 3.X] or the
	  [Installable ISAMs] section.
	
	6. Add the following new line of text to the [Paradox ISAM] section:
	
	  " ParadoxUserName=<customer name or some unique identifier>" (without
	  the quotation marks)
	
	7. Save changes to this file and exit Notepad.
	
	When you restart Microsoft Access, the addition of the ParadoxUserName setting
	allows you to attach to the Paradox database.
	
	For more information about how to perform this task in Windows, see your Windows
	printed documentation or online Help.
	
	MORE INFORMATION
	================
	
	The following is an example of a properly defined [Paradox ISAM] section:
	
	  [Paradox ISAM]
	  ParadoxUserName=Zephan Schroeder
	  ParadoxNetPath=C:\MSOFFICE\ACCESS
	  ParadoxNetStyle=3.x
	  CollatingSequence=Ascii
	
	STATUS
	======
	
	This problem occurs when you use Microsoft Access version 2.0 and Paradox
	version 3.x. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q91711 PRB: "Couldn't Open File" Error Message Using Paradox Table
	
	Additional query words: 2.00 msaccess sbs mspress ms_press bookbug
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
