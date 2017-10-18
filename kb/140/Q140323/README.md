---
layout: page
title: "Q140323: Microsoft Unimodem V Readme.txt File"
permalink: kb/140/Q140323/
---

## Q140323: Microsoft Unimodem V Readme.txt File

	Article: Q140323
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 10-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The information in this article is a copy of the information in the Readme.txt
	file included with Microsoft Unimodem V.
	
	MORE INFORMATION
	================
	
	-------------------------------------------------------------------
	                    Microsoft Unimodem V README
	                            November 1995
	-------------------------------------------------------------------
	
	            (c) Copyright Microsoft Corporation, 1995
	
	HOW TO USE THIS DOCUMENT
	========================
	
	To view Readme.txt on screen in Notepad, maximize the Notepad window.
	
	To print Readme.txt, open it in Notepad or another word processor,
	and then on the File menu, click Print.
	
	CONTENTS
	========
	
	LICENSING
	SUPPORT
	UNIMODEM V FUNCTIONALITY
	INSTALLING THE UNIMODEM V SOFTWARE
	KNOWN PROBLEMS
	
	LICENSING
	=========
	
	You must accept the terms detailed in the License.txt file before you
	can use Unimodem V. If you want to redistribute Unimodem V beyond
	your premises, you must print the file License.txt, sign it, and
	return a copy to the address indicated in License.txt.
	
	SUPPORT
	=======
	
	Unimodem V support is available through Microsoft Product Support
	Services (PSS). The PSS sales phone number is 1 (800) 936-3500.
	
	UNIMODEM V FUNCTIONALITY
	========================
	
	Unimodem V is the newest release of Unimodem, the Windows universal
	modem driver/telephony service provider for data/fax modems. Unimodem
	V adds the most commonly requested features to support data/fax/voice
	modems, including wave playback and recording to and from the phone
	line, wave playback and recording to and from the handset, and
	support for speakerphones, caller ID, distinctive ringing, and call
	forwarding.
	
	This release provides .inf files for some specific modems; however,
	Unimodem V provides base support, with the addition of an .inf file,
	for any voice modem based on one of the specific supported chipsets
	(Rockwell, Cirrus, AT&T) or any other AT+V/AT#V standard modem.
	Support for Sierra chipsets is in progress and will be available
	soon. 
	
	The Unimodem V software consists of the following parts:
	
	1. The Unimodem V Telephony Service Provider (TSP) and VxD. The TSP
	  handles program requests, such as dialing and answering, which are
	  passed down from TAPI. The TSP hides modem-specific details of how
	  telephony operations, such as dialing, are handled. The VxD is called
	  by the TSP to send command strings to the modem. It is called by the
	  VCOMM VxD to change modem settings and send/receive data to/from the
	  modem.
	
	2. Operator Agent, a program that identifies whether an incoming call is
	  from a person, a fax machine, or a data modem. It then forwards the
	  call to the appropriate program, such as the answering machine or fax
	  program. If Operator Agent can't automatically determine the type of
	  call, it asks the caller to identify it. If the caller cannot identify
	  it, Operator Agent forwards the call to a program specified by the
	  user.
	
	  To start Operator Agent, click the Start button, point to Programs,
	  point to Accessories, and then click Operator. When Operator Agent is
	  running, an icon appears on the taskbar near the clock.
	
	3. A wave driver for serial port modems that supports the following
	  formats: IMA ADPCM at 4800 kHz, 7200 kHz, or 8000 kHz; and Rockwell
	  ADPCM.
	
	4. A wave wrapper for use with modems with a separate audio hardware
	  interface, where synchronization is needed between the modem and audio
	  via AT commands. The wave wrapper is called by MMSystem, and it calls
	  Unimodem V to send any needed AT commands to the modem. After the AT
	  commands are complete, the wave wrapper calls back into MMSystem, and
	  MSystem then calls the modem wave device. The modem wave device
	  interfaces only with the audio hardware interface.
	
	5. A wave driver for the Compaq Presario, which uses the wave wrapper.
	
	6. The following .inf files for modems currently supported by Unimodem V:
	
	  mdmcpq.inf    Compaq Presario models 520, 720, 820, and 920
	  tamwrap.inf   Presario wave driver and wrapper
	  mdmdsi.inf    Creative Labs Phone Blaster
	  mdmrock.inf   Logicode 14.4 data/fax/voice PCMCIA
	  mdmrock2.inf  Diamond Multimedia TeleCommander 2500
	  mdmrock2.inf  Cirrus Logic
	  mdmrock3.inf  Aztech Systems
	  mdmrock4.inf  Rockwell PCMCIA reference design
	
	INSTALLING THE UNIMODEM V SOFTWARE
	==================================
	
	To install Unimodem V, you must have a PC running Microsoft(r) Windows(r)
	95. These instructions assume that you have already successfully
	installed the modem hardware according to the manufacturer's
	instructions.
	
	To install Unimodem V software, carry out the following steps:
	
	1. Run Unimodv.exe, which will automatically extract all files into the
	  directory you specify (\Dirname).
	2. In \Dirname, right-click the file Unimodv.inf, and then click Install.
	3. Restart your computer.
	4. In Control Panel, double-click the System icon, and then click the
	  Device Manager tab.
	5. Double-click the Modem icon.
	6. In the list, click your modem, and then click Remove.
	7. Click Refresh.
	
	If the modem is Plug and Play, Windows 95 automatically detects the
	modem. If the modem is not automatically detected, carry out these
	additional steps:
	
	1. In Control Panel, double-click the Modems icon.
	2. If the Install New Modem wizard does not automatically start, click
	  Add.
	3. Follow the instructions on your screen to detect your modem.
	
	NOTE: Installation of Unimodem V replaces the following Windows 95
	     components:
	
	     Unimodem.vxd
	     Unimdm.tsp
	     Umdm16.dll
	     Umdm32.dll
	
	If you remove Unimodem V from your computer at some point and want to
	restore these files, the easiest way to do so is to reinstall Windows
	95.
	
	KNOWN PROBLEMS
	==============
	
	Running the Operator Agent with DATA and FAX applications
	---------------------------------------------------------
	If the Operator Agent is run with only DATA and FAX media mode
	applications running, the Operator Agent will not work correctly. If
	a VOICE media mode application is running with DATA and/or FAX, the
	Operator Agent will work correctly.  We are working on a fix for this
	problem.
	
	Additional query words:
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	
	=============================================================================
	
