---
layout: page
title: "Q173858: To Complete the Install You Need to Re-boot..."
permalink: /kb/173/Q173858/
---

## Q173858: To Complete the Install You Need to Re-boot...

{% raw %}

	Article: Q173858
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.3,2.0,2.5,2.51,2.52,2.6,95
	Operating System(s): 
	Keyword(s): kbsetup kbmsn
	Last Modified: 16-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- the operating system: Microsoft Windows 95 
	- The Microsoft Network versions 1.3, 2.0, 2.5, 2.51, 2.52, 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start MSN, The Microsoft Network, you may receive the following error
	message:
	
	  To complete the install you need to re-boot your computer.
	
	CAUSE
	=====
	
	This behavior can occur if there is a program running that does not allow the
	MSN installation to finish.
	
	RESOLUTION
	==========
	
	To resolve this behavior, use the following steps:
	
	1. Click Start, click Shut Down, click Restart The Computer, and then click Yes.
	  When you see the "Starting Windows 95" message, press the F8 key, and then
	  choose Command Prompt Only from the Startup menu.
	
	  NOTE: If the Windows 95 graphical user interface (GUI) loads, edit the
	  Autoexec.bat file and remove or disable the "win" line.
	
	  Start Windows 95 with a minimal set of Windows drivers by typing the following
	  line:
	
	  "win /d:m" (without the quotation marks)
	
	  NOTE: If networking components are required to start Windows 95, type the
	  following line instead of the line above:
	
	  "win /d:n" (without the quotation marks)
	
	2. Rename the Mcm.dll and Confapi.dll files. To rename these files, follow these
	  steps:
	  a. Click Start, point to Find, and then click Files Or Folders.
	
	  b. In the Named box, type "mcm.dll" (without the quotation marks), and then
	     click Find Now.
	
	  c. In the list of found files, right-click the Mcm.dll file, and then click
	     Rename.
	
	  d. Type "mcm.old" (without the quotation marks), and then press ENTER.
	
	  e. Repeat steps A-D to rename the Confapi.dll file to Confapi.old.
	
	  f. Close the Find dialog box.
	
	3. Reinstall MSN, and then test to determine if the behavior is resolved. If the
	  behavior is resolved, skip the remaining steps. If the behavior is not
	  resolved, continue to the next step.
	
	4. Copy the correct MSN files to the appropriate folders. To do so, follow these
	  steps:
	  a. Click Start, point to Programs, and then click Windows Explorer.
	
	  b. Click the C:\Program Files\The Microsoft Network\Temp\Mosbin folder, and
	     then click Select All on the Edit menu.
	
	  c. On the Edit menu, click Copy.
	
	  d. Click the C:\Program Files\The Microsoft Network folder, and then click
	     Paste on the Edit menu. If you are prompted to overwrite any existing
	     files, click Yes.
	
	  e. Repeat steps B-D to copy the files in the C:\Program Files\The Microsoft
	     Network\Temp\Winhelp folder to the C:\Windows\Help folder.
	
	  f. Repeat steps B-D to copy the files in the C:\Program Files\The Microsoft
	     Network\Temp\Winsys folder to the C:\Windows\System folder.
	
	  g. Close Windows Explorer.
	
	
	Additional query words: 1.20
	
	======================================================================
	Keywords          : kbsetup kbmsn 
	Technology        : kbOSWin95 kbOSWinSearch kbMSNSearch kbMSN200 kbMSN252 kbMSN130 kbMSN251 kbMSN260 kbMSN250
	Version           : WINDOWS:1.3,2.0,2.5,2.51,2.52,2.6,95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
