---
layout: page
title: "Q130000: Application Events 2000 &amp; 3001 Appear While Monitoring SFM"
permalink: kb/130/Q130000/
---

## Q130000: Application Events 2000 &amp; 3001 Appear While Monitoring SFM

	Article: Q130000
	Product(s): Microsoft Windows NT
	Version(s): 2000,3.5,3.51,4.0,4.5
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 04-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Datacenter Server 
	- Microsoft Windows 2000 Server 
	- Microsoft BackOffice Small Business Server versions 4.0, 4.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While you are monitoring Services for Macintosh (SFM) in Windows NT Server
	Performance Monitor, the following Application log events appear in Event
	Viewer:
	
	  Event ID: 3001
	  Source: ATKCTRS
	  Type: Error
	  Description: Unable to open ATK for R access. Returning IO
	  Status Block in Data.
	
	  Event ID: 2000
	  Source SFMCTRS
	  Type: Error
	  Description: Unable to open driver containing SFM file server
	  performance data. To view the MacFile counters from PERFMON.EXE,
	  make sure the MacFile service has been started.
	
	CAUSE
	=====
	
	These events indicate a problem with Performance Monitor not being able to
	communicate with the Appletalk Protocol. These events are logged in the
	Application event log while monitoring Appletalk or MacFile Server in
	Performance Monitor when:
	
	- SFM is not installed or started.
	
	- The Appletalk protocol device or File SFM service is stopped.
	
	- You have a bad network interface card (NIC) or network cabling.
	
	- Macintosh seed routing is enabled in SFM with incorrect or conflicting
	  parameters.
	
	MORE INFORMATION
	================
	
	There are two counters that performance monitor contains which allows a user to
	monitor how SFM is behaving on a Windows NT server. In performance monitor, you
	can select MacFile Server and Appletalk. These are represented by the
	SFMCTRS.DLL and ATKCTRS.DLL files respectively.
	
	Occasionally when viewing a event log on a Windows NT Server you may notice
	events that have a source of SFMCTRS or ATKCTRS. If there are a large number of
	events it could be an indication of problems with the SFM on the server.
	
	Additional query words: prodnt perfmon
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000DataServ kbwin2000DataServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTAdvSerSearch kbwin2000ServSearch kbwin2000Search kbWinNTS351search kbWinNTS350search kbAudDeveloper kbSBServSearch kbWinAdvServSearch kbWinDataServSearch kbSBServ400 kbSBServ450
	Version           : :2000,3.5,3.51,4.0,4.5
	
	=============================================================================
	
