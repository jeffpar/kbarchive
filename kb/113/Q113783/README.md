---
layout: page
title: "Q113783: Ndkwiz.exe Contains Latest Version of Dksetup.prg"
permalink: /kb/113/Q113783/
---

## Q113783: Ndkwiz.exe Contains Latest Version of Dksetup.prg

{% raw %}

	Article: Q113783
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.6
	Operating System(s): 
	Keyword(s): kbfile kbsetup kbwizard kbDSupport
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Windows, version 2.6 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Ndkwiz.exe is a patch that corrects several incorrect references to files that
	no long exist in the Dksetup.prg.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Ndkwiz.exe
	  (http://download.microsoft.com/download/fox26win/Update/1/W9X/EN-US/Ndkwiz.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Ndkwiz.exe is a self-extracting file that contains the following:
	
	  Dksetup.prg - the revised Distribution Kit Setup Wizard program
	  Required.dbf - a table used by the Setup program
	  Readme.txt - the text of this article
	
	Once you have obtained Ndkwiz.exe, type "ndkwiz" (without the quotation marks) at
	the MS-DOS prompt to extract the files listed above from the Ndkwiz.exe file.
	Copy the Dksetup.prg and Required.dbf files to the DKWIZARD subdirectory (in
	your FoxPro for Windows directory), then rebuild the Setup.pjx project.
	
	NOTE: This file is not necessary if you are using the Setup Wizard (Setup.app)
	included with the Distribution Kit. You need this updated file only if you want
	to modify the Setup Wizard and create a new application.
	
	The Dksetup.prg file is one of the program files used to create Setup.app, the
	Setup Wizard used to create Setup disks for applications created with the FoxPro
	for Windows Distribution Kit.
	
	Several references to old files exist in this file, including:
	
	  #DEFINE c_eslfile     "Foxw250b.esl"
	  #DEFINE c_oldesl      "Foxw2500.esl"
	  #DEFINE c_oldesl1     "Foxw250a.esl"
	
	If the Dksetup.prg file is used to create a new Setup.app application, the
	following error message will appear when the Setup Wizard begins to build
	disks:
	
	  FoxPro Setup Wizard Error
	
	Foxw250b.esl is not among the files to ship with your application. It must be on
	the destination machine in order to run your application.
	
	This problem will only affect users who build a new Setup.app file using the
	Dksetup.prg file. If the Setup.app file that ships with the Distribution Kit is
	used, this problem will not occur.
	
	Additional query words: Ndkwiz FoxWin setupwizard DK S14705 softlib cannot locate
	
	======================================================================
	Keywords          : kbfile kbsetup kbwizard kbDSupport 
	Technology        : kbAudDeveloper kbFoxproSearch kbFoxPro260
	Version           : WINDOWS:2.6
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
