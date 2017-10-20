---
layout: page
title: "Q70039: Passing an Application's Start Up Directory via SETUP.INF"
permalink: /kb/070/Q70039/
---

## Q70039: Passing an Application's Start Up Directory via SETUP.INF

{% raw %}

	Article: Q70039
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses setting up the Microsoft Windows version 3.0 SETUP.INF
	file to pass an application's default start up directory via the SETUP.INF file
	when you run the Windows Setup program, SETUP.EXE.
	
	MORE INFORMATION
	================
	
	If you edit the Windows 3.0 SETUP.INF file, you need to use the following
	procedure to pass a startup directory other than the program's directory if you
	want to add a new program item to a default group. For more information, see
	pages 555-556 of the "Microsoft Windows User's Guide."
	
	1. Confirm that the application is in the DOS PATH.
	
	2. Edit the SETUP.INF with a standard ASCII text editor and locate the group you
	  want to add the new program item to:
	
	  Example
	
	     [Main]
	     "File Manager", WINFILE.EXE
	     "Control Panel", CONTROL.EXE
	     "Print Manager", PRINTMAN.EXE
	     "Clipboard", CLIPBRD.EXE
	     "DOS Prompt", COMMAND.COM, PROGMAN.EXE, 1
	     "Windows Setup", SETUP.EXE
	     "Read Me", "NOTEPAD.EXE README.TXT"
	
	3. Add a new line to this section (the example is Word for Windows):
	
	  "WinWord", C:\DATA\WINWORD, WINWORD.EXE
	
	  Explanation
	
	   - "WinWord" is the icon label.
	
	   - "C:\DATA\" is the startup directory. "WINWORD" is the executable file.
	     Windows automatically adds the .EXE extension.
	
	   - WINWORD.EXE is the location for the icon that represents the program
	     item.
	
	     NOTE: If this is entered as "C:\DATA\WINWORD.EXE", Setup truncates the
	     statement to "WINWORD.EXE" and the startup directory is not specified.
	
	4. Find the section [dontfind] in the SETUP.INF and add a new line:
	
	  WINWORD.EXE
	
	The SETUP.INF file is a comma-delineated text file formatted for 160 columns that
	supplies customized directions to the SETUP.EXE.
	
	The preferred workstation installation method is to install Windows 3.0 on a
	network (see "Microsoft Windows User's Guide," pages 543-556), and then go to
	each workstation and run the SETUP /N command. In large workstation groups, it
	may not be efficient to do this; in this case, customize each workstation
	individually. By editing the SETUP.INF file with a text editor, you can enhance
	the SETUP /N command so that it customizes each workstation to a company
	standard.
	
	REFERENCES
	==========
	
	"Microsoft Windows User's Guide." Version 3.0, "Networks and Windows," pages
	543-556.
	
	Additional query words: 3.00 3.0 3.0a 3.00a win30 kbsetup SETUP.INF, NETWORKS.TXT
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
