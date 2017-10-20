---
layout: page
title: "Q175187: Extra Modem Settings I-M for Connecting to MSN"
permalink: /kb/175/Q175187/
---

## Q175187: Extra Modem Settings I-M for Connecting to MSN

{% raw %}

	Article: Q175187
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
	
	MORE INFORMATION
	================
	
	Manufacturer/Model        Extra Settings   Status       Configuration
	---------------------------------------------------------------------------
	
	IBM Aptiva MWave 28.8     None             CONFIRMED    Use Error Control
	                                                       on for the first
	                                                       attempts, then, if
	                                                       necessary, use
	                                                       Error Control off.
	
	IBM Aptiva MWave 28.8     Unknown          UNCONFIRMED  Error Control off.
	with MWave 2.0 driver                                   McAfee & the IBM
	                                                       Aptiva conflict.
	                                                       Right-click the
	                                                       shield on the
	                                                       taskbar, click
	                                                       Disable, and then
	                                                       retry the modem
	                                                       connection. If the
	                                                       caller wishes to
	                                                       have McAfee active
	                                                       after connecting,
	                                                       right-click the
	                                                       shield and then
	                                                       click Enable. This
	                                                       should resolve the
	                                                       issue.
	
	IBM ThinkPad MWave 28.8   AT&F&SE1Q0V1X1   CONFIRMED    None.
	PCMCIA
	
	IBM ThinkPad 28.8         Unknown          UNCONFIRMED  You can only
	with MWave 2.0 driver                                   connect at 19,200
	                                                       with 28.8 numbers.
	                                                       You must contact
	                                                       IBM for a firmware
	                                                       update to resolve
	                                                       this issue.
	
	IBM ThinkPad              AT&FSE1Q0V1X1    UNCONFIRMED  There is a
	MWave 28.8 PCMCIA                                       conflict with the
	                                                       graphics card on
	                                                       these computers.
	                                                       You must contact
	                                                       IBM to resolve
	                                                       this issue.
	IBM Internal              E1Q0V1X4&K3      CONFIRMED    None.
	Model 701 14.4
	
	Infotel 14.4 Data/Fax     AT&F             CONFIRMED    Install as a
	                                                       Standard 14.4.
	                                                       Remove FIFO
	                                                       Buffers.
	
	Infotel 28.8 Data/Fax     AT&F1            CONFIRMED    Error Control off.
	
	Intel IntelliFax 14.4     AT&F             UNCONFIRMED  Error Control off.
	
	Logicode                  %C0\N3S10=200    CONFIRMED    None.
	Quick-Tel 2814 HV
	
	Maxtech 14.4              Unknown          UNCONFIRMED  Remove modem and
	                                                       then restart the
	                                                       computer. Install
	                                                       as a Standard
	                                                       14.4.
	
	MaxTech 28.8              Unknown          UNCONFIRMED  Install as a
	                                                       Standard 28.8. Set
	                                                       maximum speed to
	                                                       38400.
	
	MaxTech 33.6              AT&F             UNCONFIRMED  Error Control off.
	                                                       Remove the Maxtech
	                                                       driver and then
	                                                       restart the
	                                                       computer. Redetect
	                                                       the modem but
	                                                       install as a
	                                                       Standard 28.8
	
	MaxTech 33.6              Unknown          UNCONFIRMED  Check ATI6= DSP
	with TI chipset                                         and EPROM versions
	                                                       2.0. DSP and EPROM
	                                                       dates 12/18/95.
	                                                       See US Robotics
	                                                       33.6 modem with
	                                                       the TI chipset for
	                                                       more information
	                                                       on this modem.
	
	Megahertz 14.4            AT&F             CONFIRMED    None.
	Cruise Card
	
	Megahertz XJ2288 PCMCIA   AT&F             CONFIRMED    Error Control on.
	
	Motorola                  AT&F1            CONFIRMED    Error Control on.
	Lifestyle 28.8 PnP                                      Compress Data off.
	
	Motorola                  None             CONFIRMED    Install as a
	Lifestyle & Power 28.8                                  Standard 28.8.
	External
	
	Motorola                  AT&F&C1&D2\Q3    UNCONFIRMED  None.
	Lifestyle 28.8 PnP
	
	Motorola                  Unknown          UNCONFIRMED  Install as a
	Lifestyle & Power 28.8                                  Standard 28.8.
	External
	
	Motorola                  AT&F&K3&D0       UNCONFIRMED  Error Control off.
	Modem Surfer 28.8
	
	Motorola                  \N3\Q3%C0        UNCONFIRMED  Different extra
	Modem Surfer 28.8                                       settings may be
	                                                       needed for
	                                                       different BIOS
	                                                       versions or
	                                                       configurations.
	                                                       Contact the
	                                                       manufacturer.
	
	Motorola                  AT&F             CONFIRMED    Error Control off,
	Montana PCMCIA 28.8                                     and set maximum
	                                                       speed to 57600.
	
	Motorola                  AT&F             CONFIRMED    Error Control off.
	Montana PCMCIA 33.6                                     Getting these
	                                                       PCMCIA modems
	                                                       connected may
	                                                       require new
	                                                       drivers. Contact
	                                                       the manufacturer
	                                                       or visit their web
	                                                       site to download
	                                                       new drivers, if
	                                                       available.
	
	Motorola Premier 33.6     *MM              UNCONFIRMED  The Modem.inf file
	                                                       provided by the
	                                                       manufacturer
	                                                       disables Automode
	                                                       modulation and
	                                                       locks the modem in
	                                                       v.22bis mode. To
	                                                       use Automode
	                                                       modulation
	                                                       characteristics
	                                                       and true v.34
	                                                       modem speeds,
	                                                       contact the
	                                                       manufacturer.
	
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
	

{% endraw %}
