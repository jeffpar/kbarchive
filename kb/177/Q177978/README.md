---
layout: page
title: "Q177978: Modem Does Not Dial All Numbers in Calling Card Rule"
permalink: kb/177/Q177978/
---

## Q177978: Modem Does Not Dial All Numbers in Calling Card Rule

	Article: Q177978
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to use a calling card rule with Dial-Up Networking,
	HyperTerminal, Microsoft Fax, Phone Dialer, or any other program that uses
	Windows 95 telephony, your modem may not dial all the numbers in the dial
	string.
	
	CAUSE
	=====
	
	This behavior can occur if either of the following conditions exists:
	
	- The buffer on your modem is too small to store all the numbers in the calling
	  card rule.
	
	- The following line exists in your modem's .inf file:
	
	        HKR, Settings, DialSuffix,, ";"
	
	  The semicolon (;) between the quotation marks causes your modem not to dial
	  all the numbers in the calling card rule.
	
	RESOLUTION
	==========
	
	To resolve this behavior, follow the steps in the appropriate section below:
	
	The Buffer on Your Modem Is Too Small
	-------------------------------------
	
	To determine if the buffer on your modem is too small to store all the numbers in
	the calling card rule, follow these steps:
	
	1. Click Start, point to Programs, and then click MS-DOS Prompt.
	
	2. At the command prompt, type the following command, and then press ENTER:
	
	  " echo atdt <dial string> > com<n> " (without the quotation
	  marks)
	
	  where <n> is the number of the communications port your modem is
	  connected to, and <dial string> are the numbers you specified in the
	  calling card rule.
	
	If your modem does not dial all the numbers in the calling card rule, the buffer
	on your modem is too small. To resolve this issue, contact the modem's
	manufacturer to inquire about a possible firmware update.
	
	The .inf File Contains a "DialSuffix" Line with a Semicolon
	-----------------------------------------------------------
	
	Microsoft does not encourage or support changes to .inf files; therefore,
	Microsoft Technical Support does not support the procedure in this article.
	Although we have tested the following procedure and it appears to function as
	described, make a backup copy of your modem's .inf file before you proceed.
	
	1. Use any text editor (such as Notepad) to open your modem's .inf file in the
	  Windows\Inf folder. Please see the "More Information" section later in this
	  article for the .inf file your particular modem uses.
	
	  NOTE: The Inf folder is a hidden folder. To view this folder, click Start,
	  point to Programs, click Windows Explorer, click Options on the View menu,
	  click Show All Files on the View tab, and then click OK.
	
	2. Search for all instances of the following line, and remove the semicolon only
	  (do not remove the quotation marks):
	
	  HKR, Settings, DialSuffix,, ";"
	
	3. Save the .inf file, and then quit the text editor.
	
	4. Click Start, point to Find, and then click Files Or Folders.
	
	5. In the Named box, type "drvdata.bin drvidx.bin" (without the quotation
	  marks), and then click Find Now.
	
	6. In the list of found files, right-click each file, and then click Delete.
	
	7. Close the Find window.
	
	8. Click Start, point to Settings, and then click Control Panel.
	
	9. Double-click Modems.
	
	10. On the General tab, click your modem, and then click Remove.
	
	11. Click Add.
	
	12. If you want Windows 95 to detect your modem, click Next. If not, click the
	  "Don't detect my modem; I will select it from a list" check box to select
	  it, and then click Next.
	
	13. If you chose to have Windows 95 detect your modem, Windows 95 queries the
	  serial ports on your computer looking for a modem. If Windows 95 detects an
	  incorrect modem, click Change, and then click the appropriate manufacturer
	  and model for your modem. Click Next, and then skip to step 16.
	
	14. If you choose to select your modem manually, click the appropriate
	  manufacturer and model for your modem, and then click Next.
	
	15. Click the communications port your modem uses, and then click Next.
	
	16. Click Finish, and then click Close. The .bin files you deleted are replaced
	  with new versions, and the updated .inf file for your modem is used.
	
	
	MORE INFORMATION
	================
	
	The following table lists the modem .inf files included with Windows 95.
	
	NOTE: If your modem is not listed, contact the modem's manufacturer for the name
	of the .inf file your modem uses.
	
	  File           Modem manufacturer
	  -----------------------------------------------------------------------
	  Mdmati.inf     ATI Technologies Inc.
	  Mdmatt.inf     AT&T
	  Mdmaus.inf     This .inf file supports Australian modems that use
	                 generic command set information
	  Mdmboca.inf    Boca Research, Inc.
	  Mdmcommu.inf   Communicate Limited
	  Mdmcpi.inf     Computer Peripherals Inc.
	  Mdmcpq.inf     Compaq Computer Corp, AST, DEC
	  Mdmdsi.inf     Digicom Systems and Creative Labs
	  Mdmexp.inf     EXP and Angia
	  Mdmgatew.inf   Gateway 2000
	  Mdmgen.inf     This .inf file supports modems that use generic command
	                 set information
	  Mdmgvc.inf     GVC, Packard Bell, IBM, Turbomodem, Compaq
	  Mdmhayes.inf   Hayes, Megahertz, InteCom, Psion, Ventel
	  Mdminfot.inf   Infotel and Creatix
	  Mdmintel.inf   Intel Corp.
	  Mdmintpc.inf   Intel Corp. (PCMCIA models)
	  Mdmmcom.inf    Microcom, Inc.
	  Mdmmetri.inf   Metricom, Inc.
	  Mdmmhrtz.inf   Megahertz Corp.
	  Mdmmoto.inf    Motorola
	  Mdmmts.inf     MultiTech Systems
	  Mdmnokia.inf   Nokia Mobile Phones
	  Mdmnova.inf    NovaLink Technologies, Inc
	  Mdmosi.inf     Ositech Communications, Inc.
	  Mdmpace.inf    Pace Micro Communications Ltd
	  Mdmpnb.inf     P.N.B
	  Mdmpp.inf      Practical Peripherals
	  Mdmracal.inf   Racal
	  Mdmrock.inf    This .inf file supports Rockwell and some Cirrus chip
	                 set modems (this encompasses many manufacturers and
	                 models)
	  Mdmrock2.inf   This .inf file supports Rockwell and some Cirrus chip
	                 set modems
	  Mdmsier.inf    Sierra Semiconductor
	  Mdmsonix.inf   Sonix Communications Ltd
	  Mdmspec.inf    This .inf file supports Mwave modems from Spectrum, IBM,
	                 Best Data, and other manufacturers
	  Mdmsupra.inf   Supra Corporation
	  Mdmtdk.inf     TDK
	  Mdmtelbt.inf   Telebit
	  Mdmti.inf      Texas Instruments
	  Mdmtosh.inf    Toshiba, Noteworthy
	  Mdmusrcr.inf   U.S. Robotics, Inc. (Courier)
	  Mdmusrsp.inf   U.S.Robotics, Inc. (Sportster)
	  Mdmusrwp.inf   U.S. Robotics, Inc.
	  Mdmvv.inf      This .inf file supports modems that use generic
	                 VoiceView command set information
	  Mdmzoom.inf    Zoom Telephonics, Inc.
	  Mdmzyp.inf     Zypcom
	  Mdmzyxel.inf   ZyXEL
	
	For additional information about calling card rules in Windows 95, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q167220 How to Create Custom Calling Card Rules
	
	Additional query words: tapi dun hyperterm
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
