---
layout: page
title: "Q66083: WIN.COM Ignores Command Line Parameters After File Name"
permalink: /kb/066/Q66083/
---

## Q66083: WIN.COM Ignores Command Line Parameters After File Name

{% raw %}

	Article: Q66083
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows version 3.0 can use a number of start-up parameters from the
	MS-DOS prompt. If the Windows 3.0 WIN.COM file cannot recognize a parameter,
	Windows assumes it is a filename and tries to run that file. The only parameters
	recognized by WIN.COM are /2, /3, /S, /E, /L, /N, and /R. If the parameter is
	not a valid filename, Windows generates the following message box:
	
	  Cannot find file. Check to ensure that the path and file name are correct.
	
	MORE INFORMATION
	================
	
	Using "WIN <application name>" (without the quotation marks) allows you to
	run an application after starting Windows. However, you can only run one
	application this way; all parameters after the first filename are passed down to
	the application as an associated file to load (such as a text or document file).
	The following examples demonstrate how Windows uses parameters when starting:
	
	- Type "WIN NOTEPAD" (without the quotation marks) to bring up Windows with one
	  Notepad open to the file NOTEPAD.TXT.
	
	- Type "WIN NOTEPAD NOTEPAD NOTEPAD" (without the quotation marks) to bring up
	  Windows with one Notepad. In this case, NOTEPAD.EXE tries to open the file
	  "NOTEPAD NOTEPAD.TXT," which is an invalid filename that generates the above
	  error message.
	
	- Type "WIN NOTEPAD /R" (without the quotation marks) to bring up Windows with
	  Notepad open. NOTEPAD.EXE attempts to open "/R.TXT," causing an error.
	
	- Type "WIN /R NOTEPAD" (without the quotation marks) to bring up Windows in
	  real mode with Notepad open.
	
	- Type "WIN /Q /R" (without the quotation marks) to bring up Windows and the
	  "Cannot find file" message box. This is because "/Q" is not a valid command
	  line parameter for WIN.COM. Windows assumes that "/Q" is the name of an
	  application you want to run, and looks for "/Q.EXE". Because "/Q.EXE" is not
	  a valid filename, it cannot be found, and Windows returns an error message.
	  The /R parameter is discarded because it is assumed to be a parameter to the
	  (nonexistent) "/Q.EXE".
	
	REFERENCES
	==========
	
	"Microsoft Windows User's Guide," Version 3.00, Pages 427-432.
	
	Additional query words: 3.00 3.0 3.0a 3.00a win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
