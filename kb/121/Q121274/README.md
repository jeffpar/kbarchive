---
layout: page
title: "Q121274: Files Used for Remote Access Services (RAS)"
permalink: kb/121/Q121274/
---

## Q121274: Files Used for Remote Access Services (RAS)

	Article: Q121274
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-SEP-1999
	
	3.11
	
	WINDOWS
	
	kbusage kbref kbtool
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you are troubleshooting Remote Access Services (RAS), it may be necessary
	to remove the files that were installed with the setup of the RAS client or the
	point-to-point (PTP) server update. The following listings are provided to aid
	you in removing all RAS files so that a fresh installation can be implemented.
	
	MORE INFORMATION
	================
	
	The files used for the RAS client are listed in the following table. All RAS
	client files listed below have a file date of 11/1/93.
	
	Windows directory           Size        Application name and description
	-----------------           ----        --------------------------------
	
	RASPHONE.EXE              216064        RAS connection application
	RASPHONE.HLP              111821        RAS connection application
	RASSTART.EXE               13312        RAS startup application
	RASMON.EXE                 49152        RAS monitor
	
	Windows\SYSTEM directory    Size        Application name and description
	------------------------    ----        --------------------------------
	
	RASMAC.386                 49209        RAS MAC driver - for RAS client
	RASMAN.DLL                 27136        RAS manager
	RASSAUTH.DLL               24576        RAS server side authentication
	RASSER.DLL                 17920        RAS serial DLL
	RASSRV.DLL                 13324        Remote Access Server
	PAD.INF                     5401        X.25 pad information file
	SWITCH.INF                     3        RAS switch information file
	RASAPI16.DLL               46592        RAS API DLL
	RASCAUTH.DLL               24576        RAS client authentication DLL
	RASCONF.DLL                25600        RAS configuration DLL
	RASMXS.DLL                 38912        RAS modem DLL
	RASFILE.DLL                17408        RAS file I/O DLL
	MODEM.INF                155,811        RAS modem information file
	
	The files used for the RAS Server (PTP) are listed in the following table. All
	the RAS server/client files listed below have a file date of 02/27/94.
	
	Windows Directory           Size        Application name and description
	-----------------           ----        --------------------------------
	
	RASPHONE.EXE              216576        RAS connection application
	RASPHONE.HLP              111821        RAS connection application
	RASSTART.EXE               13312        RAS startup application
	RASMON.EXE                 49152        RAS monitor
	
	Windows\SYSTEM directory    Size        Application name and description
	------------------------    ----        --------------------------------
	<BR/><BR/>
	MODEM.INF                 155811        RAS modem information file
	PAD.INF                     5401        X.25 pad information file
	RASAPI16.DLL               46592        RAS API DLL
	RASCAUTH.DLL               19456        RAS client authentication DLL
	RASCONF.DLL                26112        RAS configuration DLL
	RASEXE.EXE                  5632        RAS core server file
	RASFILE.DLL                17408        RAS file I/O DLL
	RASMAC.386                 27193        RAS MAC driver - for RAS client
	RASMAN.DLL                 27648        RAS manager
	RASMXS.DLL                 38912        RAS modem DLL
	RASSAUTH.DLL               16896        RAS server side authentication
	RASSER.DLL                 18944        RAS serial DLL
	RASSRV.DLL                 12520        Remote Access Server
	SWITCH.INF                     3        RAS switch information file
	
	Additional query words: 3.11 uninstall
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
