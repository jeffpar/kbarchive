---
layout: page
title: "Q158897: PWS Pages Should Normally Be Stored in the Home Root Folder"
permalink: /kb/158/Q158897/
---

## Q158897: PWS Pages Should Normally Be Stored in the Home Root Folder

{% raw %}

	Article: Q158897
	Product(s): Internet Information Server
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): mspwsw95
	Last Modified: 15-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Personal Web Server versions 1.0, 1.0a for Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The default home root folder for the HyperText Transfer Protocol (HTTP) service
	in Microsoft Personal Web Server version 1.0 for Windows 95 is the
	Webshare\Wwwroot folder. Although you can place Web pages that you want people
	to be able to access into other folders, placing Web pages into the home root
	folder makes them easier for people to access.
	
	MORE INFORMATION
	================
	
	Placing Web pages into the home root folder makes them easier for people to
	access because you do not have to specify a folder name when using an Internet
	address to access Web pages in the home root folder. In addition, the home root
	folder is shared by default. If you place Web pages into another folder, you
	need to manually share this folder to allow people to access the Web pages
	inside the folder.
	
	You can find more information about how to share resources in Windows 95 using
	online Help. To do so, use the following steps:
	
	1. Click Start, and then click Help.
	
	2. On the Index tab, in the "Type the first few letters of the word you're
	  looking for" box, type "sharing" (without the quotation marks), and then
	  click Display.
	
	3. In the Topics Found dialog box, click the appropriate topic, and then click
	  Display.
	
	If you want to store the majority of your Web pages in a folder other than the
	Webshare\Wwwroot folder, you may want to make the other folder the home root
	folder for the HTTP service. To do so, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Personal Web Server.
	
	3. Click the Administration tab, click Administration, and then click WWW
	  Administration.
	
	4. Click the Directories tab, and then click Edit on the line for the current
	  home root folder.
	
	5. In the Directory box, type the full path to the folder that you want to make
	  the home root folder, and then click OK. You can also click Browse to locate
	  this folder instead of typing the path to the folder manually.
	
	NOTE: The alias for the home root folder should not be changed. Doing so can
	cause problems that may require you to reinstall Personal Web Server.
	
	Additional query words: 1.00 1.00a
	
	======================================================================
	Keywords          : mspwsw95 
	Technology        : kbPersWebServSearch kbZNotKeyword3 kbPersWebServ100Win95 kbPersWebServ100aWin95
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	

{% endraw %}
