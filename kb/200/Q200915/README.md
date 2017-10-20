---
layout: page
title: "Q200915: WD97: ErrMsg: Do You Want to Revert to the Saved &lt;File Name&gt;?"
permalink: /kb/200/Q200915/
---

## Q200915: WD97: ErrMsg: Do You Want to Revert to the Saved &lt;File Name&gt;?

{% raw %}

	Article: Q200915
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta word8 word97
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you open a Word file by double-clicking it in Windows Explorer or by using
	a desktop shortcut, you may receive the following error message:
	
	  Do you want to revert to the saved version of <file name>.doc?
	
	The error message does not appear if you open the file in Word by using the Open
	command on the File menu or the Open button on the Standard toolbar.
	
	
	CAUSE
	=====
	
	The Windows registry information for the Microsoft Word Document registered file
	type is incorrect.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, use any of the following methods.
	
	Method 1: Re-register the Word Program by Running Setup /Y /R
	-------------------------------------------------------------
	
	To run Setup with the /y /r switch, follow these steps:
	
	1. Insert the Word or Office CD into the CD-ROM drive. If you installed Word or
	  Office from disks, insert the Setup Disk 1 in your computer's disk drive.
	
	2. Click Start, and then click Run.
	
	3. In the Open box, type the following:
	
	  "<drive>:\setup /y /r" (without the quotation marks)
	
	  where <drive> is the letter of the drive that contains the CD or Setup
	  Disk 1.
	
	4. Click OK.
	
	5. Click Reinstall.
	
	This re-registers Word (and all Office programs, if you run Office Setup).
	
	For additional information about the Microsoft Office 97 Setup startup switches,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q158503 OFF97: Setup Switches for Microsoft Office 97
	
	Method 2: Install the Latest Update
	-----------------------------------
	
	Although the latest Word 97 (Office 97) update does not contain a fix for this
	problem, the Setup program will correct the problem with the registered file
	types. For additional information about the latest update for Word 97, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q265374 WD97: Post Service Release Fixes for Word 97
	
	Method 3: Use the /Unregserver and /Regserver Startup Switches
	--------------------------------------------------------------
	
	To correct this problem, unregister the Microsoft Word Document file type and
	then re-register it.
	
	Unregister the Microsoft Word Document:
	
	To unregister the Microsoft Word Document file type, follow these steps:
	
	1. Click Start, and then click Run.
	
	2. In the Run dialog box, click Browse.
	
	3. In the Browse dialog box, locate and select the Winword.exe file, and then
	  click Open.
	
	  NOTE: By default, the Winword.exe file is located in the following folder:
	
	  C:\Program Files\Microsoft Office\Office
	
	4. In the Run dialog box, the Open box should now contain the path to the
	  Winword.exe file. Click in the Open box, and move the insertion point to the
	  end of the path statement. After the closing quotation mark, type a space,
	  type "/unregserver" (without the quotation marks), and then click OK.
	
	  The path statement in the Open box should now look similar to the following:
	
	  "C:\Program Files\Microsoft Office\Office\Winword.exe" /unregserver
	
	  The Microsoft Word Document registered file type will be removed from the
	  Microsoft Windows Registry and the "Registered file types" list (in Windows
	  Explorer, click Folder Options on the Tools menu, and then click the File
	  Types tab). No message is displayed during or at the end of this process.
	
	Re-register the Microsoft Word Document:
	
	To re-register the Microsoft Word Document file type, follow these steps:
	
	1. Click Start, and then click Run.
	
	2. In the Run dialog box, click Browse.
	
	3. In the Browse dialog box, locate and select the Winword.exe file, and then
	  click Open.
	
	  NOTE: By default, the Winword.exe file is located in the following folder:
	
	  C:\Program Files\Microsoft Office\Office
	
	4. In the Run dialog box, the Open box should now contain the path to the
	  Winword.exe file. Click in the Open box, and move the insertion point to the
	  end of the path statement. After the closing quotation mark, type a space,
	  type "/regserver" (without the quotation marks), and then click OK.
	
	  The path statement in the Open box should now look similar to the following:
	
	  "C:\Program Files\Microsoft Office\Office\Winword.exe" /regserver
	
	  The Microsoft Word Document registered file type will be added back to the
	  Microsoft Windows Registry and the Registered file types list (in Windows
	  Explorer, click Folder Options on the Tools menu, and then click the File
	  Types tab). No message is displayed during or at the end of this process.
	
	For additional information about the Word startup switches, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q70014 WD: Word for Windows Startup Switches
	
	Method 4: Remove the Microsoft Word Document File Type
	------------------------------------------------------
	
	To remove the Microsoft Word Document registered file type, follow these steps:
	
	1. Quit Microsoft Word, if it is running.
	
	2. Right-click Start, and click to select Explore from the shortcut menu that
	  appears.
	
	3. On the View menu, click Folder Options (Options if you are using Microsoft
	  Windows NT).
	
	4. Click the File Types tab.
	
	5. Select DOC Microsoft Word Document, and then click Remove.
	
	6. Restart Word.
	
	When you restart Word, the program will be re-registered.
	
	NOTE: You may need to restart Windows to update your Word icons.
	
	Method 5: Edit the Registry to Remove the "%1" Parameter
	--------------------------------------------------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To edit the Windows registry, follow these steps:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "regedit", and then click OK.
	
	3. Locate and select the following registry key:
	
	  HKEY_CLASSES_ROOT\Word.Document.8\shell\open\command
	
	  If you find that the (Default) data string looks like this:
	
	  "D:\PROGRAM FILES\MICROSOFT OFFICE\OFFICE\winword.exe" /n "%1"
	
	  you should change the string to look like this:
	
	  "D:\PROGRAM FILES\MICROSOFT OFFICE\OFFICE\Winword.exe" /n
	
	  To change the (Default) data string, follow these steps:
	
	  a. Click to select (Default).
	
	  b. On the Edit menu, click Modify.
	
	  c. In the "Value data" box, delete the "%1" and then click OK.
	
	  d. On the Registry menu, click Exit.
	
	Additional query words: session twice prompt prompted prompts icon
	
	======================================================================
	Keywords          : kbdta word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
