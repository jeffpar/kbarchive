---
layout: page
title: "Q126959: Automap Pro: Installing Automap Destination Europe"
permalink: /kb/126/Q126959/
---

## Q126959: Automap Pro: Installing Automap Destination Europe

{% raw %}

	Article: Q126959
	Product(s): Microsoft Automap
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Automap Destination Europe 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Destination Europe was originally designed for Road Atlas version 3.0 for
	Windows. By modifying the INSTALL.INF you can use it with Automap Pro.
	
	MORE INFORMATION
	================
	
	Automap Pro versions 1.03, 1.06, 1.08, or 1.09 for Windows must be installed on
	the system to install the Destination Europe map add-on to run with Automap
	Pro.
	
	To install Destination Europe:
	
	1. Insert the Destination Europe disk 1 into the A or B drive.
	
	2. Using Notepad open the INSTALL.INF file located on the floppy disk.
	
	3. Delete the following lines in the INSTALL.INF file:
	
	  REQUIRES=AMW.EXE 12=USAUPD.NBZ 16=WINPROG.NBZ 17=WINLANG.NBZ
	
	4. Save the changes to the INSTALL.INF file and exit.
	
	5. From Program Manager, choose Run from the File menu.
	
	6. In the Command Line box, type the following and press ENTER, where x is your
	  floppy disk drive:
	
	  " x:\install " (without the quotation marks)
	
	When the Install utility starts, it prompts you to input the path to the Automap
	Pro files, and copies the program files to the hard drive and prompts you to
	change disks as necessary.
	
	Destination Europe installs approximately 2 MB of information to the hard drive.
	It creates a new subdirectory called EUROPE.MAP in the Automap program
	directory.
	
	Additional query words: kbhowto auto auto-map automap reference
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeMMsearch kbAutomapSearch
	Version           : :
	
	=============================================================================
	

{% endraw %}
