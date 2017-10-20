---
layout: page
title: "Q223172: Encarta: Help Topic Appears When You Enable Voice Control"
permalink: /kb/223/Q223172/
---

## Q223172: Encarta: Help Topic Appears When You Enable Voice Control

{% raw %}

	Article: Q223172
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:; :
	Operating System(s): 
	Keyword(s): kbenv kbsound kbui kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Encyclopedia 99 
	- Microsoft Encarta Encyclopedia 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click Voice Control on the Options menu in Encarta Encyclopedia to
	enable the Voice Control feature, the "How to Install Voice Control" Help topic
	may open in a new Help window, even if the Voice Control feature is already
	installed.
	
	CAUSE
	=====
	
	This behavior can occur if the Comctl32.dll file is outdated.
	
	RESOLUTION
	==========
	
	NOTE: DO NOT use either of the following methods if Microsoft Internet Explorer
	5.0 is installed on your computer. If you do, you may not be able to restart
	your computer. Internet Explorer installs its own version of the Comct132.dll
	file during Setup. At this time, there is no resolution to this issue if
	Internet Explorer 5.0 is installed on your computer. To check the version of
	Internet Explorer that is installed on your computer, start Internet Explorer,
	and then click About Internet Explorer on the Help menu.
	
	To resolve this issue, copy the Comctl32.dll file from the Installation and
	Resources CD-ROM to your hard disk. To do this, use the appropriate method for
	your version of Microsoft Windows.
	
	Microsoft Windows 98
	--------------------
	
	1. Insert the Microsoft Windows 98 installation CD-ROM into the CD-ROM drive.
	  Press and hold down the SHIFT key when you insert the CD-ROM to prevent it
	  from starting automatically.
	
	2. Click Start, and then click Run.
	
	3. In the Open box, type "sfc" (without the quotation marks), and then click OK.
	
	4. Click "Extract one file from installation disk".
	
	5. In the "Specify the system file you would like to restore" box, type
	  "comctl32.dll" (without the quotation marks), and then click Start.
	
	6. In the "Restore from" box, type the following line
	
	  <cd-rom>:\win98
	
	  where <cd-rom> is the drive letter of your CD-ROM drive.
	
	7. In the "Save file in" box, type the following line, and then click OK
	
	  <drive>:\windows\system
	
	  where <drive> is the drive letter of the hard disk on which Windows 98
	  is installed.
	
	8. Click OK, and then click OK again.
	
	9. When you are prompted to restart the computer, click Yes.
	
	Microsoft Windows 95
	--------------------
	
	1. Insert the Encarta Installation and Resources CD-ROM into the CD-ROM drive.
	  Press and hold down the SHIFT key when you insert the CD-ROM to prevent it
	  from starting automatically.
	
	2. Click Start, and then click Run.
	
	3. In the Open box, type the following line, and then click OK
	
	  <cd-rom>:\Support\Comctl32
	
	  where <cd-rom> is the drive letter of the CD-ROM drive.
	
	4. Right-click the Comctl32.dll file, and then click Copy.
	
	5. Click Start, and then click Run.
	
	6. In the Open box, type "<drive>:\" (without the quotation marks), and
	  then click OK, where <drive> is the drive letter of the hard disk on
	  which Windows 95 is installed.
	
	7. On the Edit menu, click Paste.
	
	8. Close all open windows, and then restart the computer.
	
	9. When you see the "Starting Windows 95" message, press F8.
	
	10. On the Windows startup menu, select Command Prompt Only, and then press
	  ENTER.
	
	11. At the command prompt, type the following lines, pressing ENTER after you
	  type each line:
	
	  cd \windows\system
	  ren comctl32.dll comctl32.old
	  move <drive>:\comctl32.dll <drive>:\windows\system
	
	  where <drive> is the drive letter of the hard disk on which Windows 95
	  is installed.
	
	12. Press CTRL+ALT+DELETE to restart the computer.
	
	MORE INFORMATION
	================
	
	Microsoft Windows uses the Comctl32.dll file to provide common controls such as
	check boxes, radio buttons, or text boxes for Windows programs.
	
	Additional query words: multi-media multimedia mmtitles ee99 ee2k speech recognition engine extras ie5
	
	======================================================================
	Keywords          : kbenv kbsound kbui kbimu 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc2000 kbEncartaEnCyc1999
	Version           : WINDOWS:; :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
