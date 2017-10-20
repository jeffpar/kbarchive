---
layout: page
title: "Q94115: PCS Host Terminal Software and Windows for Workgroups"
permalink: /kb/094/Q94115/
---

## Q94115: PCS Host Terminal Software and Windows for Workgroups

{% raw %}

	Article: Q94115
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	The following article contains information on the use of Windows for
	Workgroups with third-party products or configurations that have not
	been tested and are not supported by Microsoft.
	
	If the steps or procedures described in this article do not function
	properly, contact the manufacturer of the third-party product for more
	information or use a supported configuration.
	
	SUMMARY
	=======
	
	PCS is a popular IBM 5250-series host terminal emulation application that runs
	over the Microsoft MS-DLC protocol and IBM's DLC, on MS-DOS and Windows.
	
	To run PCS in a Windows for Workgroups MS-DOS session (that is, a window), you
	need to configure PCS differently than when running PCS in MS-DOS. If you do not
	reconfigure PCS, the system may stop responding (hang) when you run
	STARTPCS.BAT.
	
	MORE INFORMATION
	================
	
	STARTPCS.BAT normally runs these programs in sequence:
	
	1. STARTRTR.EXE -- Starts the router; in LAN Manager terms, it logs you onto the
	  server.
	
	2. STARTFLR.EXE -- Starts a folder; in LAN Manager terms, it starts the
	  redirector.
	
	3. CFGFLR.EXE -- Configures the folder; in LAN Manager terms, it connects drive
	  I to the share point on the AS/400.
	
	4. WSF.EXE -- Starts the 5250 emulator; this is a terminate-and-stay-resident
	  (TSR) program that can switch in or out when you press ALT+ESC.
	
	5. PCSMENU.EXE -- Starts the menu that allows you to remove WSF, CFGFLR, and so
	  on.
	
	To run PCS from Windows for Workgroups, you need to reconfigure PCS so that you
	run STARTPCS.BAT before you start Windows and then run WSF.EXE and PCSMENU.EXE
	in a Windows MS-DOS session. You also need to remap the default WSF ALT+ESC to
	another key, or you can't switch out of the WSF emulator in the MS-DOS session
	(ALT+ESC is the Microsoft Windows task-switch key sequence.)
	
	Reconfiguring PCS
	-----------------
	
	Assuming that PCS works correctly in MS-DOS, you need to do the following to run
	PCS from Windows for Workgroups:
	
	1. Run CFGPCS.EXE.
	
	2. Select General Options.
	
	3. Select Microsoft Windows options.
	
	4. When "Run PC Support with Microsoft Windows" displays, choose Yes. This
	  removes WSF.EXE and PCSMENU.EXE from STARTPCS.BAT.
	
	Remapping the WSF Key Sequence
	------------------------------
	
	Remap the default WSF ALT+ESQ key sequence as follows:
	
	1. Run CFGWSF.EXE.
	
	2. Open a keyboard profile (if none exists, create one).
	
	3. Choose a new key combination as your WSF hot key. For example, if you want to
	  use ALT+N, select the N key, press ENTER, and then type [HOTKEY] in the ALT
	  state entry.
	
	4. Save the profile.
	
	Additional query words: LM 2.10 3.10 crash freeze lockup lock up lanman
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
