---
layout: page
title: "Q150949: PRB: Setup Wizard Fails to Recognize Disk Drive Selections"
permalink: /kb/150/Q150949/
---

## Q150949: PRB: Setup Wizard Fails to Recognize Disk Drive Selections

{% raw %}

	Article: Q150949
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbsetup kbVBp400 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Combo Boxes for the disk drive selection on Step 3 of the Setup Wizard,
	the drives are either missing or grayed out.
	
	CAUSE
	=====
	
	The Setup Wizard stores the disk drive selection and other setup information in
	the SWDEPEND.INI file. The SWDEPEND.INI file is created for the first time when
	the Setup Wizard is run, or if the file or an entry has been deleted. If the
	file is incorrectly created, altered, or damaged, the Setup Wizard does not
	function properly. The Setup Wizard looks for the entries in SWDEPEND.INI that
	contain the drive information, but cannot find them.
	
	RESOLUTION
	==========
	
	Use the following steps to resolve this problem:
	
	1. Rename SWDEPEND.INI, which is located in the \WINDOWS directory.
	
	2. Use a text editor to open the ...\SETUPKIT\KITFIL32\SWxxTMPL.INI file, where
	  xx is 16 or 32.
	
	  NOTE: If you have installed on a 16-bit operating system, the KITFIL32
	  directory will be called KITFILES.
	
	3. Check for the following lines under the [SetupWiz-xx] section, where xx is 16
	  or 32:
	
	     Drive1=1.2 MB Disk,1213952,512
	     Drive2=1.44 MB Disk,1457664,512
	     Drive3=720 KB Disk,730112,1024
	     Drive4=360 KB Disk,362496,1024
	
	4. If these lines do not exist, the file is corrupt and a fresh copy should be
	  created from the 16-bit edition \VB\setupkit\kitfiles or the 32-bit edition
	  \VB\setupkit\kitfil32 directory on the CD-ROM. If these lines do exist, run
	  the Setup Wizard again to create a new SWDEPEND.INI file.
	
	5. Run the Setup Wizard and note that you can now select the drives.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbVBp400 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
