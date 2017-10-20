---
layout: page
title: "Q175250: Extra Modem Settings U-Z for Connecting to MSN"
permalink: /kb/175/Q175250/
---

## Q175250: Extra Modem Settings U-Z for Connecting to MSN

{% raw %}

	Article: Q175250
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.3,2.0,2.5
	Operating System(s): 
	Keyword(s): kbfaq
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
	
	MORE INFORMATION
	================
	
	Manufacturer/Model      Extra Settings    Status       Configuration
	--------------------------------------------------------------------------
	
	U.S. Robotics 28.8      &N13              UNCONFIRMED  USR 28.8 modems
	                                                      with a firmware
	                                                      revision prior to
	                                                      4/18/95 have known
	                                                      problems. Obtain a
	                                                      firmware revision
	                                                      dated 4/18/95
	                                                      or later from
	                                                      the manufacturer.
	                                                      Once updated, the
	                                                      modem speed is
	                                                      limited to 26,400
	                                                      bps; this allows
	                                                      for slower MSN
	                                                      connection speeds.
	
	U.S. Robotics           None              CONFIRMED    Error Control off.
	Sportster 14.4si
	
	U.S. Robotics           AT&F1&K3&N13&D0   CONFIRMED    Error Control
	Sportster 28.8 Vi                                      off. Install as a
	Internal                                               USR Sportster 28.8
	                                                      internal.
	
	U.S. Robotics           AT&F1&K3&N13      CONFIRMED    None, or (ATI3=
	                                                      Sportster V6.0);
	                                                      Check for BIOS date
	                                                      on V6.0 (Check
	                                                      ATI7 response).
	                                                      Supervisor date
	                                                      should be 4/18/95
	                                                      or later, if not,
	                                                      contact the
	                                                      manufacturer for
	                                                      BIOS update; the
	                                                      old BIOS cannot
	                                                      handle the 32-bit
	                                                      drivers. Error
	                                                      Control off.
	
	U.S. Robotics           AT&F1             CONFIRMED    If the UART is an
	Sportster WinModem                                     8250, remove FIFO
	28.8 Fax RS                                            buffers (requires
	                                                      a 16550 compatible
	                                                      UART).
	
	U.S. Robotics 14.4      AT&F              CONFIRMED    Error Control off.
	PCMCIA
	
	U.S. Robotics 28.8      S56=144 S27=48    CONFIRMED    Error Control off.
	PCMCIA
	
	U.S. Robotics 33.6      AT&Ns58=1s11=50   CONFIRMED    Install a Standard
	Courier V Everything,                                  28.8 driver on the
	Upgradeable to 56K                                     same port and set
	                                                      as the default if
	                                                      the manufacturer's
	                                                      drivers are not
	                                                      available.
	
	US Robotics             AT&F1s11=50       CONFIRMED    Error Control off;
	Sportster 14.4                                         maximum speed to
	                                                      57600. You may have
	                                                      to install as a
	                                                      Standard 28.8.
	
	US Robotics             AT&F1             UNCONFIRMED  Verify the UART is
	Sportster WinModem                                     a 16550; if it is
	28.8 Fax RS                                            an 8250, clear the
	                                                      Use FIFO Buffers
	                                                      check box in the
	                                                      Advanced Port
	                                                      Settings dialog
	                                                      box in the modem's
	                                                      property sheet.
	                                                      (A driver update
	                                                      is available for
	                                                      this modem; refer
	                                                      the customer to
	                                                      the manufacturer
	                                                      if they have not
	                                                      yet contacted them
	                                                      about this issue.)
	
	US Robotics             S54=192 S56=0     UNCONFIRMED  None.
	Sportster 33.6          S37=11
	
	US Robotics             AT&F1S27=32S33=32 UNCONFIRMED  Error control off.
	Sportster 33.6                                         (Need to have the
	                                                      USR Sportster 33.6
	                                                      driver installed;
	                                                      if so, add S32=16
	                                                      to Extra Settings.)
	
	US Robotics 33.6        Unknown           UNCONFIRMED  Error Control off.
	                                                      Need to install the
	                                                      USR 1433VHD driver.
	                                                      (Refer customer to
	                                                      the manufacturer
	                                                      for installation
	                                                      of this driver.)
	                                                      All Sportster 33.6
	                                                      modems with a TI
	                                                      chipset revision
	                                                      date of January
	                                                      11th until May of
	                                                      1996 are defective.
	
	Viking PCMCIA 33.6      AT&F              CONFIRMED    None.
	
	WiseCom VoiceView 28.8  AT&F              UNCONFIRMED  (ATI3=copyright
	                                                      1996 SSC V2.2
	                                                      BO2-01/0)
	                                                      Maximum speed to
	                                                      38400. In Dial-Up
	                                                      Networking use IP
	                                                      Header Compression
	                                                      off.
	
	Xircom 28.8 PCMCIA      Unknown           UNCONFIRMED  Error Control off.
	
	XPM 33.6I               AT&F1 S32=16      UNCONFIRMED  None.
	
	Zoltrix 28.8            &K3               UNCONFIRMED  Install as a
	                                                      Standard 28.8
	                                                      internal.
	
	Zoltrix 14.4            &K3+H3S95=1       CONFIRMED    Error Control off.
	
	Zoom ComStar 28.8       None              CONFIRMED    Install as a Hayes
	                                                      Optima 28.8 V.34 +
	                                                      Data/Fax/Voice
	
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
	Keywords          :  kbfaq
	Technology        : kbMSNSearch kbMSN200 kbMSN130 kbMSN250
	Version           : WINDOWS:1.3,2.0,2.5
	
	=============================================================================
	

{% endraw %}
