---
layout: page
title: "Q158414: &quot;&quot;Program Files&#92;Personal Web Server&quot;&quot; Folder Not Removed"
permalink: /kb/158/Q158414/
---

## Q158414: &quot;&quot;Program Files&#92;Personal Web Server&quot;&quot; Folder Not Removed

{% raw %}

	Article: Q158414
	Product(s): Internet Information Server
	Version(s): WINDOWS:1.0,1.0a,95
	Operating System(s): 
	Keyword(s): kbenv kbsetup mspwsw95 win95
	Last Modified: 05-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Personal Web Server versions 1.0, 1.0a for Windows 95 
	- the operating system: Microsoft Windows 95, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Microsoft Personal Web Server version 1.0 for Windows 95 in
	Windows 95 OEM Service Release 2 (OSR2) by adding the appropriate network
	service, ""Program Files\Personal Web Server"" and "Webshare" folders are
	created. However, when you install Personal Web Server in OSR2 from an online
	service (such as the Microsoft http://www.microsoft.com/ie/ Web site), a
	"Program Files\Websvr" folder is created instead of a ""Program Files\Personal
	Web Server"" folder.
	
	In addition, if you install Personal Web Server by adding the appropriate network
	service and then install it from an online service, the Program Files\Personal
	Web Server folder may remain on your hard disk even though it is not being used
	by Personal Web Server.
	
	CAUSE
	=====
	
	The "Program Files\Personal Web Server" folder was changed to Program
	Files\Websvr in the version of Personal Web Server currently available on online
	services to prevent problems that might occur when you attempt to use Universal
	Resource Locator (URL) addresses that contain long folder names. The "Program
	Files\Personal Web Server" folder is not removed when you install Personal Web
	Server from an online service to prevent removing any data files that you
	created after you originally installed Personal Web Server.
	
	RESOLUTION
	==========
	
	If the "Program Files\Personal Web Server" folder remains on your hard disk
	after you install Personal Web Server from an online service, the existence of
	the folder should not cause any problems. If you want to delete the folder to
	create more free space on your hard disk, you should manually move any data
	files that you created after you originally installed Personal Web Server from
	the "Program Files\Personal Web Server" folder to the Program Files\Websvr
	before you delete the folder.
	
	NOTE: The files and folders in the "Program Files\Personal Web Server" folder
	that were created by Personal Web Server when you originally installed it do not
	need to be manually moved to the Program Files\Websvr folder.
	
	MORE INFORMATION
	================
	
	To determine which version of Personal Web Server is currently installed, use My
	Computer or Windows Explorer to locate the Inetsw95.exe file, right- click the
	file, click Properties on the menu that appears, and then click the Version tab.
	If the File Version line indicates that the file is version 4.70.1055, the
	version of Personal Web Server included with OSR2 is installed. If the File
	Version line indicates that the file is version 4.70.1181, the version of
	Personal Web Server available on online services is installed.
	
	NOTE: If you installed Personal Web Server by adding the appropriate network
	service and then installed it from an online service, you may have two
	Inetsw95.exe files on your computer. If one of the files is version 4.70.1181,
	the version of Personal Web Server available on online services is installed.
	
	Additional query words: 1.0 1.0a 95
	
	======================================================================
	Keywords          : kbenv kbsetup mspwsw95 win95 
	Technology        : kbOSWin95 kbOSWinSearch kbPersWebServSearch kbZNotKeyword3 kbPersWebServ100Win95 kbPersWebServ100aWin95
	Version           : WINDOWS:1.0,1.0a,95
	
	=============================================================================
	

{% endraw %}
