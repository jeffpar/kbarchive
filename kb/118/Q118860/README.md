---
layout: page
title: "Q118860: X400: README.TXT: Gateway to X.400, Version 3.2"
permalink: /kb/118/Q118860/
---

## Q118860: X400: README.TXT: Gateway to X.400, Version 3.2

{% raw %}

	Article: Q118860
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following is the text of the Microsoft Mail Gateway to X.400 Readme file for
	version 3.2.
	
	          ===========================================
	          MICROSOFT MAIL GATEWAY TO X.400 VERSION 3.2
	          ===========================================
	
	This document supplements the information in the "Microsoft Mail Gateway to X.400
	Administrator's Guide" and covers these topics:
	
	1. Gateway Memory Requirements
	
	2. Corrections to Gateway Installation
	  2.1 Installing the Gateway Postoffice
	  2.2 Converting the Gateway Postoffice to a Downstream Postoffice
	
	3. Moving and Using the X.400 Gateway Administrator Program
	  3.1 Memory Requirements for the Administrator Program
	  3.2 Moving the Administrator Program to a Local Drive
	  3.3 Viewing Log Files
	  3.4 Specifying No Extensions for Inbound Attachment Files
	  3.5 Viewing the About Dialog Box
	  3.6 Inserting New Lines in the Routing Table
	
	4. Updating the X400GATE.INI File (IMPORTANT)
	  4.1 Specifying Time-Out Values for Transport Connections
	  4.2 Specifying An Alternate Recipient
	
	5. Correction to Customized Address Mapping
	
	6. Restarting the Gateway after Changes in the Microsoft Mail Administrator
	  Program
	
	1. GATEWAY MEMORY REQUIREMENTS
	------------------------------
	
	- The X.400 gateway requires at least 400K of conventional memory on the
	  gateway machine after all drivers are loaded.
	
	- The amount of conventional memory available on the gateway machine determines
	  the number of recipients and attachments supported in a message.
	
	Configure the gateway machine for the maximum free conventional memory possible.
	To determine the largest executable program size that can be run, use the MS-DOS
	MEM command. For additional information about maximizing conventional memory,
	consult your MS-DOS and network operating system documentation.
	
	2. CORRECTION TO GATEWAY INSTALLATION
	-------------------------------------
	
	2.1 Installing the Gateway Postoffice
	-------------------------------------
	
	- In the Administrator's Guide, on page 35 under "To install the Gateway Access
	  Component," step 4 should read:
	
	  4. When prompted, type the path to the Microsoft Mail data files for this
	  gateway postoffice, and then press ENTER.
	
	2.2 Converting the Gateway Postoffice to a Downstream Postoffice
	----------------------------------------------------------------
	
	- In the Administrator's Guide, on page 40 under "Converting the Gateway
	  Postoffice to a Downstream Postoffice," step 4 should be preceded by:
	
	   - When prompted, type the path to your Microsoft Mail executables, and then
	     press ENTER.
	
	- In the Administrator's Guide, on page 41 under "Converting the Gateway
	  Postoffice to a Downstream Postoffice," please ignore step 8. After you have
	  completed step 7, the conversion from a gateway postoffice to a downstream
	  postoffice will be complete.
	
	3. MOVING AND USING THE X.400 GATEWAY ADMINISTRATOR PROGRAM
	-----------------------------------------------------------
	
	To improve performance, you can move the X.400 gateway to another machine.
	
	3.1 Memory Requirements for the Administrator Program
	-----------------------------------------------------
	
	- The X.400 Gateway Administrator program requires at least 400K of
	  conventional memory on the machine that is used to run it.
	
	Configure the machine that will run the X.400 Gateway Administrator program so
	that it has at least 400K of free conventional memory. To determine the largest
	executable program size that can be run, use the MS-DOS MEM command. For
	additional information about maximizing conventional memory, consult your MS-DOS
	and network operating system documentation.
	
	3.2 Moving the Administrator Program to a Local Drive
	-----------------------------------------------------
	
	- Move the Gateway Administrator program to a local hard drive, and then start
	  the program from that drive. The Gateway Administrator program will run only
	  on a machine with FAT partitions.
	
	Create a directory on your local hard disk, and then copy the following
	executables into that directory:
	
	  X400ADM.EXE
	  ADM2.EXE
	  X400CMAP.EXE
	  X400DMAP.EXE
	  PRINTCFG.EXE
	  X400ADM.HLP
	
	These files should be located in the path you specify for the executables
	directory during installation of the Gateway Component.
	
	3.3 Viewing Log Files
	---------------------
	
	- If the Gateway is running, you cannot view the log file using the View Log
	  File feature in the X.400 Gateway Administrator program.
	
	3.4 Specifying No Extensions for Inbound Attachment Files
	---------------------------------------------------------
	
	- If a file extension is not needed for inbound attachments, enter a period (.)
	  in the Bodypart Mapping option for inbound mail.
	
	3.5 Viewing the About Dialog Box
	--------------------------------
	
	- If you double-click the center of the menu of the X.400 Gateway Administrator
	  program, an About dialog box appears.
	
	3.6 Inserting New Lines in the Routing Table
	--------------------------------------------
	
	- From the X.400 Gateway Administrator program menu, choose the Routing Option.
	
	If you are using a mouse:
	
	- Select the line that precedes the location of the line you want to insert.
	
	- Double-click the mouse.
	
	If you are using a keyboard:
	
	- Select the line that precedes the location of the line you want to insert.
	
	- Press the INSERT key.
	
	4. UPDATING THE X400GATE.INI FILE (IMPORTANT)
	---------------------------------------------
	
	- You can change the transport connection time-out value, and specify an
	  alternate recipient other than the administrator of the gateway by updating
	  the X400GATE.INI file.
	
	This file is located in the X400 sub-directory of the Microsoft Mail data files
	directory. It contains information needed for the correct functioning of the
	X.400 gateway, and should not be edited except in the cases described below.
	
	If you do edit this file, follow the directions carefully, and do not change the
	format of the file.
	
	4.1 Specifying Time-Out Values for Transport Connections
	--------------------------------------------------------
	
	- When the gateway requests a LAN or X.25 network connection, it waits 120
	  seconds for a connection confirmation. If the gateway does not receive the
	  confirmation within this time, it terminates the connection request.
	
	You can change the time-out value for both stacks by putting a new section in the
	X400GATE.INI file.
	
	1. Add a new section to the end of the X400GATE.INI file. The section heading
	  must be [Network].
	
	2. Add a keyword to specify the time-out value. Only add entries for the service
	  requiring a different time-out.
	
	  For a LAN time-out, specify the TP4Timeout keyword.
	  For an X.25 time-out, specify the X25Timeout keyword.
	
	  Example 1: Time-out of 60 seconds for both LAN and X.25
	
	  [Network]
	  TP4Timeout=60
	  X25Timeout=60
	
	  Example 2: Time-out of 180 seconds for X.25
	
	  [Network]
	  X25Timeout=180
	
	4.2 Specifying the Alternate Recipient Option
	---------------------------------------------
	
	- If the intended recipient is not found on an inbound message with the
	  Alternate Recipient Field set, by default the alternate recipient is the
	  Admin mailbox on the gateway postoffice.
	
	You can specify another mailbox as the Alternate Recipient, by adding a keyword
	to the X400GATE.INI file.
	
	1. Add the DeliveryReportsTo= keyword under the [Profile] section of the
	  X400GATE.INI file.
	
	2. Specify the mailbox that you wish to be the alternate recipient mailbox using
	  the format: NETWORK/POSTOFFICE/MAILBOX
	
	  For example, the mailbox that is to be the alternate recipient has this
	  Microsoft Mail Address:
	
	  Network = NET1
	  Postoffice = POST1
	  Mailbox = JSMITH
	
	  To specify the alternate recipient, you add this line under the [Profile]
	  section in the X400GATE.INI file:
	
	  DeliveryReportsTo=NET1/POST1/JSMITH
	
	5. CORRECTION TO CUSTOMIZED ADDRESS MAPPING
	-------------------------------------------
	
	- In the Administrator's Guide, on page 127-128 under "Creating the Input
	  File," the following example is incorrect.
	
	  MSM:<contoso/WCG/Bill> X.400:<o=contoso,_Ltd;s=Lee;g=Bill;i=E>
	
	  It should read:
	
	  MSM:contoso/WCG/Bill X400:o=contoso,_Ltd;s=Lee;g=Bill;i=E
	
	  NOTE: There should be no angle brackets (< >), and X400 should not be
	  entered with a period (.) between the X and the 400.
	
	6. RESTARTING THE GATEWAY AFTER CHANGES
	  IN THE MICROSOFT MAIL ADMINISTRATOR PROGRAM
	--------------------------------------------------------------------------------------
	
	Any time you make changes in the Microsoft Mail Administrator program, you should
	restart the X.400 gateway so that the gateway can apply those changes.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	
	=============================================================================
	

{% endraw %}
