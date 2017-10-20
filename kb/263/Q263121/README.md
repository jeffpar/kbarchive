---
layout: page
title: "Q263121: Internet Services Manager MMC Not Added to Windows Start Menu"
permalink: /kb/263/Q263121/
---

## Q263121: Internet Services Manager MMC Not Added to Windows Start Menu

{% raw %}

	Article: Q263121
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 04-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On computers running Windows 2000 Server, if IIS is installed, the Internet
	Services Manager (ISM) is added to the Windows "Administrative Tools" menu.
	However, on computers running Windows 2000 Professional, this menu item is not
	created.
	
	NOTE: The ISM starts the Microsoft Management Console (MMC) with the Internet
	Information Services snap-in loaded. The snap-in file that the ISM opens is
	located in %SystemRoot%\System32\Inetsrv\Iis.msc.
	
	RESOLUTION
	==========
	
	Use one of the following resolutions to start the IIS snap-in:
	
	Resolution 1:
	
	In the Windows Control Panel, open Administrative Tools, and then open Internet
	Services Manager.
	
	Resolution 2:
	
	1. On the Windows desktop, right-click My Computer, and then click Manage.
	
	2. Open Services and Applications.
	
	3. Open Internet Information Services.
	
	Resolution 3:
	
	Create a shortcut to %SystemRoot%\System32\Inetsrv\Iis.msc.
	
	Resolution 4:
	
	1. Click the Start menu, and then click Run.
	
	2. Type "Mmc.exe" (without the quotation marks) and then click OK.
	
	3. In the MMC, click the Console menu, then click "Add/Remove Snap-in".
	
	4. Click Add, and then select the Internet Information Services snap-in.
	
	5. Click Add, click Close, and then click OK to return to the main MMC window.
	
	6. From the Console menu, click Save, and then click Save (using the default
	  file extension of .msc).
	
	7. The next time you need to use the Internet Information Services snap-in, open
	  the .msc file you just saved.
	
	NOTE: You can add additional snap-ins to this .msc file for your convenience.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q262632 PWS Does Not Run on Windows 2000 Professional
	
	Additional query words: iis 5 Personal Web Server Peer Services win2kpro w2kpro akz
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
