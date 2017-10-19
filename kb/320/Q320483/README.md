---
layout: page
title: "Q320483: GMT Daylight Savings Time Zone Transition Occurs One Hour Late"
permalink: /kb/320/Q320483/
---

## Q320483: GMT Daylight Savings Time Zone Transition Occurs One Hour Late

	Article: Q320483
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbenv kbtool kbui
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The daylight savings time transition for your Windows NT 4.0-based computer that
	is set to use Greenwich Mean Time (GMT) may occur one hour later than you
	expect. For example, although the transition should occur at 1:00 AM on the last
	Sunday in March, it may occur at 2:00 AM. Although the transition back to
	standard time is scheduled to occur at 2:00 AM on the last Sunday in October, it
	may occur at 3:00 AM.
	
	CAUSE
	=====
	
	This issue may occur if the registry settings for the GMT time zone indicate
	that the time change should take place one hour later than expected.
	
	RESOLUTION
	==========
	
	To modify the default behavior of a time zone in Windows, use either of the
	following methods.
	
	Manually Modify the Default Behavior
	------------------------------------
	
	To modify the time zone manually, use one of the following methods:
	
	- Use the Tzedit.exe utility to adjust the start and end dates for daylight
	  savings time in the time zone.
	
	For additional information about how to use Tzedit.exe, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q158195 Time Zone Editor Available on OEM Service Release 2 CD-ROM
	
	- Create an .inf file to modify the time zone, right-click the file, and then
	  click Install. A sample .inf file entry is listed at the end of this article.
	
	Automatically Modify the Default Behavior
	-----------------------------------------
	
	To automate the deployment of the new time zone settings, create an .inf file to
	modify the time zone, and then use Rundll32.exe to deploy the .inf file. The
	following command is an example of a Rundll32.exe command you might use, where
	<path>\<file_name> is the location and name of the .inf file:
	
	  rundll32 setupapi,InstallHinfSection DefaultInstall 128
	  <path>\<file_name>
	
	Sample .inf File Text for Windows NT
	------------------------------------
	
	  [Version]
	  Signature = "$Windows NT$"
	
	  [DefaultInstall]
	  AddReg = AddReg
	
	  [AddReg]
	  HKLM,"SOFTWARE\Microsoft\Windows NT\CurrentVersion\Time Zones\GMT Standard
	  Time Modified","Display",0x00000002,"(GMT) Greenwich Mean Time (Modified):
	  Dublin, Edinburgh, Lisbon, London"
	  HKLM,"SOFTWARE\Microsoft\Windows NT\CurrentVersion\Time Zones\GMT Standard
	  Time Modified","Dlt",0x00000002,"GMT Daylight Time"
	  HKLM,"SOFTWARE\Microsoft\Windows NT\CurrentVersion\Time Zones\GMT Standard
	  Time Modified","Std",0x00000002,"GMT Standard Time"
	  HKLM,"SOFTWARE\Microsoft\Windows NT\CurrentVersion\Time Zones\GMT Standard
	  Time Modified","MapID",0x00000002,"0,1"
	  HKLM,"SOFTWARE\Microsoft\Windows NT\CurrentVersion\Time Zones\GMT Standard
	  Time Modified","Index",0x00010001,55
	  HKLM,"SOFTWARE\Microsoft\Windows NT\CurrentVersion\Time Zones\GMT Standard
	  Time Modified",
	  "TZI",0x00030001,00,00,00,00,00,00,00,00,c4,ff,ff,ff,00,00,0a,00,00,00,05,
	  00,02,00,00,00,00,00,00,00,00,00,03,00,00,00,05,00,01,00,00,00,00,00,00,00
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool kbui 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Issue type        : kbprb
	
	=============================================================================
	
