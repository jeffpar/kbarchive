---
layout: page
title: "Q129888: How to Customize the Setup Wizard in Visual Basic Version 4.0"
permalink: /kb/129/Q129888/
---

## Q129888: How to Customize the Setup Wizard in Visual Basic Version 4.0

{% raw %}

	Article: Q129888
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Setup kit for Visual Basic version 4.0 now fills distribution disks
	completely by splitting files across disks. This article explains how to deal
	with some of the issues that may come up when you use the new Setup Wizard in
	Visual Basic version 4.0.
	
	MORE INFORMATION
	================
	
	Making Changes to SETUP1.EXE
	----------------------------
	
	Making changes to the SETUP1.EXE project restricts your ability to use the same
	disk scheme after recompiling the .EXE file. Use the following steps if you want
	to keep the same disk scheme after making changes to an .EXE file:
	
	1. Edit the SWDEPEND.INI file to add a key to the [SETUPWIZ] or [SETUPWIZ-32]
	  section as in this example:
	
	  USES4=RESERVED.DAT.
	
	2. Create a file by the same name (RESERVED.DAT) somewhere in the Windows search
	  path. When the Setup Wizard creates disks, it will always copy RESERVED.DAT
	  to disk 1.
	
	3. Delete RESERVED.DAT after the images are created.
	
	4. Edit the SETUP.LST file on disk 1 to delete the line referring to
	  RESERVED.DAT in the [Bootstrap] section. Then renumber all instances of
	  'FILEX=' that follow that line you just deleted so that the file numbers are
	  contiguous.
	
	Designing an Installation for an Operating System
	-------------------------------------------------
	
	The Setup Wizard for Visual Basic version 4.0 does not allow you to specify the
	target operating system environment. This capability would reduce the number of
	files needed on the distribution disks because many of the files would not be
	necessary if you are creating the project for an environment that already
	carries the supporting files.
	
	Use the following steps to design installation disks for multiple operating
	system environments.
	
	1. Create several SWDEPEND.INI files, one for each targeted distribution
	  environment.
	
	2. Delete the 'USESX=' keys in the [SETUPWIZ] and/or [SETUPWIZ-32] sections and
	  also in the [VB Runtime xxxx] and/or [VB Runtime xxxx-32] sections.
	
	3. Before starting the SetupWizard, copy the desired SWDEPEND.INI file to the
	  Windows directory.
	
	4. Run the Setup Wizard. In Step 5 of Setup Wizard, clear the files you don't
	  need to ship from the selection of files.
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.00
	
	=============================================================================
	

{% endraw %}
