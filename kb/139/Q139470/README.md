---
layout: page
title: "Q139470: U.S. Robotics Sportster 28800 Modem Does Not Function with RAS"
permalink: kb/139/Q139470/
---

## Q139470: U.S. Robotics Sportster 28800 Modem Does Not Function with RAS

	Article: Q139470
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some models of the U.S. Robotics Sportster 28800 V.34 and V.FC modems do not
	work with Remote Access Service and some other communications software. However,
	the same modems sometimes appear to function properly with Windows Terminal or
	other communications software.
	
	CAUSE
	=====
	
	The U.S. Robotics Sportster 28800 V.34 modem is not on the Windows NT 3.51
	Hardware Compatibility List (HCL). Some newer U.S. Robotics Sportster 28800 V.34
	and V.FC modems have updated circuitry or firmware. The updated modems function
	like a U.S. Robotics Sportster 33600/Fax V1.0 or V1.1 modem instead of a
	Sportster 28800. When you use a similar model to connect to the Sportster 28800,
	the two modems appear to connect at 33,600 baud. There are some differences with
	the initialization strings of the Sportster 28800 and the 33600 model.
	
	To verify the firmware version of your U.S. Robotics Sportster fax/modem:
	
	1. Start the Terminal tool in the Windows NT Accessories group.
	
	2. Properly configure the communications settings for your fax/modem.
	
	3. Type "ATI3" (without quotation marks). This will tell you which firmware
	  version you have.
	
	NOTE: If you have Remote Access Service installed, you may need to stop the
	Remote Access service, using the Services tool in Control Panel, before you
	receive an appropriate response from the modem.
	
	RESOLUTION
	==========
	
	To correct this problem, do one of the following:
	
	- Obtain an updated Modem.inf file from U.S. Robotics at (847) 982-5151
	  (technical support) or (847) 982-5092 (BBS).
	
	  -or-
	
	1. In Terminal type the following:
	
	  ATI3
	
	   - If the modem responds with "Sportster 33600/Fax V1.0," proceed with step
	     2.
	
	   - If the modem responds with "Sportster 33600/Fax V1.1," proceed with step
	     2, except that you will have to change the following:
	
	     DETECT_RESPONSE=Sportster 33600/Fax V1.0
	
	     to this:
	
	     DETECT_RESPONSE=Sportster 33600/Fax V1.1
	
	2. Update the existing Modem.inf file by appending the
	
	  US Robotics Sportster 33600 V34
	
	  section, as follows:
	
	  [US Robotics Sportster 33600 V34]
	
	  <speaker_on>=m1
	  <speaker_off>=m0
	  <hwflowcontrol_on>=&h1&r2
	  <hwflowcontrol_off>=&h0&r1
	  <compression_on>=&k3
	  <compression_off>=&k0
	  <protocol_on>=&m4
	  <protocol_off>=&m0
	  <autodial_on>=ATdt
	  <autodial_off>=ATd
	
	  CALLBACKTIME=10
	  DEFAULTOFF=compression
	  MAXCARRIERBPS=33600
	  MAXCONNECTBPS=115200
	
	  DETECT_STRING=ATI3<cr>
	  DETECT_RESPONSE=Sportster 33600/Fax V1.0
	
	  COMMAND_INIT=AT&a3x4e1q0v1s0=0s7=55s2=128<cr>
	  COMMAND_INIT=AT&b1&c1&d2b0x4<hwflowcontrol><compression><protocol>
	  <speaker><cr>
	  COMMAND_DIAL=<autodial><phonenumber><cr>
	  COMMAND_LISTEN=ATS0=1<cr>
	
	3. Change MAXCARRIERBPS to 33600.
	
	NOTE: The MAXCONNECTBPS can be changed to be as high as 115200. Some serial ports
	cannot handle the 115200 baud rate accurately and may work more reliably at
	57600. This behavior may be computer dependent.
	
	For the U.S. Robotics Sportster 28800 v.34 and v.fc modem hardware revision level
	2.0, you should select the preexisting entry in the Modem.inf file. The entry is
	called:
	
	  US Robotics Courier V.32bis
	
	If you are using multiple Sportster 33600 modems that have different firmware
	versions, either obtain a firmware upgrade from US Robotics, or add to the
	Modem.inf file another section with a different name to support the other
	version(s) of firmware.
	
	MORE INFORMATION
	================
	
	Aside from the different detection responses, the main difference between the
	initialization strings of the two modems is that the Sportster 33600 lacks the
	S47 register. The U.S. Robotics generic initialization string should work for
	the Sportster 33600 modem if the S47=2 entry does not exist.
	
	Some models may have a different response string based on their firmware version.
	To verify the response string from your modem, use the Terminal tool to issue
	the ATI3 command to the modem. This displays the response string. The Modem.inf
	entry above may need to be modified to match the response of the modem.
	
	
	The products discussed here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	Additional query words: prodnt 3.50 3.51 usr usrobotics
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	
