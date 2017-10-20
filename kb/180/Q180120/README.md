---
layout: page
title: "Q180120: WD97: Word Setup Does Not Install ODBC Drivers"
permalink: /kb/180/Q180120/
---

## Q180120: WD97: Word Setup Does Not Install ODBC Drivers

{% raw %}

	Article: Q180120
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbinterop word97kbfaq
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Microsoft Word 97 from any of the following products, Open
	Database Connectivity (ODBC) drivers are not installed:
	
	- Microsoft Word 97 for Windows (standalone version)
	
	- Microsoft Office 97 for Windows, Small Business Edition
	
	- Microsoft Home Essentials 98
	
	CAUSE
	=====
	
	This functionality is by design. The Microsoft Word Setup program does not
	install ODBC drivers.
	
	NOTE: The ODBC drivers are installed with Microsoft Office 97 for Windows
	Standard Edition and Professional Edition.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q156835 OFF97: Complete Setup Doesn't Install All ODBC Drivers
	
	
	RESOLUTION
	==========
	
	To install ODBC drivers, follow these steps:
	
	1. Do one of the following:
	
	   - Insert the Microsoft Word 97 compact disc into the CD-ROM drive.
	
	  -or-
	
	   - Insert the Microsoft Office 97 Small Business Edition compact disc into
	     the CD-ROM drive.
	
	  -or-
	
	   - Insert the Microsoft Home Essentials 98 CD-ROM disk compact disc into the
	     CD-ROM drive.
	
	2. On the Start menu, click Run. Type the following in the Open box
	
	  <X>:\Valupack\Dataacc\Dataacc.exe
	  (<X>:\MSWord\Valupack\Dataacc\Dataacc.exe for Home Essentials)
	
	  where <X> is the letter of your CD-ROM drive.
	
	  Then, click OK.
	
	3. Click Yes to install the Microsoft Data Access Pack.
	
	4. When the Data Access Setup dialog box appears, click Continue. If you are
	  warned that the Data Access Pack has already been installed, click Continue.
	
	5. Click OK to allow the Setup program to copy the data access files to the
	  C:\Program Files\Data Access folder. Or, click Change Folder to specify a
	  different path, and then click OK.
	
	6. Click "Complete\Custom Install."
	
	7. Click Change Option. In the next dialog box, click to select the check box
	  for each driver you want to install.
	
	8. Click OK, and then click Continue.
	
	  When Setup has copied all the files, you should receive the message "Data
	  Access Pack Setup was completed successfully."
	
	9. Click OK.
	
	MORE INFORMATION
	================
	
	The Data Access Pack is a Setup program that makes it possible for you to
	install any or all of the ODBC drivers and built-in drivers that you may need to
	access data (for example, to use Microsoft Access data in a Microsoft Word Mail
	Merge).
	
	You can install the following drivers from the Data Access Pack Setup.
	
	  Use this driver                    To do this
	  ------------------------------------------------------------------------
	
	  Microsoft Access Driver            Provide ODBC access to Microsoft
	                                     Access data. Required to run
	                                     Microsoft Access and also required
	                                     for several of the following drivers.
	
	  Microsoft Excel Driver             Import and export Microsoft Excel
	                                     files.
	
	  Microsoft Text and HTML Driver     Import and export text and HTML
	                                     files.
	
	  Microsoft xBase Driver             Import and export dBASE files.
	
	  Microsoft FoxPro Driver            Import and export Microsoft FoxPro
	                                     Files.
	
	  Paradox Driver                     Import and export Paradox files.
	
	  Lotus 1-2-3 Driver                 Import and export Lotus 1-2-3 files.
	
	  Microsoft Messaging Driver         Provide read-only access to Microsoft
	                                     Exchange and Outlook mail message
	                                     stores by using Data Access Objects
	                                     (DAO) as the programmer interface.
	
	  SQL Server Driver                  Import and export data to Microsoft
	                                     SQL Server.
	
	NOTE: The Microsoft Access driver is required for the dBASE, Paradox, Microsoft
	Excel, Text and HTML, Lotus 1-2-3, and messaging drivers. If you select any of
	these drivers in Data Access Pack Setup and the Microsoft Access driver is not
	also selected, the Microsoft Access driver is selected automatically.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q162714 OFF97: Files Installed with the Data Access Pack
	
	
	Additional query words: sbe
	
	======================================================================
	Keywords          : kbinterop word97 kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
