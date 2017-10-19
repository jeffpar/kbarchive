---
layout: page
title: "Q322104: Streets and Trips 2002: Program Stops Responding at Startup"
permalink: /kb/322/Q322104/
---

## Q322104: Streets and Trips 2002: Program Stops Responding at Startup

	Article: Q322104
	Product(s): Microsoft Automap
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Streets & Trips 2002, version 1.0 
	- Microsoft MapPoint 2002 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to start Streets & Trips 2002 or MapPoint 2002 for the first
	time, an hourglass appears, and then the program stops responding.
	
	CAUSE
	=====
	
	This behavior can occur when the Riched32.dll file is missing or corrupted.
	
	RESOLUTION
	==========
	
	To resolve this behavior, extract a copy of Riched32.dll from your Microsoft
	Windows CD-ROM. To do this, follow these steps.
	
	NOTE: Because there are several versions of Microsoft Windows, the following
	steps may be different on your computer. If they are, see your product
	documentation to complete these steps.
	
	Locate the Riched32.dll File
	----------------------------
	
	1. Click Start, point to Search, and then click "For Files or Folders".
	
	2. In the Named box, type "riched32.dll" (without the quotation marks), and then
	  click Search Now.
	
	  NOTE: If you do not see Riched32.dll in the list of found files, proceed
	  directly to the next section, "Extract the Riched32.dll File."
	
	  If you do see Riched32.dll in the list of found files, continue to follow
	  these steps.
	
	  The problem should be resolved at this point.
	
	3. In the list of found files, right-click Riched32.dll, and then click Rename.
	
	4. In the box that appears, type "riched32.old" (without the quotation marks),
	  and then press ENTER.
	
	  NOTE: If you receive an error message that states that "access is denied" when
	  you try to rename the Riched32.dll file, follow these steps:
	
	  a. Click Start, and then click Shut Down.
	
	  b. In the Shut Down Windows dialog box, click "Restart in MS-DOS mode", and
	     then click OK.
	
	  c. At the command prompt, type the following commands, pressing ENTER after
	     each command:
	
	  cd\windows\system
	  ren Riched32.dll Riched32.old
	  exit
	
	Extract the Riched32.dll File
	-----------------------------
	
	Follow the steps for your version of Windows.
	
	Microsoft Windows 98:
	
	1. Insert your Windows CD-ROM into your CD-ROM drive.
	
	2. Click Start, and then click Run.
	
	3. Type "sfc" (without the quotation marks), and then press ENTER.
	
	4. Click "Extract one file from installation disk".
	
	5. In the "Specify the system file you would like to restore" box, type
	  "Riched32.dll" (without the quotation marks), and then click Start.
	
	6. In the Extract File dialog box, click Browse next to the "Restore from" box,
	  and then locate your CD-ROM drive.
	
	7. Type "<drive>:\Windows\System" (without the quotation marks) in the
	  "Save file in" box, if it is not already there. <drive> refers to the
	  letter of the drive where your /WINDOWS folder is located, typically C.
	
	8. Click OK.
	
	9. In the Backup File dialog box, click Skip, and then click OK.
	
	Microsoft Windows Millennium Edition:
	
	1. Click Start, and then click Run.
	
	2. Type "msconfig" (without the quotation marks), and then press ENTER.
	
	3. In the System Configuration Utility dialog box, click the General tab, and
	  then click Extract File.
	
	4. In the "Extract one file from installation disk" dialog box, type
	  "Riched32.dll" (without the quotation marks), and then click Start.
	
	5. In the "Restore from" box, type "<drive>:\Windows\options\install"
	  (without the quotation marks) where <drive> refers to the letter of the
	  drive where the \Windows folder is located, typically C.
	
	  NOTE: If the .cab files are not present on your hard disk, insert the Windows
	  Millennium Edition CD, and then type "<drive>:\Win9x" (without the
	  quotation marks), where <drive> refers to the drive letter of you
	  CD-ROM drive, frequently drive D.
	
	6. In the "Save file in" box, type "drive:\Windows\system" (without the
	  quotation marks), and then click OK.
	
	7. In the Backup File dialog box, click Skip.
	
	8. Click OK, and then click OK one more time to close the System Configuration
	  Utility dialog box.
	
	Microsoft Windows 2000:
	
	1. Log on to your computer as an administrator.
	
	2. Click Start, and then click Run.
	
	3. Type "cmd" (without the quotation marks), and then press ENTER.
	
	4. At the command prompt, type the following command, and then press ENTER:
	
	  sfc /scannow
	
	This command invokes the System File Checker, which replaces the missing or
	renamed Riched32.dll file.
	
	Windows XP:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "msconfig" (without the quotation marks), and then
	  press ENTER.
	
	3. In the System Configuration Utility dialog box, click the General tab, and
	  then click Expand File.
	
	4. In the "File to restore" box, type "Riched32.dll" (without the quotation
	  marks).
	
	5. In the "Restore from" box, type "<drive>:\Windows\options\install"
	  (without the quotation marks) where <drive> refers to the letter of the
	  drive where the \Windows folder, typically C.
	
	6. In the "Save file in" box, type "drive:\Windows\system" (without the
	  quotation marks), and then click OK.
	
	7. Follow on-screen instructions to complete the extraction process.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch _IKkbbogus kbExpediaSearch kbMapptSearch kbExpediaStreets2002 kbMapPoint2002
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
