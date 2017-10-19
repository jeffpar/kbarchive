---
layout: page
title: "Q127974: ADT/ODE: Error Msg: Could Not Open the File Named &lt;File Name&gt;"
permalink: /kb/127/Q127974/
---

## Q127974: ADT/ODE: Error Msg: Could Not Open the File Named &lt;File Name&gt;

	Article: Q127974
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:2.0,7.0,97
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup
	Last Modified: 25-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Developer's Toolkit, versions 2.0, 7.0 
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	
	Novice: Requires knowledge of the user interface on single-user computers.
	
	SYMPTOMS
	========
	
	When you are running the Setup program for an application that was created with
	the Microsoft Office 97 Developer Edition Tools (ODE) or the Microsoft Access
	Developer's Toolkit (ADT), you may receive the following error message:
	
	  In Microsoft Office 97 Developer Edition Tools and Microsoft Access
	  Developer's Toolkit version 7.0:
	
	  Setup could not open the file '<filename>'.
	
	  In Microsoft Access Developer's Toolkit version 2.0:
	
	  Could not open the file named: '<filename>'.
	
	The specified file has a name with an extension that contains one or two letters
	(for example, READ.ME).
	
	CAUSE
	=====
	
	The Setup Wizard requires three-letter file extensions (for example, MYDB.MDB).
	This is a limitation of the Setup Wizard.
	
	NOTE: Microsoft Access 97 and Microsoft Access version 7.0 allows files that have
	no extensions, for example, README.
	
	RESOLUTION
	==========
	
	To work around this problem, you can use either of the following methods:
	
	- Make sure all the files included with your application have three-letter
	  extensions.
	
	- Use the Network Setup (Flat) option when you are prompted "What kind of
	  distribution disks do you wish to create?" This option does not create
	  compressed files for distribution on floppy disks, but places all the files
	  in one folder. This option is useful for creating a Setup program that will
	  be run from a file server or a CD-ROM image.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Office 97
	Developer Edition Tools (ODE), and the Microsoft Access Developer's Toolkit
	version 2.0 and 7.0.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a text file called READ.ME.
	
	2. Run the ODE or ADT Setup Wizard and specify the READ.ME file as the only file
	  to include. When you are prompted "What kind of distribution disks do you
	  wish to create?" select:
	
	  In Microsoft Office 97 Developer Edition Tools and Microsoft Access
	  Developer's Toolkit version 7.0:
	
	  Either the 1.44-MB Disks or the Compressed Network Setup option.
	
	  In Microsoft Access Developer's Toolkit version 2.0:
	
	  Either the 1.2 MB Disks or 1.44 MB Disks option.
	
	3. When the Setup Wizard is finished, run the new Setup program. Note that you
	  receive the error message mentioned earlier in this article.
	
	REFERENCES
	==========
	
	For more information about creating disk images using the Setup wizard, search
	the Help Index for "Setup wizard," or ask the Microsoft Access 97 Office
	Assistant.
	
	Additional query words: ext suffix
	
	======================================================================
	Keywords          : kberrmsg kbsetup 
	Technology        : kbOfficeSearch kbAudDeveloper kbAccessSearch kbOffice97Search kbAccessDevTK200 kbOffice97 kbZNotKeyword3 kbAccessDevTK700 kbOffice97DevSearch
	Version           : WINDOWS:2.0,7.0,97
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	
