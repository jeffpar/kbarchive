---
layout: page
title: "Q175186: Extra Modem Settings A-C for Connecting to MSN"
permalink: /kb/175/Q175186/
---

## Q175186: Extra Modem Settings A-C for Connecting to MSN

	Article: Q175186
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.3,2.0,2.5
	Operating System(s): 
	Keyword(s): kbmsnkbfaq
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.3, 2.0, 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may be unable to connect, or have difficulty remaining connected to MSN, The
	Microsoft Network. Some modems may require extra settings or specific
	configurations to connect to MSN.
	
	The following table lists extra modem settings and configurations that may help
	specific modems connect to MSN.
	
	NOTE: Rockwell settings may work for any modem that uses the Rockwell chipset,
	including Boca, Zoltrix, and Zoom 14.4 modems.
	
	*UARTless Boca Modems: Some of the Boca modems use software drivers. Due to the
	lack of a UART chip, you must contact the modem manufacturer to obtain the
	proper drivers.
	
	MORE INFORMATION
	================
	
	Manufacturer/Model       Extra Settings   Status       Configuration
	---------------------------------------------------------------------------
	
	Acer 14.4 Data/Fax       Unknown          UNCONFIRMED  (ATI3= CL-MD 14/14
	                                                      AT\EC) This is a
	                                                      Cirrus Logic 14.4
	                                                      Data/Fax modem;
	                                                      there should be no
	                                                      MSN only connection
	                                                      issue but for the
	                                                      MSN and Internet
	                                                      numbers UnimodemV
	                                                      (unimodv.exe) is
	                                                      needed. This file
	                                                      contains the
	                                                      updated driver or
	                                                      Modem.inf. file for
	                                                      this modem. Contact
	                                                      the manufacturer.
	
	Acer 28.8 Pad-sp 1.xx    None             CONFIRMED    Let Windows detect
	                                                      as a Standard 28.8.
	
	Acer Acros               S7=90S10=80      UNCONFIRMED  (ATI6=rcv288Dpi)
	
	ArchTek 28.8             None             CONFIRMED    Install as Accura
	                                                      28.8 V.34-VFC.
	                                                      Compress Data off,
	                                                      Error Control off.
	
	ArchTek Data/Fax         Unknown          UNCONFIRMED  AT?= This is needed
	                                                      along with model.
	                                                      Install as Accura
	                                                      28.8 V.34-VFC.
	                                                      Compress Data off.
	
	Aspen 28.8 PnP           AT&F             UNCONFIRMED  ATI3= This is
	                                                      needed along with
	                                                      model. Install as
	                                                      a Standard 28.8.
	
	AST ATI 300-600 Series   Unknown          UNCONFIRMED  As these modems
	                                                      are software
	                                                      driven,
	                                                      contact the
	                                                      manufacturer
	                                                      for configuration
	                                                      information or to
	                                                      obtain procedures
	                                                      for reinstallation.
	
	AT&T Keep In Touch 28.8  None             CONFIRMED    Error Control off.
	PCMCIA
	
	Boca Research M1441W     &K3\N3%C0        CONFIRMED    Error Control off.
	
	Boca Research 28.8       AT&F1            CONFIRMED    With the 16550 UART
	Data/Fax                                               Error Control on,
	                                                      Compress Data off.
	
	Boca Research 28.8 VFast AT&F1&K3&D0      CONFIRMED    (mv28ki) Error
	                                                      Control off.
	
	Boca Research            AT&F             CONFIRMED    Install as a
	Sound Expression                                       Standard 28.8,
	SE34 SVD 28.8                                          if drivers are
	                                                      not available.
	
	Boca Research 33.6       AT&Fs11=50       CONFIRMED    Error Control off.
	v.34 FDVSP
	
	Cardinal 28.8 PnP        None             CONFIRMED    Click the "Wait for
	                                                      dial tone before
	                                                      dialing" check box
	                                                      to clear it on the
	                                                      Connection tab of
	                                                      Modem Properties.
	
	Cardinal 28.8 MVP        AT&F1            UNCONFIRMED  Error Control on
	                                                      with Compress Data
	                                                      off. Maximum speed
	                                                      38400.
	
	Cardinal 33.6            S37=11+MS=11,    UNCONFIRMED  None.
	                        1,300,33600
	
	Cirrus Logic 14.4        \N3\Q3%C0        UNCONFIRMED  Error Control off.
	                                                      Install as a 14.4
	                                                      Data/Fax.
	
	CommWave PC TEL 28.8     %C0\N3           CONFIRMED    None.
	
	CommWave Data/Fax V.34   %C0\N3           CONFIRMED    None.
	AT&T Chipset
	
	Compaq Presario 33.6     Unknown          UNCONFIRMED  There are two
	VSC 4704 & 4712 Predator                               modems listed in
	                                                      the MSN Connection
	                                                      Settings screen and
	                                                      in the Modems tool
	                                                      in Control Panel.
	                                                      These modems have a
	                                                      Virtual UART. Click
	                                                      Diagnostics on the
	                                                      More Info tab in
	                                                      the Modems tool in
	                                                      Control Panel. Note
	                                                      the UART is listed
	                                                      as Software. These
	                                                      modems vary in
	                                                      which extra
	                                                      settings allow
	                                                      them to connect.
	
	Compaq Presario 33.6,    AT&F&D0          CONFIRMED    Set flow control to
	56K Upgradeable;                                       Software Xon, Xoff.
	version 1.31                                           Error Control off.
	
	Compaq 33.6              %C0\N3           UNCONFIRMED  Error Control off.
	                                                      Listed as 16550AN
	                                                      for UART.
	
	Compaq Predator          Unknown          UNCONFIRMED  Contact the
	                                                      manufacturer. If by
	                                                      chance an engineer
	                                                      uninstalls the
	                                                      Compaq Predator
	                                                      modem, click Other
	                                                      in the Modems tool
	                                                      in Control Panel,
	                                                      then click Browse
	                                                      and navigate to the
	                                                      Windows\System
	                                                      folder to reinstall
	                                                      the modem.
	
	Compaq 33.6 VFC          %C0\N3           UNCONFIRMED  Error Control off
	                                                      Listed as 16550AN
	                                                      for UART.
	
	ComStar28.8              Unknown          UNCONFIRMED  Install as Hayes
	                                                      Optima 28.8
	                                                      V.34+Fax+Voice.
	
	Creative Labs 28.8       AT&F1&K3&D0      CONFIRMED    Error Control off.
	Data/Fax
	
	Creative Labs            AT&F1            UNCONFIRMED  (ATI3=V1.300) Error
	Sound Blaster 28.8                                     Control on.
	Internal                                               Compress
	                                                      data off.
	
	Creatix 28.8             AT&F             UNCONFIRMED  Error Control off.
	(Sierra 28.8 PnP Data/ 
	Fax/Voice/Speaker Phone
	SQ3465)
	
	To add an extra setting or to change the Use Error Control or Compress Data
	options, use the following steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Modems.
	
	3. Click the modem you are using, and then click Properties.
	
	4. On the Connection tab, click Advanced.
	
	5. In the Extra Settings box, type the appropriate extra settings.
	
	6. Enable or disable the Use Error Control and Compress Data options as
	  appropriate.
	
	7. Click OK or Close until you return to Control Panel.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbmsn kbfaq
	Technology        : kbMSNSearch kbMSN200 kbMSN130 kbMSN250
	Version           : WINDOWS:1.3,2.0,2.5
	Issue type        : kbinfo
	
	=============================================================================
	
