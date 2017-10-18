---
layout: page
title: "Q153473: Extra Modem Settings for Connection Problems"
permalink: kb/153/Q153473/
---

## Q153473: Extra Modem Settings for Connection Problems

	Article: Q153473
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.3,2.0,2.5,2.51,2.52,2.6,5.0
	Operating System(s): 
	Keyword(s): kbhw kbmsn kbHardwarekbfaq
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.3, 2.0, 2.5, 2.51, 2.52, 2.6, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may be unable to connect, or have difficulty remaining connected to, MSN,
	The Microsoft Network.
	
	CAUSE
	=====
	
	Some modems may require extra settings or specific configurations to connect to
	MSN.
	
	RESOLUTION
	==========
	
	The following table lists extra settings and configurations that may prevent
	connection problems for specific modems.
	
	To add an extra setting or to change the Use Error Control or Compress Data
	options, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Modems.
	
	3. Click the modem you are using, and then click Properties.
	
	4. On the Connection tab, click Advanced.
	
	5. In the Extra Settings box, type the appropriate extra setting.
	
	6. Enable or disable the Use Error Control and Compress Data options as
	  appropriate.
	
	7. Click OK or Close until you return to Control Panel.
	
	Modem model              Extra settings     Configuration
	-------------------------------------------------------------------------
	ArchTek 28.8             none               Install as Accura
	                                           28.8 V.34-VFC
	                                           Compress Data off
	
	AT&T Keep in Touch
	  28.8 PCMCIA           none               Use Error Control off
	
	Boca Research M1441W     &K3\N3%C0          Use Error Control off
	
	Cardinal 28.8 pnp        none               Remove "Wait for dial tone
	                                           before dialing" on the
	                                           Connection tab of Modem
	                                           Properties
	
	Cirrus Logic 14.4        \N3\Q3%C0          Use Error Control off
	                                           Install as 14.4 data/fax
	
	Creative Labs 28.8       AT&F1&K3&D0        Use Error Control off
	
	CommWave 28.8 Dat Fax
	  with AT&T chipset     %C0\N3
	
	Delrina 14.4 PCMCIA      &Q6&K3
	
	Diamond Multimedia
	  TeleCommander 2500    AT&F               Use Error Control on
	                                           Compress Data off
	
	  TeleCommander 3500    AT&F               Use Error Control on
	                                           Compress Data off
	                                           Maximum Speed setting 38400
	
	DigiCom Connection 144+
	 (Digicom SoftModem
	  Drivers installed)    &K3%C0             Use Error Control off
	
	Digicom 14.4 SoftModem   \N0&K4
	
	DigiCom 14.4             &Q6&K3
	
	GateWay 28.8
	  Telepath V6.0         AT&F1&K3
	  Telepath 57600        AT&F1&K3
	
	GVC F1114 VR6            none               Set up as Standard 14.4
	
	IBM Aptiva Mwave 28.8    &SE1               Use Error Control off
	
	IBM ThinkPad Mwave
	  28.8 PCMCIA           AT&F&SE1Q0V1X1
	
	IBM Internal 701 14.4    E1Q0V1X4&K3
	
	Infotel 14.4             AT&F               Set up as Standard 14.4
	                                           Remove FIFO buffers
	
	Infotel 28.8             AT&F1              Use Error Control off
	
	Logicode
	  Quick-Tel 2814 HV     %C0\N3S10=200
	
	Megahertz 14.4           AT&F
	
	Motorola
	  Lifestyle 28.8 PNP    AT&F1              Use Error Control on
	                                           Compress data off
	
	  Lifestyle & Power
	     28.8 external      none               Set up as Standard 28.8
	
	  Montana 33.6 PCMCIA   AT&F
	
	NEC 28.8 Data Fax        AT&F1              Use Error Control on
	                                           Compress data off
	
	OSITECH 28.8 PCMCIA      none               Use Error Control off
	
	Packard Bell
	  28.8 Data Fax         AT&F1              Use Error Control on
	                                           Compress data off
	
	PCTEL/HSP 33.6 Deluxe    AT&F&C1&D2&K3&W1   Lower modem to 57600
	                                           Use Error Control Off
	                                           Server Type --
	                                           Error Control Off
	                                           Software compress off
	
	Phoebe 28.8              \Q3\N3\J0%C0
	
	Practical Peripherals
	  14.4 FXMT external    &K3
	
	  28.8 FXMT,SA & HCII   AT&F1              Set up as a Standard 28.8
	
	  PC 28.8 T2-EZ         AT&F1
	
	  28.8 LCD/PC Ext       none               Use Error Control off
	                                           Set Flow Control to None.
	
	  PM288HC               AT&F1              Use Error Control off
	
	Prometheus
	  14.4 data fax         &Q6&K3
	
	  14.4 SoftModem        \N0&K4
	
	Rockwell 14.4 V1.403     AT&F or &Q6&K3     Set up as 14.4 data fax
	                                           Use Error Control off
	
	Rockwell 14.4 V1.510     AT&F or &Q6&K3     Set up as 14.4 data fax
	                                           Use Error Control off
	
	Rockwell 14.4 V1.620     AT&F or \N0&K3     Set up as 14.4 data fax
	                                           Use Error Control off
	
	NOTE: Rockwell settings may work for any modem that uses the Rockwell chip
	set, including Boca, Zoltrix, and Zoom 14.4 modems.
	
	Supra 28.8i PnP          AT&D0               Use Error Control off
	                                            Compress Data off
	                                            maximum speed set to 57600
	
	U.S. Robotics
	  Sportster 14.4        none                Use Error Control off
	
	  Sportster 28.8 Vi     AT&F1&K3&N13&D0     Use Error Control off
	                                            Set up as USR Sportster
	                                            28.8 internal
	
	  Sportster 28.8        AT&F1&K3&N13
	
	  Sportster WinModem
	     28.8 Fax rs        AT&F1               If the UART is an 8250,
	                                            remove FIFO buffers
	
	  PCMCIA 14.4           AT&F                Use Error Control off
	
	  PCMCIA 28.8           S56=144 S27=48      Use Error Control off
	
	Zoltrix 14.4             &K3+H3S95=1         Use Error Control off
	
	Zoltrix 28.8             &K3                 Set up as 28.8 internal
	
	Zoom ComStar 28.8        none                Set up as Hayes
	                                            Optima 288 V.34+Fax+Voice
	
	Additional query words: msn
	
	======================================================================
	Keywords          : kbhw kbmsn kbHardware kbfaq
	Technology        : kbMSNSearch kbMSN500 kbMSN200 kbMSN252 kbMSN130 kbMSN251 kbMSN260 kbMSN250
	Version           : WINDOWS:1.3,2.0,2.5,2.51,2.52,2.6,5.0
	Issue type        : kbprb
	
	=============================================================================
	
