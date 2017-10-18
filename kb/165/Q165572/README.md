---
layout: page
title: "Q165572: 5250 Applet Issues with SNA 3.0"
permalink: kb/165/Q165572/
---

## Q165572: 5250 Applet Issues with SNA 3.0

	Article: Q165572
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	This article only applies to the SNA Server 5250 Applet shipped with SNA
	Server.
	
	1. 5250 Applet Cannot Display DBCS Characters Correctly Which Are Input from
	  Keyboard (Win32)
	
	
	2. 5250 Applet Terminates Trnsdt.dll when It Exits (Win16)
	
	
	3. 5250 Applet Displays Shift-Out Code (All Platforms)
	
	
	4. 5250 Applet Has Fixed Font Name (All Platforms)
	
	
	5. 5250 Applet Should Support Greek and Central European Code Pages (All
	  Platforms)
	
	
	6. 5250 Applet Does Not Support AltGr or Alt-State Input for Foreign Locales
	
	
	SYMPTOMS
	========
	
	1. 5250 Applet Cannot Display DBCS Characters Correctly Which Are Input From
	  Keyboard (Win32)
	
	  SYMPTOMS
	
	  The Win5250.exe program did not display DBCS characters correctly when they
	  were typed on a keyboard. This did not occur if using cut and paste.
	
	  CAUSE
	
	  The Win5250 applet was processing VK_PROCESSKEY code when it receives
	  WM_KEYDOWN message on Win32 platforms.
	
	  RESOLUTION
	
	  The Win5250 applet now ignores VK_PROCESSKEY when it receives WM_KEYDOWN
	  messages.
	
	  STATUS
	
	  An update to SNA Server 3.0 is available to correct this problem.
	
	
	2. 5250 Applet Terminates Trnsdt.dll When It Exits (Win16)
	
	  SYMPTOMS
	
	  When the 5250 Applet exits, it terminates Trsndt.dll even if another module is
	  calling TrnsDt. This problem occurs only in Windows 3.x (16-bit) using the
	  Windows 3.x SNA Server client. It does not occur when using any of the 32-bit
	  clients.
	
	
	  CAUSE
	
	  Win5250.exe issued FreeLibrary API to the same instance twice when it exited.
	
	  STATUS
	
	  An update to SNA Server 3.0 is available to correct this problem.
	
	
	3. 5250 Applet Displays Shift-Out Code (All Platforms)
	
	  SYMPTOMS
	
	  When DBCS data is input from the keyboard, the 5250 Applet displays the
	  shift-out code (0x0e) directly. It should be converted to a space (0x20)
	  character.
	
	  CAUSE
	
	  The Win5250.exe program was displaying the EBCDIC shift-out code incorrectly.
	
	  STATUS
	
	  An update to SNA Server 3.0 is available to correct this problem.
	
	
	4. 5250 Applet Has a Fixed Font Name (All Platforms)
	
	  SYMPTOMS
	
	  The 5250 applet is unable to display Japanese messages on the status bar.
	
	  CAUSE
	
	  The 5250 applet was designed to use a fixed font.
	
	
	  STATUS
	
	  An update to SNA Server 3.0 is available to correct this problem.
	
	
	5. 5250 Applet should support Greek and Central European Code Pages (All
	  Platforms)
	
	  SYMPTOMS
	
	  The Win5250 applet shipped with SNA 3.0 is unable to support Greek Host code
	  pages or Central European code pages.
	
	  RESOLUTION
	
	  The 5250 applet now supports the correct font for different Host Code Page
	  Selection. The following is the corresponding font for Greek, Greek Modern,
	  Czech, and Polish:
	
	  Windows NT 4.0/Windows 95      Windows NT 3.51/Windows 3.x
	  -------------------------      ------------------------------
	
	  Greek Courier New              Courier New Greek
	  (GREEK_CHARSET)                (ANSI_CHARSET/Courg.ttf)
	
	  Greek Modern Courier New       Courier New Greek
	  (GREEK_CHARSET)                (ANSI_CHARSET/Courg.ttf)
	
	  Czech Courier New              Courier New CE
	  (EASTEUROPE_CHARSET)           (ANSI_CHARSET/Cecour.ttf)
	
	  Polish Courier New             Courier New CE
	  (EASTEUROPE_CHARSET)           (ANSI_CHARSET/Cecour.ttf)
	
	  STATUS
	
	  An update to SNA Server 3.0 is available to correct this problem.
	
	
	6. 5250 Applet Does Not Support AltGr Or Alt-State Input For Foreign Locales
	
	  SYMPTOMS
	
	  When running the NT Win5250 applet, the Alt-state and AltGr states were not
	  being processed correctly. This was first noticed when Setup for Polish
	  keyboards.
	
	  Some of what you would see are as follows:
	
	  AltGr - s  shows d instead of d dashed. 
	  AltGr - f  shows nothing (Notepad behaved the same way)
	  AltGr - g  shows nothing
	  AltGr - 1& 2 shows ?~ instead of (v~)
	  AltGr - 1& 6 shows ~ instead of (ogonek and then ~ )
	  AltGr - 7& 0 shows ?` instead of (~`)
	
	  CAUSE
	
	  The Win5250 applet was not checking the HostCodePage configuration.
	
	  STATUS
	
	  An update to SNA Server 3.0 is available to correct this problem.
	
	
	STATUS
	======
	
	Microsoft has confirmed these to be problems in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
