---
layout: page
title: "Q268171: TN3270 Application May Process a Screen of Host Data Twice"
permalink: /kb/268/Q268171/
---

## Q268171: TN3270 Application May Process a Screen of Host Data Twice

	Article: Q268171
	Product(s): Microsoft SNA Server
	Version(s): 3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	A TN3270 client application may process a screen of host data twice when the
	data is followed by a 3270 Write (X'F1') command and WCC (Write Control
	Character) from the TN3270 server.
	
	MORE INFORMATION
	================
	
	The TN3270 server has been updated in SNA Server 3.0 Service Pack 3 (SP3) to
	modify the Keyboard Unlock bit (Bit 6) in the WCC to correct this problem.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q175384 TN3270 Client Hangs with Keyboard Locked on Some Host Screens
	
	The TN3270 keyboard unlock handling has also been enhanced to resolve a number of
	reported bracket race conditions. The TN3270 server determines what to do with a
	keyboard unlock bit for Request Units (RUs) that start with a 3270 Write,
	Erase\Write, or Erase\Write Alternate command based on the settings of the End
	Bracket Indicator (EBI), Change Direction Indicator (CDI) and End Chain
	Indicator (ECI) flags in the Request Header (RH).
	
	The TN3270 server first checks to determine if either the EBI flag or CDI flag is
	set. If so, the keyboard restore bit is set to 1 before the data is sent to the
	TN3270 application, which unlocks the keyboard.
	
	If the EBI flag or the CDI flag is not set, then the TN3270 server checks to
	determine if the ECI flag is set. If the ECI flag is set, the keyboard restore
	bit is set to 0 before the data is sent to the TN3270 application, which locks
	the keyboard.
	
	When the TN3270 server receives a null RU that has the ECI flag set and either
	the EBI flag set or the CDI flag set, the TN3270 server sends a 3270 Write
	command with a WCC of X'C2' to the client. If this is not done, the keyboard
	stays locked because it was locked from the previous screen data, based on the
	keyboard unlock handling scenarios described previously. A real 3270 emulator
	(non-TN3270) does not require this, because it receives the RH and unlocks the
	keyboard when it receives an EB even if the WCC indicates that the keyboard
	should be locked. The TN3270 or TN3270E RFCs do not allow for the passing of the
	RH to a TN3270 client.
	
	The receipt of a 3270 Write command (and WCC) with no additional data may cause
	an application to process the previous screen of data that it received because
	the null Write command does not change the presentation space of the screen
	buffer that contains the data being received from the host. The application may
	then read and process the data that it had previously received, which causes the
	data to be processed twice. The following code example demonstrates this
	problem:
	
	  TN3270 Client         TN3270 Server               Host
	
	  Data (BB CD)     ->          
	                        Data (BB CD)          ->         
	                                              <-    Screen 1 (KB Unlocked)
	                   <-   Screen 1 (KB Locked)        
	                                              <-    Null RU (EB)
	                   <-   "Write" (KB Unlocked)
	  F8 (BB CD)       ->
	                        F8 (BB CD)            ->
	                                              <-    Null RU (EB)
	                   <-   "Write" (KB Unlocked)
	                                              <-    BID
	                        BID + RSP             ->
	                                              <-    Screen 2 (KB Unlocked)
	                   <-   Screen 2 (KB Locked)
	                                              <-    Null RU (EB)
	                   <-   "Write" (KB Unlocked)
	  F8 (BB CD)       ->
	                        F8 (BB CD)            ->
	                                              <-    Null RU (EB)
	                   <-   Null RU (KB Unlocked)       
	                                              <-    BID
	                        BID + RSP             ->
	  F8               ->
	
	At this point, the TN3270 server ignores the F8 from the client because the host
	has initiated a Bracket through the BID. The client cannot send data at this
	point, even though the keyboard is unlocked. Shortly after this, the host sends
	Screen 3:
	
	                               <-    Screen 3 (KB Unlocked)
	                   <-   Screen 3 (KB Locked)
	                                              <-    Null RU (EB)
	                   <-   "Write" (KB Unlocked)
	  F8 (BB CD)       ->
	                        F8 (BB CD)            ->
	                                              <-    Null RU (EB)
	                   <-   Null RU (KB Unlocked)
	
	NOTE: F8 refers to the TN3270 application sending Program Function (PF) Key 8 to
	the host application. "Write" refers to the TN3270 server sending a 3270 Write
	(X'F1') command to the TN3270 application with a WCC that has the KeyBoard (KB)
	unlock bit set.
	
	In this scenario, the application processes each screen of data twice because the
	TN3270 server is sending a 3270 Write (and WCC) to the application to unlock the
	keyboard upon receipt of the Null RU from the host.
	
	
	For additional information about the latest service pack for SNA Server 4.0,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	When the following registry entry is defined, the TN3270 server is updated to
	prevent the modification of the keyboard unlock bit and the sending of the null
	3270 Write command (and WCC) to a TN3270 client:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\TN3270\Parameters
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: ModifyWCC
	  Data Type: REG_SZ
	  Value: NO
	
	  NOTE: The value of NO must be entered in uppercase letters.
	
	4. Quit Registry Editor.
	
	If the ModifyWCC entry is not added or a value other than NO is used, the TN3270
	server will modify the keyboard unlock bit and send a null Write command as
	described previously.
	
	For more details on the 3270 Data Stream commands mentioned in this article,
	please see the following :
	
	  IBM 3270 Information Display System Data Stream Programmer's Reference
	  (GA23-0059)
	
	For more information on Request Units (RUs) and Request Headers (RHs), please
	refer to the following:
	
	  IBM SNA Formats (GA27-3136)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400 kbSNAServ300SP3 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP4
	Version           : :3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbinfo
	
	=============================================================================
	
