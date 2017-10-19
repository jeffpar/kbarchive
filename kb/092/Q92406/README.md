---
layout: page
title: "Q92406: Intel EtherExpress 16 Specifications"
permalink: /kb/092/Q92406/
---

## Q92406: Intel EtherExpress 16 Specifications

	Article: Q92406
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information describes the Intel EtherExpress 16 Network card
	specifications. For more information about this Network card, contact Intel
	Corporation.
	
	PHYSICAL SPECIFICATIONS
	-----------------------
	
	The Intel EtherExpress 16 is a half-slot board. It is short enough to allow an
	adjacent board to use a piggyback card that is also half length. The board is
	4.2 inches tall and 6.5 inches long.
	
	CONNECTORS
	----------
	
	The board has two external connectors:
	
	DIX:    A 15-pin, D-shaped connector for AUI interfaced to thick
	       Ethernet cables
	
	BNC:    A cylindrical, bayonet connector for interfacing to thin Ethernet
	       or Cheapernet cables
	
	FCC COMPLIANCE
	--------------
	
	The board is an FCC Class B device, making it suitable for use in both commercial
	and residential applications.
	
	ENVIRONMENTAL SPECIFICATIONS
	----------------------------
	
	The board can operate under the following environmental conditions:
	
	  Operating Temperature:  0 to 50 degrees centigrade
	  Operating Humidity:     10 to 90 percent, non-condensing
	
	MEMORY ON BOARD
	---------------
	
	The board has 32K bytes of RAM on it. While this memory is used to buffer the
	communications between the board and the network (whether you select
	memory-mapped or I/O-mapped buffering), Intel recommends using I/O-mapped
	buffering.
	
	ELECTRICAL SPECIFICATIONS
	-------------------------
	
	Bus Characteristics
	-------------------
	
	The board works in 8- or 16-bit Industry Standard Architecture (ISA) busses. This
	is the same bus that is used on IBM PCs (8 bit) and IBM PC/ATs (8-bit or
	16-bit). The board also works in EISA computers (because EISA computers are
	designed to accept both ISA and EISA boards).
	
	Slot Characteristics
	--------------------
	
	Use a 16-bit slot whenever possible because it provides faster transfer of data
	between the computer and the network. If a 16-bit slot is not available, an
	8-bit slot works, but at lower performance.
	
	WORST-CASE POWER CONSUMPTION
	----------------------------
	
	Power consumption depends upon the kind of connector being used. The table below
	shows worst-case power consumption.
	
	  Connector                    Worst-Case Consumption in mA
	  ---------------------------------------------------------
	
	  BNC                          610 @ +5V
	                               215 @ +12V
	  DIX                          610 @ +5V
	                               *variable @ +12V
	
	* When the DIX connector is used, the board does not consume any power
	 at +12V. It simply passes it through to power any external
	 transceiver connected to the AUI cable. To provide you with a means
	 of estimating the amount of power likely to be consumed, the following
	 table shows the power consumption for external transceivers made by
	 three different manufacturers:
	
	  Manufacturer         Model                   Power Consumed
	  -----------------------------------------------------------
	
	  Intel                External                150 mA
	  Synoptics            508 10BASE-T            420 mA
	  HP                   ThinMAU 28641A          270 mA
	
	CABLE SPECIFICATIONS
	--------------------
	
	Each connector requires a different kind of cable. Here are the specifications
	for the cable required for each kind of connector.
	
	Cable for DIX Connectors
	------------------------
	
	DIX connectors use the standard transceiver cable or AUI cable conforming to the
	10BASE-5 specification. An example suitable cable is Belden 9898. The maximum
	distance between the computer and the transceiver on the thick Ethernet cable is
	50 meters.
	
	Cable for BNC Connectors
	------------------------
	
	BNC connectors require RG-58 coaxial cable conforming to the 10BASE-2
	specification. This is sometimes called thin Ethernet or Cheapernet cable. The
	layout of the network must conform to the following specifications:
	
	- Maximum trunk length with repeaters in the network: 300 meters
	
	- Maximum trunk length without repeaters in the network: 185 meters
	
	- Minimum distance between nodes: 1 meter
	
	This information was obtained from "The Complete Guide to Installing and
	Configuring the Intel ExtherExpress 16 and 16TP Network Adapters for ISA
	Computers." The installation guide is available from Intel Corporation.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: etherexpress specs nic ether express 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
