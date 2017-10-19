---
layout: page
title: "Q174217: ODE97: Comcat.dll Can't Be Registered During Run-time Install"
permalink: /kb/174/Q174217/
---

## Q174217: ODE97: Comcat.dll Can't Be Registered During Run-time Install

	Article: Q174217
	Product(s): Microsoft Access Distribution Kit
	Version(s): ; WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 97 Developer Edition 
	- Microsoft Internet Explorer for Windows 95 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run the Setup Wizard for your custom application on a Windows 95
	computer that is running Microsoft Internet Explorer version 4.0 or on a
	computer running Windows 98, and you then install your application on a computer
	that does not have Microsoft Internet Explorer version 4.0 installed, you may
	receive the following error message
	
	  Comcat.dll was unable to register itself in the system registry
	
	and Setup is not completed successfully.
	
	CAUSE
	=====
	
	You used the Office Developer Edition Setup Wizard to build disk images. These
	disk images include a later version of the Comcat.dll file than the version on
	the target computer. When you run Setup for your custom application, Comcat.dll
	is replaced with the newer version of the file from your disk image. Setup can
	not register this newer version properly; therefore, you receive the error
	described in the "Symptoms" section of this article.
	
	RESOLUTION
	==========
	
	To avoid this problem, you need to ensure that the version of Comcat.dll
	included in your disk images is compatible with all the operating systems and
	configurations on which you plan to install your application.
	
	NOTE: After you have used one of the following resolutions, you will need to
	re-create your disk images and re-install your application to the target
	computers. To do this successfully, you will need to rename or remove the newer
	version of Comcat.dll that was copied to the computer during the previous failed
	installation before you try to reinstall your application.
	
	Solution 1
	----------
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	NOTE: A file is available for download from the Microsoft Download Center
	(Mdtupdtr.exe) that automatically carries out the manual steps listed for this
	solution. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q179567 SetupWizard Template Files Updater Available in Download Center
	
	It is possible to change the version of Comcat.dll that is included in your disk
	images by changing an entry in two of the Setup Wizard tables.
	
	WARNING: Because the following solution will modify the default tables in the
	Setup Wizard, you should back up the following two tables for reference. If you
	completed a default installation of the Microsoft Office 97 Developer Edition,
	move to the following folder
	
	  C:\Program Files\Microsoft Office\ODETools\Setup Wizard\Msaccomp
	
	and copy these files into a different folder:
	
	  01Microsoft Access Run-Time Version.MDT
	  07Microsoft Graph 97 Run-Time Version.MDT
	
	After you have made backups of these two tables, follow these steps:
	
	1. Copy a version of Comcat.dll that will register correctly into C:\Program
	  Files\Microsoft Office\ODE Tools\Setup Wizard\Redist folder on your
	  development computer.
	
	  NOTE: Version 4.71, which is on both the Office 97 Professional CD-ROM and the
	  Microsoft Access 97 CD-ROM, will work.
	
	2. Start Microsoft Access.
	
	3. In the Microsoft Access dialog box, select Open An Existing Database, and
	  then select More Files from the list. Click OK.
	
	4. In the Open dialog box, select All Files (*.*) in the Files Of Type box, and
	  move to the following directory:
	
	  C:\Program Files\Microsoft Office\ODETools\Setup Wizard\Msaccomp
	
	5. Select and open the file, 01Microsoft Access Run-time Version.mdt.
	
	6. Open the SHAREDMSO table and find the line with the following values:
	
	  LineID: add Comcat_dll
	  Param2: $(WinSysPath)
	  Param3: C:\Windows\System\COMCAT.DLL
	
	  Change these values so that they read as follows:
	
	  LineID: add Comcat_dll
	  Param2: $(SwizSetupFilesPath)
	  Param3: C:\program files\microsoft office\odetools\setup wizard
	  \redist\comcat.dll
	
	7. Close the database.
	
	8. Select and open the file, 07Microsoft Graph 97 Run-Time Version.MDT, and
	  repeat steps 6 and 7.
	
	Solution 2
	----------
	
	Novice: Requires knowledge of the user interface on single-user computers.
	
	Use the Setup Wizard to create disk images on a computer that matches the lowest
	common configuration for all of the anticipated target computers for your
	application. Some configurations that would suit this purpose:
	
	- Windows 95 without Microsoft Internet Explorer
	
	- Windows 95 with Microsoft Internet Explorer 3.x or earlier
	
	- Windows NT 4.0 Workstation or Server running Service Pack 3
	
	If you distribute an application using the Microsoft Office 97 Developer Edition
	and Microsoft Internet Explorer version 4.0 from Microsoft Windows NT version
	4.0, please see the following article in the Microsoft Knowledge Base:
	
	  Q174508 ODE: Run-Time Application Built on IE 4.0 Computer Breaks IE 3.x
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The newer version of Comcat.dll that does not register properly is installed by
	both Microsoft Internet Explorer 4.x and Microsoft Windows 98. Install custom
	applications that contain the newer file after installing either of these
	products on your development computer will cause the described behavior. You may
	receive the error message when you install your application that contains the
	newer file onto the following target machine configurations:
	
	- Windows 95 without Microsoft Internet Explorer
	
	- Windows 95 with Microsoft Internet Explorer 3.x or earlier
	
	- Windows NT with any version of Internet Explorer
	
	The error occurs any time you install your application on a Windows NT 4.0
	computer because when Internet Explorer 4.0 is installed onto a Windows NT 4.0
	computer, it does not install the updated Comcat.dll file. The updated file is
	used strictly when installing on Windows 95.
	
	
	For more information about other issues involving Office 97 Developer Edition and
	Internet Explorer 4.0, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q179011 ODE: Running Microsoft ODE97 on a Computer with Internet Explorer 4.0
	
	For more information about other issues involving the Office 97 Developer Edition
	and distributing applications, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q160870 ACC: VBA Functions Break in Databases with Missing References
	
	  Q162884 ODE97: Troubleshooting ODE Setup Wizard Problems
	
	Additional query words: pra ie4 can t comcat dll was unable to register itself in the system registry
	
	======================================================================
	Keywords          :  
	Technology        : kbOfficeSearch kbIEsearch kbAudDeveloper kbOffice97Search kbIE95Search kbOffice97 kbZNotKeyword3 kbOffice97DevSearch
	Version           : :; WINDOWS:
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	
