---
layout: page
title: "Q258846: 9-Digit Dialing Required in Belgium After July 1, 2000"
permalink: /kb/258/Q258846/
---

## Q258846: 9-Digit Dialing Required in Belgium After July 1, 2000

{% raw %}

	Article: Q258846
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kbenv osr2 win95 win98 win98se
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	Starting July 1, 2000, phone dialing in Belgium will require a full 9-digit
	dialing string.
	
	For more information about this new dialing rule, please consult the Belgian
	Postal Services and Telecommunications regulator (BIPT) Web site:
	
	  http://www.bipt.be
	
	Microsoft provides third-party contact information to help you find technical
	support. This contact information may change without notice. Microsoft does not
	guarantee the accuracy of this third-party contact information.
	
	This article describes how to configure Windows 95, Windows 98, Windows NT 4.0,
	and Windows 2000 to reflect this change.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Windows 98, Windows NT 4.0, Windows 2000
	----------------------------------------
	
	To automatically update your computer, download the package that is available on
	the Microsoft Benelux Web site:
	
	  http://www.microsoft.com/netherlands/default.asp
	
	To manually update your computer:
	
	1. Start Registry Editor.
	
	2. Locate the following key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Telephony\Country
	  List\32
	
	3. Change the data for the SameAreaRule (REG_SZ) value from "G" to "0FG".
	
	4. Shut down and restart your computer.
	
	Windows 95
	----------
	
	To update your computer:
	
	1. Use a text editor (such as Notepad) to open the Telephon.ini file in the
	  Windows folder.
	
	2. Add the following line to the [CountryOverrides] section:
	
	  Country32=32,33,"Belgium","0FG","0FG","00EFG"
	
	NOTE: If you are using a non-English version of Windows, replace "Belgium" with
	the appropriate localized string.
	
	3. Save and then close the file.
	
	4. Shut down and restart your computer.
	
	REFERENCES
	==========
	
	For additional information about the telephone registry entries and the
	Telephon.ini file, click the article numbers below to view the articles in the
	Microsoft Knowledge Base:
	
	  Q142328 Windows 95 - How to Change International Dialing Access Codes
	
	  Q120221 How to Rebuild the Telephon.ini File
	
	  Q231769 Unable to Dial Alternate Provider Numbers in France
	
	  Q180408 Country Does Not Appear in Telephony Country Code List
	
	
	Additional query words: fulldialing nine
	
	======================================================================
	Keywords          : kbenv osr2 win95 win98 win98se 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWin95search kbWin98search kbWin98SEsearch kbWinAdvServSearch kbZNotKeyword3 kbWin98 kbWin98SE
	Version           : :2000,4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
