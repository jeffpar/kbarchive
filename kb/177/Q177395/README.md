---
layout: page
title: "Q177395: FILE: Vfpmsuwz.hqx: New Setup Wizard/Visual FoxPro Using OS 8"
permalink: kb/177/Q177395/
---

## Q177395: FILE: Vfpmsuwz.hqx: New Setup Wizard/Visual FoxPro Using OS 8

	Article: Q177395
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): kbfile kbHWMAC kbvfp kbvfp300b
	Last Modified: 24-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There is a new Setup Wizard for Visual FoxPro for Macintosh that runs under OS
	8.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  FoxTools.hqx
	  (http://download.microsoft.com/download/fox26mac/Update/1/MacOS/EN-US/FoxTools.hqx)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	MORE INFORMATION
	================
	
	Instructions on Using the File
	------------------------------
	
	After extracting the Wzsetup.app from the .hqx file, place Wzsetup.app in the
	Wizards folder where Visual FoxPro is installed. In Visual FoxPro, run the Setup
	Wizard. The new Wzsetup.app should be 854,747 bytes in size. The original
	Wzsetup.app was 713,472 bytes. Wzsetup.app and the Readme.txt file are the only
	files in the .hqx file.
	
	Background
	----------
	
	When Apple released OS 8, the functionality of AppleScript changed in various
	ways. Microsoft was unaware of the changes that were going to be made to
	AppleScript in OS 8 when Visual FoxPro was released. The Visual FoxPro for
	Macintosh Setup Wizard uses AppleScript to copy files and communicate with the
	FoxPro Disk Layout Tool. The AppleScript commands in the new Setup Wizard were
	modified to be compatible with OS 8. The new Setup Wizard also runs properly in
	System software versions prior to OS 8.
	
	For more information on changes in AppleScript in OS 8 contact Apple Computer.
	
	Known Features and Issues with the New Setup Wizard
	---------------------------------------------------
	
	The new Setup Wizard automatically includes the Foxtools.cfm and Foxtools.slm
	files on the distribution disks. The files will be installed with the
	application when it is installed. Since the FoxTools files are automatically
	installed, you need to obtain updated copies of the files.
	
	REFERENCES
	==========
	
	For information on downloading the updated FoxTools files please see the
	following article in the Microsoft Knowledge Base:
	
	  Q163470 PATCH: Foxtools.hqx Upgrade to Prevent Setup Wizard Errors
	
	Microsoft has not fixed any of the problems that were in the original Setup
	Wizard. If the new Setup Wizard is not working properly, please check the
	Knowledge Base articles referenced below.
	
	For additional information on known problems or common mistakes using the Setup
	Wizard, please see the following articles in the Microsoft Knowledge Base:
	
	  Q113171 PRB: Setup Wizard: Folder Is Empty or Folder Does Not Exist
	
	  Q119638 ERR: Unexpected Error; File Too Large to Compress...
	
	  Q133449 ESL File Not Automatically Included w/ Visual FoxPro EXE
	
	  Q154449 BUG: Error #202 In Makestf when Running VFP/Mac Setup Wizard
	
	  Q154709 BUG: Setup Wizard Grid Hangs VFP When KEYCOMP Not Macintosh
	
	  Q155090 BUG: Setup Wizard Doesn't Have Netsetup Distribution Option
	
	  Q155890 PRB: FoxPro for Mac's Setup Wizard Can't Copy Source Files
	
	  Q159786 BUG: Setup Wizard Cannot Locate Files on Non-English Mac OS
	
	  Q162000 BUG: Visual FoxPro/Mac Setup Wizard Cannot Copy Source Files
	
	  Q163470 FILE: Setup Wizard Hangs with Type 11 Error
	
	Additional query words: SETUP WIZARD
	
	======================================================================
	Keywords          : kbfile kbHWMAC kbvfp kbvfp300b 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	Issue type        : kbinfo
	
	=============================================================================
	
