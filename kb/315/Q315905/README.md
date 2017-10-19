---
layout: page
title: "Q315905: INF: Use the RetryConns Parameter to Retry Connection Attempts"
permalink: /kb/315/Q315905/
---

## Q315905: INF: Use the RetryConns Parameter to Retry Connection Attempts

	Article: Q315905
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The RetryConns parameter can be used to allow the 3270 applet or the 3270 client
	(available in SNA Server 4.0 and Host Integration Server 2000 respectively) the
	option to retry unsuccessful connection attempts when the failure is caused by
	conditions defined as temporary. The temporary conditions (as defined in the SNA
	Server 4.0 Resource Guide) include the following:
	
	   - All Logical Units (LUs) in the requested pool are in use at that moment (code
	  0x0057).
	- The requested LU pool is not found in the configuration, which may indicate
	  that the server (through which the client is attempting to connect) is
	  inactive (code 0x0A0E).
	- The requested connection is inactive at that moment (code 0x1002).
	- The host (or controller unit) has not yet responded with an Activate Physical
	  Unit (ACTPU) command (code 0x1010).
	- The host (or controller unit) has not yet responded with an Activate Logical
	  Unit (ACTLU) command (code 0x1011).
	
	NOTE: The codes shown in the preceding bulleted items are from OPEN(SSCP) error
	responses defined in the 3270 Emulator Interface Specifications (EIS) guide,
	included in the SNA Server and Host Integration Server 2000 software developer
	kits (SDKs).
	
	The RetryConns parameter is set to No by default. In addition, note that there is
	not a similar option for the 5250 applet and 5250 client.
	
	MORE INFORMATION
	================
	
	Note the following when you attempt to implement the RetryConns parameter.
	
	NOTE: With SNA 4.0 versions up to Service Pack 2, 3270 applet settings are stored
	in the Win.ini file, found in the %WINDIR% directory (regardless of operating
	system).
	
	With SNA 4.0 versions Service Pack 3 and later, along with Host Integration
	Server 2000, the 3270 applet and 3270 client settings are stored in the
	Win3270.ini file, found in the user profile directories:
	
	  Microsoft Windows 95, Microsoft Windows 98, and Microsoft Windows Millennium
	  Edition (Me):
	
	  <drive>:\WINDOWS\Application Data\Microsoft\SNA Server\win3270.ini
	
	  Microsoft Windows NT 4.0:
	
	  <drive>:\WINNT\Profiles\<user name>\Application Data\Sna
	  Server\win3270.ini
	
	  Microsoft Windows 2000 and later:
	
	  <drive>:\Documents and Settings\<user name>\Application
	  Data\Microsoft\Host Integration Server\win3270.ini
	
	Edit the Win3270.ini file and add the RetryConns=yes parameter, as shown in the
	following sample WIN3270.INI:
	
	  [SnaServerWin3270]
	  AutoConnect=1
	  LUHostCountry=United States (037)
	  LinkType=MS SNA Server
	  LUOrPoolName=3270POOL
	  TNHostAddr=
	  TNHostPort=
	  TNModel=
	  TNDevice=
	  FTSHostProgram=
	  FTSParams=
	  XFRParams=
	  WindowLeft=143
	  WindowTop=180
	  WindowRight=1048
	  WindowBottom=902
	  ShowWindow=1
	  WindowMaxX=-1
	  WindowMaxY=-1
	  ScriptName=Logon.lsc
	  AutoLogonScript=
	  Typeahead=
	  "RetryConns=yes" (without the quotation marks)
	  ConfigBufferSize=3688
	
	When a temporary condition occurs the next time -- for example, "All LUs in the
	requested pool are in use at that moment (code 0x0057)" -- the 3270 applet and
	3270 client will display the following in the status line:
	
	  No LU in LU group free. Retrying...
	
	After an LU becomes available, the session will automatically reconnect.
	
	REFERENCES
	==========
	
	For more information, browse to the following Microsoft Web site:
	
	  http://www.microsoft.com/technet/prodtechnol/host/default.asp?frame=true
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q293780 Type-Ahead Disabled After Upgrade to SNA Server 4.0 SP3, SP4, or HIS
	  2000
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	
