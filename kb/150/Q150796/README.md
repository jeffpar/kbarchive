---
layout: page
title: "Q150796: 5250 Emulator Displays a Black Screen Then Disconnects"
permalink: kb/150/Q150796/
---

## Q150796: 5250 Emulator Displays a Black Screen Then Disconnects

	Article: Q150796
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On connection activation the 5250 emulator will connect briefly, then
	disconnect. You will receive the AS/400 logon dialogue, but you will never
	receive a signon screen from the AS/400, only a black screen.
	
	CAUSE
	=====
	
	A possible cause of this behavior is the virtual device not having permission to
	enter the application subsystem. A similar problem was seen with the SNA Server
	2.1 5250 applet when you connect to OS/400 V3R1, although in that case the
	client is not disconnected but hangs during logon.
	
	The SNA Server 2.11 and later client resolves that issue.
	
	RESOLUTION
	==========
	
	If no workstation type entries exist, the AS/400 administrator needs to add one.
	The *ALL workstation type will allow any workstation type access to the
	subsystem, but the AS/400 administrator should be consulted before adding this
	entry. Also the AS/400 administrator will need to indicate which subsystem users
	will be accessing.
	
	To add a workstation entry for the type *ALL
	
	ADDWSE SBSD("subsystemname")WRKSTNTYPE(*ALL) e.g. ADDWSE
	SBSD(QINTER)WRKSTNTYPE(*ALL) This will allow all devices to have access to the
	QINTER subsystem.
	
	If there is a workstation name entry, the emulator can be configured with a
	device name that conforms to the entry. For example, if the workstation name
	entry is PCS*, then the emulator should be configured with a device name
	starting with PCS (PCSWRK1). Alternately, by default, the AS/400 will create
	devices based on the local LU name if no device name is specified. To avoid
	configuring all the clients, local LUs should be created that conform to the
	workstation name entry.
	
	NOTE: No changes should made to the AS/400 without consulting the AS/400
	Administrator. This article is not intended as a guide for configuring an
	AS/400.
	
	MORE INFORMATION
	================
	
	The AS/400 subsystems have workstation type entries and workstation name entries
	that indicate what virtual devices have rights to use the subsystem. If this is
	a new install of OS/400, no entries will exist. If this is an existing install
	there may be an entry for only *CONS or for a specific device name, PCS*.
	
	To display the workstation type and name entries
	------------------------------------------------
	
	1. DSPSBSD "subsystemname" e.g. DSPSBSD QINTER
	
	>>>>>>>>>>>>>>>>>>>AS/400 Screen<<<<<<<<<<<<<<<<<<<
	>>                            Display Subsystem Description
	>>                                                           System:
	RAINIER
	>> Subsystem description:   QINTER         Library:   QSYS
	>>Status:   ACTIVE
	>>
	>> Select one of the following:
	>>
	>>      1. Operational attributes
	>>      2. Pool definitions
	>>      3. Autostart job entries
	>>      4. Work station name entries
	>>      5. Work station type entries
	>>      6. Job queue entries
	>>      7. Routing entries
	>>      8. Communications entries
	>>      9. Remote location name entries
	>>     10. Prestart job entries
	>>
	>>
	More...
	>> Selection or command
	>> ===>
	>>
	>> F3=Exit   F4=Prompt   F9=Retrieve   F12=Cancel
	>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<
	
	2. Select 4 for name entries
	
	  >>>>>>>>>>>>>>>>>>>AS/400 Screen<<<<<<<<<<<<<<<<<<<
	  >>              Display Work Station Name Entries
	  >>                                                             System:
	  RAINIER
	  >> Subsystem description:   QINTER         Status:   ACTIVE
	  >>
	  >> Type options, press Enter.
	  >>   5=Display work station name details
	  >>
	  >> Opt  Name           Opt  Name           Opt  Name           Opt  Name
	  >>
	  >>   (No work station name entries)
	  >>
	  >>
	  Bottom
	  >> F3=Exit   F9=Display all detailed descriptions   F12=Cancel
	  >>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<
	
	  This subsystem has no entries for name.
	
	3. Select 5 for type entries
	
	  >>>>>>>>>>>>>>>>>>>AS/400 Screen<<<<<<<<<<<<<<<<<<<
	  >>              Display Work Station Type Entries
	  >>                                                             System:
	  RAINIER
	  >>Subsystem description:   QINTER         Status:   ACTIVE
	  >>
	  >> Type options, press Enter.
	  >>   5=Display work station type details
	  >>
	  >> Opt  Type           Opt  Type           Opt  Type           Opt  Type
	  >>      *CONS
	  >>      *ALL
	  >>
	  >>
	  >>
	  Bottom
	  >> F3=Exit   F9=Display all detailed descriptions   F12=Cancel
	  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<
	
	  This subsystem has two entries for type, *CONS & *ALL
	
	To display all the subsystems
	
	  WRKSBSD *ALL This will present a list of all the subsystems.
	
	Additional query words: hang client prodsna 2.00 2.10 2.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1
	Issue type        : kbprb
	
	=============================================================================
	
