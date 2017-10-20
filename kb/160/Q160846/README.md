---
layout: page
title: "Q160846: &quot;Illegal Operation&quot; Error Message Changing Desktop Themes"
permalink: /kb/160/Q160846/
---

## Q160846: &quot;Illegal Operation&quot; Error Message Changing Desktop Themes

{% raw %}

	Article: Q160846
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kberrmsg win95 kbgraphxlinkcritical
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you change to a desktop theme that uses a .jpg file for the wall- paper,
	you may receive the following error message:
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	CAUSE
	=====
	
	A graphic filter for .jpg files has been updated by another program.
	
	
	RESOLUTION
	==========
	
	Microsoft has released a new version of the Themes.exe file (version 4.40.311).
	Replace the Themes.exe file in the C:\Program Files\Plus! folder with this new
	version.
	
	The following file is available for download from the Microsoft Download Center:
	
	  Download Themes.exe now
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	NOTE: The new version of the Themes.exe file is also included on the Microsoft
	Office 97 CD-ROM in the following location
	
	  <drive>:\Valupack\Patch
	
	where <drive> is the drive letter of your CD-ROM drive.
	
	NOTE: Microsoft Plus! for Kids installs version 3.0 of the JPEG filter and the
	updated Themes.exe file. If you reinstall Microsoft Plus!, you can overwrite the
	updated Themes.exe file and the issue can occur.
	
	NOTE: The new version of the Themes.exe file is also included on the Microsoft
	FrontPage 98 CD-ROM in the following location
	
	  <drive>:\Patch\Themes
	
	where <drive> is the drive letter of your CD-ROM drive.
	
	MORE INFORMATION
	================
	
	The updated Themes.exe file supports the new compression used for .jpg files.
	
	Programs known to update graphics filters include Microsoft Office 97, Microsoft
	Picture It! version 1.0, Microsoft FrontPage 97, Microsoft Internet Explorer
	version 4.0, and Microsoft Internet Explorer version 4.01.
	
	
	For additional information about this problem, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q156312 OFF97: Page Fault After Using Desktop Themes Control Panel
	
	
	Additional query words: w95use
	
	======================================================================
	Keywords          : kberrmsg win95 kbgraphxlinkcritical 
	Technology        : kbGamesSearch kbPlusSearch kbPlus95
	Version           : WINDOWS:95
	
	=============================================================================
	

{% endraw %}
