---
layout: page
title: "Q293780: Type-Ahead Disabled in Upgrading to SNA Server 4.0 SP3 or Later"
permalink: kb/293/Q293780/
---

## Q293780: Type-Ahead Disabled in Upgrading to SNA Server 4.0 SP3 or Later

	Article: Q293780
	Product(s): Microsoft SNA Server
	Version(s): 4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbDSupport sna4 kbsna400sp3
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0 SP3, 4.0 SP4 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When utilizing the SNA Server 3270 Applet, the user's keystrokes are ignored
	when the keyboard is in an inhibited state (also known as an "X clock"). Users
	are unable to type keystrokes until the keyboard-inhibited state has been
	cleared.
	
	CAUSE
	=====
	
	During an upgrade of SNA Server to either SNA version 4.0 Service Pack (SP) 3,
	version 4.0 SP4, or Host Integration Server (HIS) 2000, the 3270 Applet creates
	a Win3270.ini. file from the [SnaServerWin3270] section of the Win.ini file. The
	problem occurs if type-ahead is not explicitly defined in the Win.ini file. The
	3270 Applet adds a "typeahead=" setting to the Win3270.ini file, which disables
	the type-ahead feature.
	
	Sample Win3270.ini File
	-----------------------
	
	[SnaServerWin3270]
	AutoConnect=
	LUHostCountry=United States (037)
	LinkType=MS SNA Server
	LUOrPoolName=DEMOPOOL
	TNHostAddr=TESTSNASERVER
	TNHostPort=23
	TNModel=IBM-3278-2-E
	TNDevice=
	FTSHostProgram=
	FTSParams=
	XFRParams=
	WindowLeft=167
	WindowTop=118
	WindowRight=935
	WindowBottom=655
	ShowWindow=1
	WindowMaxX=-1
	WindowMaxY=-1
	ScriptName=Logon.lsc
	AutoLogonScript=
	Typeahead=
	ConfigBufferSize=3643
	
	WORKAROUND
	==========
	
	To work around the problem, edit the Win3270.ini file. Change the blank value of
	the "typeahead=" line to "typeahead=1" or remove the entire "typeahead=" line.
	
	The default locations for the Win3270.ini file are:
	
	SNA Server 4.0, SNA Server 4.0 Service Pack 1, and SNA Server 4.0 Service Pack 2
	
	  Only the settings in the WIN.ini file (which is located in the Windows
	  directory) are used.
	
	SNA Server 4.0 Service Pack 3
	
	  Windows 95/Windows 98 = C:\Windows\Application Data\Microsoft\SNA Server
	  Windows NT = C:\WINNT\Profiles\user name\Application Data\Microsoft\SNA
	  Server
	  Windows 2000 C:\Documents and Setting\user name\Application Data\Microsoft\SNA
	  Server
	
	Host Integration Server 2000
	
	  Windows 95/Windows 98 = C:\Windows\Application Data\Microsoft\Host
	  Integration Server
	  Windows NT = C:\Profiles\<user name>\Application Data\Microsoft\Host
	  Integration Server
	  Windows 2000 C:\Documents and Setting\<user name>\Application
	  Data\Microsoft\Host Integration Server
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 4.0 SP3, SNA Server
	4.0 SP4, and Host Integration Server 2000.
	
	
	MORE INFORMATION
	================
	
	In SNA Server 4.0 SP3 and later, the Applet settings were moved from the Win.ini
	file to the Win3270.ini file (for the 3270 Applet) and Win5250.ini (for the 5250
	Applet) into the user's profile directory. NOTE: By default, type-ahead is
	internally set to "enabled" and is not defined in the Win.ini file.
	
	If Win3270.ini does not exist when the Applet is started, the Applet will read
	any existing settings from Win.ini to create a new Win3270.ini file. If the
	type-ahead setting is not defined in the Win.ini file, the Applet will write a
	"typeahead=" blank parameter into the Win3270.ini file.
	
	If the type-ahead parameter is explicitly defined in Win.ini, this same value is
	correctly added to Win3270.ini.
	
	If the Win.ini file does not have the [SnaServerwin3270] section, the 3270 Applet
	correctly writes a default Win3270.ini file that does not have "typeahead"
	explicitly defined. In this case, type-ahead is enabled and will work
	correctly.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q165851 Support SNA Server 3270 Applet Keyboard Type-Ahead
	
	Additional query words: typeahead, type ahead, type-ahead
	
	======================================================================
	Keywords          : kbDSupport sna4 kbsna400sp3 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400SP3 kbSNAServ400SP4
	Version           : :4.0 SP3,4.0 SP4
	
	=============================================================================
	
