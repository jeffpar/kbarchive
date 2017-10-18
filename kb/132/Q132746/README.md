---
layout: page
title: "Q132746: PC Ext NTMMTA: External Will Not Answer w/ USR Sportster Modem"
permalink: kb/132/Q132746/
---

## Q132746: PC Ext NTMMTA: External Will Not Answer w/ USR Sportster Modem

	Article: Q132746
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2,3.2a,3.5; :3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2, 3.2a, 3.5 
	- Microsoft Mail Multitasking MTA for Windows NT, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to connect to a version 3.x of Microsoft Mail for PC Networks Mail
	Transfer Agent (MTA) with Microsoft Mail Remote for Windows (or MS-DOS) using a
	U.S. Robotics Sportster 28.8 V.34 modem, the MTA may never answer. Therefore, it
	causes the Remote user to time out.
	
	CAUSE
	=====
	
	U.S. Robotics Sportster 28.8 V.34 modems with a "Supervisor date" earlier than
	04/18/95 have a ROM BIOS chip defect.
	
	RESOLUTION
	==========
	
	This is a known issue with U.S. Robotics. Please contact U.S. Robotics Technical
	Support at (708) 982-5151 for information on upgrading the modem.
	
	MORE INFORMATION
	================
	
	To determine if the modem has the suspected bios problem, connect a session to
	the modem port from Terminal.
	
	Once connected, type the following (followed by a carriage return):
	
	  ATI7
	
	A configuration profile similar to the following will be displayed on the
	screen:
	
	Configuration Profile...
	
	Product type           US/Canada External
	Options                V32bis,V.FC,V.34
	Fax Options            Class 1/Class 2.0
	Clock Freq             20.16Mhz
	Eprom                  256k
	Ram                    32k
	
	Supervisor date        04/18/95
	DSP date               03/31/95
	
	Supervisor rev         6.0.5
	DSP rev                1.0.9
	
	If the "Supervisor date" is earlier than 04/18/95, you should contact U.S.
	Robotics Technical Support.
	
	Additional query words: 3.00 3.20 3.20a 3.50 USR chipset corrupt
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN300 kbMailPCN350 kbMailMMTA350NT
	Version           : WINDOWS:3.0,3.2,3.2a,3.5; :3.5
	
	=============================================================================
	
