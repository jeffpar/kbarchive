---
layout: page
title: "Q262508: BUG: Default Favorites &amp; Shortcuts in Link Folder Not Installed"
permalink: /kb/262/Q262508/
---

## Q262508: BUG: Default Favorites &amp; Shortcuts in Link Folder Not Installed

	Article: Q262508
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbOSWin2000bug kbOPK kbDSupport kbGrpDSOPK kbPreInstall
	Last Modified: 28-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you add custom favorites under the [FavoritesEx] section of the
	Unattend.txt file, after an OEM preinstall the default favorites and the
	shortcuts in the Links folder are not installed.
	
	RESOLUTION
	==========
	
	To work around this problem, add the following links under the [FavoritesEx] and
	[URL] section of the Unattend.txt file along with your custom links:
	
	  [FavoritesEx]
	
	  Title1="MSN.url"
	  URL1="http://www.msn.com/"
	
	  Title2="Radio Station Guide.url"
	  URL2="http://windowsmedia.com/radio/Radio5.asp"
	
	  Title3="Web Events.url"
	  URL3="http://windowsmedia.com/default.asp"
	
	  [URL]
	
	  Quick_Link_1_Name="Customize Links"
	  Quick_Link_1="http://www.microsoft.com/windows2000/techenthusiast/tricks/default.asp"
	
	  Quick_Link_2_Name="Free Hotmail"
	  Quick_Link_2="http://lc4.law5.hotmail.passport.com/cgi-bin/login"
	
	  Quick_Link_3_Name="Windows"
	  Quick_Link_3="http://www.microsoft.com/windows/default.asp"
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words: kbsetup kbOPK kbDSupport kbSBK favorites unattend
	
	======================================================================
	Keywords          : kbOSWin2000bug kbOPK kbDSupport kbGrpDSOPK kbPreInstall 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
