---
layout: page
title: "Q236325: How to Obtain and Install Systems Management Server 2.0 SP2"
permalink: /kb/236/Q236325/
---

## Q236325: How to Obtain and Install Systems Management Server 2.0 SP2

	Article: Q236325
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsetup kbConfig kbServer kbsms200 kbUpgrade
	Last Modified: 12-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	NOTE: The latest service pack for Systems Management Server 2.0 is Service Pack 4 (SP4). For additional information about Service Pack 4, click the article number below 
	to view the article in the Microsoft Knowledge Base:
	
	  Q311457 SMS: How to Obtain and Install Systems Management Server 2.0 Service
	  Pack 4
	
	SUMMARY
	=======
	
	IMPORTANT: This service pack is for use with Systems Management Server (SMS)
	version 2.0 only.
	
	The bugs that are fixed by this update are listed in the Readme file that is
	included with the service pack. This list is also available in the following
	article in the Microsoft Knowledge Base:
	
	  Q258682 SMS: List of Bugs Fixed in Systems Management Server 2.0 Service Pack
	  2
	
	Available Formats for SMS 2.0 Service Pack 2 (SP2)
	--------------------------------------------------
	
	The following files are available for download from the following Microsoft Web
	sites:
	
	NOTE: These downloadable files are Web patches only, and are designed to update
	an SMS 2.0 SP1 source.
	
	IMPORTANT: You must have a SP1-applied source directory before you run these
	executable files.
	
	- Sms20sp2i.exe: Components of SP2 for Intel-based computers
	
	- Sms20sp2a.exe: Components of SP2 for Alpha-based computers
	
	These files are also available on the following Microsoft Web site, and to locate
	them:
	
	1. View the following Microsoft Web site:
	
	  http://www.microsoft.com/smsmgmt/
	
	2. Click Downloads.
	
	3. Within the paragraph description at the top of the Web page, click the
	  Download Service Pack link.
	
	Installing SMS 2.0 SP2
	----------------------
	
	To install SMS 2.0 SP2:
	
	1. Copy the contents of the Systems Management Server 2.0 SP1 CD-ROM to a local
	  folder on the hard disk. For this example, the folder is named SMS20SP2. This
	  folder can be created on a local workstation or on your primary site server.
	  If you create the folder on the site server, the folder must not share the
	  same drive as the SMS site installation. The SMS Setup program does not run
	  from the same drive as the site installation.
	
	2. Share the SMS20SP2 folder.
	
	3. Download one of the files that is listed earlier in this article, and then
	  copy it into the new SMS20SP2 folder.
	
	4. Open the SMS20SP2 folder, and then double-click the file you downloaded. For
	  example, if your computer has an Intel-based processor, you would download
	  the Sms20sp2i.exe file, and then double-click that file to start the SMS 2.0
	  SP2 Service Pack Wizard.
	
	The file is unzipped to the %Temp% folder. By default, this is the c:\temp
	folder. A message stating that the unzip was successful is generated, and the
	Service Pack Setup Wizard then starts.
	
	The Service Pack Wizard prompts you to provide the location of the SMS 2.0 SP1
	image. If you have not already created the SMS 2.0 SP1 image on a network drive,
	the wizard can create one for you. If you have already created the SMS 2.0 SP1
	image, select the second option:
	
	"The SMS 2.0 SP1 CD Image is already on a local or network Drive".
	
	Click Browse, and then point to the location of the folder you created in step
	1.
	
	NOTE: The SMS 2.0 SP2 Setup program cannot be run from the same drive where SMS
	2.0 has been installed. The new SP2 source must be created on a different
	drive.
	
	After the wizard finishes, the new SP2 installation source is created. Open the
	new SP2 source folder, and then double-click the Autorun.exe file to start the
	Setup wizard. Follow the instructions on the screen to upgrade your site to SP2.
	
	Additional query words: prodsms servpack sp1 bug fix Smsdistrib smsfaqtop
	
	======================================================================
	Keywords          : kbsetup kbConfig kbServer kbsms200 kbUpgrade 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbhowto
	
	=============================================================================
	
