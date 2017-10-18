---
layout: page
title: "Q191339: SMSINST: Corel Perfect Office Generates Registry Key Error"
permalink: kb/191/Q191339/
---

## Q191339: SMSINST: Corel Perfect Office Generates Registry Key Error

	Article: Q191339
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbsmsUtil smsappscripts smsinst smsutil
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 1.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When using Systems Management Server Installer to compile a package to install
	Corel Perfect Office, the following error is generated at compile time:
	
	  You must specify a key to update the registration database
	
	CAUSE
	=====
	
	This error is caused by an invalid registry key addition. Corel Perfect Office
	generates an invalid registry key addition when being repackaged.
	
	WORKAROUND
	==========
	
	To resolve this problem, removing the invalid registry keys. To do this, perform
	the steps below.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	1. Open SMS Installer.
	
	2. Open the SMS Installer script (*.IPF file) that generates this error.
	
	3. On the View menu, click Script Editor to switch to the script editor.
	
	4. Scroll through the script and locate the line that says "Edit <xxx>
	  Registry Keys", where <xxx> is the number of keys that are to be
	  modified.
	
	5. Select the "Edit <xxx> Registry Keys" line. Right-click and then click
	  Copy on the shortcut menu.
	
	6. Open Notepad.exe.
	
	7. On the Edit menu, click Paste. This pastes the registry changes into Notepad.
	
	8. Locate all entries that look similar to the following lines:
	
	        item: Key
	           New Value="*<>|
	           Value Name=PerfectFit Logical Syntax Characters
	           Root=1
	        end
	
	9. After locating each instance, remove all the lines from "item: Key" up to and
	  including the next occurrence of "end".
	
	10. At the top of the text file, locate the lines that look like:
	
	        item: Edit Registry
	        Total Keys=yy (where yy is the number of registry keys to be edited)
	
	11. Decrement the "Total Keys" value (yy) by the number of "item: Key" Sections
	  you removed. In most cases, this number should be decremented by one.
	
	12. On the Edit menu, click Select All.
	
	13. On the Edit menu, click Copy.
	
	14. Switch back to SMS Installer.
	
	15. Select the "Edit <xxx> Registry Keys" script item, right-click, and
	  then click Paste on the shortcut menu. NOTE: This adds a second instance of
	  "Edit <xxx> Registry Keys".
	
	16. Delete the older (original) line by selecting it and pressing the DELETE
	  key.
	
	  NOTE: You should now have only one instance of "Edit <xxx> Registry
	  Keys".
	
	17. On the View menu, click Installation Expert.
	
	18. Click Compile. The script should now compile without generating the error.
	
	
	STATUS
	======
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: wordperfect word corell correll correl prodsms
	
	======================================================================
	Keywords          : kbsmsUtil smsappscripts smsinst smsutil 
	Technology        : kbSMSSearch kbSMSI100
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
