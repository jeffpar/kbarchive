---
layout: page
title: "Q274256: MSN Companion Troubleshooting Tool FAILSAFE"
permalink: /kb/274/Q274256/
---

## Q274256: MSN Companion Troubleshooting Tool FAILSAFE

	Article: Q274256
	Product(s): The Microsoft Network
	Version(s): 1.0,2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSN Companion, versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	FAILSAFE is a feature of MSN Companion that formats its flash memory, dials the
	upgrade servers, and downloads a "last known good" flash image.
	
	FAILSAFE should only be used under the supervision of MSN Companion Technical
	Support.
	
	MORE INFORMATION
	================
	
	When should it be used?
	-----------------------
	
	Use FAILSAFE when the user has a core OS-level problem with starting the machine,
	per the following scenarios:
	
	- The user has been using MSN Companion, but during an overnight upgrade
	  something went wrong. Now, whenever the user starts the device, they get the
	  manufacturer's splash screen, and then the screen goes black; the device
	  appears to be dead.
	
	- The user has already gone through the initial set-up experience and
	  everything worked fine. Later, inexplicably, the device now "blue-screens" at
	  every boot, never shows the connecting window, and never tries to dial
	
	When should it NOT be used?
	---------------------------
	
	- When in doubt, don't use FAILSAFE. FAILSAFE should never be used as an "I
	  don't what else to do" fix, because the process takes over an hour.
	
	- Do not use FAILSAFE without the assistance of MSN Companion Technical
	  Support. Call Technical Support at (1) (888) 386-6497.
	
	- In addition, FAILSAFE should never be used to troubleshoot a dialing problem.
	  If the machine cannot dial, it cannot reach the FAILSAFE servers. For
	  connection problems see Q278715 - Unable to connect to Web Companion
	
	To use failsafe
	---------------
	
	1. The update will take about one hour on the phone, as the device downloads its
	  software.
	
	2. Unplug the device to completely shut it down, and then plug it in again.
	
	3. When the manufacturer's splash screen appears press CTRL+U several times
	  until the splash screen goes away and the FAILSAFE screen appears. It looks
	  similar to a BIOS settings screen (see facsimile below).
	
	----------------------------- Modem Settings -----------------------------
	|
	|<A0><A0><A0> UserName: [WEBC/user_name<A0><A0>]
	|<A0><A0><A0><A0>Password: [********......]
	|
	|<A0><A0><A0><A0>Phone Number: [5551234........] <A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0>Tone Dialing: <A0><A0><A0><A0><A0><A0><A0><A0>[X]
	|<A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0>Wait for Dial Tone:
	[X]
	|<A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0>Dial Audibly:
	<A0><A0><A0><A0><A0><A0><A0><A0><A0>[X]
	|<A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0>Dial Quickly:
	<A0><A0><A0><A0><A0><A0><A0><A0><A0>[X]
	|
	|<A0><A0><A0>Post Data: [Current Version=0&Component=Mariner; Compaq-1-1;40]
	|<A0><A0><A0>URL: <A0><A0><A0><A0><A0><A0><A0><A0>[https://webcdownload.msn.com/clientman/clientman]
	|
	| --------------------------------------------------------------------------
	| <A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0> <OK> <A0><A0><A0><A0><A0><A0><A0><A0><A0> < CANCEL >
	| --------------------------------------------------------------------------
	
	4. To change settings, use TAB and arrow keys to move around within the fields
	  and enter the information as follows:
	
	Note: In most cases, the information will already be entered correctly by
	default.
	
	   - USERNAME: The username must be preceded by WEBC/ as above.
	
	   - PASSWORD: Ensure that the password is correct, capitalization is correct,
	     and CAPS LOCK is not on.
	
	   - PHONE NUMBER: Include the exact digits that need to be dialed in order to
	     connect. Call Technical Support to ensure that this number is a correct
	     local access number. Contact your phone company to determine is this is a
	     local toll-free call. You are responsible for any toll charges that may
	     accrue from using a long distance access number.
	
	     Ensure that any needed prefix numbers are also included:
	      - 9, - If dialing an outside line from inside a corporate phone system.
	
	      - *10, - or other numbers to turn off Call Waiting.
	
	      - Area Code - If ten digit dialing is required.
	
	      - 1 before the Area Code - If necessary.
	
	      - Note that a comma "," inserts a one second pause in the dialing
	        sequence.
	
	   - The items below are the same settings that can be changed using FIXIT. In
	     most cases you shouldn?t need to change these. (For more information on
	     FIXIT, see Q278481 - MSN Companion Troubleshooting Tool FIXIT)
	      - TONE DIALING
	
	      - WAIT FOR DIAL TONE
	
	      - DIAL AUDIBLY
	
	      - DIAL QUICKLY
	
	   - POST DATA: Do not change this. If you accidentally change this, cancel
	     immediately.
	
	   - IA - 1
	     Post Data:
	     [CurrentVersion=0&Component=Mariner;Compaq-1-2001;409&SSN=1]
	
	   - IA - 2
	     Post Data:
	     [CurrentVersion=0&Component=Mariner;Compaq-2-2001;409&SSN=1]
	
	   - URL: The "s" needs to be removed from the end of the word http://, so that
	     it reads http://. If you accidentally change anything else on this line,
	     cancel immediately.
	
	     URL: [http://webcdownload.msn.com/clientman/clientman.dll?Downloadimage]
	
	5. When all settings are correct, press TAB until the cursor reaches OK, and
	  then press Enter to initiate the failsafe upgrade.
	
	6. When the upgrade is done, the device will restart automatically. If the
	  device is still broken, return it to the manufacturer.
	
	Note: if your receive the following message
	
	  The new software is corrupted. Please try again.
	
	the server connection was lost during the FAILSAFE download. Click Try again and
	the download is continued and will eventually download the entire flash image
	and restart MSN Companion
	
	
	Additional query words: kbimu FAILSAFE
	
	======================================================================
	Keywords          :  
	Technology        : _IKkbbogus kbMSNSearch kbMSNCompanion
	Version           : :1.0,2.0
	Issue type        : kbprb
	
	=============================================================================
	
