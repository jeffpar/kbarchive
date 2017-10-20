---
layout: page
title: "Q151853: INFO: Required Files For The Pivot Table Wizard"
permalink: /kb/151/Q151853/
---

## Q151853: INFO: Required Files For The Pivot Table Wizard

{% raw %}

	Article: Q151853
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To use the Pivot Table Wizard in Visual FoxPro for Macintosh successfully,
	Microsoft Excel 5.0 and Microsoft Query must be properly installed. Since Excel
	uses the FoxPro ODBC driver when creating the pivot table, the Q+E ODBC FoxPro
	Driver must be installed and a data source for FoxPro files must be setup in the
	ODBC Setup control panel. Excel and Microsoft Office install Microsoft Query and
	the ODBC files necessary to access FoxPro files using Excel and Microsoft Query.
	If you are doing a less-than-complete install of Excel or Office, choose the
	Data Access options to install Microsoft Query and the ODBC files.
	
	MORE INFORMATION
	================
	
	The following three messages may be received in Visual FoxPro if a required file
	is missing, damaged, or is the wrong version. Under each message is information
	on what files may be missing or how to fix the condition that is causing the
	Pivot Table Wizard not to complete. The information on files is based on
	Microsoft Office version 4.2. Future releases of Office may cause some of this
	information to change.
	
	Error Message 1
	---------------
	
	  Microsoft Query has not been installed properly and is needed in order to
	  create an Excel pivot table.
	
	To fix this condition, make sure Microsoft Query is installed in the Microsoft
	folder on the Macintosh. It should be version 1.0. Reinstall Microsoft Query
	from the Excel or Office source disk.
	
	Error Message 2
	---------------
	
	  Failed to get Excel OLE object.
	
	One or more of the following files may be missing or damaged. In all cases below,
	the Pivot Table Wizard will not even be able to load Excel. Note that Excel
	needs the Microsoft OLE Automation and Microsoft OLE Library just to load on its
	own:
	
	1. fxOLE30b.cfm - This file installs with Visual FoxPro and resides in the
	  System:Extensions folder. It should be 163,604 bytes in size. No version. The
	  Pivot Table Wizard will not make use of fxOLE30b.slm if the cfm is not
	  available.
	
	2. Microsoft OLE Automation - This file installs with Visual FoxPro and is also
	  located in the System:Extensions folder. It is version 2.06 and is 537,822
	  bytes in size. It is one of three OLE files installed by Visual FoxPro.
	
	3. Microsoft OLE Library - Another of the three OLE extensions that Visual
	  FoxPro installs. This is also version 2.06 and is 964,784 bytes in size. The
	  remaining OLE extension that Visual FoxPro installs, Microsoft OLE Extension,
	  is not used by the Pivot Table Wizard and will not cause the above message if
	  it is missing. Make sure that it is installed, however. It is version 2.07
	  and is 949,173 bytes in size.
	
	4. PPC Registration Database - This file is located in the System:Preferences
	  folder. The number of installed applications will determine this file's size.
	  If this file has been deleted since Excel was installed or was last run, it
	  will cause the above message and the Pivot Table Wizard will fail. To correct
	  this condition, start Excel to re-register it. The Pivot Table Wizard will
	  complete if this was the only problem.
	
	Error Message 3
	---------------
	
	  An OLE automation error occurred. Your Excel pivot table may not be complete.
	
	This message indicates that one of the ODBC components is missing or damaged. The
	key files to check for are listed below. Note that the ODBC files with "PPC" on
	the ends of their names are installed by Visual FoxPro and will not work with
	Excel 5.0 and the Q+E ODBC FoxPro Driver. In all cases below, Excel will start,
	but the pivot table will not be created. Switching back to Visual FoxPro will
	reveal the above message.
	
	1. ODBC Configuration Manager - Located in the System:Extensions folder, this
	  should be version 1.0. It is 29,835 bytes in size. Although this file is
	  installed by Excel or Office, it is supplied by Apple Computer, Inc.
	
	2. ODBC Driver Manager - Also in the System:Extensions folder. It is version 1.0
	  and is 51,175 bytes. An Apple Computer, Inc. file.
	
	3. Q+E ODBC FoxPro Driver - Located in the System:Extensions folder. This file
	  has an Intersolv, Inc. copyright. It is version 1.2.0 and is 772,536 bytes in
	  size. If this file is missing, the Data Source For Connection dialog will
	  appear in Excel but there will not be an option for an ODBC driver to access
	  FoxPro files. Choosing Cancel in the dialog will produce the above message in
	  Visual FoxPro.
	
	  Even if the Q+E ODBC FoxPro Driver file is installed, if no data source has
	  been set up to use it, the Data Source For Connection dialog will not have an
	  appropriate ODBC driver for the Pivot Table Wizard to use. Set up a data
	  source to use the Q+E FoxPro Driver by using the ODBC Setup control panel.
	  The ODBC setup control panel is also installed by Excel and/or Office. It is
	  an Apple Computer, Inc. file. It is version 1.0 and is 5,888 bytes in size.
	  The data sources that are set up in it are stored in the ODBC Preferences
	  file found in the System:Preferences folder.
	
	  To setup a data source for FoxPro files:
	
	  a. Open the ODBC Setup control panel, and choose the Setup Data Sources...
	     button.
	
	  b. Once in the ODBC Data Sources dialog, choose the Add... button.
	
	  c. Select the Q+E/Microsoft FoxPro Driver as the driver, and choose the OK
	     button.
	
	  d. Type in a Data Source Name. The other settings can be left as they appear.
	     Choose OK.
	
	Visual FoxPro for Macintosh has the ability to distribute run-time applications
	to 68K (non-PowerPC) Macintoshes. One of the options in Step 2 of the Setup
	Wizard is to include support for the SQL Server ODBC Driver. If a Visual FoxPro
	run-time application for a 68K Macintosh is installed on a PowerPC that has
	Excel or Office and Visual FoxPro on it, the ODBC files referred to above will
	be replaced with newer versions supplied by Visigenic Software, Inc. The Q+E
	FoxPro ODBC Driver installed by Excel or Office is a 68K driver and will work
	with these newer ODBC files. The relevant files, their version and size are
	listed below. These are the versions from Visigenic:
	
	  File Name                      Version             Size
	  ----------------------------------------------------------------
	
	  ODBC Setup control panel        2.1.1               94,891 bytes
	  ODBC Configuration Manager      2.1.1              146,675 bytes
	  ODBC Driver Manager             2.1.1               66,631 bytes
	
	NOTE: As of Dec-09-1998, Visigenic was acquired by INPRISE, Inc.
	
	For information about how to contact INPRISE, click the appropriate article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q124635 MXL5: Troubleshooting Microsoft Excel 5.0 for the Macintosh
	
	
	  Q120257 Error Messages Appear When Starting Application on PowerMac
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
