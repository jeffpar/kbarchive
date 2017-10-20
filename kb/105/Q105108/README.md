---
layout: page
title: "Q105108: PC Win: Modifying the MSMAIL.INI File in Windows NT"
permalink: /kb/105/Q105108/
---

## Q105108: PC Win: Modifying the MSMAIL.INI File in Windows NT

{% raw %}

	Article: Q105108
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows NT, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains where and how to make modifications to version 3.1 of
	Microsoft Windows NT Mail that would normally be available in the MSMAIL.INI
	file:
	
	1. From the File menu, choose Run.
	
	2. Type REGEDT32.EXE and press ENTER.
	
	3. From the Window menu, select HKEY_CURRENT_USER on Local Machine
	
	4. Double-click the Software folder.
	
	5. Double-click the Microsoft folder.
	
	6. Double-click the Mail folder.
	
	7. Double-click the Microsoft Mail folder.
	
	To add a setting to the Microsoft Mail section of the Registry Editor, perform
	the following steps:
	
	1. From the Edit menu, choose Add Value.
	
	2. Type the MSMAIL.INI parameter you want to add as the Value Name option.
	
	3. Click OK. Do not modify anything else in this dialog box.
	
	4. The next dialog box that appears allows you to type the desired parameter.
	
	5. Click OK.
	
	MORE INFORMATION
	================
	
	Microsoft Windows NT Registry Editor (REGEDT32.EXE) is the tool that allows you
	to view and manipulate the Windows NT Registry. This tool holds all the
	configuration information for Windows NT and any installed applications.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3
	Version           : :3.1
	
	=============================================================================
	

{% endraw %}
