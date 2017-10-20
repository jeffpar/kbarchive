---
layout: page
title: "Q153201: PRB: Error Installing Distributed Application from CD-ROM"
permalink: /kb/153/Q153201/
---

## Q153201: PRB: Error Installing Distributed Application from CD-ROM

{% raw %}

	Article: Q153201
	Product(s): Microsoft FoxPro
	Version(s): 3.00 3.00b
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 14-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	WARNING: The information in this article has not been confirmed or tested
	by Microsoft. Some or all of the information in this article has been taken
	from unconfirmed customer reports. ANY USE BY YOU OF THE INFORMATION
	PROVIDED IN THIS ARTICLE IS AT YOUR OWN RISK. Microsoft provides this
	information "as is" without warranty of any kind, either expressed or
	implied, including but not limited to the implied warranties of
	merchantability and/or fitness for a particular purpose.
	
	SYMPTOMS
	========
	
	When attempting to install a Visual FoxPro executable from a CD-ROM setup disk
	created with the Setup Wizard, the following error may appear:
	
	  Insert CD-ROM Disk Labeled:
	  'Disk1'
	  Into Drive X:
	
	"Drive X:" is the drive designation of the CD-ROM drive. However, the CD-ROM
	drive contains the CD-ROM disk, causing the setup program to stop.
	
	CAUSE
	=====
	
	The Netsetup directory that holds the compressed files exists under another
	subdirectory on the hard drive. When the Setup program attempts to decompress
	the files from the CD-ROM, it cannot locate the original directory structure
	that existed when the Netsetup directory was created on the hard drive.
	
	WORKAROUND
	==========
	
	While the Visual FoxPro Setup Wizard was not created with the intention of
	making CD-ROM distribution disks, this error message can usually be corrected.
	
	Here are two workarounds:
	
	- Implement the solution described in the article referenced in the REFERENCES
	  section and change a line of code in the Setup.inf file located in the
	  destination folder created with the Setup wizard.
	
	  Open the Setup.inf file using any text editor and place a period between the
	  last set of quotes in the following line of code:
	
	        "1","Disk 1","ACMSET16.EX_","."
	
	  -or-
	
	- Create the Netsetup directory making sure it is located off the root
	  directory of the hard drive. In the third screen of the Setup Wizard, Step
	  Three-Disk Images, select the root directory of the hard drive in the Disk
	  Images Directory text box.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a project file containing a program file with a WAIT WINDOW command.
	
	2. Build an executable from this project.
	
	3. Start the Setup Wizard, build a network distributable, and save it in a
	  directory under the Visual FoxPro directory.
	
	4. Create a CD-ROM setup disk from the contents of the Netsetup directory.
	
	5. Attempt to install the application from the CD-ROM and note that the error
	  results.
	
	REFERENCES
	==========
	
	For more information about creating a CD-ROM distribution disk, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152395 How to Use Setup Wizard to Distribute VFP App on CD-ROM
	
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : 3.00 3.00b
	
	=============================================================================
	

{% endraw %}
