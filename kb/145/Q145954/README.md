---
layout: page
title: "Q145954: HOWTO: Set Up 3270 Device Emulation To AS/400"
permalink: kb/145/Q145954/
---

## Q145954: HOWTO: Set Up 3270 Device Emulation To AS/400

	Article: Q145954
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11 SP1;2.11 SP2,3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11 SP1, 2.11 SP2, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	5250 device emulation is recommended for initiating interactive terminal
	sessions to an AS/400. However, it is possible for an AS/400 to communicate
	through a 3270 data stream. This article will describe how you can configure an
	SNA Server and an AS/400 to allow 3270 device emulators to initiate a terminal
	session.
	
	MORE INFORMATION
	================
	
	Before you configure an SNA Server and an AS/400, disable the auto-
	configuration option on the AS/400. If this option is not disabled, the AS/400
	creates an APPC controller that conflicts with the controller you are creating.
	If this occurs, de-activate (vary off) the auto-configured controller and remove
	it. If you do not wish to disable the auto- configuration option, do the
	following:
	
	1. Make sure that you complete the AS/400 configuration first.
	
	2. Make sure that the controller is varied on before you attempt to activate the
	  SNA Server connection.
	
	3. If there is an active connection, you may re-enable auto-configuration.
	
	AS/400 Configuration
	--------------------
	
	1. Create a remote workstation controller. The SNA Server is detected as a
	  LAN-attached 3174 controller by the AS/400. From a command prompt, type the
	  following one-line command:
	
	  "CRTCTLRWS CTLD(<controller name>) TYPE(3174) MODEL(0) LINKTYPE(*LAN)
	  SWTLINLST(<line name>) EXCHID(05DFFFFF) ADPTADR(<server MAC
	  address>)" (without the quotation marks)
	
	  where <controller name> is the name for the controller. Any name can be
	  specified. The <line name> is the name of the AS/400 line description
	  for the LAN connection and <server MAC address> is the network
	  interface card (NIC) address of the SNA Server.
	
	2. Create 3270 devices. Each 3270 device corresponds to one emulation session
	  and one display LU in SNA Server Admin. From the command prompt, type the
	  following one-line command:
	
	  "CRTDEVDSP DEVD(<device name>) DEVCLS(*RMT) TYPE(3278) MODEL(0)
	  LOCADR(02) CTL(<controller name>) " (without the quotation marks)
	
	  where <device name> is the name for the device. Any name can be
	  specified. The <controller name> is the name of the controller in step
	  1.
	
	3. Repeat typing the command on step 2. Increase LOCADR until you have created
	  the desired number of devices.
	
	4. Vary on the controller and devices and verify that they are ready for use.
	  Type the following command:
	
	  "WRKCFGSTS *CTL <controller name>" (without the quotation marks)
	
	  where <controller name> is the name of the controller in step 1.
	
	5. The controller and attached devices are displayed in a state of "Varied Off."
	  Use option 1 to vary on the controller.
	
	6. Wait for a moment and press F5 to refresh the display. Make sure that the
	  status of the controller is Active and all of the devices are Vary On
	  Pending.
	
	SNA Server 2.11 Configuration
	-----------------------------
	
	1. Run SNA Server Setup and add an 802.2 link service.
	
	2. Run SNA Server Admin and configure the 802.2 connection (associated with the
	  802.2 link service) from the Servers And Connections dialog box. Use the
	  following properties:
	
	  Remote End: Host System
	  Activation: On Server Startup (recommended but any of the options
	  should work)
	  Allowed Directions: Outgoing Calls
	
	3. Click Setup and add the following parameters:
	
	  Remote Network Address: <NIC address> (Enter the NIC address of the
	  AS/400. This can be found in the ADPTADR parameter of the AS/400
	  line description)
	
	  Local Node ID and Remote Node Name fields: <Use Default Settings>
	
	  The Advanced settings can be left at the default settings.
	
	4. Return to the Servers And Connections dialog box. Focus on the 802.2
	  connection and create all required 3270 LUs off the connection. The LU
	  numbers correspond to the LOCADR values in the AS/400 device descriptions.
	
	5. Configure pools of LUs through the LU Pools dialog box of SNA Server Admin.
	  This is optional.
	
	6. In the Users And Groups dialog box in SNA Server Admin, assign LUs and/or LU
	  Pools to the appropriate users and groups.
	
	7. Save the configuration and start your services. The LUs should be Available
	  in SNA Server Admin.
	
	SNA Server 3.0 and 4.0 Configuration
	------------------------------------
	
	1. Run Manager and add an 802.2 link service. NOTE: DO NOT USE THE AS/400
	  CONFIGURATION WIZARD.
	
	2. Configure the 802.2 connection (associated with the 802.2 link service) using
	  the following properties:
	
	  Remote End: Host System
	  Activation: On Server Startup (recommended but any of the options
	  should work)
	  Allowed Directions: Outgoing Calls
	
	3. Use the Address and System Identification Tabs and add the following
	  parameters:
	
	  Remote Network Address: <NIC address> (Enter the NIC address of the
	  AS/400. This can be found in the ADPTADR parameter of the AS/400
	  line description)
	
	  Local Node ID and Remote Node Name fields: <Use Default Settings>
	
	4. Click on the 802.2 connection and insert all required 3270 LUs off the
	  connection.
	
	  The LU numbers correspond to the LOCADR values in the AS/400 device
	  descriptions.
	
	5. Assign LUs to corresponding pools and users by right-clicking on the LU and
	  using the Assign option. This step is optional.
	
	6. Save the configuration. The LUs should be available as soon as the connection
	  is started successfully.
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11 SP1;2.11 SP2,3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbhowto
	
	=============================================================================
	
