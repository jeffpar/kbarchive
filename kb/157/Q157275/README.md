---
layout: page
title: "Q157275: Troubleshooting Dual-Channel ISDN Connection Problems"
permalink: kb/157/Q157275/
---

## Q157275: Troubleshooting Dual-Channel ISDN Connection Problems

	Article: Q157275
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.3,2.0,2.5
	Operating System(s): 
	Keyword(s): kbmsn
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.3, 2.0, 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains information to help you identify why the second channel on
	your ISDN adapter may not connect to MSN, The Microsoft Network.
	
	MORE INFORMATION
	================
	
	Your ISDN adapter Can Support Only a Single Channel
	---------------------------------------------------
	
	Not all ISDN adapters can support more than one channel. Read the documentation
	included with your adapter to identify whether your ISDN adapter can support
	Multilink PPP.
	
	Your ISDN Line Is Not Set Up for Dual-Channel Connections
	---------------------------------------------------------
	
	When you have your ISDN line installed, you may need to specify to your ISDN
	provider that you need two channels provisioned on your line. This is not always
	the default configuration from your ISDN provider.
	
	Your ISDN Adapter Settings Are Not Correct
	------------------------------------------
	
	With most ISDN adapters that can support Multilink PPP, you must change the
	settings to enable dual-channel capabilities. Use the documentation included
	with your adapter to identify which settings to use for Multilink PPP. Then, you
	can change the settings using these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Modems.
	
	3. Click the ISDN adapter you are using, and then click Properties.
	
	4. On the Connection tab, click Advanced.
	
	5. In the Extra Settings box, type the dual-channel settings for your ISDN
	  adapter. You can find these settings in the documentation for your adapter.
	
	The Two ISDN Channels Are Connected to Different Access Boxes
	-------------------------------------------------------------
	
	Internet access numbers sometimes have more than one access box to handle a large
	number of incoming calls at once. Sometimes, when you connect with two channels,
	the channels get separated into two different access boxes. This situation is
	called straddling. When straddling occurs, your second channel might not make a
	connection. And in some cases, your adapter might not make a connection at all.
	If this happens, you must wait and try your connection again later.
	
	The Phone Numbers for Your Adapter Are Not Configured Correctly
	---------------------------------------------------------------
	
	ISDN lines usually come configured with two phone numbers. When you use
	dual-channel ISDN, your adapter uses only one phone number. The second number
	might be the reason your second line is not connecting. This problem is
	especially common with the 3Com Impact adapter running firmware version 2.02. If
	you think the second phone number might be the problem, try reconfiguring your
	adapter to use only one of your ISDN numbers.
	
	If you experience difficulties, please contact technical support for the
	manufacturer of the ISDN device.
	
	Additional query words: msn
	
	======================================================================
	Keywords          : kbmsn 
	Technology        : kbMSNSearch kbMSN200 kbMSN130 kbMSN250
	Version           : WINDOWS:1.3,2.0,2.5
	Issue type        : kbprb
	
	=============================================================================
	
